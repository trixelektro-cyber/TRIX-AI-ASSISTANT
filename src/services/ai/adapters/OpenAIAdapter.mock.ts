import { AIProvider, AIResponse, ModelInfo } from '../AIProvider';

export class OpenAIAdapterMock implements AIProvider {
  async sendMessage(conversationId: string, message: string): Promise<AIResponse> {
    return {
      id: String(Date.now()),
      text: 'OpenAI mock válasz: ' + message,
      createdAt: new Date().toISOString(),
    };
  }
  async getModels(): Promise<ModelInfo[]> {
    return [{ id: 'gpt-mock-1', name: 'GPT-Mock-1' }];
  }
}
