import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button, TextInput, SearchBox, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';


export default function Account({navigation, route}) {
  return (
    <View>
      <Text style={styles.AccountTitle}>My Account</Text>
      <View style={styles.BodyText}>
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("PersonalInfo")} >
        <Text
        style = {styles.button}> Personal Information 
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("AccountStatus")}  >
        <Text
        style = {styles.button}> Account Status 
        </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("AccountStatus")}  >
        <Text
        style = {styles.button}> Language 
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("AccountStatus")}  >
        <Text
        style = {styles.button}> Data Usage
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("AccountStatus")}  >
        <Text
        style = {styles.button}> Delete Account 
        </Text>
      </TouchableOpacity> 
      </View>

     </View>
 );
  }
  const styles = StyleSheet.create({
    AccountTitle: {
      textAlign: "center",
      fontSize: 28,
      margin: 15,
      fontWeight: "bold"
    },
    BodyText: {
      color: '#00008B',
      fontSize: 25,
      paddingRight: 170,
      marginTop: 2
    }, 
    button: {
    
      color: "black",
      fontSize: 18,
      margin: 8
      
    }
  });
