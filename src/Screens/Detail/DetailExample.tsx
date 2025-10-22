import Icon from '@expo/vector-icons/Ionicons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../AppNavigator';

const { width } = Dimensions.get('window');

type DetailExampleRouteProp = RouteProp<RootStackParamList, 'DetailExample'>;

export default function DetailExample() {
  const navigation = useNavigation();
  const route = useRoute<DetailExampleRouteProp>();
  const { name, location } = route.params;

  const [count, setCount] = useState(1);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Header Image */}
      <View>
        <Image
          source={require('../../../assets/images/bali.jpg')}
          style={styles.headerImage}
        />
        {/* Overlay Gradient */}
        <View style={styles.overlay} />
        {/* Back & Weather */}
        <SafeAreaView style={styles.headerButtons}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <View style={styles.weatherBadge}>
            <Icon name="sunny-outline" size={18} color="#fff" />
            <Text style={styles.weatherText}>24°C</Text>
          </View>
        </SafeAreaView>

        {/* Title & Rating */}
        <View style={styles.headerText}>
          <View style={styles.rating}>
            <Icon name="star" size={14} color="#FCD34D" />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            From crystal-clear waters to breathtaking sunsets, Bali is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime.
          </Text>
        </View>
      </View>

      {/* Content Scroll */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
        <View style={styles.contentCard}>
          {/* Country Info */}
          <View style={styles.countryRow}>
            <Image
              source={{ uri: 'https://flagcdn.com/w20/id.png' }}
              style={styles.flag}
            />
            <Text style={styles.countryText}>{location}</Text>
          </View>

          <Text style={styles.sectionTitle}>Discover the Beauty of {name}</Text>

          {/* Review Card */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/100?img=3',
                }}
                style={styles.reviewerAvatar}
              />
              <View>
                <Text style={styles.reviewerName}>By Rigi Starboy</Text>
                <Text style={styles.reviewText}>
                  Wow amazing yahh, best experience in my life very very worth it! Very good view!
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>

          {/* Recommendation Section */}
          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Recommendation in Indonesian</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {
                id: 1,
                title: 'Snorkeling Trip',
                image: require('../../../assets/images/ff.jpg'),
                desc: 'Complimentary pick-up & snorkeling experience',
              },
              {
                id: 2,
                title: 'Gacoan Cibadak',
                image: require('../../../assets/images/cibadak.jpg'),
                desc: 'Full-day trip with local guide and lunch',
              },
              {
                id: 3,
                title: 'Nyoride',
                image: require('../../../assets/images/download.jpg'),
                desc: 'Ngabuburit Club',
              },
              {
                id: 4,
                title: 'Ngamprak',
                image: require('../../../assets/images/ff3.jpg'),
                desc: 'Ngamprak Club',
              },
              {
                id: 5,
                title: 'Hayuu-Ulin',
                image: require('../../../assets/images/ff1.jpg'),
                desc: 'Irahaa teu gass atu Guysss!!',
              },
            ].map((item) => (
              <View key={item.id} style={styles.recoCard}>
                <Image source={item.image} style={styles.recoImage} />
                <View style={styles.recoOverlay} />
                <View style={styles.recoTextContainer}>
                  <Text style={styles.recoTitle}>{item.title}</Text>
                  <Text style={styles.recoDesc}>{item.desc}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.counterBtn} onPress={decrease}>
            <Text style={styles.counterText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.counterValue}>{count}</Text>
          <TouchableOpacity style={styles.counterBtn} onPress={increase}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalPrice}>${(10000 * count).toLocaleString()}</Text>
        </View>

        <TouchableOpacity style={styles.bookNowBtn}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F1',
  },
  headerImage: {
    width: width,
    height: 300,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerButtons: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  weatherBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  weatherText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
  headerText: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  scrollContent: {
    marginTop: -10,
  },
  contentCard: {
    backgroundColor: '#F9F6F1',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flag: {
    width: 20,
    height: 14,
    borderRadius: 2,
  },
  countryText: {
    color: '#1F2937',
    fontSize: 15,
  },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#1F2937',
      marginVertical: 12,
    },
    reviewCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
    },
    reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    reviewerAvatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
    },
    reviewerName: {
      fontWeight: '700',
      color: '#111827',
      marginBottom: 4,
    },
    reviewText: {
      color: '#4B5563',
      fontSize: 13,
      lineHeight: 18,
      maxWidth: width - 120,
    },
    viewAllBtn: {
      marginTop: 12,
      alignSelf: 'flex-start',
      backgroundColor: '#111827',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    viewAllText: {
      color: '#fff',
      fontWeight: '600',
    },
    recoCard: {
      width: 200,
      height: 120,
      borderRadius: 12,
      overflow: 'hidden',
      marginRight: 12,
      marginTop: 8,
    },
    recoImage: {
      width: '100%',
      height: '100%',
    },
    recoOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.25)',
    },
    recoTextContainer: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12,
    },
    recoTitle: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 14,
    },
    recoDesc: {
      color: '#fff',
      fontSize: 12,
      marginTop: 4,
    },
    bottomBar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderColor: '#E5E7EB',
      backgroundColor: '#fff',
    },
    counter: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F3F4F6',
      borderRadius: 12,
      padding: 6,
      marginRight: 12,
    },
    counterBtn: {
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
    counterText: {
      fontSize: 18,
      fontWeight: '700',
    },
    counterValue: {
      marginHorizontal: 8,
      minWidth: 24,
      textAlign: 'center',
      fontWeight: '700',
    },
    priceContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    totalText: {
      color: '#6B7280',
      fontSize: 12,
    },
    totalPrice: {
      color: '#111827',
      fontSize: 18,
      fontWeight: '700',
    },
    bookNowBtn: {
      backgroundColor: '#111827',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
      marginLeft: 12,
    },
    bookNowText: {
      color: '#fff',
      fontWeight: '700',
    },
  });
