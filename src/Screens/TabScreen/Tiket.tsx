import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TiketScreen = () => {
  const tickets = [
    {
      id: 1,
      from: 'NL',
      to: 'IDN',
      depart: '5:30pm',
      arrive: '3:30am',
      dateDepart: 'Mon, 23 Jun',
      dateArrive: 'Tue, 24 Jun',
      price: '$1.700',
    },
    {
      id: 2,
      from: 'NL',
      to: 'IDN',
      depart: '8:00pm',
      arrive: '6:00am',
      dateDepart: 'Mon, 23 Jun',
      dateArrive: 'Tue, 24 Jun',
      price: '$1.500',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
        <Text style={styles.headerTitle}>Tickets</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Location */}
      <View style={styles.locationSection}>
        <Text style={styles.subText}>Current locations</Text>
        <Text style={styles.titleText}>Parungkuda ▼</Text>

        {/* Tabs */}
        <View style={styles.tabRow}>
          {['Hotel', 'Aircraft', 'Villa', 'Attraction'].map((item, index) => (
            <TouchableOpacity key={index} style={[styles.tabButton, item === 'Aircraft' && styles.activeTab]}>
              <Text style={[styles.tabText, item === 'Aircraft' && styles.activeTabText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Date selector */}
      <View style={styles.dateSection}>
        <Text style={styles.subText}>June, 2025 ▼</Text>
        <View style={styles.dateRow}>
          {['S 22', 'M 23', 'T 24', 'W 25', 'T 26', 'F 27', 'S 28'].map((day, i) => (
            <View key={i} style={[styles.dateBox, day.includes('M 23') && styles.activeDate]}>
              <Text style={[styles.dateText, day.includes('M 23') && styles.activeDateText]}>{day}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Ticket list */}
      <Text style={styles.ticketCount}>2 Tickets Found</Text>

      {tickets.map((ticket) => (
        <View key={ticket.id} style={styles.ticketCard}>
          <View style={styles.ticketLeft}>
            <Text style={styles.ticketLabel}>AIRLINES</Text>
            <Ionicons name="airplane" size={20} color="white" style={{ marginTop: 8 }} />
          </View>

          <View style={styles.ticketInfo}>
            <View style={styles.ticketRow}>
              <Text style={styles.airportCode}>{ticket.from}</Text>
              <Ionicons name="airplane-outline" size={24} color="black" />
              <Text style={styles.airportCode}>{ticket.to}</Text>
            </View>

            <View style={styles.timeRow}>
              <View>
                <Text style={styles.timeText}>{ticket.depart}</Text>
                <Text style={styles.dateTextSmall}>{ticket.dateDepart}</Text>
              </View>
              <View>
                <Text style={styles.timeText}>{ticket.arrive}</Text>
                <Text style={styles.dateTextSmall}>{ticket.dateArrive}</Text>
              </View>
            </View>

            <Text style={styles.priceText}>{ticket.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F7',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  locationSection: {
    marginBottom: 20,
  },
  subText: {
    color: '#777',
    fontSize: 14,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 4,
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tabButton: {
    backgroundColor: '#EDEBE9',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#044884ff',
  },
  tabText: {
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
  },
  dateSection: {
    marginBottom: 20,
  },
  dateRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dateBox: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#EDEBE9',
    marginRight: 8,
  },
  activeDate: {
    backgroundColor: '#FADFCB',
  },
  dateText: {
    color: '#555',
  },
  activeDateText: {
    color: '#044884ff',
    fontWeight: '700',
  },
  ticketCount: {
    fontWeight: '600',
    marginBottom: 10,
  },
  ticketCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  ticketLeft: {
    backgroundColor: '#044884ff',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  ticketLabel: {
    color: '#fff',
    fontWeight: '700',
    transform: [{ rotate: '-90deg' }],
    width: 80,
    textAlign: 'center',
  },
  ticketInfo: {
    flex: 1,
    padding: 16,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  airportCode: {
    fontSize: 24,
    fontWeight: '700',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateTextSmall: {
    color: '#777',
    fontSize: 13,
  },
  priceText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default TiketScreen;
