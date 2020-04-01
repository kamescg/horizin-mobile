import React from 'react';
import {View} from 'react-native';
import {Header} from 'molecules';
import {GenerateWallet} from '@forms';
export default props => {
  return (
    <View style={{}}>
      <Header title="Create Wallet" subtitle="Generate a Web3 Account" />
      <View style={{padding: 20}}>
        <GenerateWallet />
      </View>
    </View>
  );
};
