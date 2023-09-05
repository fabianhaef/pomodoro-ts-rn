import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    isTimerRunning: boolean;
    stopTimer: () => void;
    startTimer: () => void;
}

const TimerToggleButton: React.FC<Props> = ({ isTimerRunning, startTimer, stopTimer }) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome 
                    name={isTimerRunning ? 'pause' : 'play'} 
                    size={125}  
                    style={styles.icon}/>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        color: '#fff',
    },
    container: {
        borderWidth: 5,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: 'center',
        borderColor: '#fff',
        marginVertical: 50,

    }
})

export default TimerToggleButton