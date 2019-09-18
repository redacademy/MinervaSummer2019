import React, {Component} from 'react';
import PostList from '../../components/PostList';
import {ScrollView, TouchableOpacity, View, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import CircularLoader from '../../components/CircularLoader';

const Community = ({posts, context, navigation, insertState, getState}) => {
  const {faves, addFave, removeFave, viewer} = context;
  return (
    <ScrollView>
      <View>
        <View style={styles.postWrapper}>
          <TouchableOpacity
            opacity={0.8}
            style={styles.touchOp}
            onPress={() => {
              navigation.navigate('CreatePost', {viewer});
            }}>
            <View style={styles.postInput}>
              <MaterialCommunityIcons
                name="thought-bubble-outline"
                size={25}
                style={styles.textBubble}
              />
              <View style={styles.textWrapper}>
                <Text style={styles.text}> Share your thoughts here...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.headerWrapper}>
            <Text style={styles.header}>Topics</Text>
            <TouchableOpacity
              style={styles.favouriteHeaderButton}
              onPress={() => navigation.navigate('Favourites')}>
              <Image
                resizeMode={'contain'}
                style={styles.favouriteHeaderIcon}
                source={require('../../assets/PNG/additional_illustrations/favourite.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topicsWrapper}>
            <TouchableOpacity
              style={[
                styles.topic,
                getState() === '' ? styles.topicActive : styles.topicInactive,
              ]}
              onPress={() => insertState('')}>
              <Text
                style={[
                  styles.topicText,
                  getState() === ''
                    ? styles.topicTextActive
                    : styles.topicTextInactive,
                ]}>
                View All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.topic,
                getState() === 'General'
                  ? styles.topicActive
                  : styles.topicInactive,
              ]}
              onPress={() => insertState('General')}>
              <Text
                style={[
                  styles.topicText,
                  getState() === 'General'
                    ? styles.topicTextActive
                    : styles.topicTextInactive,
                ]}>
                General
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.topic,
                getState() === 'Events'
                  ? styles.topicActive
                  : styles.topicInactive,
              ]}
              onPress={() => insertState('Events')}>
              <Text
                style={[
                  styles.topicText,
                  getState() === 'Events'
                    ? styles.topicTextActive
                    : styles.topicTextInactive,
                ]}>
                Events
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.topic,
                getState() === 'News'
                  ? styles.topicActive
                  : styles.topicInactive,
              ]}
              onPress={() => insertState('News')}>
              <Text
                style={[
                  styles.topicText,
                  getState() === 'News'
                    ? styles.topicTextActive
                    : styles.topicTextInactive,
                ]}>
                News
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {viewer ? (
        posts.map(post => (
          <PostList
            key={post.id}
            post={post}
            viewer={viewer}
            removeFave={removeFave}
            addFave={addFave}
            faved={faves && faves.includes(post.id)}
          />
        ))
      ) : (
        <CircularLoader />
      )}
    </ScrollView>
  );
};

export default withNavigation(Community);
