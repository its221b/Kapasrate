import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { colorWithOpacity } from "../../../utils/getHexcode";
import { RFValue } from "react-native-responsive-fontsize";

const MainButton = ({
  icon,
  mode,
  dark,
  color,
  compact,
  loading,
  disabled,
  uppercase,
  labelStyle,
  buttonStyle,
  contentStyle,
  onPress,
  onLongPress,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const btnColor = color || "#A020F0";
  const styles = useStyles(theme, btnColor);
  return (
    <Button
      mode={mode}
      icon={icon}
      dark={dark}
      compact={compact}
      loading={loading}
      uppercase={uppercase}
      color={btnColor}
      disabled={disabled}
      labelStyle={[
        mode === "text" || mode === "outlined"
          ? disabled
            ? { color: colorWithOpacity(btnColor, 40), fontSize: RFValue(18) }
            : { color: btnColor, fontSize: RFValue(18) }
          : { color: "#fff", fontSize: RFValue(18) },
        labelStyle,
      ]}
      style={
        [
          mode === "outlined"
            ? disabled
              ? styles.btnStyle_outlined_disabled
              : styles.btnStyle_outlined
            : mode === "contained"
              ? disabled
                ? styles.btnStyle_contained_disabled
                : styles.btnStyle_contained
              : styles.btnStyle,
          buttonStyle,
        ]}
      contentStyle={[styles.innerContentStyle, contentStyle]}
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}>
      {children}
    </Button >
  );
};

const useStyles = ({ colors }, btnColor) =>
  StyleSheet.create({
    btnStyle: {
      borderRadius: RFValue(50),
    },
    btnStyle_outlined: {
      borderRadius: RFValue(50),
      borderColor: btnColor,
      borderWidth: RFValue(1),
    },
    btnStyle_outlined_disabled: {
      borderRadius: RFValue(50),
      borderColor: colorWithOpacity(btnColor, 40),
      borderWidth: RFValue(1),
    },
    btnStyle_contained_disabled: {
      borderRadius: RFValue(50),
      backgroundColor: colorWithOpacity(btnColor, 40),
    },
    btnStyle_contained: {
      borderRadius: RFValue(50),
      backgroundColor: btnColor,
    },
    innerContentStyle: {
      paddingHorizontal: RFValue(36),
      paddingVertical: RFValue(8),
    },
  });

MainButton.propTypes = {
  mode: PropTypes.string,
  onButtonPress: PropTypes.func,
};

MainButton.defaultProps = {
  mode: "contained",
  children: "continue",
  color: null,
  disabled: false,
};

export default MainButton;
