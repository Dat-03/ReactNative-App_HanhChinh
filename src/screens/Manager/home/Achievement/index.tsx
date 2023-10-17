import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';

const Achievement: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>HI</Text>
    </View>
  );
};

export default Achievement;