import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import ProgressCircle from 'react-native-progress-circle'
import CircleItem from './components/circleItem'
import Header from '../../components/header'

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
  render () {
    const dicts = [
    ]
    return <View style={{flex: 1, paddingLeft: 25, paddingRight: 25}}>
      <Header title='My new dictionary' />
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        <CircleItem
          percent={0}
          radius={42}
          knowledge={0}
          words={0}
          subject={0}
          borderWidth={8}
          color='#3399FF'
          shadowColor='#fff'
          uri={'../../../../../public/add.png'}
          isNew
           />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 24,
    flex: 1,
    maxHeight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    // fontWeight: 'medium',
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: '#EEEEEE',
    fontSize: 10,
    paddingTop: 6
  },
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
    transform: [{rotate: '45 deg'}],
    zIndex: 9,
    elevation: 9
  },

  allLangs: {
    position: 'absolute',
    right: 0,
    overflow: 'visible',
    top: 0,
    flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#e939e9',
    width: 270,
    height: 700,
    borderColor: 'green',
    zIndex: 2
  },

  layout: {
    flex: 1,
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
