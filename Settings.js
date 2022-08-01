import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SearchBox, Image, Switch, isEnabled, toggleSwitch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

  

export default function Settings({navigation}) {
  return (
    <View style={styles.SettingsComponents}>
      <Text style={styles.Settingstitle}>Settings</Text>
      <View style={styles.TextBox} >
      <TextInput style={styles.TextBox}
      placeholder='Search Settings...'
      placeholderTextColor="#000008"
      />
      </View>
      <View style={styles.bodyText}>
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}}onPress={() => navigation.navigate("Account")}>
        <Text
        style = {styles.button}> My Account 
        </Text>
      </TouchableOpacity>
      <Text style = {{shadowColor: "E7EAEB",  shadowOpacity: 0.3, color: "black", fontSize: 18, marginTop: 10, marginBottom: 15, marginLeft: 10}}> Notifications</Text>
      <Switch
       style = {{marginLeft:320, paddingBottom: 30, marginTop: -40}}
        trackColor={{ false: "#CCD0D1", true: "#035065" }}
        thumbColor={isEnabled ? "#CCD0D1" : "#035065"}
        ios_backgroundColor="#CCD0D1"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("Security")}>
      <Text
        style = {styles.button}> Security and Privacy 
        </Text>
        </TouchableOpacity>
      <TouchableOpacity style={{shadowColor: "E7EAEB", shadowOpacity: 0.2}} onPress={() => navigation.navigate("Help")} >
      <Text
        style = {styles.button} > Help 
        </Text>
        </TouchableOpacity>
      </View>
      
     </View>
 );
  }

  const styles = StyleSheet.create({
    SettingsComponents: {
     flex:1,
     backgroundColor: '#FFFFFF',
     paddingTop: 18,
     paddingHorizontal: 16,
    },
   Settingstitle: {
      marginTop: 50,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      margin: 20
    },
    bodyText: {
        color: '#00008B',
        fontSize: 25,
        paddingRight: 170,
        marginTop: 10,
        marginLeft: -10,
    },
    SettingsImage: {
      width: 20,
      height:20,
      
    },
    TextBox: {
        borderColor: '#000000',
        padding: 3.5,
        borderWidth: 0.5,
       
       
        

    },
    button: {
        
        color: "black",
        fontSize: 18,
        margin: 10,
        
      
     
     
     
    }
  });
  
  
