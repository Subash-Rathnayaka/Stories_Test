import React from 'react';
import InstaStory from 'react-native-insta-story';
import type {Node} from 'react';
import {Text, View} from 'react-native';

const data = [
  {
    user_id: 1,
    user_image: 'https://cdn-icons-png.flaticon.com/512/123/123172.png',
    user_name: 'John',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=1200.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://img.freepik.com/premium-vector/happy-child-icon-image_24911-32137.jpg',
    user_name: 'Francis',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1200',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=1200',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },

  {
    user_id: 3,
    user_image: 'https://cdn-icons-png.flaticon.com/512/123/123164.png',
    user_name: 'Anne',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann.jpeg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://i.pinimg.com/736x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg',
      },
    ],
  },
];

const Stories: () => Node = () => {
  return (
    <InstaStory
      data={data}
      duration={10}
      avatarSize={80}
      unPressedBorderColor={'red'}
      pressedBorderColor={'green'}
      onStart={item => console.log(item)}
      onClose={item => console.log('close: ', item)}
      customSwipeUpComponent={
        <View>
          <Text>Swipe</Text>
        </View>
      }
      style={{marginTop: 30}}
    />
  );
};

export default Stories;
