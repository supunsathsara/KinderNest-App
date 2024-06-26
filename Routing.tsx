import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Loading from './Components/Screens/Loading';
import Login from './Components/Screens/Login';
import ParentSignup from './Components/Screens/ParentSignup';
import TeacherSignUp from './Components/Screens/TeacherSignUp';
import PaymentMethod from './Components/Screens/PaymentMethod';
import OnlineClassTeacher from './Components/Screens/onlineClassTeacher';
import Home from './Components/Screens/Home';
import Homeparent from './Components/Screens/Homeparent';
import OnlineClassChild from './Components/Screens/onlineClassChild';
import ClassList from './Components/Screens/Classlist';
import MonthlyProgress from './Components/Screens/Monthlyprogress';
import ProgressParent from './Components/Screens/progressparent';
import ProgressTeacher from './Components/Screens/Progressteacher';
import Aboutus from './Components/Screens/Aboutus';
import { Button, Drawer } from 'react-native-paper';
import Contactus from './Components/Screens/Contactus';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegisterScreen from './Components/Screens/RegisterScreen';
import { supabase } from './lib/supabase';
import { Alert, View } from 'react-native';
import LogoutButton from './Components/Screens/LogoutButton';
import Calender from './Components/Screens/Calender/Calender';
import ContactTeacher from './Components/Screens/ContactTeacher';
import StoryScreen from './Components/Screens/StoryScreen';

const StackNav = () => {
  const stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <stack.Screen
        name='Loading'
        component={Loading}
        options={{ headerShown: false }} />
      <stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }} />
        <stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{ headerShown: false }} />
      <stack.Screen
        name='Pregister'
        component={ParentSignup} />
      <stack.Screen
        name='Tregister'
        component={TeacherSignUp} />
      <stack.Screen
        name='THome'
        component={Home} 
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#000"
              />
            );
          },
          //set the header title
          headerTitle: 'Home',
        }} 
        />
      <stack.Screen
        name='PHome'
        component={Homeparent}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#000"
              />
            );
          },
          //set the header title
          headerTitle: 'Home',
        }} />
     
      <stack.Screen
        name='OCChild'
        component={OnlineClassChild} />
      <stack.Screen
        name='OCTeacher'
        component={OnlineClassTeacher} 
        options={{
          headerTitle: 'Add Online Classes',
        }
        }
        />
      <stack.Screen
        name='Payment'
        component={PaymentMethod} />
      
      <stack.Screen
        name='Aboutus'
        component={Aboutus}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#000"
              />
            );
          },
        }} />
      <stack.Screen
        name='Contactus'
        component={Contactus}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#000"
              />
            );
          },
        }} />
      <stack.Screen
        name='Classlist'
        component={ClassList} />
      <stack.Screen
        name='MProgress'
        component={MonthlyProgress} 
        options={{
          headerTitle: 'Progress History',
        }}
        />
      <stack.Screen
        name='PProgress'
        component={ProgressParent} 
        options={{
          headerTitle: 'This Month Progress',
        }}
        />
      <stack.Screen
        name='PTeacher'
        component={ProgressTeacher} />
        <stack.Screen
        name='Account'
        component={LogoutButton} />
        <stack.Screen
        name='Calender'
        component={Calender} />
        <stack.Screen
        name='contactTeacher'
        component={ContactTeacher} 
        options={{
          headerTitle: 'Contact Teacher',
        }} />
        <stack.Screen 
        name='AIstory'
        component={StoryScreen}
        options={{
          headerTitle: 'Story Generator',
        }}
        />

        
        
    </stack.Navigator>
  );
}

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Home" component={StackNav} />
      <Drawer.Screen name="Aboutus" component={Aboutus} options={{headerShown: true, headerTitleAlign:'center'}} />
      <Drawer.Screen name="Contactus" component={Contactus} options={{headerShown: true, headerTitleAlign:'center'}} />
      <Drawer.Screen name="Account" component={LogoutButton} options={{ headerShown: true, headerTitleAlign: 'center' }} />
     

    </Drawer.Navigator>
  )
}


const Routing = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}



export default Routing;