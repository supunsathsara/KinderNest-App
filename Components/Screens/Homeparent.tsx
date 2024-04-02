import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import axios from 'axios'
import { ActivityIndicator } from 'react-native-paper'

const Homeparent = ({ navigation }: { navigation: any }) => {

    const [session, setSession] = useState<Session | null>(null)
    const [paymentStatus, setPaymentStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Send GET request to check payment status
        axios.get(`${process.env.API_URL}/checkpay/${session?.user.email}`)
            .then(response => {
                const { message } = response.data;
                setPaymentStatus(message);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error checking payment status:', error);
                setLoading(false);
            });
    }, [session]);

    const handleRefresh = () => {
        setLoading(true);
        // Send GET request to check payment status again
        axios.get(`${process.env.API_URL}/checkpay/${session?.user.email}`)
            .then(response => {
                const { message } = response.data;
                setPaymentStatus(message);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error checking payment status:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })


    }, [])


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/Home.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Howdy,</Text>
                    <Text style={styles.text1}>{session?.user.user_metadata.parent_name} </Text>
                    {paymentStatus === 'success' ? (
                        <Text style={{ fontSize: 18, color: 'green', marginTop: 10, marginLeft:40 }}>Active</Text>
                    ) : (
                        <Text style={{ fontSize: 18, color: 'red', marginTop: 10 , marginLeft:40 }}>Payment pending</Text>
                    )}
                    <Image style={styles.profile} source={require("../images/MaleFemale.png")}></Image>
                </View>
                {loading && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Loading...</Text>
                    </View>
                )}
                {paymentStatus !== 'success' && !loading && (
                    <View style={{ alignItems: 'center', marginTop: 5, marginBottom:5 }}>
                        <Text>You have to pay to continue.</Text>
                        <TouchableOpacity
                            style={{ backgroundColor: '#944CC0', padding: 10, borderRadius: 5, marginTop: 10 }}
                            onPress={handleRefresh}
                        >
                            <Text style={{ fontSize: 16, color: 'white' }}>Refresh</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View>
                    <Text style={styles.text3}>Quick Actions</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.view}>
                        <TouchableOpacity onPress={() => navigation.navigate('OCChild')} disabled={paymentStatus !== 'success'} style={styles.onlinebtn}>
                            <Image source={require("../images/Classroom.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Online Classes</Text>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.onlinebtn}onPress={() => navigation.navigate('MProgress')} >
                            <Image source={require("../images/Activities.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Progress History</Text>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.onlinebtn} onPress={() => navigation.navigate('Payment')}>
                            <Image source={require("../images/payment.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Payment</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.view}>
                        <TouchableOpacity onPress={() => navigation.navigate('PProgress')} style={styles.Progresstn}>
                            <Image source={require("../images/Progress.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Progress</Text>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity onPress={() => navigation.navigate('contactTeacher')} style={styles.Progresstn}>
                            <Image source={require("../images/Chat.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Contact Teacher</Text>
                    </View>
                </View>
                <View>

                    <View style={styles.view1}>
                        <TouchableOpacity style={styles.Calendartn}>
                            <Image style={{ position: 'absolute', left: -30, width: 340, height: 180, top: -60 }} source={require("../images/Rectangle.png")}></Image>
                            <Text style={styles.text5}>AI {"\n"}STORY TELLING</Text>
                            <Image style={styles.Openbookimage} source={require("../images/Openbook.png")}></Image>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Homeparent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    wrapper: {
        alignSelf: 'center',
        width: 280,
        borderRadius: 20,
        backgroundColor: '#FFFEFE',
        height: 120,
        marginBottom: 40,
        marginTop: 50,
        justifyContent: 'center',
        marginLeft: 125,
    },
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 40,
    },
    text1: {
        color: 'black',
        fontSize: 25,
        textAlign: 'left',
        marginLeft: 40,
    },
    text2: {
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 40,
    },
    profile: {
        width: 80,
        height: 60,
        position: 'absolute',
        right: 40,
    },
    text3: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 40,
        marginTop: -23,
    },
    onlinebtn: {
        backgroundColor: 'white',
        height: 80,
        width: 96,

        marginHorizontal: 15,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 20,
    },
    view: {
        alignItems: 'center'
    },
    view1: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    text4: {
        color: 'black',
    },
    Progresstn: {
        backgroundColor: 'white',
        height: 90,
        width: 90,

        marginHorizontal: 15,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        borderRadius: 20,
    },
    Calendartn: {
        height: 132,
        width: 112,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
    },
    text5: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        left: 20,
        bottom: 40
    },
    Openbookimage: {
        position: 'absolute',
        left: 200,
        width: 100,
        height: 100,
        marginTop: -70,
        bottom: 50
    }
})