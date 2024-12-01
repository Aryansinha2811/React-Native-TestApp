import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native'; // Import Lottie for React Native


export default function Contact() {

    const [pressed, setPressed] = useState(false);

    return (
        <View style={styles.container}>
            <Lottie source={require('../../assets/Lottie/Contact.json')} autoPlay loop style={styles.lottieAnimation} />
            <Text style={styles.text}>This is the Contact Screen</Text>

            <TouchableOpacity
                style={[styles.button, pressed && styles.buttonPressed]}
                onPressIn={() => setPressed(true)} 
                onPressOut={() => setPressed(false)}>
                <Text style={styles.buttonText}>Contact us</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
    lottieAnimation: {
        width: 300, // Smaller width
        height: 300, // Smaller height
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#6200EE',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 15,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    buttonPressed: {
        backgroundColor: '#a160fd', // Change the color when pressed
    },
});
