import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
// const translate = require('google-translate-api');

// npmconst Translate = require('@google-cloud/translate');

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

import Library from '../library/index'
var isHidden = true

const allLangs = {
  'ru': 'Russian',
  'en': 'English',
  'en1': 'English',
  'en11': 'English',
  'en3': 'English',
  'es': 'es'
}

const languages = {
  rowOne: [
    {
      lang: 'Bulgarian',
      code: 'bg'
    }, {
      lang: 'Croatian',
      code: 'hr'
    }, {
      lang: 'Czech',
      code: 'cs'
    }, {
      lang: 'Danish',
      code: 'da'
    }, {
      lang: 'Dutch',
      code: 'nl'
    }, {
      lang: 'English',
      code: 'en'
    }, {
      lang: 'Estonian',
      code: 'et'
    }, {
      lang: 'Finnish',
      code: 'fi'
    }, {
      lang: 'French',
      code: 'fr'
    }, {
      lang: 'German',
      code: 'de'
    }, {
      lang: 'Greek',
      code: 'el'
    }, {
      lang: 'Hungarian',
      code: 'hu'
    }, {
      lang: 'Irish',
      code: 'ga'
    }
  ],
  rowTwo: [
    {
      lang: 'Italian',
      code: 'it'
    }, {
      lang: 'Latvian',
      code: 'lv'
    }, {
      lang: 'Lithuanian',
      code: 'lt'
    }, {
      lang: 'Maltese',
      code: 'mt'
    }, {
      lang: 'Polish',
      code: 'pl'
    }, {
      lang: 'Portuguese',
      code: 'pt'
    }, {
      lang: 'Romanian',
      code: 'ro'
    }, {
      lang: 'Russian',
      code: 'ru'
    }, {
      lang: 'Slovak',
      code: 'sk'
    }, {
      lang: 'Slovenian',
      code: 'sl'
    }, {
      lang: 'Spanish',
      code: 'es'
    }, {
      lang: 'Swedish',
      code: 'sv'
    }, {
      lang: 'Ukrainian',
      code: 'uk'
    }
  ]
}

import { TranslateItem } from './components'
import { Login } from '../../pages'
class Dictionary extends Component {
  constructor () {
    super()
    this.state = {
      searchText: '',
      showLangs: false,
      selectedLang: '',
      translates: {
        'ru': '',
        'fr': '',
        'es': ''
      },
      bounceValue: new Animated.Value(0),  // This is the initial position of the subview
      arrowIndex: 0
    }
    this.navigateTo = this.navigateTo.bind(this)
  }
  
  toggleLangs = (selectedLang, arrowIndex) => {
    let { showLangs } = this.state
    showLangs = !showLangs
    this.setState({showLangs, selectedLang, arrowIndex})
  }

  selectLang = (newLang, oldLang) => {
    let { translates, showLangs } = this.state
    let keys = Object.keys(translates)
    const indexOfItem = keys.indexOf(oldLang)
    keys[indexOfItem] = newLang
    translates = {}
    keys.map(k => {
      translates[k] = ''
    })
    this.setState({selectedLang: newLang, translates, showLangs: false}, () => {
      this.handleTextInput({nativeEvent: {text: this.state.textToTranslate || ''}})      
    })    
  }

  navigateTo (data) {
    console.log('navigate to', this.props)
    this.props.navigator.push({
      index: 2,
      passProps: {
        name: 'property'
      }
    })
  }
  render () {
    let { translates, bounceValue, showLangs, selectedLang, arrowIndex } = this.state
    let selectedCircle = {
      backgroundColor: '#47C3CF'
    }
    let top = {
      top: 71 + arrowIndex * 61
    }
    let topInner = {
      top: 72 + arrowIndex * 61
    }
    const langs = Object.keys(translates)
    return (
      <View style={styles.layout} >
        <Text style={styles.headerTitle}>DICTIONARY</Text>
        <TextInput style={styles.input}
          editable
          onChange={this.handleTextInput.bind(this)}
        />
        {langs.length > 0 && langs.map((l,i) => {
          return (<TranslateItem key={l}
            onNavigate={this.navigateTo}
            onChooseLang={this.toggleLangs.bind(this, l, i)}
            lang={l}
            value={translates[l]}
          />)
        })}
        { showLangs &&  <Animated.View style={styles.popupWrapper} >
          <View style={styles.talkBubble}>
            <View style={styles.talkBubbleSquare} >
              <View style={styles.rowOne} >
                {languages.rowOne.map(l => {
                  return (
                    <TouchableHighlight  onPress={this.selectLang.bind(this, l.code, selectedLang)} style={styles.translate} key={l.code}>
                    <View style={styles.translate} key={l.code}>
                      <View style={[styles.translateCircle, selectedLang === l.code && selectedCircle]} />
                      <Text style={styles.translateText}>{l.lang}</Text>
                    </View>
                                        </TouchableHighlight>

                  )
                })}
              </View>
              <View style={styles.rowOne} >
                {languages.rowTwo.map(l => {
                  return (
                    <TouchableHighlight  onPress={this.selectLang.bind(this, l.code, selectedLang)} style={styles.translate} key={l.code}>
                    <View style={styles.translate} key={l.code}>
                    <View style={[styles.translateCircle, selectedLang === l.code && selectedCircle]} />
                      <Text style={styles.translateText}>{l.lang}</Text>
                    </View>
                    </TouchableHighlight>
                  )
                })}
              </View>
            </View>
          </View>
          <View style={[styles.talkBubbleTriangle, top]} ><Text>123ewqeqwe</Text></View>
          <View style={[styles.talkBubbleTriangleInner, topInner]} ><Text>123ewqeqwe</Text></View>
        </Animated.View>}
      </View>
    )
  }

  handleTextInput = (e) => {
    const { text } = e.nativeEvent
    const { translates } = this.state
    const lang = { 
      from: 'en',
      to: Object.keys(translates)
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
      this.setState({translates, textToTranslate: text})
    })
    .catch(err => {
      console.log(err)
    })
  }

  _translate (text, from, to) {
    return fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + from + '&tl=' + to + '&dt=t&q=' + text)
     .then((response) => response.json())
  }
}

const styles = StyleSheet.create({
  translateText: {
    fontSize: 20,
    marginLeft: 5
  },
  translate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  translateCircle: {
    marginTop: 2,
    width: 14,
    height: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#95989A'
  },

  rowOne: {
    width: 120
  },

  talkBubble: {
    flex: 1,
    marginLeft: 50,
    backgroundColor: 'transparent'
  },

  talkBubbleSquare: {
    paddingTop: 16,
    paddingLeft: 10,
    paddingBottom: 16,
    flex: 1,
    flexDirection: 'row',
    width: 260,
    height: 390,
    borderRadius: 10,
    borderColor: '#95989A',
    borderWidth: 1,
    backgroundColor: '#EEEEEE'
  },

  talkBubbleTriangle: {
    position: 'absolute',
    left: 27,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 8,
    borderRightWidth: 24,
    borderRightColor: '#95989A',
    borderBottomWidth: 8,
    borderBottomColor: 'transparent'
  },

  talkBubbleTriangleInner: {
    position: 'absolute',
    left: 29,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 7,
    borderRightWidth: 23,
    borderRightColor: '#EEEEEE',
    borderBottomWidth: 7,
    borderBottomColor: 'transparent'
  },
  popupWrapper: {
    position: 'absolute',
    right: 12,
    top: 40,
    width: 310,
    height: 450,
    borderColor: 'black'
  },

  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 24,
    flex: 1,
    maxHeight: 24,
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
    padding: 12,
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
