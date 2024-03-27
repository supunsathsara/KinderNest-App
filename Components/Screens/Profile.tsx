import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>John Doe</Text>
                <Image style={styles.profile} source={require("../images/MaleFemale.png")}></Image>
            </View>
            <View>
                <TouchableOpacity style={styles.btnleft}><Text style={styles.btntext}>Edit Profile</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnright}><Text style={styles.btntext}>Contact Us</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnleft}><Text style={styles.btntext}>About Us</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(168, 159, 178, 1)"
    },
    image: {
        flex: 1,
    },
    wrapper: {
        alignSelf: 'center',
        width: 415,
        borderRadius: 5,
        backgroundColor: '#944CC0',
        height: 100,
        marginBottom: 40,
        marginTop: 50,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'left',
        marginLeft: 40,
    },
    profile: {
        width:80,
        height:60,
        position:'absolute',
        right:40
    },
    btnleft :{
        backgroundColor:'white',
        width:260,
        padding:10,
        borderRadius:20,
        left:-20,
        marginBottom:50
    },
    btnright :{
        backgroundColor:'white',
        width:260,
        padding:10,
        borderRadius:20,
        right:-20,
        alignSelf:'flex-end',
        marginBottom:50
    },
    btntext :{
        color:'black',
        textAlign:'center',
        fontSize:20
    }
})