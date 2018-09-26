import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';
import API_KEY from './secrets';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    current: '',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.fetchWeather(position.coords.latitude, position.coords.longitude);
    });
  }

  fetchWeather(lat, lon) {
    fetch(
      `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}?exclude=hourly,minutely,daily,alerts,flags`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.currently.apparentTemperature,
          current: json.currently.summary,
          isLoading: false,
        });
      });
  }
  render() {
    const { isLoading, temperature } = this.state;
    current = this.state.current.toLowerCase();
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Stepping outside to check...</Text>
        ) : (
          <View>
            <Main
              temperature={temperature}
              current={current}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5D63D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
