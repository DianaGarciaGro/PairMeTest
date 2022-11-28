import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    Card: {
        width: '100%'
    },
    UserInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    UserImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    UserImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    TextSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    UserInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    UserName: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Regular'
    },
    PostTime: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'Roboto-Regular'
    },
    MessageText: {
        fontSize: 14,
        color: '#333333'
    }
});

export default styles;