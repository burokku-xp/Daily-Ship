# AGENTS.md

## Cursor Cloud specific instructions

### プロジェクト概要

Daily-Ship はグリーンフィールド（新規）プロジェクトです。現時点ではアプリケーションコードは存在せず、`README.md` のみが含まれています。

### ブランチ構成

- `main` / `develop`: 初期コミット（`README.md` のみ）
- `origin/cursor/cursor-environment-configuration-b2aa`: Cursor IDE ワークフロー設定（Rules/Skills/Subagent）が含まれるブランチ

### 開発環境

- **Node.js**: v22 (nvm 経由)
- **Python**: 3.12
- **パッケージマネージャ**: npm, pnpm, yarn が利用可能
- **Git**: 2.43

### 注意事項

- アプリケーションコードがまだ存在しないため、lint/test/build/run コマンドはありません。
- 技術スタックがまだ決定されていません。コードが追加された際にこのファイルを更新してください。
- `.cursor/rules/general.mdc` により、コメント・ドキュメントは日本語で記述するルールです。
- コミットメッセージは日本語で `[機能名] 〇〇の実装を追加` の形式にしてください。
