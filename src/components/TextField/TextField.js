import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {TextInput, HelperText, useTheme} from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";

export default function TextField({disabled, style, ...props}) {
  const theme = useTheme();
  const styles = useStyle(theme);
  return (
    <View>
      <TextInput
        outlineColor={props.outlineColor || '#0000001F'}
        style={[styles.textBoxStyle, style]}
        editable={!disabled}
        theme={{
          colors: {text: '#000000CC', placeholder: '#000000BC'},
        }}
        {...props}
      />
      <HelperText type="error" style={styles.error}>
        {props.error}
      </HelperText>
    </View>
  );
}

TextField.propTypes = {
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  disabled: false,
};

const useStyle = ({}) =>
  StyleSheet.create({
    textBoxStyle: {
      color: '#ff0000',
      fontSize: RFValue(14),
    },
    error: {
      flex: 1,
      width: "100%"
    }
  });
