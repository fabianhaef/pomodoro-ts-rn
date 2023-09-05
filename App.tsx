import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)

  const startTimer = () => {
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
    setTimerInterval(id)
  }

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Start timer" onPress={startTimer} />
      <Button title="Stop timer" onPress={stopTimer} />
      <Text>{timerCount}</Text>
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
