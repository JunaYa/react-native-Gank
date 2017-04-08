/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {View, ListView,TouchableHighlight} from 'react-native'
import ItemView from './ItemView';

export default class extends Component {
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