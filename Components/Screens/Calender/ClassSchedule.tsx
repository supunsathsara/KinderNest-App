import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const scheduleData: {[key: string]: string[]} = {
  '2024-03-01': ['class'],
  '2024-03-04': ['task'],
  '2024-03-05': ['class'],
  '2024-03-13': ['task'],
  '2024-03-20': ['task'],
  '2024-03-29': ['class'],
};

const ClassSchedule: React.FC<{
  day: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
}> = ({day}) => {
  return (
    <View>
      {/* {Object.entries(scheduleData).map(
        ([date, schedule]) =>
          date === day.dateString && <Text key={date}>class on {day.day}</Text>,
      )} */}
      <View style={styles.classes}>
        {Object.entries(scheduleData).map(
          ([date, schedule]) =>
            date === day.dateString && (
              // <Text key={date}>class on {day.day}</Text>
              <View style={styles.class} key={date}>
                <Text>Class 3A - English</Text>
              </View>
            ),
        )}
      </View>
    </View>
  );
};

export default ClassSchedule;

const styles = StyleSheet.create({
  classes: {},
  class: {},
});
