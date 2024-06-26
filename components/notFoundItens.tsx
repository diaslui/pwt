import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MonoTextBold, MonoText } from './StyledText';


export const NotFoundItens = () => {
    return(
        <View style={styles.container}>
            <MonoTextBold colorPattern='main1'  style={styles.title}>Sua carteira está vazia</MonoTextBold>
            <MonoText colorPattern='text' style={styles.infoText}>Ao adicionar itens eles aparecerão aqui</MonoText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //  flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 29,
        color: '#FFF',
        
    },
    infoText: {
        fontSize: 16,
    },
});

