import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';

Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceWithScreen() * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: colors.background,
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewCenterHeader: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  viewTextLeft: {
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  textTitle: {
    fontSize: normalize(22),
    lineHeight: normalize(35.2),
    paddingHorizontal: normalize(50),
    color: colors.black,
    marginStart: normalize(30),
    fontWeight: 'bold',
  },
  leftIcon: {
    color: colors.primary,
  },
  rightIcon: {
    color: colors.black,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  rightIconLeft: {
    marginRight: normalize(20),
  },
  rightIcon2: {
    marginRight: normalize(10),
    marginTop: normalize(3),
  },
  profileImage: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(26),
    left: normalize(20),
  },
  textFullName: {
    color: colors.black,
    fontSize: normalize(14),
    left: normalize(28),
  },
  textUserStatus: {
    color: colors.grey4,
    fontSize: normalize(9),
    left: normalize(28),
  },
  button: {
    color: colors.primary,
  },
}));

export default useStyles;
