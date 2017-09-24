import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
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

class Header extends Component { 
    render(){
        return <Text style={styles.headerTitle}>{this.props.title}</Text>        
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
    }})
export default Header