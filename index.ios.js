/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Gank',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={()=>navigate('Detail',{title:"2017-04-08 News"})}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

class DetailScreen extends Component {
    static navigationOptions = {
        title: ({state}) => state.params.title,
    };

    render() {
        const {params}= this.props.navigation.state;
        return (
            <View>
                <Text>This is detail need request data {params.title} </Text>
            </View>
        );
    }
}

class Android extends Component {
    render() {
        return <Text onPress={()=>navigate('Detail',{title:"2017-04-08 News Android"})}>Android</Text>
    }
}

class iOS extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return <Text onPress={()=>navigate('Detail',{title:"2017-04-08 News iOS"})}>iOS</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Home: {screen: HomeScreen},
    Android: {screen: Android},
    iOS: {screen: iOS},
});

MainScreenNavigator.navigationOptions = {
    title: "Home",
};

const GankApp = StackNavigator
({
    Home: {screen: MainScreenNavigator},
    Detail: {screen: DetailScreen},
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('webApp', () => GankApp);
