import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getPin } from './storage';

type EnterPinScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const EnterPinScreen: React.FC<EnterPinScreenProps> = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleEnterPin = async () => {
    const storedPin = await getPin();
    if (storedPin === pin) {
    //  navigation.navigate('Home');
    } else {
      setError('PIN Incorreto'); // tries count <<
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seu PIN</Text>
      <TextInput
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType="numeric"
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Enter" onPress={handleEnterPin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '80%',
  },
  error: {
    color: 'red',
  },
});

export default EnterPinScreen;
