import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Friend({user}) {
    return (
        <View style={styles.container}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:3,
        borderColor:'purple',
        margin: 5,
        padding: 5,
        borderRadius: 15
    }
})
