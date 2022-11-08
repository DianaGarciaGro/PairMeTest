import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 10,
        flex: 1,
    },
    Logo1: {
        width: 400,
        height: 750,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    LogoPNG: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200,
        alignSelf: 'center',
    },
    Title: {
        color: '#5481b8', 
        fontSize: 25, 
        fontWeight: 'bold',
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 70,
        textAlign: 'center',
    },
    Button: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#5481b8',
        width: "75%",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    TitleButton: {
        color: '#5481b8',
        fontSize: 25,
        fontWeight: 'bold',
        width: "75%",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        color: "gray",
        marginVertical: 10,
        padding: 10,
    },
    link: {
        color: "#FDB075",
    },

    Normal: {
        color: '#5481b8',
        fontSize: 25,
        marginTop: 20,
    },
    container: {
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    container_TITLE: {
        color: '#5481b8', 
        fontSize: 25, 
        fontWeight: 'bold',
        textAlign: 'center',
    },
    QUESTION: {
        color: '#5481b8',
        fontSize: 23,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        textAlign: 'center',
    },
    container_NUMBER: {
        color: '#5481b8',
        fontSize: 20,
        fontWeight: 'bold',
    },
    answer: {
        paddingBottom: 20,
        paddingTop: 40,
        width: 300,
        justifyContent: "center",
        alignSelf: "center",
        color: '#5481b8',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    Tab: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#5481b8',
        borderRadius: 15,
        height: 90,
    },
    menu: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    icon: {
        fontSize: 30,
        color: '#5481b8',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    input: {
        fontSize: 20,
        color: 'black',
        width: '80%',
        height: 50,
    },
    containerCI: {
        width: 300,
        height: 50,
        justifyContent: 'center', 
        borderBottomColor: '#5481b8',
        borderBottomWidth: 1,
        marginBottom: 20,
        position: 'relative',
    },
});

export default styles;