/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';

export default class  extends Component {
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