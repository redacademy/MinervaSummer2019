import React from 'react';
import PostList from '../../components/PostList';
import {ScrollView, View, Image, Text} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const displayNoFavourites = navigation => {
  return (
    <View style={styles.root}>
      <Image
        resizeMode={'contain'}
        style={styles.favouriteHeaderIcon}
        style={styles.image}
        source={require('../../assets/PNG/additional_illustrations/favourite.png')}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>You have no favourite posts yet!</Text>
        <Text style={styles.subHeading}>
          Browse the community page and save your favourite posts.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <GradientButton
          text={'Browse Community'}
          onPress={() => navigation.navigate('Community')}
        />
      </View>
    </View>
  );
};
const Favourites = ({posts, context, navigation}) => {
  const {faves, addFave, removeFave, viewer} = context;
  return posts.length == 0 ? (
    displayNoFavourites(navigation)
  ) : (
    <ScrollView>
      {posts.map(post => (
        <PostList
          key={post.id}
          post={post}
          viewer={viewer}
          removeFave={removeFave}
          addFave={addFave}
          faved={faves && faves.includes(post.id)}
        />
      ))}
    </ScrollView>
  );
};

export default Favourites;
