import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state={seconds:0,timer:0,timerStart:false};
}
toggleTimer() {
    this.setState({
      timerStart: !this.state.timerStart
    });
  }
onStart=()=>{
  if(this.state.timerStart){
  if(this.state.timer>1){
   this.setState({timer:this.state.timer-1});
  }
  else{
    this.setState({timer:0})
  }
  }
}
timer=()=>{
  this.setState({timerStart:!this.state.timerStart})
  this.f=setInterval(this.onStart,900);
 // document.getElementById('btn').disabled=true;
}
onPause=()=>{
    clearInterval(this.f);
    this.setState({timerStart:false})
}
onReset=()=>{
    clearInterval(this.f);
  //  document.getElementById('btn').disabled=false;
    this.setState({seconds:0,timer:0, timerStart:false})
}
render(){
    return(
      <View>
        <div>
          <h1>{this.state.timer}</h1>
            <TouchableOpacity style={!this.state.timerStart?styles.start:styles.stop} onPress={this.timer} >
              <Text  style={styles.buttonText}>
              {!this.state.timerStart ? 'Start' : 'Stop'}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onReset} style={styles.reset}>
              <Text style={styles.buttonText}> Reset </Text>
            </TouchableOpacity>
        </div>
        <TextInput
              
                onChangeText={text => this.setState({ timer:text })}
                placeholder={"Enter The CountDown Here"}
                placeholderTextColor="blue"
              />
        </View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'skyblue'
  },
   buttonText: {
    color: '#ffffff',
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'space-around',
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
  reset: {
    backgroundColor: 'blue',
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
});
