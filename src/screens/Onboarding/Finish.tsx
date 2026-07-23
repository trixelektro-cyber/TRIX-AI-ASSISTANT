import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';

type Props = {
  onFinish: () => void;
};

export default function Finish({ onFinish }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kész!</Text>
      <Text style={styles.subtitle}>Most már használhatod a TRIX AI Assistant funkcióit.</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Indítás" onPress={onFinish} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 8 },
});
