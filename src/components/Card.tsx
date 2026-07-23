import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function Card({ title, children }: Props) {
  return (
    <View style={styles.card} accessible accessibilityRole="summary">
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  content: {},
});
