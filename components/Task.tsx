import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type Props = {
    text: string;
}

const Task = (props: Props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
        <View style={styles.circular}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:0, 
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 4,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;