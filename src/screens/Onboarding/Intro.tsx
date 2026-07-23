import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';

type Props = {
  onNext: () => void;
};

export default function Intro({ onNext }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üdvözlünk a TRIX AI Assistantban</Text>
      <Text style={styles.subtitle}>Segítünk rendszerezni a munkáidat és gyorsabban elkészíteni az árajánlatokat.</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Folytatás" onPress={onNext} accessibilityLabel="Folytatás az engedélykérő oldalra" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 15, color: '#666', textAlign: 'center', marginTop: 8 },
});
