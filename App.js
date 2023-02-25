import * as React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import db from './LocalDB';
import PhonicSoundButton from './components/PhonicSoundButton';

console.log(db);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor={'lightgreen'}
            centerComponent={{
              text: 'THOTH',
              style: { fontSize: 30, fontWeight: 'bold' },
            }}
          />
          <Image
            style={{ alignSelf: 'center' }}
            source={require('./assets/Livrovermelho.png')}
          />
          <TextInput
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            style={{
              borderWidth: 4,
              borderRadius: 25,
              width: '85%',
              alignSelf: 'center',
              textAlign: 'center',
            }}
            placeholder={'Digite aqui em inglês'}
          />
          <TouchableOpacity
            onPress={() => {
              var Palavra = this.state.text.toLowerCase().trim()
              db [Palavra]?(this.setState({ chunks: db[Palavra].chunks }),
              this.setState({ phonicSounds: db[Palavra].phones })):Alert.alert("Palavra não encontrada")
              
            }}
            style={{
              backgroundColor: 'lightgreen',
              width: 80,
              marginTop: 50,
              alignSelf: 'center',
              borderRadius: 50,
            }}>
            <Text style={{ textAlign: 'center', fontSize: 15 }}>
              Pesquisar
            </Text>
          </TouchableOpacity>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
              />
            );
          })}
        </View>
      </SafeAreaProvider>
    );
  }
}
