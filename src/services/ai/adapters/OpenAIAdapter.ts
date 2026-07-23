import { AIProvider, AIResponse, ModelInfo } from '../AIProvider';

// OpenAIAdapter.ts (sablon)
// Nem tartalmaz kulcsot vagy tényleges API hívást. A tényleges API-kulcsot
// a GitHub Secrets / .env fájlban kell beállítani (OPENAI_API_KEY).

export class OpenAIAdapter implements AIProvider {
  private apiKey: string | undefined;
  private model: string;

  constructor(opts?: { apiKey?: string; model?: string }) {
    this.apiKey = opts?.apiKey || process.env.OPENAI_API_KEY;
    this.model = opts?.model || 'gpt-4o-mini';
  }

  async sendMessage(conversationId: string, message: string): Promise<AIResponse> {
    if (!this.apiKey) {
      // Fallback mock response when nincs kulcs
      return {
        id: String(Date.now()),
        text: `[mock] OpenAIAdapter: ${message}`,
        createdAt: new Date().toISOString(),
      };
    }

    // Példa: ide jönne a fetch/axios POST hívás az OpenAI végponthoz.
    // Fontos: soha ne commitáld a kulcsot. A fenti constructor a környezeti változóból olvas.

    // TODO: implement actual HTTP request using fetch/axios and handle errors/streaming

    return {
      id: String(Date.now()),
      text: `[placeholder] response for: ${message}`,
      createdAt: new Date().toISOString(),
    };
  }

  async getModels(): Promise<ModelInfo[]> {
    // TODO: implement actual model listing when API key rendelkezésre áll
    return [{ id: 'gpt-mock-1', name: 'GPT-Mock-1' }];
  }
}
