/**
 * Created by JunaYa on 08/04/2017.
 */

'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    TouchableHighlight,
    View,
    ListView,

} from 'react-native';

import DetailScreen from './src/DetailScreen';
import HomeScreen from './src/HomeScreen';
import {StackNavigator} from 'react-navigation'


const GankApp = StackNavigator({
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
});

AppRegistry.registerComponent('webApp', () => GankApp);
