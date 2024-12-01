import { SafeAreaView, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { FontAwesome as Icon } from "@expo/vector-icons";

export default function Layout() {
    return (
        <SafeAreaView style={styles.container}>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#f5efeb",
                        height: 70,
                        paddingBottom: 8,
                        paddingHorizontal: 10,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        borderRadius: 15,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: -4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        position: 'absolute', // Lift the tab bar up
                        bottom: 8, // Distance from the bottom of the screen
                        marginLeft: 7, // Shrinks the bar from the left
                        marginRight: 7,
                    },
                    tabBarActiveTintColor: "#000",
                    tabBarInactiveTintColor: "#737373",
                    tabBarIconStyle: {
                        flex: 1,
                        alignItems: 'center', // Center the icon horizontally
                        justifyContent: 'center', // Center the icon vertically
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        headerTitle: "Welcome Home",
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="(tabs)/contact"
                    options={{
                        headerTitle: "Contact Us",
                        tabBarLabel: "Contact",
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="phone" color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="(tabs)/profile"
                    options={{
                        headerShown: false,
                        headerTitle: "Your Profile",
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the container takes up full screen
        backgroundColor: '#567cbd',
    },
});
