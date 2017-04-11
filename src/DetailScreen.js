/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {
    WebView
} from 'react-native';

export default class  extends Component {
    static navigationOptions = {
        title: ({state}) => state.params.data.desc,
    };

    state = {
        status: 'No Page Loaded',
    }

    render() {
        const {params}= this.props.navigation.state;
        return (
            <WebView
                source={{uri:params.data.url}}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                decelerationRate={'normal'}
                automaticallyAdjustContentInsets={false}
                startInLoadingState={true}
                scalesPageToFit={true}
            />
        );
    }
}