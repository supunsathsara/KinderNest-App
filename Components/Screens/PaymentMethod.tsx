import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Alert, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';

const PaymentMethod = ({ navigation }:any) => {
  const [loading, setLoading] = useState(false);

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
   
    }, [])

  const handlePayment = () => {
    setLoading(true);
  };

  const checkPayment = () => {
    setLoading(false);
    Alert.alert('Payment successful');
    navigation.navigate('PHome')
  };

  const onNavigationStateChange = (navState:any) => {
    if (navState.url.includes('success')) {
      checkPayment();
    }
  };

  const proceedHandle = () => {
    // Handle payment initiation
    handlePayment();
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../images/Blank.png')} resizeMode="cover" style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Make your class payments</Text>
        <Image style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }} source={require("../images/paymentlady.png")} />
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{ marginTop: 10 }}>Processing payment...</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={proceedHandle} style={{ backgroundColor: '#944CC0', borderRadius: 5, marginHorizontal: 50, marginTop: 30 }}>
            <Text style={{ fontSize: 20, padding: 10, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Proceed with PayPal</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
      {loading && (
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: `${process.env.API_URL}/paypal?payerID=${session?.user.email}` }}
            onNavigationStateChange={onNavigationStateChange}
            style={{ flex: 1 }}
          />
        </View>
      )}
 
    </View>
  );
};

export default PaymentMethod;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1
  },
  textheading: {
    fontSize: 26,
    color: 'black',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: 340,
    marginLeft: 22,
    borderRadius: 5,
    backgroundColor: '#B7ADAD',
    color: 'black',
    paddingLeft: 20,
    height: 40,
    marginBottom: 40,
    marginTop: 15,
  },
  input2: {
    borderWidth: 1,
    width: 340,
    marginLeft: 22,
    borderRadius: 5,
    backgroundColor: '#B7ADAD',
    color: 'black',
    paddingLeft: 20,
    height: 40,
    marginBottom: 40,
    marginTop: -10,
  },
  input3: {
    borderWidth: 1,
    width: 340,
    marginLeft: 22,
    borderRadius: 5,
    backgroundColor: '#B7ADAD',
    color: 'black',
    paddingLeft: 20,
    height: 40,
    marginBottom: 40,
    marginTop: -10,
  },
  paymentlady: {
    height: 250,
    width: 350,
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: 'rgba(3, 138, 255, 1)',
    borderRadius: 50,
    width: 'auto',
    alignSelf: 'center',
  },
});

