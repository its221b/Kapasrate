import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = ({  }) =>
  StyleSheet.create({
      headercontainer : {
        height: RFValue(60),
        backgroundColor: "#A020F0",
        alignItems: "center",
        justifyContent: "center"
      },
      headertext : {
        fontSize: RFValue(24),
        fontWeight: "bold",
        color: "#fff"
      }
  });

export default styles;
