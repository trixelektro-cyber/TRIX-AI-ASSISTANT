import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useChatStore } from '../store/chatStore';

export default function Chat() {
  const [text, setText] = useState('');
  const { messages, sendMessage } = useChatStore();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 8, marginVertical: 4, backgroundColor: item.from === 'user' ? '#e1f5fe' : '#f1f8e9', borderRadius: 8 }}>
              <Text>{item.text}</Text>
            </View>
          )}
          inverted
        />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TextInput value={text} onChangeText={setText} placeholder="Írj..." style={{ flex: 1, borderWidth: 1, borderRadius: 8, padding: 8 }} />
          <Button title="Küld" onPress={() => { if (text.trim()) { sendMessage(text.trim()); setText(''); } }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
