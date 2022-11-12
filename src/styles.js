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
    rowIcon: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
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
        left: 10,
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
    buttonCard: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    smallTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5481b8',
    },
    caption: {
        fontSize: 17,
        lineHeight: 14,
        color: '#808080',
        fontWeight: '500',
        paddingTop: 5,
    },
    textSide: {
        color: '#777777', 
        marginLeft: 20
    },
    rowProfile: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingLeft: 15,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    smallText: {
        color: 'black', 
        marginLeft: 15
    }
});

export default styles;