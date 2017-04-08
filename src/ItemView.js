/**
 * Created by JunaYa on 08/04/2017.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';


var DeviceWidth = Dimensions.get('window').width;

export default class extends Component {

    render() {
        let title = this.props.title;
        let date = '2017-04-08 12:00';
        let img = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.all_background}>
                <Image source={img} style={styles.img}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    all_background: {},
    img: {
        width: DeviceWidth,
        height: DeviceWidth / 3 * 2,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#0b1335',

    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    description: {
        color: 'white',
        fontSize: 16,
    },
    date: {
        color: '#ffc941',
        fontSize: 12,
        textAlign: 'center',
    }
});

