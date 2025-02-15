import React, {useState} from 'react';
import {Image, KeyboardType, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {t} from 'i18next';
import {Ionicons} from '@expo/vector-icons';

interface Props {
    image: any;
    placeholder: string;
    value: string;
    keyboardType: KeyboardType,
    secureTextEntry?: boolean;
    property: string;
    onChangeText: (property: string, value: string) => void;
    showToggleIcon?: boolean;
    autoCapitalize?:'none' | 'sentences' | 'words' | 'characters' | undefined,

}


const CustomTextInput = ({
                             image,
                             placeholder,
                             value,
                             keyboardType,
                             secureTextEntry = false,
                             autoCapitalize,
                             property,
                             onChangeText
                         }: Props) => {
    const [hidePassword, setHidePassword] = useState<boolean>(secureTextEntry);
    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon}
                   source={image}/>
            <TextInput style={styles.formTextInput}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       autoCapitalize={autoCapitalize}
                       value={value}
                       onChangeText={text => onChangeText(property, text)}
                       secureTextEntry={hidePassword}>
            </TextInput>
            {secureTextEntry && (
                <TouchableOpacity style={styles.toggleIcon} onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={20} color="#888888"/>
                </TouchableOpacity>
            )}

        </View>
    );
};
const styles = StyleSheet.create({
    formIcon: {
        width: 25,
        height: 25,
    },
    formInput: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
    },
    toggleIcon: {
        position: 'absolute',
        right: 0,
        padding: 5,
    },
});
export default CustomTextInput;
