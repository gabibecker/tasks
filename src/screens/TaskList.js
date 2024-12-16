import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from "../commonStyles";
import moment from "moment";
import 'moment/locale/pt-br'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMM')
        return (
            <View style={style.container}>
                <ImageBackground source={todayImage}
                style={style.background}>
                    <View style={style.titleBar}>
                        <Text style = {style.title}>Hoje</Text>
                        <Text style= {style.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={style.taskList}>
                       <Text>Tarefa #01</Text> 
                       <Text>Tarefa #02</Text> 
                       <Text>Tarefa #03</Text> 
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
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end', 
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    }

})