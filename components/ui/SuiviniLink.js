import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SuiviniLink = function (props) {
  const IconLeft = props.iconLeft;
  const IconRight = props.iconRight;
  return (
    <TouchableOpacity style={[styles.touchableOpacity, props.style]} onPress={props.onPress}>
      {props.iconLeft && <IconLeft style={props.iconLeftStyle} />}
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      {props.iconRight && <IconRight style={props.iconRightStyle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 12,
  },
  text: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});

export default SuiviniLink;
