import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import {AwesomeIcon} from "@/components/Icons";
import Colors, {getColorValue, ColorPalleType} from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import {MonoTextBold } from "@/components/StyledText";


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Minha Carteira',
          tabBarActiveTintColor: getColorValue("main2"),
          tabBarLabelPosition: 'beside-icon',
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ color }) => <AwesomeIcon name="wallet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: getColorValue("main3"), 
          tabBarIcon: ({ color }: { color: string }) => <AwesomeIcon name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}
