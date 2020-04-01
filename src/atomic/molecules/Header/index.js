import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

import {colors} from '@styles';
import Avatar from '@atomic/atoms/Avatar';
import Flex from '@atomic/atoms/Flex';

const bg = {
  uri: 'https://cache.desktopnexus.com/thumbseg/2485/2485768-bigthumbnail.jpg',
};

export const Header = ({title, subtitle}) => {
  return (
    <>
      <View style={styles.cover} source={bg}>
        <View style={styles.overlay}>
          <View style={styles.headerInner}>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              {/* Tags */}
              <Flex style={styles.subtitle}>
                <Text style={styles.details}>{subtitle}</Text>
              </Flex>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerInner: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 10,
  },
  avatar: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    borderStyle: 'solid',
    borderRadius: 9999,
    padding: 4,
  },
  cover: {
    height: 150,
    width: 500,
  },
  overlay: {
    backgroundColor: 'rgba(1,30,170,0.65)',
    height: 220,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  bg: {
    backgroundColor: colors.blue,
    width: 500,
    height: 350,
    position: 'absolute',
  },
  image: {
    width: 500,
    height: 350,
    resizeMode: 'center',
    position: 'absolute',
  },
  header: {
    color: '#FFF',
    width: 700,
  },
  main: {
    padding: 25,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 18,
  },
  details: {
    color: '#FFF',
    fontSize: 14,
  },
  actionContainer: {
    padding: 20,
  },
  button: {
    marginHorizontal: 7,
  },
});
