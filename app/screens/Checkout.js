import React from 'react';
import { StyleSheet, View, Text,Image, TouchableOpacity,TextInput } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { AntDesign } from '@expo/vector-icons';


export default function Checkout({navigation}){
return (


    <View style={{flex: 1, alignItems:"center",backgroundColor:"white"}}>
        
        <View style={{flexDirection:"row",}}>
        <TouchableOpacity >
        <AntDesign name="arrowleft" size={24} color="black" 
        onPress={() => navigation.navigate('Home')}
        />
        </TouchableOpacity>
<Text style={{color:'black',fontSize:30,fontWeight:'600',marginBottom:20,marginTop:20}}>
                CHECKOUT
            </Text>
            </View>
            
            <Image 
            style={{
                width:130,
                height:130,
                marginBottom:30,
                borderRadius:100,
                
            }}
                source ={{
                    uri:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                }}
/>

    

        <View>

        <Text style={{marginBottom:10,borderBottomColor: 'rgba(0,0,0,0.3)',borderBottomWidth:1
}}>
PERSONAL SHIPPING INFO
</Text>
        <TextInput  style={{
            height: 40,
            paddingLeft:10,
            backgroundColor: '#e3e3e3', 
            fontSize: 15,
            width:230,
                outline:'none',
                marginBottom:10,
                borderTopLeftRadius:10,
        }}  
            placeholder="Fullname"  
            /> 
            
            <TextInput  style={{
                height: 40,
                backgroundColor: '#e3e3e3', 
                fontSize: 15,
                width:230,
                paddingLeft:10,
                    outline:'none',
                    marginTop:10,
                    borderTopLeftRadius:10,
            }}  
                placeholder="Address"  
                />


<TextInput keyboardType="numeric" style={{
                height: 40,
                backgroundColor: '#e3e3e3', 
                fontSize: 15,
                width:230,
                paddingLeft:10,
                    outline:'none',
                    marginTop:10,
                    borderTopLeftRadius:10,
            }}  
                placeholder="Phone"  
                />


<TextInput  style={{
                height: 40,
                backgroundColor: '#e3e3e3', 
                fontSize: 15,
                width:230,
                paddingLeft:10,
                    outline:'none',
                    marginTop:10,
                    borderTopLeftRadius:10,
            }}  
                placeholder="Email"  
                />

<Text style={{margintop:10,borderBottomColor: 'rgba(0,0,0,0.3)',borderBottomWidth:1
}}>
PAYMENT INFO
</Text>

<TextInput keyboardType="numeric" style={{
                height: 40,
                backgroundColor: '#e3e3e3', 
                fontSize: 15,
                width:230,
                paddingLeft:10,
                    outline:'none',
                    marginTop:10,
                    borderTopLeftRadius:10,
            }}  
                placeholder="Credit Card Number"  
                />

<TouchableOpacity style={{marginTop:10}}>
    <Text style={{color: "rgb(255,40,45)"}}>
        OR UPLOAD CC
    </Text>
</TouchableOpacity>

        
        </View>



        <TouchableOpacity 
        onPress={() => {
            this.showAlert();}}
            style={{
                backgroundColor: "rgb(255,40,45)",
                padding:10,
                width:230,
                justifyContent:'center',
                alignItems:'center',
                marginTop:20,
                }}
        
        >

    <Text style={{fontSize:'17',fontWeight:"700",color:"white",}}>
                PROCEED TO CHECKOUT
            </Text>
            </TouchableOpacity>

    
    </View>
);
};
