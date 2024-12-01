import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Lottie Animation */}
            <Lottie 
                source={require('../assets/Lottie/Home.json')} 
                autoPlay
                loop
                style={styles.lottieAnimation}
            />

            {/* First Horizontal View */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Spidey.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Spidey Sense</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Venom.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Venom</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Rider.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Ghost Rider</Text>
                </View>
            </ScrollView>

            {/* Second Horizontal View */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Loki.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Loki</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Wolverine.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Wolverine</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Black-Panther.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Black Panther</Text>
                </View>
            </ScrollView>

            {/* Third Horizontal View */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/DEADPOOL.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>DeadPool</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/America.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Captain America</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/Icons/Thor.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardDescription}>Thor</Text>
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 80,
        backgroundColor: '#c8d9e6',
    },
    lottieAnimation: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    horizontalScroll: {
        marginBottom: 20,
    },
    card: {
        width: 200, // Adjust card width for horizontal alignment
        height: 190,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 10, // Spacing between cards
        elevation: 5,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },
    cardDescription: {
        padding: 5,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5
    },
});
