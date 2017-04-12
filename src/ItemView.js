/**
 * Created by JunaYa on 08/04/2017.
 */
'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';


var DeviceWidth = Dimensions.get('window').width;
var DeviceHeight = Dimensions.get('window').height;

export default class extends Component {

    render() {

        let item = this.props.data;
        let who = item.who === null ? 'Gank.io' : item.who;
        let desc = item.desc;
        var dateStr = _parseDate(item.publishedAt);
        let date = dateStr;

        if ('images' in item) {
            let images = item.images;
            let img = {
                uri: images[0].replace("http", "https")
            }
            return (
                <View style={styles.background}>
                    <Image source={img} style={styles.img}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>{who}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.background}>
                    <Text style={styles.description}>{desc}</Text>
                    <View style={styles.content}>
                        <Text style={styles.title}>{who}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0b1335',
        marginBottom: 4,
        marginTop: 4,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 6,
        paddingTop: 16,
        paddingBottom: 16
    },
    img: {
        width: DeviceWidth - 8,
        height: DeviceWidth / 3 * 2,
        marginBottom: 8,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#0b1335',

    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    description: {
        color: 'white',
        fontSize: 16,
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 8
    },
    date: {
        color: '#ffc941',
        fontSize: 12,
        textAlign: 'center',
    }
});

function _parseDate(dateStr) {
    var date = new Date(dateStr);
    var year = date.getFullYear();
    var month = '' + (date.getMonth() + 1);
    if (month.length < 2) month = '0' + month;
    var day = '' + date.getDate();
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}
