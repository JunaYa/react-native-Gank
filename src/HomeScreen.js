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
                {
                    "_id": "5785b4f1421aa90dea11e9d2",
                    "createdAt": "2016-07-13T11:26:41.535Z",
                    "desc": "iOS \u4e0a\u6ed1\u64cd\u4f5c\u6846\u7ec4\u4ef6\uff0c\u8f85\u52a9\u7528\u6237\u5feb\u901f\u5b8c\u6210\u83dc\u5355\u64cd\u4f5c\u3002",
                    "images": [
                        "https://github.com/xmartlabs/XLActionController/raw/master/Media/demo_skype.gif",
                        "https://github.com/xmartlabs/XLActionController/raw/master/Media/demo_spotify.gif"
                    ],
                    "publishedAt": "2016-07-13T12:10:33.380Z",
                    "source": "chrome",
                    "type": "iOS",
                    "url": "https://github.com/xmartlabs/XLActionController",
                    "used": true,
                    "who": "\u4ee3\u7801\u5bb6"
                },
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