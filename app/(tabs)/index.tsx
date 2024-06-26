import {styles} from "./styles/index"
import { NotFoundItens } from "@/components/notFoundItens";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <NotFoundItens />
    </View>
  );
}

