import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import useStyles from './HeaderStyle';

const Header = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>{props.title}</Text>
    </View>
  );
};

export default Header;
