import { Platform, StyleSheet,} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },
    image:{
        width: 450,
        height: 230,
    },
    title:{
        fontFamily: '',
        fontWeight: '300'
    },
    viewLogin:{
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputLogin:{
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        width: 300
    },
    buttonLogin:{
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#34A853',
        width: 300,
        borderRadius: 10
    },
    textButtonLogin:{
        color: 'white',
        fontSize: 20
    },
    textSignup:{
        color: 'grey',
        margin: 10
    },
    boxAltLogin:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        width: 300
    },
    footer:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerText:{  
        marginTop: 10,
        color: 'grey',
    },
    registerTextButton:{
        fontWeight: '600'
    }
});