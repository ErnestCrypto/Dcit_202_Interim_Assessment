import React from 'react';
import {View, Text , Image} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cart({navigation}){
    return (
    <View style={{backgroundColor:"white",flex:1}}>
<View style ={{alignItems:"center"}}>

        <View style={{flexDirection:"row",marginTop:20,marginLeft:20,marginRight:20}}>
        <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" 
        onPress={() => navigation.navigate('Home')}
        />
        </TouchableOpacity>
        <Text style={{fontWeight:"900",color:"rgba(0,0,0,0.7)",marginHorizontal:200}}>
            Cart list
        </Text>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{color:"rgba(0,0,0,0.5)"}}>
            (13 items)
        </Text>
        </View>



        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{padding:6,backgroundColor:"#e3e3e3e3",borderRadius:10,marginVertical:30,marginHorizontal:20,height:80,width:80}}>
        <Image style={{
                width:80,
                height:50,
            }} 
            source={{
                uri:"https://www.ghost-bikes.com/fileadmin/_processed_/8/c/csm_ghost-bikes-Riot-Trail-essential-black-black-45_38d9fe71b8.png"
            }}
            />
            </TouchableOpacity>  



            <View style={{flexDirection:"column"}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{Color:"rgba(0,0,0,0.5)",marginHorizontal:20,marginTop:30}}>
            Pinaretto Bike 
            </Text>
            <TouchableOpacity style={{marginLeft:205,marginTop:30,}}>
            <Text style={{color:"rgb(255,40,45)",fontSize:20}}>
                Edit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name="delete" size={24} color="red" style={{
                marginLeft:20,marginTop:30,
            }} />
            </TouchableOpacity>
            </View>

            <View  style={{flexDirection:"row"}}>
                <Text style={{marginStart:20,marginBottom:10,fontSize:14,color:"rgba(0,0,0,0.5)"}}>
                    Mountain Bike
                </Text>

            </View>
        
            
                


            <View style={{flexDirection:"row"}}>
            <Text style={{color:"rgb(255,40,45)",fontWeight:900,marginStart:20,marginEnd:200}}>
                $
                <Text style={{color:"black",fontWeight:900,marginStart:5}}>
                    1,700.00
                    </Text>
            </Text>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{
                marginEnd:30
            }} />
            </TouchableOpacity>
            <Text style={{fontWeight:"700",marginEnd:30}}>
                1
                </Text>
                <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(255,40,45)" 
                
            />
            </TouchableOpacity>

            </View>
            </View>




            
            </View>



















<View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{padding:6,backgroundColor:"#e3e3e3e3",borderRadius:10,marginVertical:30,marginHorizontal:20,height:80,width:80}}>
        <Image style={{
                width:80,
                height:50,
                alignItems:"center",
            }} 
            source={{
                uri:"https://www.ghost-bikes.com/fileadmin/_processed_/8/c/csm_ghost-bikes-Riot-Trail-essential-black-black-45_38d9fe71b8.png"
            }}
            />

            
            </TouchableOpacity>  
            


            <View style={{flexDirection:"column"}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{Color:"rgba(0,0,0,0.5)",marginHorizontal:20,marginTop:30}}>
            Pinaretto Bike 
            </Text>
            <TouchableOpacity style={{marginLeft:205,marginTop:30,}}>
            <Text style={{color:"rgb(255,40,45)",fontSize:20}}>
                Edit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name="delete" size={24} color="red" style={{
                marginLeft:20,marginTop:30,
            }} />
            </TouchableOpacity>
            </View>

            <View  style={{flexDirection:"row"}}>
                <Text style={{marginStart:20,marginBottom:10,fontSize:14,color:"rgba(0,0,0,0.5)"}}>
                    Mountain Bike
                </Text>

            </View>
        
            
                


            <View style={{flexDirection:"row"}}>
            <Text style={{color:"rgb(255,40,45)",fontWeight:900,marginStart:20,marginEnd:200}}>
                $
                <Text style={{color:"black",fontWeight:900,marginStart:5}}>
                    1,700.00
                    </Text>
            </Text>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{
                marginEnd:30
            }} />
            </TouchableOpacity>
            <Text style={{fontWeight:"700",marginEnd:30}}>
                1
                </Text>
                <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(255,40,45)" 
                
            />
            </TouchableOpacity>


            </View>
            </View>


        





</View>




        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{padding:6,backgroundColor:"#e3e3e3e3",borderRadius:10,marginVertical:30,marginHorizontal:20,height:80,width:80}}>
        <Image style={{
                width:80,
                height:50,
                alignItems:"center",
            }} 
            source={{
                uri:"https://www.ghost-bikes.com/fileadmin/_processed_/8/c/csm_ghost-bikes-Riot-Trail-essential-black-black-45_38d9fe71b8.png"
            }}
            />
            </TouchableOpacity>  
            
            <View style={{flexDirection:"column"}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{Color:"rgba(0,0,0,0.5)",marginHorizontal:20,marginTop:30}}>
            Pinaretto Bike 
            </Text>
            <TouchableOpacity style={{marginLeft:205,marginTop:30,}}>
            <Text style={{color:"rgb(255,40,45)",fontSize:20}}>
                Edit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name="delete" size={24} color="red" style={{
                marginLeft:20,marginTop:30,
            }} />
            </TouchableOpacity>
            </View>

            <View  style={{flexDirection:"row"}}>
                <Text style={{marginStart:20,marginBottom:10,fontSize:14,color:"rgba(0,0,0,0.5)"}}>
                    Mountain Bike
                </Text>

            </View>
        
            
                


            <View style={{flexDirection:"row"}}>
            <Text style={{color:"rgb(255,40,45)",fontWeight:900,marginStart:20,marginEnd:200}}>
                $
                <Text style={{color:"black",fontWeight:900,marginStart:5}}>
                    1,700.00
                    </Text>
            </Text>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{
                marginEnd:30
            }} />
            </TouchableOpacity>
            <Text style={{fontWeight:"700",marginEnd:30}}>
                1
                </Text>
                <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(255,40,45)" 
                
            />
            </TouchableOpacity>


            </View>
            </View>



        

        </View>




<View>

<TouchableOpacity style={{backgroundColor:"#e3e3e3",borderRadius:20,width:500,padding:10,height:200,marginHorizontal:20}}>

<View style={{flexDirection:"row",marginVertical:10,marginStart:10}}>
<Text style={{fontSize:16,color:"rgba(0,0,0,0.5)",marginEnd:300,fontWeight:"900"}}>
Subtotal
</Text>

<Text style={{fontSize:16,color:"rgb(255,40,45)",fontWeight:"900"}}>
    $
    <Text style ={{color:"black"}}>
        3,400.00
    </Text>
</Text>

</View>


<View style={{flexDirection:"row",marginVertical:10,marginStart:10}}>
<Text style={{fontSize:16,color:"rgba(0,0,0,0.5)",marginEnd:280,fontWeight:"900"}}>
Shipping fee
</Text>

<Text style={{fontSize:16,color:"rgb(255,40,45)",fontWeight:"900"}}>
    $
    <Text style ={{color:"black"}}>
        100.00
    </Text>
</Text>

</View>

<View
    style={{
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
    }}
/>



<View style={{flexDirection:"row",marginVertical:10,marginStart:10}}>
<Text style={{fontSize:16,color:"rgba(0,0,0,1)",marginEnd:326,fontWeight:"900"}}>
Total
</Text>

<Text style={{fontSize:16,color:"rgb(255,40,45)",fontWeight:"900"}}>
    $
    <Text style ={{color:"black"}}>
        3,500.00
    </Text>
</Text>

</View>





</TouchableOpacity>

</View>





<View style={{alignItems:"center"}}>
<TouchableOpacity style={{backgroundColor:"rgb(255,40,45)",borderRadius:20,width:450,padding:20,marginVertical:20,marginHorizontal:20}}
        onPress={() => navigation.navigate('Checkout')}

>
<View style={{alignItems:"center"}}>
<Text style={{color:"white",fontWeight:"900",fontSize:20}}>
    Secure Checkout
</Text>
</View>
</TouchableOpacity>
</View>
<View>




</View>

</View>
        </View>
    );
}