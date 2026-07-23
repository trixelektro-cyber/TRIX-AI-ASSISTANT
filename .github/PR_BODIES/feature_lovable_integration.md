# PR: feature/lovable-integration -> feature/scaffold

Cím: feat(integration): integrate Lovable UI/UX into TRIX-AI-Assistant

Leírás:
- Audit and integration of Lovable UI/UX into the TRIX-AI-Assistant architecture.
- Added: INTEGRATION.md, migration checklist, AIProvider adapter template (OpenAI), migration scripts placeholder.

QA checklist:
- [ ] Branch feature/lovable-integration builds locally (npm ci && npm start)
- [ ] Onboarding flow runs and AI opt-in appears
- [ ] Basic chat flow uses AIProvider mock (if no API key)
- [ ] Assets loaded and screens render without errors

Notes:
- No API keys or secrets are committed. Configure OPENAI_API_KEY in repo secrets for real calls.
