/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    TouchableHighlight,
    View,
    ListView,

} from 'react-native';
import ItemView from './src/ItemView';

import {StackNavigator} from 'react-navigation'

class HomeScreen extends Component {
    // Initialize the hardcoded data
    static navigationOptions = {
        title: "Gank",
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
        fetchData();
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={ (rowData) =>
                    <TouchableHighlight
                    onPress={()=>navigate("Detail",{title:rowData})}>
                                        <View>
                     <ItemView
                        title={rowData}
                        /></View>
                    </TouchableHighlight>}
                />
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

const GankApp = StackNavigator({
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
});

function fetchData() {
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json)
        .then((responseJson) => {
            return responseJson.moviesl
        })
        .catch((error) => {
            console.error(error);
        })
}

AppRegistry.registerComponent('webApp', () => GankApp);
