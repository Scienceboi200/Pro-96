import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export default class StopwatchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }
  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.title}>Stopwatch Screen</Text>

        <Stopwatch
          laps
          msecs
          start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime}
        />
        <View style={styles.buttonParent}>
        <TouchableOpacity style={!this.state.stopwatchStart?styles.start:styles.stop} onPress={this.toggleStopwatch}>
            <Text style={styles.buttonText}>
              {!this.state.stopwatchStart ? 'Start' : 'Stop'}
            </Text>
          </TouchableOpacity>

        </View>
        <View style={styles.buttonParent}>
          <TouchableOpacity style={styles.reset} onPress={this.resetStopwatch}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const options = {
  container: {
    backgroundColor: '#000',
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  buttonParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#694966',
    backgroundColor: '#694966',
    paddingLeft: '10%',
    paddingRight: '8%',
    paddingTop: '.5%',
    paddingBottom: '.5%',
  },
  child: {
    fontSize: 40,
    color: '#C89933',
  },
  reset: {
    backgroundColor: '#A9A9A9',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#694966',
    height: 60,
  },
  start: {
    backgroundColor: '#00FF80',
    paddingBottom: '5%',
    paddingLeft: '10%',
    paddingRight: '5%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#694966',
    height: 70,
  },
  stop: {
    backgroundColor: '#FF7F7F',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    borderRadius: 150,
    borderWidth: 0.5,
    borderColor: '#694966',
    height: 60,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  title: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
});
