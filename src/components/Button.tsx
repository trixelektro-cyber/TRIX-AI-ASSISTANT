import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, StyleSheet } from 'react-native';

type Props = {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  accessibilityLabel?: string;
};

export default function Button({ onPress, title, variant = 'primary', accessibilityLabel }: Props) {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel || title}
      onPress={onPress}
      style={[styles.base, variant === 'primary' ? styles.primary : styles.secondary]}
    >
      <Text style={[styles.text, variant === 'primary' ? styles.textPrimary : styles.textSecondary]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#0B74FF',
  },
  secondary: {
    backgroundColor: '#F1F3F5',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: '#fff',
  },
  textSecondary: {
    color: '#0B74FF',
  },
});
