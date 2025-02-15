import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {RoundedButton} from '../../components/RoundedButton';
import {useTranslation} from 'react-i18next';
import {useFonts} from 'expo-font';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../App';
import CustomTextInput from '@components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './styles';
const RegisterScreen = () => {
    const {t} = useTranslation();
    const {name, lastName, email, phone, password, confirmPassword, onChange, register} = useViewModel();
    // Estado para mostrar/ocultar contraseña
    const [secureText, setSecureText] = useState(true);
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();
    return (
        <View style={styles.container}>
            <Image style={styles.imageContainer}
                   source={require('@assest/chef.jpg')}
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage}
                       source={require('@assest/user_image.png')}/>
                <Text style={styles.logoText}>{t('registerScreen.seleccionaImagen')}</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>{t('registerScreen.registrarse')}</Text>
                <CustomTextInput image={require('@assest/user.png')}
                                 placeholder={t('registerScreen.nombres')} value={name}
                                 keyboardType={'default'} property={'name'} onChangeText={onChange}/>
                <CustomTextInput image={require('@assest/my_user.png')}
                                 placeholder={t('registerScreen.apellidos')} value={lastName}
                                 keyboardType={'default'} property={'lastName'}
                                 onChangeText={onChange}/>
                <CustomTextInput image={require('@assest/email.png')}
                                 autoCapitalize={'none'}
                                 placeholder={t('registerScreen.email')} value={email}
                                 keyboardType={'email-address'} property={'email'}
                                 onChangeText={onChange}/>
                <CustomTextInput image={require('@assest/phone.png')}
                                 placeholder={t('registerScreen.telefono')} value={phone} keyboardType={'phone-pad'}
                                 property={'phone'} onChangeText={onChange}/>
                <CustomTextInput image={require('@assest/password.png')}
                                 placeholder={t('registerScreen.password')} value={password} keyboardType={'default'}
                                 property={'password'} secureTextEntry={true} onChangeText={onChange}/>

                <CustomTextInput image={require('@assest/confirm_password.png')}
                                 placeholder={t('registerScreen.confirmPassword')} value={confirmPassword}
                                 keyboardType={'default'} property={'confirmPassword'} secureTextEntry={true}
                                 onChangeText={onChange}/>
                <View style={{marginTop: 30}}>
                    <RoundedButton text={t('registerScreen.confirmar')} onPress={() => { register()
                    }}/>
                </View>
            </View>

        </View>

    );

};
export default RegisterScreen;
