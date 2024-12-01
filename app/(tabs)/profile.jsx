import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Lottie from 'lottie-react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            {/* Avatar Image */}
            <Image
                source={require('../../assets/Icons/Avatar.jpg')}
                style={styles.imageAvatar}
            />
            
            {/* User's Name */}
            <Text style={styles.name}>Aryan Sinha</Text>
            <Text style={styles.description}>This is just a Test App</Text>

            {/* Lottie Animation */}
            <Lottie
                source={require('../../assets/Lottie/Profile.json')}
                autoPlay
                loop
                style={styles.lottieAnimation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c8d9e6',
        padding: 20,
    },
    imageAvatar: {
        width: 100, // Adjust size as needed
        height: 100, // Adjust size as needed
        borderRadius: 50, // Make it circular
        borderColor: "#000",
        borderWidth: 2,
        marginBottom: 20, // Space between avatar and name
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20, // Space between name and animation
    },
    lottieAnimation: {
        width: 200, // Adjust size as needed
        height: 200, // Adjust size as needed
    },
    description:{
        color: '#333',
        fontSize: 14,
        fontWeight: '500'
    }
});
