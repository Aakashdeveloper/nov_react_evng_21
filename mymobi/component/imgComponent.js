import React,{Component} from 'react';
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 166,
      height: 158,
    },
  });

class ImgComponent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image
                style={styles.logo}
                source={{uri: 'https://i.ibb.co/TbVsznT/sarovar.jpg'}}
                />
            </View>
        )
    }
}

export default ImgComponent