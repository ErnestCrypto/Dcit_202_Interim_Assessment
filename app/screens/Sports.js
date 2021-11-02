import React from 'react';
import {Text,View, Image,ScrollView, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Sports({navigation}){
    return (
    
        <View style={{flex: 1,backgroundColor:"white"}}>

<View style={{flexDirection:"row",marginHorizontal:20,marginVertical:20}}>
<TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" 
        onPress={() => navigation.navigate('Home')}
        />
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text style={{color:"rgb(255,40,45)",marginHorizontal:200,fontSize:20}}>
        SPORTS
            </Text>
            </TouchableOpacity>
            

            </View>




<ScrollView>
<View style ={{alignItems:"center"}}>
        <View style={{marginHorizontal:20}}>
            <View style={{alignItems:"center"}}>

        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0.0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
                            
        

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

        source="data:image/jpeg;base64,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"
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

        source="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e2ff01fa-7e97-4536-b4f8-a9f21992cba3/air-zoom-pegasus-38-mens-running-shoe-lq7PZZ.png"
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

        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT708EeY6cEJaZs0aiJ5m7xXpw-vXX92fIF4g&usqp=CAU"
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

        source="https://s3-ap-southeast-1.amazonaws.com/apexasws3imagetest/images/thumbs/0022138_sprint-mens-sports-shoe.jpeg"
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
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0.0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}
                            
        

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

        source="data:image/jpeg;base64,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"
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

        source="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e2ff01fa-7e97-4536-b4f8-a9f21992cba3/air-zoom-pegasus-38-mens-running-shoe-lq7PZZ.png"
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



        </View>
        </View> 
    </View>
    </ScrollView>

</View>












    
    );
}



