import React from 'react';
import {View, Text} from 'react-native';
import {ProfileCardSimple} from '@components';

export default () => (
  <View style={styles.container}>
    <ProfileCardSimple
      title="Kames Geraghty"
      role="Fullstack Javascript Developer"
      subtitle="Verified Coding Skills"
      image="https://imgur.com/PNKaT0K.png"
    />
  </View>
);

const styles = {
  title: {fontSize: 22, marginBottom: 10},
  container: {padding: 20},
};
