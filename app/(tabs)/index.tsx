import {styles} from "./styles/index"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { NotFoundItens } from "@/components/NotFoundItens";
import { ImageBackground } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ImageBackground source={require('@/assets/images/app/beams.png')} style={styles.background}>
      <View style={styles.container} transparentBg={true}>
      <Link href="/modal" asChild>
              <Pressable>
                
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
                              
              </Pressable>
          </Link>

        <NotFoundItens />
      </View>
    </ImageBackground>
  );
}