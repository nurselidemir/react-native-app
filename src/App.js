import React from "react";
import {SafeAreaView,StyleSheet,} from 'react-native';
import Card from './components/Card';
 
function App(){
  return(
    <SafeAreaView style = {styles.container}>
      <Card title="Math" text="Prof. Dr. Terence Tao"/>
      <Card title="Physics" text="Prof. Dr. Michio Kaku"/>
      <Card title="Chemistry" text="Prof. Dr. Frances H. Arnold"/>
    </SafeAreaView>
  );
}
const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#f0ffff',
    },

});
   

export default App;
