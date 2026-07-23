import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './Button';

type Props = {
  title: string;
  subtitle?: string;
};

export default function OnboardingHero({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/onboarding-hero.png')} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={{ marginTop: 16 }}>
        <Button title="Kezdés" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 24 },
  image: { width: 180, height: 120, resizeMode: 'contain', marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 8 },
});
