# 📦 GPT Structure Package v1.0.0

構造化プロンプト設計を中心に、教育・業務・自己成長を支援する AI プロンプト設計パッケージ。GUI・LP・CLI形式の各ツールとテンプレートを含み、再利用可能なプロンプト設計資産の開発を加速します。

---

## 📘 パッケージ構成概要

```
gpt-structure-package/
├── core/                         # 設計中核（テンプレ・プロンプト・GUIスキーマ）
│   ├── prompts/                  # プロンプト定義・指示文
│   ├── templates/                # テンプレ構造（例・連鎖・評価）
│   ├── gui/                      # GUIフォーム構成・スキーマ
│   └── README/                   # 各目的別readme（業務・教育・自己成長など）
├── docs/                         # 技術ログ・FAQ・セットアップ・A/Bレポート
│   ├── setup-log.md
│   ├── abtest-ga-report.md
│   ├── faq_gpt_structure_common.md
│   ├── quickstart_gpt_structure_free.md
│   └── readme_docs_guide.md
├── products/                     # アプリ＆LP群
│   ├── gpt-structure-lite/       # GUI構成プロンプト生成アプリ（App Router）
│   └── gpt-structure-landing/    # LP構成テンプレート（Next.js）
├── gpt_structure_publish_note.md # 公開・ライセンス・連携ノート
└── README.md                     # ✅ このファイル（全体構成＋概要）
```

---

## ✅ 特徴

- 6セクション構成標準プロンプト（summary / explanation / prompt / usecase / tips / reflection）
- CLI・自然言語・DSL形式すべてに対応
- GUIテンプレートとスキーマでNotion / Figma連携可
- Function Calling対応テンプレも内蔵
- 教育者／営業／開発者など各職種に対応したパーソナライズテンプレート

---

## 🧭 推奨導線（用途別）

- **教育・研修向け**：`readme_edu_v1.0.0.md`
- **業務・SaaS導入向け**：`readme_business_v1.0.0.md`
- **自己学習・反復改善向け**：`readme_growth_v1.0.0.md`

---

## 📨 公開・問い合わせ

- GitHub: [https://github.com/promptlabo/gpt-structure-package](https://github.com/promptlabo/gpt-structure-package)
- お問い合わせ: info@example.com

---

## 📄 ライセンス

- ソースコード・構成テンプレ（Function / GUIなど） → [MIT License](./LICENSE)
- 教育テンプレ・出力例（プロンプト・教材構成など） → [CC BY 4.0](./LICENSE-CC-BY-4.0)

