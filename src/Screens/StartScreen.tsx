import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../AppNavigator';

const { width, height } = Dimensions.get('window');

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Start'>;

export default function StartScreen() {
  const navigation = useNavigation<StartScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  const handleStartExploring = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ImageBackground
        source={require('../../assets/images/download.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <SafeAreaView style={[styles.content, { paddingTop: insets.top }]}> 
          <View style={styles.textContainer}>
            <Text style={styles.title}>Your Next Adventure{'\n'}Starts Here</Text>
            <Text style={styles.subtitle}>Life's too short to stay in one place. Find your next favorite city, beach, or mountain and let's get moving!</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleStartExploring} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Start Exploring</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 32,
    paddingBottom: 60,
  },
  textContainer: {
    marginBottom: 32,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: '500',
    lineHeight: 35,
    marginBottom: 16,
    fontFamily: 'System',
  },
  subtitle: {
    color: 'rgba(166, 162, 162, 0.95)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: 'System',
  },
  button: {
    backgroundColor: '#22D3EE',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    alignSelf: 'flex-start',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'System',
  },
});
