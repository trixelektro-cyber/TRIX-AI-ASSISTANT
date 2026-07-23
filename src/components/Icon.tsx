import React from 'react';
import { View } from 'react-native';
import IconLib from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export default function Icon({ name, size = 24, color = '#0B74FF' }: Props) {
  return (
    <View accessibilityRole="image">
      <IconLib name={name} size={size} color={color} />
    </View>
  );
}
