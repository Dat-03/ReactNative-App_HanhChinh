import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.colorMain,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(24),
    alignItems: 'center',
  },
  textName: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.grey0,
  },
  content: {
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(50),
    height:normalize(HEIGHT*2),
    backgroundColor:colors.grey0,
  },
  textContent: {
    textAlign: 'center',
    paddingTop: normalize(20),
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.black,
  },
  button: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(30),
  },
}));

export default useStyles;
