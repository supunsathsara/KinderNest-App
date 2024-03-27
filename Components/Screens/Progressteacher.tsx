import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TextDireccleartion,
  } from 'react-native';
  import React from 'react';
  
  const ProgressTeacher = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={{width: 393, height: 80}}
            source={require('../images/prog.png')}
          />
  
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginTop: 0,
              fontWeight: '500',
            }}>
            Progress
          </Text>
  
          <View>
            <Text style={{textAlign: 'center', marginTop: 3, fontSize: 20}}>
              Add month
            </Text>
            <TextInput style={styles.input} />
          </View>
  
          {/* UpGrading  */}
  
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* Subjects */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginLeft: 30,
                    backgroundColor: '#C19DC9',
                    borderRadius: 5,
                    width: 100,
                    height: 30,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginTop: 15,
                  }}>
                  Learning
                </Text>
  
                <TextInput style={styles.inputSub} />
  
                <TextInput style={styles.inputSub} />
  
                <TextInput style={styles.inputSub} />
  
                <TextInput style={styles.inputSub} />
  
                <TextInput style={styles.inputSub} />
  
                <TextInput style={styles.inputSub} />
  
                <TextInput style={styles.inputSub} />
              </View>
            </View>
  
            {/* Grades */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginLeft: 20,
                    backgroundColor: '#C19DC9',
                    borderRadius: 5,
                    width: 140,
                    height: 30,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginTop: 15,
                    marginRight: 20,
                  }}>
                  Quarterly Grade
                </Text>
  
                <TextInput style={styles.inputGrade} />
  
                <TextInput style={styles.inputGrade} />
  
                <TextInput style={styles.inputGrade} />
  
                <TextInput style={styles.inputGrade} />
  
                <TextInput style={styles.inputGrade} />
  
                <TextInput style={styles.inputGrade} />
  
                <TextInput style={styles.inputGrade} />
              </View>
            </View>
          </View>
  
          <Text
            style={{
              textAlign: 'center',
              marginTop: 15,
              fontSize: 16,
              marginLeft: 30,
              backgroundColor: '#C19DC9',
              borderRadius: 5,
              width: 196,
              height: 30,
              borderWidth: 1,
              borderColor: 'black',
              alignSelf: 'center',
            }}>
            Feadback & Remark
          </Text>
  
          <View style={{ }}>
          <TextInput style={styles.inputRemark}>
          </TextInput>
           </View>
  
           <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: '#944CC0',
            borderRadius: 5,
            width: 93,
            height: 30,
          }}>
          <Text style={{textAlign: 'center', fontSize: 16, marginTop:8,alignSelf:'center'}}>
            SEND
          </Text>
        </TouchableOpacity>
  
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProgressTeacher;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#AF9FB2',
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 3,
      alignSelf: 'center',
      backgroundColor: '#C19DC9',
    },
    inputSub: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 3,
      alignSelf: 'center',
      backgroundColor: '#A69097',
      marginLeft: 20,
    },
  
    inputGrade: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 3,
      alignSelf: 'center',
      backgroundColor: '#A69097',
    },
    inputRemark: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 287,
      height: 186,
      marginTop: 5,
      alignSelf: 'center',
      backgroundColor: '#A69097',
    },
  });