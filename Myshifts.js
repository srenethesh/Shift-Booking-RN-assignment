import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function Myshifts(){
    return(
        <SafeAreaView>
            <StatusBar style="auto" />
        <View style={{backgroundColor: "#F1F4F8",paddingTop:20}}>
            <Text style={{color:"#4F6C92", fontWeight:'600', padding:10}}>September 21</Text>
        </View>
        <View style={styles.TimingShift}>        
            <View>
            <Text>14:00-16:00</Text>
        </View>
        <View>
            <Text style={styles.DB2}>Cancel</Text>
        </View>
        </View>

        <View style={styles.TimingShift}>        
            <View>
            <Text>14:00-16:00</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Cancel</Text>
        </View>
        </View>

        <View style={{backgroundColor: "#F1F4F8",paddingTop:20}}>
            <Text style={{color:"#4F6C92", fontWeight:'600', padding:10}}>Tomorrow</Text>
        </View>

        <View style={styles.TimingShift}>        
            <View>
            <Text>12:00-16:00</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Cancel</Text>
        </View>
        </View>


        <View style={{backgroundColor: "#F1F4F8",paddingTop:20}}>
            <Text style={{color:"#4F6C92", fontWeight:'600', padding:10}}>September 22</Text>
        </View>

        <View style={styles.TimingShift}>        
            <View>
            <Text>9:00-11:00</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Cancel</Text>
        </View>
        </View>


        <View style={styles.TimingShift}>        
            <View>
            <Text>13:30-15:00</Text>
        </View>
        <View>
            <Text style={styles.DB1}>Cancel</Text>
        </View>
        </View>
        </SafeAreaView>
   )
}

const styles = StyleSheet.create({
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
        color:'#E2006A',
        borderColor:'#E2006A',
        borderWidth:1,
        paddingTop:5, 
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:30
    },
    DB2:{
        color:'#CBD2E1',
        borderColor:'#CBD2E1',
        borderWidth:1,
        paddingTop:5, 
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:30
    },
    
}) 