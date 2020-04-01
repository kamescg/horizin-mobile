/* --- Global ---- */
import React, {useEffect, useState} from 'react';
import {ButtonLink, Modal, Flex} from 'atoms';
import {Text} from 'react-native';

/* --- Local ---- */
import {AsyncStorage, SecureKeychain, StorageTypes} from '@core';

/* --- Component --- */
const AccountAccess = props => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  useEffect(() => {
    (async () => {
      const accountStatus = await AsyncStorage.getItem(
        StorageTypes.ACCOUNT_CREATED,
      );
      console.log(JSON.parse(accountStatus), 'as');
      if (JSON.parse(accountStatus)) {
        setIsAccountCreated(accountStatus);
      }
    })();
  }, []);

  return (
    <Flex style={styles.container}>
      {isAccountCreated ? (
        <ButtonLink to="Wallet" sx={{}}>
          <Text>Wallet</Text>
        </ButtonLink>
      ) : (
        <ButtonLink to="WalletCreate" sx={{}}>
          <Text>Create</Text>
        </ButtonLink>
      )}
    </Flex>
  );
};

export default AccountAccess;

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '60%',
  },
};
