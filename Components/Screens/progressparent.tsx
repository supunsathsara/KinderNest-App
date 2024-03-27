import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  const ProgressParent = () => {
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
            <Text style={styles.text1} />
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
                    marginLeft: 35,
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
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
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
                    marginRight: 25,
                  }}>
                  Quarterly Grade
                </Text>
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
  
                <Text style={styles.inputSub} />
              </View>
            </View>
          </View>
  
          <TouchableOpacity>
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
          </TouchableOpacity>
  
          <Image
            style={{width: 180, height: 220, alignSelf: 'center', marginTop: 13}}
            source={require('../images/prog.Teacher.png')}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProgressParent;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#AF9FB2',
    },
    text1: {
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