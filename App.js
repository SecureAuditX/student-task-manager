import { StyleSheet, Text, View } from 'react-native';
import SignUp from './components/Signup';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUp /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
