import * as React from 'react';
import { Text, View, TouchableOpacity,Alert  } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  playSound = async (soundChunk) => {
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.playSound(this.props.soundChunk);
        }}
        style={{
          backgroundColor: 'lightgreen',
          width: 30,
          marginTop: 30,
          alignSelf: 'center',
          borderRadius: 50,
        }}>
        <Text style={{ textAlign: 'center', fontSize: 25 }}>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    );
  }
}
