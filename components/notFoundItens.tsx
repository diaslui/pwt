import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MonoTextBold, MonoText } from './StyledText';
import { Button } from './Buttons';


export const NotFoundItens = () => {
    return(
        <View style={styles.container}>
            <MonoTextBold colorPattern='warn'  style={styles.title}>Sua carteira está vazia</MonoTextBold>
            <MonoText colorPattern='text' style={styles.infoText}>Ao adicionar itens eles aparecerão aqui</MonoText>
            <Button btnType='primary' text='Começar a Adicionar'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //  flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 20,
    },
    title: {
        fontSize: 29,

    },
    infoText: {
        fontSize: 16,
    },
});

