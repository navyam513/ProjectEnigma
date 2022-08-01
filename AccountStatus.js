import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SearchBox, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';


export default function AccountStatus({navigation, route}) {
    return (
      <View>
        <Text style={styles.SecurityTitle} >Account Status</Text>
    
       </View>
   );
    }

    const styles = StyleSheet.create({
        SecurityTitle: {
          textAlign: "center",
          fontSize: 28,
          marginTop: 5,
          fontWeight: "bold"
          
        },
        BodyText: {
          marginTop: 20,
          color: '#00008B',
          fontSize: 25,
          paddingRight: 170,
        }
      });
