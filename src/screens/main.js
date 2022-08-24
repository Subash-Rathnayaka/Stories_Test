import React from 'react';
import InstaStory from 'react-native-insta-story';
import type {Node} from 'react';
import Stories from './stories';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Main = ({navigation}) => {
  const FunctionToOpenStories = () => {
    navigation.navigate('Stories');
  };

  return (
    <View style={styles.MainContainer}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.TextStyle}> This is Main </Text>
      </View>

      <Button
        onPress={FunctionToOpenStories}
        title="Click Here To Open Stories"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
  },
});
export default Main;
