import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Icon, Image} from '@rneui/base';
import styles from './styles';
import {images} from '../../../../../../assets';
import * as ImagePicker from 'react-native-image-picker';

const UpImage = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [imglibrary, setImglibrary] = useState('');
  const [number, setNumber] = useState<number>(1);
  const formdata = new FormData();

  const optionsCamera: ImagePicker.CameraOptions = {
    quality: 1,
    mediaType: 'photo',
    saveToPhotos: true,
  };
  const optionLibrary: ImagePicker.ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
  };

  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      const grantedstorage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (
        granted === PermissionsAndroid.RESULTS.GRANTED &&
        grantedstorage === PermissionsAndroid.RESULTS.GRANTED
      ) {
        const result = await launchCamera(optionsCamera);
        if (result?.assets && result.assets[0].uri) {
          setImgUrl(result.assets[0].uri);
          formdata.append('file', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          console.log(formdata);
        } else {
          console.log('No assets or uri in result:', result);
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(optionLibrary);
    if (result?.assets && result.assets[0].uri) {
      setImglibrary(result.assets[0].uri);
      result.assets.forEach((asset, index) => {
        formdata.append(`file${index}`, {
          uri: asset.uri,
          name: asset.fileName,
          type: asset.type,
        });
      });
      setNumber(result.assets.length);
    } else {
      console.log('No assets or uri in result:', result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={openCamera}>
          <Icon name="camera-outline" type="ionicon" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={openGallery}>
          <Icon name="image-outline" type="ionicon" />
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          onPress={openGallery}
          resizeMode="cover"
          style={styles.placeholder}
          source={imgUrl ? {uri: imgUrl} : images.placeholder}
        />
        <View style={styles.imageLibaryStyle}>
          <Image
            onPress={openGallery}
            style={styles.placeholder}
            resizeMode="cover"
            source={imglibrary ? {uri: imglibrary} : images.placeholder}
          />
          <Text style={styles.numberImage}>+{number}</Text>
        </View>
      </View>
    </View>
  );
};

export default UpImage;
