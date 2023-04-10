import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Input } from '@rneui/themed';

const SuiviniInput = function (props) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(props.placeholder);
  const editable = props.editable === false ? false : true;
  const IconLeft = props.iconLeft;
  return (
    <Input
      label={props.label}
      errorMessage={props.errorMessage}
      keyboardType={props.keyboardType}
      renderErrorMessage={props.errorMessage ? true : false}
      blurOnSubmit={true}
      maxLength={191}

      {...props}
      leftIcon={props.iconLeft ? <IconLeft style={props.iconLeftStyle} /> : null}
      placeholder={currentPlaceholder}
      containerStyle={{ ...styles.containerStyle, ...props.containerStyle }}
      inputContainerStyle={[
        styles.inputContainerStyle,
        props.inputContainerStyle,
        editable ? {} : { backgroundColor: Colors.background },
      ]}
      inputStyle={{ ...styles.inputStyle, ...props.inputStyle }}
      labelStyle={{ ...styles.labelStyle, ...props.labelStyle }}
      errorStyle={{ ...styles.errorStyle, ...props.errorStyle }}
      onFocus={(e) => {
        setCurrentPlaceholder('');
      }}
      onBlur={(e) => {
        setCurrentPlaceholder(props.placeholder);
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
    paddingLeft: 0,
    paddingRight: 0,
    paddingHorizontal: 7,

  },
  inputContainerStyle: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 48,
    paddingHorizontal: 25,
    fontWeight: 'normal',
    fontSize: 14,
    fontFamily: 'Metropolis',
  },
  labelStyle: {
    marginLeft: 8,
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.primary,
    fontFamily: 'Metropolis',
  },
  errorStyle: { color: Colors.secondary, fontFamily: 'Metropolis' },
});

export default SuiviniInput;
