import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useFonts} from 'expo-font';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {RoundedButton} from '../../components/RoundedButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './styles';

const HomeScreen = () => {
    const {t} = useTranslation();
    const [fontLoaded] = useFonts({
        'GreatVibes-Regular': require('../../../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    const {email, password, onChange} = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();
    return (
        <View style={styles.container}>
            <Image style={styles.imageContainer}
                   source={require('../../../../assets/chef.jpg')}
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage}
                       source={require('../../../../assets/logo.png')}/>
                <Text style={styles.logoText}>{t('app')}</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>{t('login.ingresar')}</Text>
                <CustomTextInput image={require('../../../../assets/email.png')}
                                 placeholder={t('login.email')}
                                 value={email}
                                 keyboardType={'email-address'}
                                 property={'email'}
                                 onChangeText={onChange}
                />
                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder={t('login.password')}
                    value={password}
                    keyboardType={'default'}
                    property={password}
                    secureTextEntry={true}
                    onChangeText={onChange}/>
                <View style={{marginTop: 30}}>
                    <RoundedButton text={t('login.ingresar')} onPress={() => {
                        console.log('Email', email);
                        console.log('Password', password);
                    }}/>
                </View>
                <View style={styles.formRegister}>
                    <Text>
                        {t('login.accountCreate')}
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formTextAnchor}>{t('login.register')}</Text>
                    </TouchableOpacity>


                </View>
            </View>

        </View>

    );
};

export default HomeScreen;
