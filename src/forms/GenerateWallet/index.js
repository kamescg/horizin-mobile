import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {AsyncStorage, SecureKeychain, StorageTypes} from '@core';

// console.log(SecureKeychain, 'SecureKeychain');

export default function App() {
  const {control, handleSubmit, errors} = useForm();
  const [isGenerating, setIsGenerating] = useState();
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  useEffect(() => {
    (async () => {
      const accountStatus = await AsyncStorage.getItem(
        StorageTypes.ACCOUNT_CREATED,
      );
      if (JSON.parse(accountStatus)) {
        SecureKeychain.getGenericPassword().then(res => {
          console.log(res, 'username');
        });
      }
    })();
  }, []);

  const onSubmit = async data => {
    setIsGenerating(true);
  };

  useEffect(() => {
    if (isGenerating) {
      (async () => {
        try {
          let wallet = ethers.Wallet.createRandom();
          let randomMnemonic = wallet.mnemonic;
          await SecureKeychain.setGenericPassword('mnemonic', randomMnemonic);
          await AsyncStorage.setItem(
            StorageTypes.ACCOUNT_CREATED,
            JSON.stringify(true),
          );
          Alert.alert('Form Data', JSON.stringify(randomMnemonic));
          setIsGenerating(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isGenerating]);

  return (
    <View>
      {isGenerating && <Text>Generating Wallet</Text>}
      <Controller
        as={TextInput}
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        editable={!isGenerating}
        onChange={args => args[0].nativeEvent.text}
        rules={{required: true}}
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        as={TextInput}
        control={control}
        name="passwordConfirm"
        placeholder="Password Confirm"
        secureTextEntry={true}
        editable={!isGenerating}
        onChange={args => args[0].nativeEvent.text}
        rules={{required: true}}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
