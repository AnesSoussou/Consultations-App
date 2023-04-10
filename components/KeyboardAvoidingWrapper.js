import React from 'react';
import { Keyboard, Platform, Pressable } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
const KeyboardAvoidingWrapper = function ({ children, style, ...props }) {
  const headerHeight = useHeaderHeight();
  let offset = {};
  if (Platform.OS === 'ios') {
    offset = {
      keyboardVerticalOffset: headerHeight,
    };
  }
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1, backgroundColor: '#fff' }, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      {...offset}
    >
      <ScrollView contentContainerStyle={{ minHeight: '100%' }} {...props.scrollViewProps}>
        <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
          {children}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
