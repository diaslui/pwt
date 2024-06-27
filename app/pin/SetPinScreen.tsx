import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { storePin } from './storage';
import { Pin } from './intertypes';

type SetPinScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const SetPinScreen: React.FC<SetPinScreenProps> = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handleSetPin = async () => {
    await storePin(parseInt(pin) as Pin);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seu Pin</Text>
      <TextInput
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Confirmar PIN" onPress={handleSetPin} />
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
});

export default SetPinScreen;

