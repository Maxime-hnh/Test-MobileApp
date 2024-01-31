import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Top = () => {
  return (
    <View style={styles.top}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Text style={styles.title}>Planity</Text>
      <View style={{ backgroundColor: '#222', padding: 10, borderRadius: 7 }}>
        <Ionicons name="person-sharp" size={15} color="#fff" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#fff',
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: 8
  },
});

export default Top;