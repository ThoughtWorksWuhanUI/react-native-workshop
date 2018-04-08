import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImagePicker, { showImagePicker } from "react-native-image-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const options = {
  title: 'Use your own photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
}

export default class PictureList extends React.Component {
  goHowOld = () => {
    this.props.navigation.navigate('HowOld')
  }

  showImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // TODO: need to check if we send the data or uri to howOld page
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.goHowOld}>Press me to go to HowOld page.</Text>
        
        <Button onPress={this.showImagePicker} title="Use your own photo" />
      </View>
    )
  }
}