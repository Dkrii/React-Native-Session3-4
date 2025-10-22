import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../AppNavigator';

// ✅ Buat tipe navigasi stack (biar TypeScript ngerti tujuan screen yang bisa dinavigasi)
type HomeNavigationProp = StackNavigationProp<RootStackParamList>;

// ✅ Data dummy destinasi (bisa diganti dari API nanti)
const destinations = [
  {
    id: 1,
    name: 'Bali',
    location: 'Indonesia',
    rating: 5.0,
    image: require('../../../assets/images/bali.jpg'),
    price: '$4.000/pax',
  },
  {
    id: 2,
    name: 'Pelabuhan Ratu',
    location: 'Sukabumi',
    rating: 4.7,
    image: require('../../../assets/images/pelabuhan.jpg'),
    price: '$190.000/pax',
  },
];

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>(); // ✅ Hook buat pindah halaman
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({}); // ✅ Simpan state like per destinasi

  // ✅ Fungsi buat toggle ikon hati
  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          {/* Nama user */}
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.name}>Ali Tampz</Text>
          </View>

          {/* Tombol notifikasi / wishlist */}
          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart" size={22} color="#fff" />
            {/* Badge angka kecil di pojok kanan atas */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>19</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ================= BANNER PROMO ================= */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Plan Your Summer!</Text>
          {/* Tombol panah kecil ke kanan */}
          <TouchableOpacity style={styles.bannerButton}>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* ================= SEARCH BAR ================= */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput placeholder="Search destination..." placeholderTextColor="#9CA3AF" style={styles.searchInput} />
          </View>

          {/* Tombol filter (ikon gear) */}
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* ================= SECTION TITLE ================= */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        {/* ================= LIST DESTINASI ================= */}
        {destinations.map((dest) => (
          <TouchableOpacity
            key={dest.id}
            style={styles.card}
            activeOpacity={0.9}
            // ✅ Cek ID, lalu navigate ke screen berbeda
            onPress={() => {
              if (dest.id === 1) {
                navigation.navigate('DetailExample', {
                  id: dest.id,
                  name: dest.name,
                  location: dest.location,
                });
              } else if (dest.id === 2) {
                navigation.navigate('DetailExample2', {
                  id: dest.id,
                  name: dest.name,
                  location: dest.location,
                });
              }
            }}
          >
            {/* Gambar destinasi */}
            <Image source={dest.image} style={styles.cardImage} />

            {/* Tombol hati di kanan atas gambar */}
            <TouchableOpacity style={styles.likeButton} onPress={() => toggleLike(dest.id)}>
              <Ionicons name={liked[dest.id] ? 'heart' : 'heart-outline'} size={22} color={liked[dest.id] ? '#EF4444' : '#fff'} />
            </TouchableOpacity>

            {/* Overlay hitam transparan di bawah gambar */}
            <View style={styles.cardBottom}>
              <View style={styles.cardInfo}>
                {/* Baris lokasi & rating */}
                <View style={styles.cardTopRow}>
                  <Ionicons name="location-outline" size={14} color="#fff" />
                  <Text style={styles.cardLocation}>{dest.location}</Text>

                  {/* Rating kanan */}
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FCD34D" />
                    <Text style={styles.cardRating}>{dest.rating}</Text>
                  </View>
                </View>

                {/* Nama tempat & harga */}
                <Text style={styles.cardTitle}>{dest.name}</Text>
                <Text style={styles.cardPrice}>{dest.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ================= STYLE =================
  container: {
    flex: 1,
    backgroundColor: '#F9F6F1', // warna latar keseluruhan
  },

  // ====== HEADER ======
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  greeting: {
    fontSize: 20,
    color: '#6B7280',
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1F2937',
  },
  heartButton: {
    backgroundColor: '#044884ff', // warna oranye
    padding: 10,
    borderRadius: 20,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 4,
    backgroundColor: '#1F2937',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },

  // ====== BANNER ======
  banner: {
    backgroundColor: '#044884ff',
    margin: 20,
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    maxWidth: 200,
  },
  bannerButton: {
    backgroundColor: '#fff3',
    padding: 10,
    borderRadius: 10,
  },

  // ====== SEARCH ======
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#F5F3EE',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  filterButton: {
    backgroundColor: '#1F2937',
    padding: 12,
    borderRadius: 12,
  },

  // ====== SECTION ======
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  viewAll: {
    fontSize: 14,
    color: '#9CA3AF',
  },

  // ====== CARD ======
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  likeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  cardBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cardInfo: {
    flexDirection: 'column',
    gap: 4,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardLocation: {
    color: '#fff',
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 4,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  cardRating: {
    color: '#fff',
    fontSize: 14,
  },
  cardPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
