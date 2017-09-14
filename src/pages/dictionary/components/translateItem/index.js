import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet, TouchableOpacity, Modal
} from 'react-native'

class TranslateItem extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false
    }
  }

  render() {
    let { value, lang } = this.props
    console.log(value[0], lang)
    const syns = [
      {
        title: 'asdasdaasd',
        translates: '123ewqe, 321321, 321312,3 3123, ewewe ewewe, ewe, ewe'
     },
      {
        title: 'asdssdaa',
        translates: '123ewqe, 321321, 321312,3 3123, ewewe ewewe, ewe, ewe'
     }
    ]
       
    return (
      <View style={styles.baseRow}>
      <View style={styles.row}>
        <TouchableOpacity onPress={this._toggleLangs}>
          <View onPress={this._toggleLangs}>
            <Image style={styles.dotsIcon} source={require('../../../../public/dots.png')} />
          </View>
        </TouchableOpacity>
        <View style={styles.lang}>
          <Text style={styles.langText}>{lang.toUpperCase()}</Text>
        </View>
        <View style={styles.trans}>
          <Text style={styles.transText}>{value && value[0] && value[0][0]}</Text>
        </View>
        <View style={styles.addIcon}>
          <Image
            source={require('../../../../public/sound.png')}
          />
        </View>
        <View>
          <Image
            source={require('../../../../public/add.png')}
          />
        </View>
        </View>
      { false && <View style={styles.synWrapper}>
        <View style={styles.synHeaderRow}>
          <View style={styles.synIconWrapper}>
              <View style={styles.lineHorizontal} />
              <View style={styles.lineSmall} /> 
          </View>
        </View>
        {syns.map((s,i) => {
          return (
            <View key={i} style={styles.synRow}>
            <View style={styles.synIconWrapper}>
            <View style={styles.lineSmall} />
              <View style={styles.point} />
              <View style={styles.line} />
            </View>
            <View style={styles.synTextWrapper}>
              <Text style={styles.synTextHeader}>test</Text>
              <Text style={styles.synTextContent} numberOfLines={2}>test, wew, ewewe , ewewe, 1111, 11111,1111 ewew ew, ewew, ewew</Text>
            </View>
            </View>
            )
        })}
      </View>}
      </View>
    )
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }
}

const styles = StyleSheet.create({
  point: {
    width: 14,
    height: 14,
    borderWidth: 1, 
    borderRadius: 15
  },

  line: {
    width: 1,
    height: 35,
    backgroundColor: 'black'
  },

  lineHorizontal: {
    marginLeft: 1,
    width: 9,
    height: 1,
    // borderWidth: 1,
    backgroundColor: 'black'
  },

  lineSmall: {
    width: 1,
    height: 5,
    // borderWidth: 1,
    backgroundColor: 'black'
  },

  synTextHeader: {
    marginLeft: 10,
    color: '#46C3CF',
    fontWeight:'bold',
    borderWidth: 1
    
  },

  synTextContent: {
    marginLeft: 10,
    borderWidth: 1,
    width: 100
  },

  synRow: {
    borderWidth: 1,
    flex: 1,
    flexShrink:0 ,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8'
  },

  synHeaderRow: {
   //flex: 1,
   maxHeight: 6,
   backgroundColor: '#F8F8F8'   
  },

  synTextWrapper: {
   // flex: 1
   borderWidth: 1,
   flexGrow: 1
   //flexWrap: 'wrap'
  },

  synIconWrapper: {
    alignItems: 'center',
    width: 30,
    height: 50
  },

  synWrapper: {
    flex: 1,
    width: 300,
    marginLeft: 10
  },

  baseRow: {
    //flex: 1,
    borderWidth: 1,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 10
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  dotsIcon: {
    height: 25,
    marginRight: 5
  },

  addIcon: {
    height: 25,
    marginRight: 5
  },

  lang: {
    justifyContent: 'center',
    width: 50
  },

  langText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 30,
    fontWeight: '400'
  },

  trans: {
    flex: 1,
    justifyContent: 'center',
    height: 50
  },

  transText: {
    marginTop:0,
    color: '#46C3CF',
    borderBottomColor: '#46C3CF',
    borderBottomWidth: 1,
    height: 25,
    marginBottom: 24,
    marginRight:10
  }
})

export default TranslateItem
