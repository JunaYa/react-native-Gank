/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {
    StyleSheet
    , WebView
} from 'react-native';

export default class  extends Component {
    static navigationOptions = {
        title: ({state}) => state.params.data.desc,
    };

    render() {
        const {params}= this.props.navigation.state;
        return (
            <WebView
                source={{uri:params.data.url}}
            />
        );
    }
}