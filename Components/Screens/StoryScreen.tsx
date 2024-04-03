import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, StatusBar, Touchable, TouchableOpacity, Pressable, View } from 'react-native';
import axios from 'axios';
import Tts from 'react-native-tts';

const BASE_URL = 'https://psslr30s-5000.asse.devtunnels.ms/generate';

const StoryScreen = () => {
    const [keyword, setKeyword] = useState('');
    const [story, setStory] = useState('');

    const textToSpeech = () => {
        Tts.speak(story);
        Tts.setDefaultRate(0.5);
    };

    const stopSpeech = () => {
        Tts.stop();
    };

    const fetchStory = async () => {
        console.log("Fetching story...")
        try {
            const response = await axios.post(BASE_URL, {
                keyword: keyword
            }, {
                headers: { "Content-Type": "application/json"  }
            });

            console.log(response.data)
            setStory(response.data.story);
        } catch (error) {
            console.error('Error fetching story:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
                style={styles.input}
                placeholder="Enter a keyword"
                value={keyword}
                onChangeText={setKeyword}
            />
            <TouchableOpacity style={styles.btn} onPress={fetchStory}><Text style={styles.btnText}>Get Story</Text></TouchableOpacity>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity style={styles.start} onPress={textToSpeech}>
                    <Text style={{ color: 'white' }}>Read</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stop} onPress={stopSpeech}>
                    <Text style={{ color: 'white' }}>Stop</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView}><Text style={{ color: 'black', fontSize: 20 }}>{story}</Text></ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
        backgroundColor: "rgba(168, 159, 178, 1)",
    },
    scrollView: {
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '50%',
        borderRadius: 10,
        fontSize:20
    },
    btn: {
        backgroundColor: '#944CC0',
        width: 'auto',
        borderRadius: 10,
        padding: 10,
        height: 50,
        marginTop: 10,
        marginLeft: 10
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    start: {
        backgroundColor: 'green',
        padding: 10,
        width: 'auto',
        borderRadius: 10,
        marginRight: 10
    },
    stop: {
        backgroundColor: 'red',
        padding: 10,
        width: 'auto',
        borderRadius: 10,
    }
});

export default StoryScreen;