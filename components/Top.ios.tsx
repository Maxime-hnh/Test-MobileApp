import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Top = () => {
  return (
    <View style={styles.top}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="arrowleft" size={24} color="black" style={{flex:0.6}} />
        <Text style={styles.title}>Planity</Text>
        <View style={{ backgroundColor: '#222', flex:0.6, height:30, borderRadius: 7, justifyContent:'center', alignItems:'center' }}>
          <Ionicons name="person-sharp" size={15} color="#fff" />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#fff',
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 10
  },
  title: {
    fontSize: 30,
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: 8,
    flex:4.8,
    textAlign:'center'
  },
});

export default Top;