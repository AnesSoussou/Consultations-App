import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SuiviniLogo = function (props) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Image style={styles.image} source={require('../assets/imgs/suivini.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SuiviniLogo;
