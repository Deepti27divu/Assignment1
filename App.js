// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>WelCome In MY App!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from 'react-navigation-stack'
// import MainScreen from './screens/MainScreen'
// import DetailsScreen from './screens/DetailsScreen'
// import 'react-native-gesture-handler';
// const Stack = createStackNavigator();
// function NavStack() {
//   return (
//      <Stack.Navigator
//         initialRouteName="Blog"
//         screenOptions={{
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#621FF7',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle :{
//             fontWeight: 'bold',
//           },
//         }}
//       >
//       <Stack.Screen 
//         name="Blog" 
//         component={Blog} 
//         options={{ title: 'Blog' }}
//       />
//       <Stack.Screen 
//        name="BlogDetails" 
//        component={BlogDetails} 
//        options={{ title: 'Blog Detail' }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <NavStack />
//     </NavigationContainer>
//   );
// }






// const Stack = createStackNavigator({
//   Home: MainScreen,
//   Detail: DetailsScreen
// })

// export default class App extends React.Component {
//   render() {
//     return (
//       <Stack/>
//     );
//   }
// }
// import React from 'react';
// import {Component, View} from 'react-native';
// import {
//  VictoryChart,
//   VictoryAxis,
//  VictoryLine,
//  VictoryBrushContainer,
//   VictoryZoomContainer
  

// } from 'victory-native';

// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {};
//   }

//   handleZoom(domain) {
//     this.setState({selectedDomain: domain});
//   }

//   handleBrush(domain) {
//     this.setState({zoomDomain: domain});
//   }

//   render() {
//     return (
//       <View>
//           <VictoryChart
//             width={550}
//             height={300}
//             scale={{x: "time"}}
//             containerComponent={
//               <VictoryZoomContainer responsive={false}
//                 zoomDimension="x"
//                 zoomDomain={this.state.zoomDomain}
//                 onZoomDomainChange={this.handleZoom.bind(this)}
//               />
//             }
//           >
//             <VictoryLine
//               style={{
//                 data: {stroke: "tomato"}
//               }}
//               data={[
//                 {x: new Date(1982, 1, 1), y: 125},
//                 {x: new Date(1987, 1, 1), y: 257},
//                 {x: new Date(1993, 1, 1), y: 345},
//                 {x: new Date(1997, 1, 1), y: 515},
//                 {x: new Date(2001, 1, 1), y: 132},
//                 {x: new Date(2005, 1, 1), y: 305},
//                 {x: new Date(2011, 1, 1), y: 270},
//                 {x: new Date(2015, 1, 1), y: 470}
//               ]}
//             />

//           </VictoryChart>

//           <VictoryChart
//             width={550}
//             height={90}
//             scale={{x: "time"}}
//             padding={{top: 0, left: 50, right: 50, bottom: 30}}
//             containerComponent={
//               <VictoryBrushContainer responsive={false}
//                 brushDimension="x"
//                 brushDomain={this.state.selectedDomain}
//                 onBrushDomainChange={this.handleBrush.bind(this)}
//               />
//             }
//           >
//             <VictoryAxis
//               tickValues={[
//                 new Date(1985, 1, 1),
//                 new Date(1990, 1, 1),
//                 new Date(1995, 1, 1),
//                 new Date(2000, 1, 1),
//                 new Date(2005, 1, 1),
//                 new Date(2010, 1, 1),
//                 new Date(2015, 1, 1)
//               ]}
//               tickFormat={(x) => new Date(x).getFullYear()}
//             />
//             <VictoryLine
//               style={{
//                 data: {stroke: "tomato"}
//               }}
//               data={[
//                 {x: new Date(1982, 1, 1), y: 125},
//                 {x: new Date(1987, 1, 1), y: 257},
//                 {x: new Date(1993, 1, 1), y: 345},
//                 {x: new Date(1997, 1, 1), y: 515},
//                 {x: new Date(2001, 1, 1), y: 132},
//                 {x: new Date(2005, 1, 1), y: 305},
//                 {x: new Date(2011, 1, 1), y: 270},
//                 {x: new Date(2015, 1, 1), y: 470}
//               ]}
//             />
//           </VictoryChart>
//       </View>
//     );
//   }
// }


// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;