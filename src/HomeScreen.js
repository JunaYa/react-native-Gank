/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {View, ListView, TouchableHighlight, RefreshControl} from 'react-native'
import ItemView from './ItemView';

export default class extends Component {
    // Initialize the hardcoded data
    static navigationOptions = {
        title: "Gank",
        header:({
            style:{backgroundColor:'#212121'},
            titleStyle:{color:'#ffffff'}
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows([
                {"title": "Inception", "releaseYear": "2010"},
            ]),
            isRefreshing: false,
            isError: false,
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View >
                <ListView
                    dataSource={this.state.dataSource}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            title={'Loading...'}
                            tintColor={'#ff8715'}
                        />
                    }
                    renderRow={ (rowData) =>
                        <TouchableHighlight
                            onPress={()=>navigate("Detail",{data:rowData})}>
                            <View><ItemView data ={rowData}/></View>
                        </TouchableHighlight>}
                />
            </View>
        );
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        fetch('https://gank.io/api/data/Android/10/1')
            .then((response) => {
                this.setState({isRefreshing: false});
                return response.json();
            }).then((responseJson) => {
            this.setState({
                dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(responseJson.results),
            })
        }).catch((error => {
            alert(error.toString())
        }))
        ;
    }

}