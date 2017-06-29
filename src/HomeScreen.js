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
        header: ({
            style: {backgroundColor: '#212121'},
            titleStyle: {color: '#ffffff'},
        }),
    };

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isRefreshing: false,
            isError: false,
        };
    }

    componentDidMount() {
        this._onRefresh();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View >
                <ListView
                    contentContainerStyle={
                        {flexDirection:'row',
                        flexWrap: 'wrap'
                        }
                    }
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
                    <ItemView data={rowData}/>
                    }
                />
            </View>
        );
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        fetch('https://gank.io/api/data/iOS/10/50')
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
