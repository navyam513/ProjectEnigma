import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SearchBox, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function Help({navigation, route}) {
    return (
      <View>
        <Text style= {styles.HelpTitle} >Help</Text>
        
       </View>
   );
    }
    const styles = StyleSheet.create({
        HelpTitle: {
          textAlign: "center",
          fontSize: 28,
          marginTop: 10,
          fontWeight: "bold"
          
        },
        BodyText: {
          marginTop: 20,
          color: '#00008B',
          fontSize: 25,
          paddingRight: 170,
        }
      });
