import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import ImgComponent from './component/imgComponent'

function App() {

  const [title,setTitle] = useState('React Native App')

  const updateTitle = () => {
    setTitle('Title Changed')
  }
  return (
    <View style={styles.container}>
      <ImgComponent/>
      <Text>{title}</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
       <Button
        title="Change Title"
        onPress={updateTitle}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default  App