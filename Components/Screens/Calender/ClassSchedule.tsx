import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// const scheduleData: {[key: string]: string[]} = {
//   '2024-03-01': ['class'],
//   '2024-03-04': ['task'],
//   '2024-03-05': ['class'],
//   '2024-03-13': ['task'],
//   '2024-03-20': ['task'],
//   '2024-03-29': ['class'],
// };

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

const ClassSchedule: React.FC<{
  day: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
  schedule: ClassDetails[];
}> = ({day, schedule}) => {
  return (
    <View style={styles.container}>
    {schedule.map((classDetail, index) => (
      <View style={styles.classItem} key={classDetail._id}>
        <Text style={styles.classDetail}>{classDetail.details}</Text>
        {/* Render other details as needed */}
      </View>
    ))}
  </View>
  );
};

export default ClassSchedule;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  classItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  classDetail: {
    fontSize: 16,
    color: '#333',
  },
  // Add other styles as needed
});

