import React, {useEffect} from 'react';
import {WalletConnectInject} from './index';
const SetNavigation = props => {
  useEffect(() => {
    if (props.navigation) {
      props.walletConnect.setNavigation(props.navigation);
    }
  }, [props.navigation]);
  return null;
};

export default props => (
  <WalletConnectInject>
    <SetNavigation navigation={props.navigation} />
  </WalletConnectInject>
);
