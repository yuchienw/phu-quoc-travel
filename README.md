# 🌴 越南富國島 7 天 6 夜極致自由行手冊 (台灣出發)
### Phú Quốc Island 7-Day Independent Travel Companion & Guide

這是一個專為台灣出發設計的**純靜態、極速、行動裝置優先（Mobile-First）**的富國島 7 天 6 夜自由行互動網站手冊。

---

## 🌟 核心特色功能

1. 🗺️ **完整 7 日詳細行程與時間軸**
   - 每日景點順序、精準時段、交通方式（Grab / VinBus 免費電動公車 / 快艇 / 纜車）。
   - 詳細越文地址、電話、營業時間、預估花費（VND 與 TWD）。
   - **一鍵開啟 Google Maps 導航** 與 **一鍵複製越文地址給司機看**。
2. 🏝️ **7 大富國島在地隱藏文化與深度故事**
   - 原生特有富國脊背犬、百年相思木桶黑金魚露釀造秘密與搭機禁令。
   - 海星沙灘生態保護紅線、護國寺海神信仰、越南滴漏咖啡冰塊哲學、鈔票防坑心算術。
3. 💱 **即時雙向台幣 ⇄ 越南盾匯率算盤**
   - 實時換算、支援自訂匯率，附常見物價矩陣速查表。
4. 🗣️ **自由行必備實用越語句典**
   - 包含點餐、叫車、殺價、急難求助等常用語，附中文諧音拼音與**真人語音朗讀（TTS）**。
5. ✅ **互動式行李打包清單**
   - 分類檢查表，自動記錄於瀏覽器 localStorage，離線也能查看。
6. 🆘 **緊急求助與重要須知**
   - 駐胡志明市台北經濟文化辦事處 24H 急難電話、島上最高等級 Vinmec 國際醫院、富國島 30 天免簽證詳細規則。

---

## 🚀 如何部署至 GitHub Pages

### 步驟 1：在 GitHub 上建立新儲存庫 (Repository)
1. 登入您的 GitHub 帳號。
2. 點選右上角 **New repository**。
3. 儲存庫名稱填寫例如：`phu-quoc-travel`。
4. 選擇 **Public**（公開）。
5. 點選 **Create repository**。

### 步驟 2：推送本地專案到 GitHub
在專案目錄（`C:\Users\Tim\phu-quoc-travel`）打開終端機（PowerShell / Git Bash），執行以下指令：

```bash
git add .
git commit -m "feat: complete phu quoc 7-day travel web guide"
git branch -M main
git remote add origin https://github.com/<您的GitHub帳號>/phu-quoc-travel.git
git push -u origin main
```

### 步驟 3：開啟 GitHub Pages
1. 進入該 GitHub 儲存庫頁面，點選頂部 **Settings** ➔ 側邊欄 **Pages**。
2. 在 **Build and deployment** 下方的 **Source**：
   - 選擇 **GitHub Actions**（本專案已內建 `.github/workflows/deploy.yml` 自動部署工作流），或選擇 **Deploy from a branch** 並選擇 `main` 分支與 `/(root)` 目錄。
3. 稍候 1~2 分鐘，您的網站即可於下列網址上線：
   👉 **`https://<您的GitHub帳號>.github.io/phu-quoc-travel/`**

---

## 💻 本地即時預覽

您可以直接在瀏覽器中雙擊打開 `index.html`，或使用任何靜態伺服器（例如 Python 或 VSCode Live Server）：

```bash
# 使用 Python 快速預覽
python -m http.server 8000
```
瀏覽器開啟 `http://localhost:8000` 即可預覽。

---

祝您旅途平安順利，享受富國島的碧海藍天與絕美日落！🌴✨
