import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TimerCountDownDisplay from './TimerCountDownDisplay';
import TimerToggleButton from './TimerToggleButton';

const FOCUS_TIME_MINUTES = 2 * 60 * 1000
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const startTimer = () => {
    setIsTimerRunning(true)
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
    setTimerInterval(id)
  }

  const stopTimer = () => {
    setIsTimerRunning(false)
    if (timerInterval !== null) {
      clearInterval(timerInterval);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3928',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
