import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text ,SafeAreaView } from "react-native";

export default function Availableshifts(){
    return(
        <SafeAreaView >
        <StatusBar style="auto" />
        <View style={styles.Header}>
            <View >
            <Text style={{fontSize:17,color: "#004FB4"}}>
                Helsinki (5)
            </Text>
            </View>
            <View> 
            <Text style={{fontSize:17,color: "#CBD2E1"}}>
                Tampere (8)
            </Text>
            </View>
            <View>
            <Text style={{fontSize:17,color: "#CBD2E1"}}>
                Turku (5)
            </Text>
            </View>
        </View>

        {/*TODAY */}
        <View style={{backgroundColor: "#F1F4F8"}}>
            <Text style={{color:"#4F6C92", fontWeight:'600', padding:10}}>Today</Text>
        </View>

        {/*TIMINGS */}
        <View style={styles.TimingShift}>        
            <View>
            <Text>12:00-14:00</Text>
        </View>
        <View>
            <Text>Booked</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Book</Text>
        </View>
        </View>

        {/*2ND */}
        <View style={styles.TimingShift}>        
            <View>
            <Text>13:00-14:00</Text>
        </View>
        <View>
            <Text style={{color:'#E2006A',marginRight:-16.5}}>Overlapping</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Book</Text>
        </View>
        </View>

        {/*3ND */}
        <View style={styles.TimingShift}>        
            <View>
            <Text>12:00-14:00</Text>
        </View>
        <View>
            <Text>Booked</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Book</Text>
        </View>
        </View>

        {/*4ND */}
        <View style={styles.TimingShift}>        
            <View>
            <Text>12:00-14:00</Text>
        </View>
        <View>
            <Text>Booked</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Book</Text>
        </View>
        </View>
        
        {/*September 21 */}
        <View style={{backgroundColor: "#F1F4F8"}}>
            <Text style={{color:"#4F6C92", fontWeight:'600', padding:10}}>September 21</Text>
        </View>

        {/*5ND */}
        <View style={styles.TimingShift}>        
            <View>
            <Text>16:00-18:00</Text>
        </View>
        <View>
            <Text>Booked</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Book</Text>
        </View>
        </View>

        {/*September 22 */}
        <View style={{backgroundColor: "#F1F4F8"}}>
            <Text style={{color:"#4F6C92", fontWeight:'600', padding:10}}>September 21</Text>
        </View>

        {/*6ND */}
        <View style={styles.TimingShift}>        
            <View>
            <Text>17:00-18:30</Text>
        </View>
        <View>
            <Text>Booked</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Book</Text>
        </View>
        </View>
        </SafeAreaView>




       
   )
}
const styles = StyleSheet.create({
    Header:{
        paddingTop:40,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        paddingBottom:20,
    },
    TimingShift:{
        flexDirection:'row',
        backgroundColor:'white', 
        justifyContent:'space-around',
        paddingTop:10, 
        paddingBottom:10, 
        borderWidth:0.3, 
        borderColor:'#CBD2E1'
    },
    DB1:{
    borderWidth:1,
    paddingTop:5, 
    paddingBottom:5,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:30
},
})