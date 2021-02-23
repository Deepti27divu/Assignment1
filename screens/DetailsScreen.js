import React, { Component } from 'react'
import { View, 
         Text, 
         StyleSheet, 
         TouchableHighlight, 
         FlatList, 
       } from 'react-native'

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props)
    const { navigation } = this.props
    const cityProp = navigation.getParam('city', 'no city name')
    this.state = {
      city: cityProp
    }
    console.log('city is ' + this.state.city)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.city}`, 
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {backgroundColor: 'powderblue'},
  })

  render() {
    return(
      <View style={styles.container}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})