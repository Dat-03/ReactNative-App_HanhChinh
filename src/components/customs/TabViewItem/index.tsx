import {StyleSheet, View} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import React from 'react';
import {CustomTabViewItemProps} from './types';
import useStyles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const TabViewItem: React.FunctionComponent<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();
  return (
    <View style={{flex: 1}}>
      <Tab
        containerStyle={styles.container}
        buttonStyle={props.tabStyle || {backgroundColor: '#FFF'}}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        variant="default"
        titleStyle={props.titleStyle || styles.titleStyle}>
        <Tab.Item title={props.title1} />
        <Tab.Item title={props.title2} />
      </Tab>

      <TabView
        containerStyle={props.viewStyle}
        value={index}
        onChange={setIndex}
        animationType="timing">
        <TabView.Item style={styles.containerTabView}>
          {props.screen1}
        </TabView.Item>
        <TabView.Item style={styles.containerTabView}>
          {props.screen2}
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default TabViewItem;
