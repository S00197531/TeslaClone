import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import CarItem from './components/carItem';
import CarList from './components/carsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
