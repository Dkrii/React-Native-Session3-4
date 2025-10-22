import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Setting() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotifications, setIsNotifications] = React.useState(true);
  const [isLocation, setIsLocation] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon-outline" size={22} color="#1F2937" />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch value={isDarkMode} onValueChange={setIsDarkMode} trackColor={{ false: '#D1D5DB', true: '#22D3EE' }} thumbColor={isDarkMode ? '#fff' : '#f4f3f4'} />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="notifications-outline" size={22} color="#1F2937" />
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <Switch value={isNotifications} onValueChange={setIsNotifications} trackColor={{ false: '#D1D5DB', true: '#22D3EE' }} thumbColor={isNotifications ? '#fff' : '#f4f3f4'} />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="location-outline" size={22} color="#1F2937" />
              <Text style={styles.settingText}>Location Services</Text>
            </View>
            <Switch value={isLocation} onValueChange={setIsLocation} trackColor={{ false: '#D1D5DB', true: '#22D3EE' }} thumbColor={isLocation ? '#fff' : '#f4f3f4'} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="information-circle-outline" size={22} color="#1F2937" />
              <Text style={styles.settingText}>App Version</Text>
            </View>
            <Text style={styles.versionText}>v1.0.0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="document-text-outline" size={22} color="#1F2937" />
              <Text style={styles.settingText}>Terms & Conditions</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="shield-checkmark-outline" size={22} color="#1F2937" />
              <Text style={styles.settingText}>Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  versionText: {
    fontSize: 14,
    color: '#6B7280',
  },
});
