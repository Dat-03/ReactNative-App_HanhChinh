import {Header, Icon} from '@rneui/base';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {CustomHeaderProps} from './types';

const HeaderCustom: React.FunctionComponent<CustomHeaderProps> = props => {
  const styles = useStyles();

  return (
    <Header
      barStyle="dark-content"
      centerComponent={
        <Text style={props.titleStyle || styles.textTitle}>{props.title}</Text>
      }
      centerContainerStyle={{
        justifyContent: 'center',
        paddingHorizontal: 0,
      }}
      containerStyle={styles.container}
      leftComponent={
        <View style={styles.viewRow}>
          <TouchableOpacity
            style={styles.viewCenter}
            onPress={props.onPressLeftIcon}>
            {props.leftIcon?.name && (
              <Icon
                type={props.leftIcon.type}
                name={props.leftIcon.name}
                size={25}
              />
            )}
          </TouchableOpacity>

          {props.imageUri?.uri && (
            <Image
              style={styles.profileImage}
              source={{uri: `${props.imageUri.uri}`}}
            />
          )}
          <View style={styles.viewTextLeft}>
            <Text style={styles.textFullName}>{props.fullName}</Text>
            <Text style={styles.textUserStatus}>{props.userStatus}</Text>
          </View>
        </View>
      }
      leftContainerStyle={{justifyContent: 'center'}}
      linearGradientProps={{}}
      placement="left"
      rightComponent={
        <View style={styles.rightContainer}>
          <TouchableOpacity
            //@ts-ignore
            style={styles.rightIcon}
            onPress={props.onPressRightIconRight}>
            {props.rightIcon?.name && (
              <Icon
                type={props.rightIcon?.type}
                color={props.rightIcon.color || styles.rightIcon.color}
                size={24}
                name={props.rightIcon?.name}
              />
            )}
          </TouchableOpacity>
        </View>
      }
      rightContainerStyle={{justifyContent: 'center'}}
      hideStatusBar={true}
      backgroundColor="transparent"
    />
  );
};
export default HeaderCustom;
