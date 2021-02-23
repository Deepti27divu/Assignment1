import React, { Component } from 'react'
import { View, 
         Text, 
         StyleSheet, 
         TouchableHighlight, 
         FlatList, 
       } from 'react-native'

const cities = [{key: 'London'}, 
                {key: 'New York'}, 
                {key: 'Chicago'}, 
                {key: 'Tokyo'}, 
                {key: 'Berlin'}, 
                {key: 'Paris'}, 
                {key: 'Philadelphia'}, 
                {key: 'Malmo'}, 
               ]

const itemSeperator = <View style={{backgroundColor:'Red', height: 0.5}}/>

export default class MainScreen extends Component {



  static navigationOptions = ({ navigation }) => ({
    title: 'Home', 
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {backgroundColor: 'Red'},
  })

  didSelectItem() {
    console.log('item selected')
  }

  render() {
    return(
      <View 
        style={styles.container}
      >
        <FlatList
          data={cities}
          renderItem={({item}) => <TouchableHighlight 
                                    style={styles.item}
                                    onPress={() => this.props.navigation.navigate('Detail', {
                                      city: item.key
                                    })}
                                    underlayColor='white'
                                  >
                                  <Text style={styles.itemText}>{item.key}</Text>
                                  </TouchableHighlight>}
          ItemSeparatorComponent={() => itemSeperator}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  }, 
  item: {
    alignItems: 'flex-start',
    justifyContent: 'center',  
    height: 100, 
  }, 
  itemText: {
    fontSize: 17, 
    padding: 10, 
  },

  
})