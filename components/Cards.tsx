import { View, Image, StyleSheet, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

interface CardsProps {
  img : string;
  name:string;
  address:string;
  advice:string;
}

const imageMap:any = {
  'barbershop1': require('../assets/barbershop.jpg'),
  'barbershop2': require('../assets/barbershop2.jpg'),
  'barbershop3': require('../assets/barbershop3.jpg'),
  // Ajoutez d'autres images selon les besoins
};

// source={require(`../assets/${img}`)}

const Cards = ({img, name, address, advice}:CardsProps) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imageMap[img]}
      />
      <View style={styles.sndContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.infoContainer}>
          <EvilIcons name="location" size={24} color="#6c757d" />
          <Text style={styles.textInfo}>
            {address}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <EvilIcons name="star" size={24} color="#6c757d" />
          <Text style={styles.textInfo}>
            {advice}
          </Text>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ textTransform: 'uppercase', marginRight: 10, fontWeight: '600', flex: 2 }}>Matin</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 4 }}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Lun.29</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Mar.30</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Mer.31</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ textTransform: 'uppercase', marginRight: 10, fontWeight: '600', flex: 2 }}>Après-midi</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 4 }}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Lun.29</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Mar.30</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Mer.31</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 380,
    width: '100%',
    shadowColor: '#222',
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom:15
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    objectFit: 'cover',
    width: '100%',
    height: 190
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 5
  },
  sndContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 4
  },
  textInfo: {
    color: '#6c757d',
    marginLeft: 3
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: '#4361ee',
    padding: 0,
    borderRadius: 7,
  },
  date: {
    padding: 4,
    fontWeight: '600',
    color: '#4361ee'
  }
});

export default Cards;