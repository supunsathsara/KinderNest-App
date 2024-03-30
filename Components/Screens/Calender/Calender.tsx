import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Calendar, LocaleConfig, CalendarProps} from 'react-native-calendars';
import CustomDay from './CustomDay';
import Schedule from './Schedule';
import axios from 'axios';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../../lib/supabase';

// const scheduleData: {[key: string]: string[]} = {
//   '2024-03-01': ['class'],
//   '2024-03-04': ['task'],
//   '2024-03-05': ['class'],
//   '2024-03-13': ['task'],
//   '2024-03-20': ['task'],
//   '2024-03-29': ['class'],
// };

const Legend: React.FC<{text: string; color: string}> = ({text, color}) => {
  return (
    <View style={styles.legends}>
      <View style={[styles.legend, {backgroundColor: color}]} />
      <Text style={styles.legendText}>{text}</Text>
    </View>
  );
};

const Calender = () => {
  const [selectedDay, setSelectedDay] = useState<{
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  }>({
    dateString: '',
    day: 0,
    month: 0,
    year: 0,
    timestamp: 0,
  });

  // const handleDayPress = (day: {
  //   dateString: string;
  //   day: number;
  //   month: number;
  //   year: number;
  // }) => {
  //   const {dateString, day: dayOfWeek, month, year} = day;

  //   setSelectedDay({dateString, day: dayOfWeek, month, year});
  // };
  const [scheduleData, setScheduleData] = useState<{[key: string]: string[]}>({});
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        // Directly set userEmail to session?.user?.email, which can be string or undefined
        setUserEmail(session?.user?.email || null); // Fallback to null if undefined
      });
    
      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUserEmail(session?.user?.email || null); // Fallback to null if undefined
      });
    
      // Cleanup the subscription when the component unmounts
      return () => {
        authListener.subscription.unsubscribe();
      };
          
      }, [])


  useEffect(() => {
    const fetchScheduleForUser = async (email:String | null) => {
      try {   
        const response = await axios.get(`${process.env.API_URL}/schedule/${email}`);
        const fetchedData = response.data;
        const formattedData = fetchedData.reduce((acc:any, curr:any) => {
          const dateString = curr.date.split('T')[0]; // Extract the date part
          if (!acc[dateString]) {
            acc[dateString] = [];
          }
          acc[dateString].push(curr.type); // Assuming you want to display the type in the custom day component
          return acc;
        }, {});
      
        setScheduleData(formattedData);
  
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };
    if (userEmail) { 
    fetchScheduleForUser(userEmail);
    }
  }, [userEmail]);

  const handleDatePress = (date: {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
  }) => {
    setSelectedDay(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calenderContainer}>
        <Calendar
          theme={{
            backgroundColor: '#E7CBF0',
            calendarBackground: '#E7CBF0',
            textSectionTitleColor: '#000000',
            selectedDayBackgroundColor: 'blue',
            selectedDayTextColor: 'white',
            todayTextColor: 'blue',
            dayTextColor: '#000000',
            textDisabledColor: '#838383',
            dotColor: 'blue',
            selectedDotColor: 'white',
            arrowColor: 'blue',
            monthTextColor: '#751695',
            textDayFontFamily: 'Poppins-Medium',
            textDayFontSize: styles.day.fontSize,
            textMonthFontFamily: 'Poppins-Medium',
            textDayHeaderFontFamily: 'Poppins-Medium',
            textDayHeaderFontSize: styles.dayHeader.fontSize,
          }}
          hideArrows={true}
          dayComponent={({date}) => (
            <CustomDay
              date={date}
              schedules={scheduleData[date?.dateString || ''] || []}
              onDatePress={() =>
                handleDatePress(
                  date ?? {
                    dateString: '',
                    day: 0,
                    month: 0,
                    timestamp: 0,
                    year: 0,
                  },
                )
              }
            />
          )}
          // onDayPress={day => {
          //   console.log(day);
          //   handleDayPress(day);
          // }}
        />
      </View>

      {/* Separator (a line) */}
      <View
        style={{
          width: '83%',
          borderBottomWidth: 1,
          borderBottomColor: '#838383',
          marginTop: 30,
        }}
      />

      {/* Legends */}
      <View style={styles.legendContainer}>
        <Legend text={'Class Schedules'} color={'#FF0000'} />
        <Legend text={'Tasks'} color={'#0094FF'} />
        <Legend text={'Progress'} color={'#0C9000'} />
      </View>

      {/* Schedule */}
      <Schedule day={selectedDay} userEmail={userEmail} />
    </SafeAreaView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7CBF0',
    alignItems: 'center',
  },
  calenderContainer: {
    width: 350,
    paddingTop: 20,
  },
  dayHeader: {
    fontSize: 12,
  },
  day: {
    fontSize: 16,
  },
  legendContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 40,
  },
  legends: {
    flexDirection: 'row',
  },
  legend: {
    height: 10,
    width: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    marginRight: 5,
  },
  legendText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
    color: '#000000',
  },
});
