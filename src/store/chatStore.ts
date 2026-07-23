import create from 'zustand';

type Message = { id: string; text: string; from: 'user' | 'ai' };

type ChatState = {
  messages: Message[];
  sendMessage: (text: string) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  sendMessage: (text) => {
    const id = String(Date.now()) + Math.floor(Math.random() * 1000);
    const userMsg = { id, text, from: 'user' } as Message;
    set((s) => ({ messages: [userMsg, ...s.messages] }));
    // mock AI response
    setTimeout(() => {
      const aiId = String(Date.now()) + Math.floor(Math.random() * 1000);
      const aiMsg = { id: aiId, text: 'Ez egy mock válasz: ' + text, from: 'ai' } as Message;
      set((s) => ({ messages: [aiMsg, ...s.messages] }));
    }, 1200);
  },
}));
