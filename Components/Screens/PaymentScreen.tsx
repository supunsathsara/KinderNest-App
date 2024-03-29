import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Alert, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
  };

  const checkPayment = () => {
    // Perform logic to revalidate payment
    Alert.alert('Payment successful');
    setLoading(false);
  };

  const onNavigationStateChange = (navState) => {
    // Check if the URL changes to the success URL
    if (navState.url === `http://localhost:3000/success`) {
      checkPayment();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Pay to Complete</Text>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Processing payment...</Text>
        </View>
      ) : (
        <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 20, color: 'blue' }} onPress={handlePayment}>Pay</Text>
        </TouchableOpacity>
      )}
      <WebView
        source={{ uri: 'http://localhost:3000/paypal' }}
        onNavigationStateChange={onNavigationStateChange}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;
