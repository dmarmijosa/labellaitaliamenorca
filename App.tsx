import {StatusBar} from 'expo-status-bar';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18n from './assets/i18n/i18n';
import HomeScreen from './src/Presentation/views/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from './src/Presentation/views/register/Register';
export type RootStackParamsList = {
    HomeScreen: undefined;
    RegisterScreen: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamsList>();
export default function App() {
    const {t} = useTranslation();
    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{title: t('login.ingresar')}}
                    />
                    <Stack.Screen name="RegisterScreen"
                                  options={{headerShown: true, title: t('registerScreen.registrarse')}}
                                  component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        </I18nextProvider>
    );
}

const Main = () => {

};


