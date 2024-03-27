import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Aboutus = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#AF9FB2'}}>
      <Text
        style={{
          fontSize: 20,
          marginLeft:10,
          marginTop: 20,
        }}>
        ABOUT US
      </Text>

      <Text style={{
        marginLeft:10,
         marginTop: 10,
         fontSize: 12,
         padding: 10
         }}>

      At Kindernest, we are a team of passionate educators, developers, and designers committed to creating an enriching a good pre-school management experiencefor kindergarten teachers, parents and childrens. With backgrounds in early childhood education, 
psychology, and technology, communication ,we bring together 
expertise from various fields to craft an app that
both teachers and parents will love.
      </Text>

      <Text style={{
        textAlign: 'center',
         marginTop: 10,
          fontSize: 16, 
          padding: 10}}>
      OUR TEAM
      </Text>
      <View style={{
        marginLeft:15,
        // marginRight:10,
         marginTop: 5,
         backgroundColor:'#837785',
         borderRadius: 5,
         width: 360,
         height: 374,
         
         }}>

      </View>
      <View>
        <Text style={{
          textAlign: 'center', 
        marginTop: 5,
         fontSize: 40
         }}>
        ,,
        </Text>

        <Text style={{
          textAlign: 'center',
          marginTop: 5,
          fontSize: 12
        }}>
        Our mission is to build useful and secure kindergarten management
 application with a strong emphasis on good design and ease of use.

        </Text>

        <Text style={{
          textAlign: 'center',
          marginTop: 5,
          fontSize: 13,
          fontWeight: 'bold'
        }}>
        Thank you for choosing Kindernest for your child's learning journey!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Aboutus;