/**
 * Created by JunaYa on 13/04/2017.
 */

'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
} from 'react-native';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }

    renderIndicatorDot(page, selected) {
        return <View style={selected?styles.dot_selected:styles.dot_normal}/>
    }

    render() {
        let pageCount = this.props.pageCount;
        let currentPage = this.props.currentPage || 0;
        if (pageCount > 1) {
            let indicators = [];
            for (var i = 0; i < pageCount; i++) {
                indicators.push(this.renderIndicatorDot(i, i == currentPage))
            }
            return (
                <View style={styles.container}>
                    {indicators}
                </View>
            )
        } else {
            return <View/>
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 4,
    },

    dot_normal: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: "#dedede",
        marginLeft: 4,
        marginRight: 4,
    },
    dot_selected: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: "#FFCD01",
        marginLeft: 4,
        marginRight: 4,
    }

})
