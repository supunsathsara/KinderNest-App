import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'

const Home = ({navigation}) => {

    const [session, setSession] = useState<Session | null>(null)

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
                    <Text style={styles.text1}>{session?.user.user_metadata.teacher_name || "Teacher"}</Text>
                    <Text style={styles.text2}>Active</Text>
                    <Image style={styles.profile} source={require("../images/MaleFemale.png")}></Image>
                </View>
                <View>
                    <Text style={styles.text3}>Quick Actions</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.onlinebtn} onPress={() => navigation.navigate('OCTeacher')}>
                            <Image source={require("../images/Classroom.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Online Classes</Text>
                    </View>
                    {/* <View style={styles.view}>
                        <TouchableOpacity style={styles.onlinebtn}>
                            <Image source={require("../images/Homeworks.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Homeworks</Text>
                    </View> */}
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.onlinebtn}>
                            <Image source={require("../images/Chat.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Chat</Text>
                    </View>

                    {/**Logout */}
                    <View style={styles.view}>
                        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.onlinebtn}>
                            <Image source={require("../images/Chat.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Account</Text>
                        </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.Progresstn}>
                            <Image source={require("../images/Progress.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Progress</Text>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.Progresstn}>
                            <Image source={require("../images/Emergency.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text4}>Emergency Alerts</Text>
                    </View>
                </View>
                <View>

                    <View style={styles.view1}>
                        <TouchableOpacity style={styles.Calendartn}>
                            <Image style={{ position: 'absolute', left: -30, width: 340, height: 180, top: -60 }} source={require("../images/Rectangle.png")}></Image>
                            <Text style={styles.text5}>Calender {"\n"} & {"\n"} Schedule</Text>
                            <Image style={styles.Openbookimage} source={require("../images/Schedule.png")}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

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
        right: 40
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
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        alignItems: 'center'
    },
    view: {
        alignItems: 'center'
    },
    text4: {
        color: 'black',
    },
    Progresstn: {
        backgroundColor: 'white',
        height: 128,
        width: 142,

        marginHorizontal: 15,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        borderRadius: 20,
    },
    Calendartn: {
        height: 132,
        width: 112,

        marginHorizontal: 15,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        borderRadius: 20,
    },
    Scheduleimage: {
        position: 'absolute',
        marginLeft: 50,
        width: 100,
        height: 100,
        marginTop: -70,
    },
    view1: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
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
    },
})