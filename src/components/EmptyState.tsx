import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

type Props = {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({ title = 'Nincs tartalom', subtitle = 'Itt még nincs semmi. Próbáld meg hozzáadni első elemed.', actionLabel = 'Új létrehozása', onAction }: Props) {
  return (
    <View style={styles.container} accessible accessibilityRole="alert">
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={{ marginTop: 12 }}>
        <Button title={actionLabel} onPress={onAction} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 24 },
  title: { fontSize: 18, fontWeight: '700' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 8 },
});
