import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
//const translate = require('google-translate-api');


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

import { TranslateItem } from './components'
import { Login } from '../../pages'
class Dictionary extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      translates: {
        'ru': '',
        'fr': '',
        'es': ''
      },
      bounceValue: new Animated.Value(0),  // This is the initial position of the subview
      buttonText: 'Show Subview'
    }
  }
_toggleSubview() {
    this.setState({
      buttonText: !isHidden ? 'Show Subview' : 'Hide Subview'
    })

    var toValue = 400

    if (isHidden) {
      toValue = 0
    }

    // This will animate the transalteY of the subview between 0 & 100 depending on its current state
    // 100 comes from the style below, which is the height of the subview.
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: toValue,
        duration: 300
      }
    ).start()

    isHidden = !isHidden
  }

  render() {
    let { translates, bounceValue } = this.state
    console.log(translates)
    const langs = Object.keys(translates)
    return (
      <View style={styles.layout} >
        <Text style={styles.headerTitle} >DICTIONARY</Text>
        <TextInput style={styles.input}
          editable
          onChange={this.handleTextInput.bind(this)}
        />
        {langs.length > 0 && langs.map(l => {
          return (<TranslateItem key={l}
            lang={l}
            value={translates[l]}
          />)
        })}
        {/* <Animated.View style={[styles.allLangs,
              {transform: [{translateX: this.state.bounceValue}]}]} >
            <View style={styles.arrow} />
          </Animated.View> */}
      </View>
    )
}

  handleTextInput(e) {
    const { text } = e.nativeEvent
    const lang = {
      from: 'en',
      to: ['ru', 'fr', 'es']
    }
    let promises = []
    lang.to.forEach(to => {
      promises.push(this._translate(text, lang.from, to))
    })
    Promise.all(promises)
    .then(data => {
      console.log('data', data)
      const translates = {}
      lang.to.forEach((l, i) => {
        translates[l] = data[i][0]
      })
      this.setState({translates})
    })
    .catch(err => {
      console.log(err)
    })
  }

  _translate(text, from, to) {

    //return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170302T203520Z.3755a9e489fefc32.9ba6a809e607a2d9faef7519e732eaf0d97578dd&text=${text}&lang=${from}-${to}&format=plain`, {
    return fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl="   + from + "&tl=" + to + "&dt=t&q=" + text)
     .then((response) => response.json())
  }

}

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 24,
    // fontWeight: 'medium',
    fontFamily: 'Helvetica Neue',
    fontSize: 10,    
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: '#EEEEEE',
    fontSize: 12
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
    paddingTop: 0,
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

export default Dictionary
