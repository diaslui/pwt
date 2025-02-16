import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pin } from './intertypes';

/** @user_pin 
 * © Personal Wallet By Pedro Luis Dias (github.com/diaslui)
 * --> https://github.com/diaslui/pwt <--
 * Pin Storage (for acess)
 * VALS: get, store, remove 
 */

export const storePin = async (pin: Pin): Promise<void> => {
  try {
    await AsyncStorage.setItem('@user_pin', pin.toString());
  } catch (e) {
    console.error(e);
  }
};

export const getPin = async (): Promise<string | null> => {
  try {
    const pin = await AsyncStorage.getItem('@user_pin');
    return pin;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const removePin = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('@user_pin');
  } catch (e) {
    console.error(e);
  }
};
