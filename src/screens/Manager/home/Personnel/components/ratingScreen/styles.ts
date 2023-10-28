import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {theme} from '../../../../../../theme';
import {color} from '@rneui/base';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  textName: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.black,
    padding:normalize(20)
  },
}));

export default useStyles;