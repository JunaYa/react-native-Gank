/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {View, ListView,} from 'react-native'

export  default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds.cloneWithRows(["Android", "iOS", "Java", "JavaScript", "Python"])
        }
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=> <Text>{rowData}</Text>}/>
            </View>
        )
    };
}