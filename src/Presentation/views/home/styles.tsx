import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
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
export default HomeStyles;
