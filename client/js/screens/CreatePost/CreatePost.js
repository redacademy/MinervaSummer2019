import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectableChips from 'react-native-chip/SelectableChips';
import Ionics from 'react-native-vector-icons/Ionicons';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const CreatePost = ({insertChips}) => {
  const [text, onChangeText] = React.useState();
  return (
    <View>
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={text}
        style={styles.input}
        placeholder={'Share Your Thoughts...'}
        keyboardType={'default'}
      />

      <SelectableChips
        initialChips={['General', 'Events', 'News']}
        onChangeChips={chips => insertChips(chips)}
        chipStyle={styles.topic}
        valueStyle={styles.topicText}
        chipStyleSelected={styles.topicSelected}
        valueStyleSelected={styles.topicTextSelected}
      />
      <View>
        <Ionics name="ios-thought-bubble-outline" size={15} />
        <Text>Camera</Text>
      </View>
      <View>
        <Ionics name="ios-thought-bubble-outline" size={15} />
        <Text>Photo/Video</Text>
      </View>
      <View>
        <Ionics name="ios-thought-bubble-outline" size={15} />
        <Text>GIF</Text>
      </View>

      <GradientButton width="80%" text="Post" />
    </View>
  );
};

export default CreatePost;
