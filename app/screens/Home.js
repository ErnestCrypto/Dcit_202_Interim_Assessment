import React from 'react';
import {Text,View, Image, ScrollView, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';






export default function Home({navigation}){
    return (
    
        <View style={{flex: 1,backgroundColor:"white"}}>




<View style ={{alignItems:"center"}}>

        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:"row",marginVertical:10}}>
            <Entypo name="menu" size={24} color="rgb(255,40,45)" />

            <MaterialCommunityIcons name="shoe-formal" size={30} color="rgb(255,40,45)" style={{
                                    marginHorizontal: 200,
                                    }} />

            <Ionicons name="ios-search-outline" size={24} color="rgb(255,40,45)"  />
            <Ionicons name="settings" size={24}  color="rgb(255,40,45)"  />
            
            </View>

            <View style={{flexDirection:"row"}}>
            <View style={{marginBottom:10}}>
            <Text style={{color:"rgb(255,40,45)",fontSize:20,fontWeight:'1000'}}>
                TAGLINE SHOES
                </Text>
            </View>
            <View style={{ marginLeft: 300,}} >
            <TouchableOpacity  onPress={() => navigation.navigate('Cart')}>
            <AntDesign name="shoppingcart" size={24} color="rgb(255,40,45)"/> 
            </TouchableOpacity>
            </View>
            </View>

            <Text style={{fontWeight:"700",marginBottom:10}}>
                Categories
            </Text>
            
            <View style={{flexDirection:"row",marginBottom:10}}>
            <TouchableOpacity style={{padding:10,backgroundColor:'#e3e3e3',borderRadius:10,width:100,alignItems:'center',marginEnd:20}}  >
            <Text style={{color:"rgb(255,40,45)"}}>
            All
            </Text>
            </TouchableOpacity >
            <TouchableOpacity style={{padding:10,backgroundColor:'#e3e3e3',borderRadius:10,width:100,alignItems:'center',marginEnd:20}}  onPress={() => navigation.navigate('Classic')}>
            <Text style={{color:"rgba(0,0,0,0.8)"}}>
            Classic
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,backgroundColor:'#e3e3e3',borderRadius:10,width:100,alignItems:'center',marginEnd:20}}  onPress={() => navigation.navigate('Sports')}>
            <Text style={{color:"rgba(0,0,0,0.8)"}}>
            Sports
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,backgroundColor:'#e3e3e3',borderRadius:10,width:100,alignItems:'center'}}  onPress={() => navigation.navigate('Outdoor')}>
            <Text style={{color:"rgba(0,0,0,0.8)"}}>
            Outdoor
            </Text>
            </TouchableOpacity>

            </View>
<ScrollView>
        <View style={{alignItems:"center"}}>

        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0.0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
                        
        

        >
    <EvilIcons name="heart" size={24} color="rgb(255,40,45)" style={{
                                    marginStart: 170,
                                    paddingTop:10,
                                    paddingEnd:10,
                                    }}/>
        <View style={{ 
                paddingTop:10,            
                
            }}>
        <Image
        style={{
            width: 200,
            height:200,
        }}

        source="https://pictures-nigeria.jijistatic.com/65465755_MTA4MC0xMDY1LTc0YjNjMjFmYzU.jpg"
        >


        </Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)" }}>
        Classic
        </Text>
        <Text style={{color:"rgb(255,40,45)"}}>
            $<Text style={{color:"black",fontWeight:"600"}}>
            700.00
        </Text>
        </Text>
        </View>
        </View>
    
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gba(0,0,0,0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
        >
        <EvilIcons name="heart" size={24} color="black" style={{
                                    marginStart: 170,
                                    paddingTop:10,
                                    paddingEnd:10,
                                    }}/>
    
    
    <View style={{ 
                paddingTop:10,            
            }}>
        <Image
        style={{
            width: 200,
            height:200,
        }}

        source="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Sweet
        </Text>
        <Text style={{color:"rgb(255,40,45)"}}>
            $<Text style={{color:"black",fontWeight:"600"}}>
            1,000.00
        </Text>
        </Text>
        </View>
        </View>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
                        
        

        >
    <EvilIcons name="heart" size={24} color="black" style={{
                                    marginStart: 170,
                                    paddingTop:10,
                                    paddingEnd:10,
                                    }}/>
        <View style={{ 
                paddingTop:10,            
                
            }}>
        <Image
        style={{
            width: 200,
            height:200,
        }}

        source="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
        >


        </Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)" }}>
        Outdoor
        </Text>
        <Text style={{color:"rgb(255,40,45)"}}>
            $<Text style={{color:"black",fontWeight:"600"}}>
            500.00
        </Text>
        </Text>
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
                    
        >
        <EvilIcons name="heart" size={24} color="black" style={{
                                    marginStart: 170,
                                    paddingTop:10,
                                    paddingEnd:10,
                                    }}/>
    
    
    <View style={{ 
                paddingTop:10,            
            }}>
        <Image
        style={{
            width: 200,
            height:200,
        }}

        source="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Sports 
        </Text>
        <Text style={{color:"rgb(255,40,45)"}}>
            $<Text style={{color:"black",fontWeight:"600"}}>
            600.00
        </Text>
        </Text>
        </View>
        </View>
        </TouchableOpacity>

        </View>








        

        <View style={{flexDirection:"row"}}>
        
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
    
        >
        <EvilIcons name="heart" size={24} color="black" style={{
                                    marginStart: 170,
                                    paddingTop:10,
                                    paddingEnd:10,
                                    }}/> 
            
            <View style={{ 
                paddingTop:10,            
            }}>
        <Image
        style={{
            width: 200,
            height:200,
        }}

        source="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Sports
        </Text>
        <Text style={{color:"rgb(255,40,45)"}}>
            $<Text style={{color:"black",fontWeight:"600"}}>
            400.00
        </Text>
        </Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
    
        >
    <EvilIcons name="heart" size={24} color="black" style={{
                                    marginStart: 170,
                                    paddingTop:10,
                                    paddingEnd:10,
                                    }} />
        
        <View style={{ 
                paddingTop:10,            
            }}>
<Image
        style={{
            width: 200,
            height:200,
        }}

        source="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Outing
        </Text>
        <Text style={{color:"rgb(255,40,45)"}}>
            $<Text style={{color:"black",fontWeight:"600"}}>
            700.00
        </Text>
        </Text>
        </View>
        </View>
        </TouchableOpacity>

        </View>
        </View>
        </ScrollView>
        </View>

        
    </View>

</View>












    
    );
}



