import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import GalleryScreen from './app/screens/GalleryScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>MyFirstMobApp</Text>
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Gallery') {
                iconName = 'images';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }

              return <Ionicons name={iconName} size={20} color={focused ? 'blue' : 'gray'} />;
            },
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 12, fontWeight: focused ? 'bold' : 'normal', color: focused ? 'blue' : 'gray' }}>
                {route.name === 'Home' ? 'Головна' : route.name === 'Gallery' ? 'Фотогалерея' : 'Профіль'}
              </Text>
            ),
            tabBarIconStyle: { marginTop: 2 },
            tabBarStyle: { backgroundColor: '#f5f5f5', height: 65 }, 
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Головна' }} />
          <Tab.Screen name="Gallery" component={GalleryScreen} options={{ tabBarLabel: 'Фотогалерея' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Профіль' }} />
        </Tab.Navigator>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Сушко Олександр Юрійович ІПЗ-23-1</Text>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
    paddingBottom: 5,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
    marginRight: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  footer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  footerText: {
    fontStyle: 'italic',
    color: 'black',
    fontSize: 12,
    padding: 10,
  }
});

export default App;
