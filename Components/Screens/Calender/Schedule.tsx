import React, {useState} from 'react';

import ClassSchedule from './ClassSchedule';
import TasksSchedule from './TasksSchedule';

import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

const Schedule: React.FC<{
  day: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
}> = ({day}) => {
  const [activeTab, setActiveTab] = useState('classes');

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.scheduleText, {fontSize: 14}]}>Schedule</Text>
          <Text style={[styles.scheduleText, {fontSize: 8}]}>10 Mar</Text>
        </View>
        <Pressable style={styles.addBtn}>
          <View style={[styles.addBtnIcon, {height: 12, width: 2}]} />
          <View
            style={[
              styles.addBtnIcon,
              {width: 12, height: 2, position: 'absolute'},
            ]}
          />
        </Pressable>
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
          <ClassSchedule day={day} />
        ) : (
          <TasksSchedule day={day} />
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
});
