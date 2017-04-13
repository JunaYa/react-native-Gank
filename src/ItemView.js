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
import IndicatorView from './widget/IndicatorView'

var DeviceWidth = Dimensions.get('window').width - 8;
var DeviceHeight = Dimensions.get('window').height / 2 - 38;


function _parseDate(dateStr) {
    var date = new Date(dateStr);
    var year = date.getFullYear();
    var month = '' + (date.getMonth() + 1);
    if (month.length < 2) month = '0' + month;
    var day = '' + date.getDate();
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}


export default class extends Component {

    render() {

        let item = this.props.data;
        let who = item.who === null ? 'Gank.io' : item.who;
        let desc = item.desc;
        var dateStr = _parseDate(item.publishedAt);
        let date = dateStr;

        if ('images' in item) {
            let images = item.images.map(x => x.replace('http:', 'https:'));
            let img = [
                {uri: images[images.length - 1]},
            ]
            return (
                <Image source={img}
                       resizeMode={Image.resizeMode.contain}
                       style={styles.img}>
                    <IndicatorView pageCount={images.length}/>
                    <View style={styles.content_image}>
                        <Text numberOfLines={1} style={styles.description}>{desc}</Text>
                        <View style={styles.content}>
                            <Text style={styles.title}>{who}</Text>
                            <Text style={styles.date}>{date}</Text>
                        </View>
                    </View>


                </Image>
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
        backgroundColor: '#000000',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 4,
        marginBottom: 0,
        marginLeft: 4,
        marginRight: 4,

    },
    img: {
        width: DeviceWidth,
        height: DeviceHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#000000',
        marginTop: 4,
        marginBottom: 0,
        marginLeft: 4,
        marginRight: 4,
    },
    content_image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        maxHeight: 62,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#000000',
        opacity: 0.6,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 16,
    },
    description: {
        color: 'white',
        fontSize: 14,
        marginBottom: 8,
    },
    date: {
        color: '#ffc941',
        fontSize: 12,
        textAlign: 'center',
    }
});
