import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Swiper from 'react-native-swiper';
import { COLOR } from './constants/styleGuide';
import { SCREEN_WIDTH } from './constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
})

const options = {
  title: 'Use your own photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
}

const defaultImages = [
  'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-native-workshop/master/images/image1%402x.png',
  'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-native-workshop/master/images/image2%402x.png',
  'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-native-workshop/master/images/image3%402x.png'
];

export default class PictureList extends React.Component {
  state = {
    currentImageIndex: 0,
  }

  goHowOld = () => {
    this.props.navigation.navigate(
      'HowOld',
      { selectedImage: defaultImages[this.state.currentImageIndex]},
    )
  }

  showImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.navigation.navigate('HowOld', {
          selectedImage: response.uri,
        });
      }
    });
  }

  onMomentumScrollEnd = (e, state) => this.setState({
    currentImageIndex: state.index
  })


  render() {
    return (
      <View style={styles.container}>
        <Swiper activeDotColor={COLOR.BLUE}  onMomentumScrollEnd ={this.onMomentumScrollEnd}>
          {defaultImages.map((uri) => (
            <View key={uri} style={styles.slide}>
              <Image style={styles.image} source={{uri}}/>
            </View>
          ))}
        </Swiper>
        <Text onPress={this.goHowOld}>Press me to go to HowOld page.</Text>
        <Button onPress={this.showImagePicker} title="Use your own photo"/>
      </View>
    )
  }
}
