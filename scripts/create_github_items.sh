#!/usr/bin/env bash
set -e

# This script uses the GitHub CLI (gh). Authenticate first with: gh auth login
# Run from the repository root. It will create PRs and Issues as configured.

# Variables
ASSIGNEE="trixelektro-cyber"
LABELS_ONBOARDING="onboarding,priority:high"
LABELS_SCaffold="scaffold,priority:high"

# PR: feature/onboarding -> feature/scaffold
gh pr create --base feature/scaffold --head feature/onboarding \
  --title "feat(onboarding): onboarding flow and UI components" \
  --body "### What\nAdds onboarding flow (Intro, Permissions, Finish) and shared UI components (Button, Card, Icon, EmptyState).\n\n### QA checklist\n- [ ] Build locally (npm ci && npm start)\n- [ ] Onboarding flow completes\n- [ ] Unit tests pass (npm test)\n\n_No secrets included._" \
  --label $LABELS_ONBOARDING --assignee $ASSIGNEE || echo "PR creation (onboarding) skipped or already exists"

# PR: feature/scaffold -> main
gh pr create --base main --head feature/scaffold \
  --title "chore(scaffold): initial scaffold (Expo + TypeScript)" \
  --body "### What\nInitial Expo + TypeScript scaffold for TRIX AI Assistant. Includes navigation, basic screens (Dashboard, Chat, Knowledge, Projects, Settings), AIProvider interface and mock adapter, i18n HU, and basic CI.\n\n### Notes\n- Do not merge without review.\n" \
  --label $LABELS_SCaffold --assignee $ASSIGNEE || echo "PR creation (scaffold->main) skipped or already exists"

# Issues to create
gh issue create --title "Onboarding flow — finomhangolás és UX copy" --body "See .github/ISSUE_TEMPLATE/onboarding_flow.md" --label onboarding,priority:high --assignee $ASSIGNEE || echo "Issue already exists or skipped"

gh issue create --title "Chat UX fejlesztés (typing indicator, autoscroll, conversation list)" --body "See .github/ISSUE_TEMPLATE/chat_ux.md" --label chat,priority:high --assignee $ASSIGNEE || echo "Issue already exists or skipped"

gh issue create --title "Design system — theme & design tokens" --body "See .github/ISSUE_TEMPLATE/design_system.md" --label design,priority:high --assignee $ASSIGNEE || echo "Issue already exists or skipped"

gh issue create --title "Tudásbázis UI (kategóriák, kereső, dokumentum preview)" --body "See .github/ISSUE_TEMPLATE/knowledge_ui.md" --label knowledgebase,priority:medium --assignee $ASSIGNEE || echo "Issue already exists or skipped"

gh issue create --title "Tesztek és CI szigorítása" --body "See .github/ISSUE_TEMPLATE/tests_ci.md" --label ci,tests,priority:medium --assignee $ASSIGNEE || echo "Issue already exists or skipped"

gh issue create --title "EAS & Testifly pipeline előkészítés" --body "See .github/ISSUE_TEMPLATE/eas_testifly.md" --label ci,release,priority:low --assignee $ASSIGNEE || echo "Issue already exists or skipped"

echo "Script finished. Check the repository PRs and Issues on GitHub."
