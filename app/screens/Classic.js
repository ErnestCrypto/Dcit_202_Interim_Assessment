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


export default function classic({navigation}) {
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
            CLASSIC
            </Text>
            </TouchableOpacity>
            

            </View>
<ScrollView>
<View style ={{alignItems:"center"}}>


        <View style={{alignItems:"center"}}>

        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0.0)",borderRadius:10,marginVertical:10,marginEnd:20,height:300}}>
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

        source="https://lcw-ma.akinoncdn.com/products/2021/04/13/2532394/b1331ac6-6dd5-4b44-a4ee-f5380d3fbab4.jpg"
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

        source="https://josephturner.images.blucommerce.com/josephturner/product/MFLINCBLK.jpg?auto=format%2Ccompress&bluhash=cea2a4ca4c06a5516297309e2009608c&w=960&h=1220&fit=fillmax&fill=solid&s=749799781229f34cc103dbd62999222b"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Classic
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

        source="https://www.samuel-windsor.com/images/products/zoom/z-F-BV335.jpg"
        >


        </Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)" }}>
        Classic
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

        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhhlT0yeNSMwh1pkt4k9MYFQSPLIQ_j4WxiluymPsBXCv5YcqMlraYF5b6sMA3B7PFpQ&usqp=CAU"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Classic 
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

        source="https://i.pinimg.com/originals/d7/36/64/d73664a16f50b25787cddca04483b9dc.jpg"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
        Classic
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

        source="https://i.pinimg.com/originals/1f/d8/10/1fd8109306ad24a25ba3cff1d9b20c58.jpg"
        ></Image>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.4)"}}>
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

        </View>



        </View>
        </View>
        </ScrollView>









        
    </View>














    
    );
}


