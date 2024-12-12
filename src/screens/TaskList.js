import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View style={style.container}>
                <ImageBackground source={todayImage}
                style={style.background}>
                </ImageBackground>
                <View style={style.taskList}>
                       <Text>TaskList</Text> 
                    </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    }

})