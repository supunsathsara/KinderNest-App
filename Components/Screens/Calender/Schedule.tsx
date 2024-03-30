import React, { useEffect, useState } from 'react';

import ClassSchedule from './ClassSchedule';
import TasksSchedule from './TasksSchedule';

import {
  Button,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';

const handlePress = (schedule: {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}) => {
  const date = schedule;
  console.log(date);
};

type TaskDetails = {
  _id: string;
  userEmail: string;
  date: string;
  type: 'task';
  details: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ClassDetails = {
  _id: string;
  userEmail: string;
  date: string;
  type: string;
  details: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const Schedule: React.FC<{
  day: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
  userEmail: string | null;
}> = ({ day, userEmail }) => {
  const [classes, setClasses] = useState<ClassDetails[]>([]);
  const [tasks, setTasks] = useState<TaskDetails[]>([]);
  const [activeTab, setActiveTab] = useState('classes');

  const [modalVisible, setModalVisible] = useState(false);
  const [taskDetails, setTaskDetails] = useState('');
  const [selectedType, setSelectedType] = useState('task'); // 'task' or 'class'


  const formattedDate = new Date(day.dateString).toLocaleDateString('en-US', {
    day: 'numeric', // numeric, 2-digit
    month: 'short', // "long" for full month name, "short" for three-letter abbreviation, "numeric" for numbers
    year: 'numeric', // numeric, 2-digit
  });

  useEffect(() => {
    const fetchScheduleDetails = async () => {
      try {
          const response = await axios.get(`${process.env.API_URL}/schedule/${userEmail}/${day.dateString}`);
          console.log(`${process.env.API_URL}/schedule/${userEmail}/${day.dateString}`)
          setClasses(response.data.events);
          setTasks(response.data.tasks);

      } catch (error) {
        console.error('Error fetching schedule details:', error);
      }
    };

    if (day.dateString && userEmail) {
      console.log(day.dateString, userEmail)
      fetchScheduleDetails();
    }
  }, [day, userEmail]);


  const handleAddTaskOrEvent = async () => {
    // Close the modal
    setModalVisible(false);

    // Prepare the data object for the new task or event
    const newTaskOrEvent = {
      userEmail: userEmail,
      date: day.dateString,
      type: selectedType,
      details: taskDetails,
    };

    // POST request to your backend
    try {
      const response = await axios.post(`${process.env.API_URL}/schedule`, newTaskOrEvent);
      console.log('Task/Event created:', response.data);

      // Optimistically update the UI
      if (selectedType === 'task') {
        setTasks(prevTasks => [...prevTasks, response.data]);
      } else {
        setClasses(prevClasses => [...prevClasses, response.data]);
      }
      setTaskDetails(''); // Clear the input field
      setSelectedType('task'); // Reset the selected type

    } catch (error) {
      console.error('Error creating task/event:', error);
    }
  };


  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.scheduleText, { fontSize: 14 }]}>Schedule</Text>
          <Text style={[styles.scheduleText, { fontSize: 8 }]}>{formattedDate}</Text>
        </View>
        <Pressable style={styles.addBtn} onPress={() => setModalVisible(true)}>
          <View style={[styles.addBtnIcon, { height: 12, width: 2 }]} />
          <View
            style={[
              styles.addBtnIcon,
              { width: 12, height: 2, position: 'absolute' },
            ]}
          />
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{formattedDate}</Text>

              {/* Close button at the top right corner */}
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>
              <TextInput
                placeholder="Enter Details"
                value={taskDetails}
                onChangeText={setTaskDetails}
                style={styles.textInput}
              />
              <View style={styles.radioContainer}>
                <Pressable
                  style={[styles.radioButton, selectedType === 'task' ? styles.radioButtonSelected : {}]}
                  onPress={() => setSelectedType('task')}>
                  <Text style={styles.radioText}>Task</Text>
                </Pressable>
                <Pressable
                  style={[styles.radioButton, selectedType === 'class' ? styles.radioButtonSelected : {}]}
                  onPress={() => setSelectedType('class')}>
                  <Text style={styles.radioText}>Class</Text>
                </Pressable>
              </View>
              <Button title="Add" onPress={handleAddTaskOrEvent} />
            </View>
          </View>
        </Modal>
      </View>

      {/* Different tabs in schedule */}
      <View style={styles.scheduleTabsContainer}>
        {/* Classes */}
        <Pressable onPress={() => setActiveTab('classes')}>
          <Text style={styles.scheduleTab}>Classes</Text>
        </Pressable>

        {/* Tasks */}
        <Pressable onPress={() => setActiveTab('tasks')}>
          <Text style={styles.scheduleTab}>Tasks</Text>
        </Pressable>
      </View>

      {/* Area to view classes or tasks */}
      <View style={styles.scheduleArea}>
        {/* conditional rendering based on activeTab */}
        {activeTab === 'classes' ? (
          <ClassSchedule day={day} schedule={classes} />
        ) : (
          <TasksSchedule day={day} tasks={tasks} />
        )}
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    width: '75%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleText: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#751695',
  },
  addBtnIcon: {
    borderRadius: 2,
    backgroundColor: '#FFF',
  },
  scheduleTabsContainer: {
    width: '100%',
    height: '10%',
    minHeight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  scheduleTab: {
    width: 120,
    height: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#751695',
  },
  scheduleArea: {
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%', // Adjust as needed
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  radioButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#ddd', // Highlight selected option
  },
  radioText: {
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // Adjust as needed
    position: 'relative', // To absolutely position the close button
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#007AFF', // Adjust color as needed
  },
});
