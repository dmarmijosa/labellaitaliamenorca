import {StatusBar} from 'expo-status-bar';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import i18n from './assets/i18n/i18n';
import {useFonts} from 'expo-font';
import {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {RoundedButton} from '@components/RoundedButton';

export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Main/>
        </I18nextProvider>
    );
}

const Main = () => {
    const {t} = useTranslation();
    const [fontLoaded] = useFonts({
        'GreatVibes-Regular': require('./assets/fonts/GreatVibes-Regular.ttf'),
    });
    // Estado para mostrar/ocultar contraseña
    const [secureText, setSecureText] = useState(true);
    return (
        <View style={styles.container}>
            <Image style={styles.imageContainer}
                   source={require('./assets/chef.jpg')}
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage}
                       source={require('./assets/logo.png')}/>
                <Text style={styles.logoText}>{t('app')}</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>{t('ingresar')}</Text>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon}
                           source={require('./assets/email.png')}/>
                    <TextInput style={styles.formTextInput}
                               keyboardType={'email-address'}
                               placeholder={t('email')}></TextInput>
                </View>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon}
                           source={require('./assets/password.png')}/>
                    <TextInput style={styles.formTextInput}
                               secureTextEntry={secureText}
                               placeholder={t('password')}></TextInput>
                    <TouchableOpacity style={{position: 'absolute', right: 0}}
                                      onPress={() => setSecureText(!secureText)}>
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={24}
                            color="#888"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 30}}>
                    <RoundedButton text={t('ingresar')} onPress={()=>{}}/>
                </View>
                <View style={styles.formRegister}>
                    <Text>
                        {t('accountCreate')}
                    </Text>
                    <Text style={styles.formTextAnchor}>
                        {t('Registrate')}
                    </Text>
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
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
    formRegister: {
        marginHorizontal: 'auto',
        marginVertical: 'auto',
        display: 'flex',
        gap: 20,
        flexDirection: 'row',
    },
    formTextAnchor: {
        fontStyle: 'italic',
        color: 'orange',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    logoContainer: {
        position: 'absolute',
        top: '15%',
        alignSelf: 'center',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    logoText: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'GreatVibes-Regular',
        textAlign: 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
    },


});
