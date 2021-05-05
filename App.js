import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Friend from './Components/Friend/Friend';

export default function App() {

    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <View style={styles.container}>
            <Text>Total Friends: {users.length}</Text>
            {
                users.map(user => <Friend user={user}></Friend>)
            }
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Image
                source={{
                    // uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    uri: 'https://web.programming-hero.com/public/1607429045811.png',
                }}
                style={{ width: 200, height: 200 }}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                onChangeText={text => setName(text)}
                defaultValue=""
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
