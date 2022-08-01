import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SearchBox, Image, TouchableOpacity} from 'react-native';
import { StackActions } from '@react-navigation/native';


export default function Security({navigation, route}) {
    return (
      <View>
        <Text style={styles.SecurityTitle} >Security</Text>
        <View style={styles.BodyText}>
        <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} >
        <Text
        style = {styles.button}> Hidden Credentials 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} >
        <Text
        style = {styles.button}> Terms and Conditions 
        </Text>
      </TouchableOpacity>
        </View>
       </View>
   );
    }

    const styles = StyleSheet.create({
        SecurityTitle: {
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
        },
        button: {
    
            color: "black",
            fontSize: 18,
            margin: 8
        }
      });
