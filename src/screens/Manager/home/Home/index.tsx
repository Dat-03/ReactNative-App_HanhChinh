import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import { ButtonCustom } from '../../../../components';

const HomeManage: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ButtonCustom textButton='hihi' name='book' type='font-awesome' size={24} color='red'/>
    </View>
  );
};

export default HomeManage;
