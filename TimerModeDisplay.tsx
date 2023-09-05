import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export type TimerModes = "Focus" | "Break";

type Props = {
    timerMode: TimerModes,
}

const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timerModeText}>{timerMode} Time {timerMode === 'Focus' ? '🍅' : '🥦'}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    timerModeText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: '800',
    }
})

export default TimerModeDisplay