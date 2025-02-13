import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MyColors} from '@Theme/AppTheme';

interface Props {
    text: string,
    onPress: () => void,
}

export const RoundedButton = ({text,onPress}: Props) => {
    return (
        <TouchableOpacity style={styles.roundedButton} onPress={() => onPress()}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        backgroundColor: MyColors.primary,
        padding: 10,
        borderRadius: 10,

        //IOS
        shadowColor: 'black',
        shadowOffset:{width:0, height:4},
        shadowOpacity: 0.3,
        shadowRadius: 4,

        //android
        elevation: 5,

    },
    textButton: {
        textAlign: 'center',
        color: 'white',
    }

})
