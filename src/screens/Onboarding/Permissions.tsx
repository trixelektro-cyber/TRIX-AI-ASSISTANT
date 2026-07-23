import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function Permissions({ onNext, onBack }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Engedélyek</Text>
      <Text style={styles.subtitle}>Az alkalmazás hangvezérléshez és fájlok feltöltéséhez kérhet engedélyeket. Ezek később is megadhatók a beállításokban.</Text>
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Vissza" onPress={onBack} variant="secondary" />
        <Button title="Engedélyez" onPress={onNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 8 },
});
