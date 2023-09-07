import { ScrollView, View } from 'react-native';

//@ts-ignore
import Movies from "./flatList.jsx"
import Modal from "./modal.jsx"
import TouchableOpacity from "./touchableOpacity.jsx"
//@ts-ignore
import TouchableHighlight from "./touchableHighlight.jsx"


export default function App() {
 

  return (

    <View>
{/*        
      <Modal/> */}
      
      <Movies/>
      
      {/* <ScrollView>

        <TouchableOpacity/>
      
        <TouchableHighlight/>
      
      </ScrollView> */}
      
      
    </View>
   

    
  );
}



