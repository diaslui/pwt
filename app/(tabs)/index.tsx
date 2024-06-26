import {styles} from "./styles/index"
import { NotFoundItens } from "@/components/NotFoundItens";
import { ImageBackground } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ImageBackground source={require('@/assets/images/app/beams.png')} style={styles.background}>
      <View style={styles.container} transparentBg={true}>
        <NotFoundItens />
      </View>
    </ImageBackground>
  );
}