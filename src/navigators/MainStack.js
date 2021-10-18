// import React from "react";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// import TabHome from '../screens/TabHome/index';
// import TabAccount from '../screens/TabAccount/index';
// import Profile from '../screens/Profile/index';
// import TokenConfig from '../screens/TokenConfig/index'
// import SignIn from "../screens/Signin/index";
// import SignUp from '../screens/Signup/index';
// import ResetPwd from '../screens/ResetPwd/index';
// import NavTabs from "../components/NavTabs";
// import Token from "../screens/TabHome/Token";

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function Home() {
//   return (
//     <Tab.Navigator
//       initialRouteName="TabHome"
//       screenOptions={() => ({
//         headerShown: false,
//       })}
//       tabBar={() => (<NavTabs/>)}
//     >
//       <Tab.Screen name="Início" component={TabHome} />
//       <Tab.Screen name="Conta" component={TabAccount} />
//     </Tab.Navigator>
//   );
// }

// export default function MainStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="SignIn"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="SignIn" component={SignIn} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//         <Stack.Screen name="ResetPwd" component={ResetPwd} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Token" component={Token} />
//         <Stack.Screen name="Perfil" component={Profile} />
//         <Stack.Screen name="TokenConfig" component={TokenConfig} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
