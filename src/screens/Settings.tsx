import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function Settings() {
  const [dark, setDark] = useState(false);
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Beállítások</Text>
      <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop: 12 }}>
        <Text>Sötét mód</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
    </View>
  );
}
