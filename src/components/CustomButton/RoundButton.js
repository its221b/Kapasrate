import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import MainButton from "./MainButton";
import { RFValue } from "react-native-responsive-fontsize";
 const RoundButton = ({
   icon,
   mode,
   dark,
   color,
   compact,
   loading,
   disabled,
   uppercase,
   labelStyle,
   onLongPress,
   buttonLabel,
   buttonStyle,
   contentStyle,
   onButtonPress,
   containerStyle,
   verticallyCenter,
   ...rest
 }) => {
   const theme = useTheme();
 
   const styles = useStyles(theme);
   return (
     <View
       style={[
         verticallyCenter ? styles.container_center : styles.container,
         containerStyle,
       ]}>
       <MainButton
         mode={mode}
         dark={dark}
         icon={icon}
         color={color}
         compact={compact}
         loading={loading}
         disabled={disabled}
         labelStyle={labelStyle}
         onPress={onButtonPress}
         onLongPress={onLongPress}
         buttonStyle={buttonStyle}
         contentStyle={contentStyle}
         children={buttonLabel}
       />
     </View>
   );
 };
 
 const useStyles = ({ colors, fonts }) =>
   StyleSheet.create({
     container: {
       alignSelf: "center",
       alignItems: "center",
       flex: 1,
       paddingBottom: RFValue(40),
       paddingTop: RFValue(10),
       justifyContent: "flex-end",
     },
     container_center: {
       alignSelf: "center",
       alignItems: "center",
       flex: 1,
       // paddingBottom: 26,
       paddingTop: RFValue(10),
       justifyContent: "center",
     },
   });
 
 RoundButton.propTypes = {
   mode: PropTypes.string,
   buttonLabel: PropTypes.string,
   onButtonPress: PropTypes.func,
 };
 
 RoundButton.defaultProps = {
   verticallyCenter: false,
 };
 
 export default RoundButton;
 