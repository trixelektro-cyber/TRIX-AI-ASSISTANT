export interface AIResponse {
  id: string;
  text: string;
  createdAt: string;
}

export interface ModelInfo {
  id: string;
  name: string;
}

export interface AIProvider {
  sendMessage(conversationId: string, message: string): Promise<AIResponse>;
  getModels(): Promise<ModelInfo[]>;
  createConversation?(meta?: any): Promise<string>;
}
