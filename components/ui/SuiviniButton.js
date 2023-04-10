import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';

const SuiviniButton = function (props) {
  const IconLeft = props.iconLeft;
  const IconRight = props.iconRight;
  return props.disabled ? (
    <TouchableOpacity
      style={[
        styles.touchableOpacity,
        props.style,
        { backgroundColor: Colors.grey, borderColor: Colors.grey },
      ]}
      disabled={true}
    >
      {props.icon || props.iconLeft ? (
        <View style={props.iconContainerStyle}>
          {props.icon ? <Image source={props.icon} style={[styles.icon, props.iconStyle]} /> : null}
          {props.iconLeft && <IconLeft style={props.iconLeftStyle} />}
        </View>
      ) : null}
      <Text style={[styles.text, props.textStyle]} numberOfLines={1}>
        {props.text}
      </Text>
      {props.iconRight && <IconRight style={props.iconRightStyle} />}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.touchableOpacity, props.style]} onPress={props.onPress}>
      {props.icon || props.iconLeft ? (
        <View style={props.iconContainerStyle}>
          {props.icon ? <Image source={props.icon} style={[styles.icon, props.iconStyle]} /> : null}
          {props.iconLeft && <IconLeft style={props.iconLeftStyle} />}
        </View>
      ) : null}
      <Text style={[styles.text, props.textStyle]} numberOfLines={1}>
        {props.text}
      </Text>
      {props.iconRight && <IconRight style={props.iconRightStyle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    marginVertical: 5,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    paddingVertical: 12,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
});

export default SuiviniButton;
