import React, { Component,useState } from 'react';  
import { Button,View, Text, StyleSheet,Alert,TouchableOpacity,FlatList,NavigationContainer ,Linking} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import {  createSwitchNavigator,  createAppContainer    } from 'react-navigation'; 
import {createStackNavigator } from 'react-navigation-stack'
import {createDrawerNavigator, DrawerItem }from 'react-navigation-drawer'
//import {  } from 'react-native-gesture-handler';

//import{AboutUsStackNavigator} from './components/AboutUsScreen'
import AboutUsScreen from './components/AboutUsScreen'
import UserFeedbackScreen from './components/UserFeedbackScreen'
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  class DashboardScreen extends Component { 
    static navigationOptions = {  
         drawerLabel: 'Dashboard', 
         
    }
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>WelcomeScreen</Text>  
                </View>  
        );  
    }  
}  

  const AboutUsStackNavigator = createStackNavigator(  
    {  
      AboutUs: AboutUsScreen
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu" 
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
  );     
       
const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: DashboardScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
const UserFeedbackStackNavigator = createStackNavigator(
    {  
        UserFeedbackNavigator: UserFeedbackScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
                
            )  
        };  
        }  
    } 
);  
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: { 
        screen: DashboardStackNavigator ,
        navigationOptions :{
            drawerIcon:(<Icon name='md-home' size={20}></Icon>)
        } 
    },  
    AboutUs: {  
        screen: AboutUsStackNavigator ,
        navigationOptions :{
            drawerIcon:(<Icon name='md-information-circle' size={20}></Icon>)
        }  
    }, 
   Feedback:{
    screen:UserFeedbackStackNavigator,
    navigationOptions :{
        drawerIcon:(<Icon name='md-mail' size={20} ></Icon>)
    } 
    },
    
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Dashboard: { screen: AppDrawerNavigator },  
    AboutUs: { screen: AboutUsScreen }, 
  Feedback:{screen:UserFeedbackScreen}, 
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center',  
        backgroundColor:'white'
    }  
});  