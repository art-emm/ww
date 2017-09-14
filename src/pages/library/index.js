import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import ProgressCircle from 'react-native-progress-circle'
import CircleItem from './components/circleItem'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Animated,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
var isHidden = true

const allLangs = {
  'ru': 'Russian',
  'en': 'English',
  'en1': 'English',
  'en11': 'English',
  'en3': 'English',
  'es': 'es'
}

class Library extends Component {
    render() {
      const dicts = [
        {
          knowledge: 23,
          subject: 'test1,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 1
        },
        {
          knowledge: 55,
          id: 12,
          subject: 'test11,',
          wordsCount: 301,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg'
        },
        {
          knowledge: 22,
          subject: 'test12,',
          wordsCount: 44,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 13
        },
        {
          knowledge: 30,
          subject: 'test13',
          wordsCount: 302,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 14
        },
        {
          knowledge: 98,
          subject: 'test14',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 15
        },
        {
          knowledge: 76,
          subject: 'test15,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 16
        },
        {
          knowledge: 76,
          subject: 'test15,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 17
        },
        {
          knowledge: 76,
          subject: 'test15,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 18
        },
        {
          knowledge: 76,
          subject: 'test15,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 19
        },
        {
          knowledge: 76,
          subject: 'test15,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 112
        },
        {
          knowledge: 12,
          subject: 'test16,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 122
        },
        {
          knowledge: 3,
          subject: 'test17,',
          wordsCount: 30,
          img: 'http://www.ullmansailssandiego.com/images/sail_trim_and_techniques.jpg',
          id: 121
        }
      ]
      return <View style={{flex: 1, paddingLeft: 25, paddingRight: 25}}>
        <TextInput>
        </TextInput>
        <View style={{
          flex: 1, 
          flexDirection: 'row', 
          flexWrap: 'wrap',
           justifyContent: 'space-around', 
          }}>
        {dicts.map(d => {
            return (<CircleItem key={d.id}
          percent={d.knowledge}
          radius={42}
          knowledge={d.knowledge}
          words={d.wordsCount}
          subject={d.subject}
          borderWidth={8}
          color='#3399FF'
          shadowColor='#fff' 
          uri={d.img}
          >
           </CircleItem>)
          })}




        </View>
      </View>
    }

}

const styles = StyleSheet.create({
  defaultLang: {
    flex: 10,
        flexWrap: 'wrap'

  },

  arrow: {
    position: 'absolute',
    bottom: 0,
    left: -2,
    top: 0,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    transform:[{rotate: '45 deg'}],
    zIndex: 9,
    elevation: 9
  },

  allLangs: {
    position: 'absolute',
    right: 0,
    overflow: 'visible',
    top: 0,
    flex:1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#e939e9',
    width: 270,
    height: 700,
    borderColor: 'green',
    zIndex: 2
  },

  layout: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    zIndex: 1
  },

  input: {
    width: 300,
    borderBottomColor: 'gray'
  },

  header1: {
    fontSize: 24,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10
  },
  photo: {
    fontStyle: 'italic',
    marginBottom: 15
  }
})

export default Library
