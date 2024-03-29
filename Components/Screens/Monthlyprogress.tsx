import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import axios from 'axios';


interface ProgressData {
    _id: string;
    student: string;
    subjects: { name: string; grade: string; }[];
    remark: string;
    month: string;
    created: string;
    __v: number;
}

const MonthlyProgress = () => {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })


    }, [])

    const [progress, setProgress] = useState<ProgressData[] | null>(null);

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get(`${process.env.API_URL}/progress/${session?.user.email}/recent`);
                console.log(session?.user.email)
                console.log('Progress data:', response.data);
                setProgress(response.data);
            } catch (error) {
                console.error('Error fetching progress:', error);
            }
        };

        fetchProgress();
    }, [session]);

    return (
        <ScrollView style={{ backgroundColor: '#AF9FB2' }}>
            <Text
                style={{
                    fontSize: 25,
                    textAlign: 'center',
                    marginTop: 10,
                }}>
                Feedback & Remark
            </Text>
            <View>
                {progress &&
                    progress.map((item, index) => (
                        <Text key={index} style={styles.feedback}>
                            {item.remark}
                        </Text>
                    ))}
            </View>
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