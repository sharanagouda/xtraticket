import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    textInputContainer: {
        // height:60,
        // flexDirection:'row',
        paddingHorizontal: 16,
        marginTop: 11
    },
    textPhoneInputContainer: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 16,
        // marginTop: 11
    },
    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },

    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 27,
        zIndex: 1
    },

    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 7,
        // paddingTop: 12,
        fontSize: 16,
        color: "#333",
        opacity: 40,
       
    },
    textInputLabelscan: {
        color: "black",
        fontSize: 14,
        width: '40%',
    },

  });

  export default styles;