import React from 'react';
import {Image, View, ScrollView} from 'react-native';
import styles from './NewsBanner.style';

const NewsBanner = ({banners}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {banners.map((banner, index) => (
        <View key={index}>
          <Image style={styles.banner_image} source={{uri: banner.imageUrl}} />
        </View>
      ))}
    </ScrollView>
  );
};

export default NewsBanner;
