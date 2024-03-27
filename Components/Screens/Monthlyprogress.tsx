import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React from 'react';

const MonthlyProgress = () => {
    return (
        <ScrollView style={{ backgroundColor: '#AF9FB2', }}>
            <Text
                style={{
                    fontSize: 25,
                    textAlign: 'center',
                    marginTop: 10,
                }}>
                Feadback &  Remark
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>

            <Text
                style={styles.feedback} >
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    feedback: {
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#CEC9CE',
        borderRadius: 5,
        width: 360,
        height: 114,
    },
});

export default MonthlyProgress;