import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>Vezérlőpult</Text>
      <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Aktuális munkák</Text>
        <Text>Készült: mock adatok</Text>
      </View>
      <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Üzenetek</Text>
        <Text>Nincsenek új üzenetek</Text>
      </View>
    </ScrollView>
  );
}
