import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const styles = ({}) => StyleSheet.create({
    renderItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "97%",
        height: RFValue(30),
        backgroundColor: "#D887FB",
        margin: RFValue(5),
        
    },
    rendertext : {
        fontSize: RFValue(14),
        fontWeight: "bold"
    },
    singleContainer : {
        width: RFValue(150),
        height: RFValue(200),
        backgroundColor: "#D887FB",
        borderColor: "black",
        borderWidth: RFValue(2),
        borderRadius: RFValue(10),
        alignItems: "center",
        justifyContent: "center"
    },
    singleText : {
        fontSize: RFValue(24),
        fontWeight: "bold"
    }
});

export default styles;
