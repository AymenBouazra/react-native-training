import { useDimensions } from '@react-native-community/hooks';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log(useDimensions());
  return (
    <SafeAreaView style={styles.container} >
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
