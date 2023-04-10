import React from 'react';
import { Modal, SafeAreaView, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

const SuiviniModal = function (props) {
  return (
    <Modal {...props}>
      <View style={styles.container}>
        {!props.transparent && <View style={styles.backgroundHeader}></View>}
        <SafeAreaView style={styles.safeAreaView}>
          <View style={[styles.content, !props.transparent ? styles.contentBackground : {}]}>
            {props.children}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    backgroundColor: Colors.primary,
  },
  safeAreaView: { flex: 1 },
  content: { flex: 1 },
  contentBackground: { backgroundColor: '#fff' },
});

export default SuiviniModal;
