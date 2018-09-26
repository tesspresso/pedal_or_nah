import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  weather: {
    fontSize: 32,
    color: '#6B8E23',
    padding: 4,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  command: {
    fontSize: 60,
    color: '#6B8E23',
  },
});

const Main = ({ temperature, current }) => {
  const isWeatherBad = current.includes('rain') || temperature <= 32;
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.weather}>{temperature}˚</Text>
        <Text style={styles.weather}>{current}</Text>
      </View>
      <View style={styles.bodyContainer}>
        {isWeatherBad ? (
          <View>
            <MaterialCommunityIcons
              style={styles.icon}
              size={250}
              color="#1874CD"
              name="weather-snowy-rainy"
            />
            <Text style={styles.command}>NAHHHH</Text>
          </View>
        ) : (
          <View>
            <MaterialCommunityIcons
              style={styles.icon}
              size={180}
              color="#CF5300"
              name="bike"
            />
            <Text style={styles.command}>PEDAL!</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Main;
