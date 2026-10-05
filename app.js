/**
 * 富國島 7 天 6 夜極致自由行指南
 * 日期：2026/10/13 (二) ～ 2026/10/19 (一)
 * 航班：Sun PhuQuoc Airways (去程 9G 511 / 回程 9G 510)
 * 全動態即時匯率換算引擎：全景點卡片、備選口袋清單、換算矩陣、預算總表與頂部橫條同步即時重算
 */

// ==========================================
// 1. DATA: 7-DAY ITINERARY (MATCHING EXCEL -3)
// ==========================================
const ITINERARY_DATA = [
  // ---------- DAY 1: 10/13 (二) 中部 ----------
  {
    day: 1,
    time: "13:30 - 14:30",
    category: "交通",
    nameZh: "出發搭機場捷運 ➔ 抵達桃園機場 T1 報到",
    nameVn: "Sân bay Quốc tế Đào Viên (TPE)",
    taxiVoice: "Sân bay Đào Viên",
    pricing: {
      type: "custom",
      vndText: "捷運車資約 160 NT$",
      calcTwd: () => "約 NT$ 160"
    },
    transport: "搭乘桃園機場捷運直達車至 A12 第一航廈站",
    address: "桃園市大園區航站南路 9 號 (第一航廈)",
    phone: "+886 3 273 5081",
    openingHours: "航班起飛前 3 小時開始櫃檯報到 (14:30 前抵達)",
    description: "搭乘機捷出發前往桃園國際機場第一航廈。Sun PhuQuoc Airways 報到櫃檯於起飛前 3 小時（14:30）開櫃，起飛前 50 分鐘截止報到。出發前 24 小時至 1 小時內可先於官網完成線上報到。",
    tips: "💡 必備文件：護照正本（效期需滿6個月以上）、回程機票行程單、抵達前72小時內完成之越南官方電子入境卡申報截圖。",
    mapsQuery: "Taoyuan International Airport Terminal 1"
  },
  {
    day: 1,
    time: "17:35 - 20:25",
    category: "交通",
    nameZh: "桃園機場 (TPE) ✈ 富國島機場 (PQC)",
    nameVn: "Sân bay Quốc tế Phú Quốc",
    taxiVoice: "Sân bay Phú Quốc",
    pricing: {
      type: "fixed_twd",
      twd: 12824,
      vndLabel: "2人直飛來回特惠",
      twdLabel: "2人直飛來回 NT$ 12,824 (單人約 NT$ 6,412)"
    },
    transport: "直飛航班 Sun PhuQuoc Airways 9G 511 (A321NEO)",
    address: "Tổ 2, Ấp Dương Tơ, Xã Dương Tơ, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3848 078",
    openingHours: "24 小時營運",
    description: "搭乘直飛航班抵達富國島國際機場。持有台灣護照享有「直飛富國島 30 天免簽證」待遇，出示護照、離境機票行程單與電子入境卡確認單即可順暢通關。",
    tips: "💡 專屬福利：購買太陽富國航空機票即贈送香島跨海纜車門票，請記得至官網兌換專頁領取憑證！",
    mapsQuery: "Phu Quoc International Airport"
  },
  {
    day: 1,
    time: "21:00 - 21:30",
    category: "放鬆",
    nameZh: "機場少量換匯 & 購買 SIM 卡 / 啟用 eSIM",
    nameVn: "Sân bay Quốc tế Phú Quốc",
    taxiVoice: "Sân bay Phú Quốc",
    pricing: {
      type: "vnd_range",
      min: 150000,
      max: 250000,
      unit: " / 張",
      labelPrefix: "SIM卡約"
    },
    transport: "機場入境大廳專櫃",
    address: "Ga đến, Sân bay Quốc tế Phú Quốc",
    phone: "+84 297 3848 078",
    openingHours: "配合航班抵達時間營運",
    description: "出關後於機場大廳領取或購買當地高速上網 SIM 卡（推薦 Viettel 或 Vinaphone），並可先換取少許越南盾以支付今晚車資與夜市消費（大筆換匯留至市區銀樓或 Robinson Pearl 更划算）。",
    tips: "💡 若已在台灣安裝好 eSIM，開機直接開啟數據漫遊即可無縫上網！",
    mapsQuery: "Phu Quoc International Airport"
  },
  {
    day: 1,
    time: "21:30 - 22:00",
    category: "交通",
    nameZh: "富國島羅塞塔酒店 Check-in 放行李",
    nameVn: "Khách sạn Rosetta Phú Quốc",
    taxiVoice: "Khách sạn Rosetta, Dương Đông",
    pricing: {
      type: "custom",
      vndText: "1晚 VN 1,328,562 ₫ (10/8 前免費取消)",
      calcTwd: () => "約 NT$ 1,629 (已確認訂房)"
    },
    transport: "機場搭乘 Grab 專車直達（車資約 100,000 ₫ / 約 NT$ 125）",
    address: "Dương Đông, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3988 989",
    openingHours: "24 小時前台服務",
    description: "第一晚入住中部陽東鎮核心區域的「富國島羅塞塔酒店 (ROSETTA HOTEL PHU QUOC)」，離機場僅 15 分鐘車程，性價比高。辦理入住並放妥行李後，即可出發前往夜市吃宵夜與換匯。",
    tips: "💡 飯店離市區商圈近，隔天一早往北部移動非常順路！",
    mapsQuery: "Rosetta Hotel Phu Quoc Duong Dong"
  },
  {
    day: 1,
    time: "22:00 - 23:30",
    category: "美食",
    nameZh: "陽東夜市晚餐 & Robinson Pearl 店內換匯",
    nameVn: "Chợ Đêm Phú Quốc & Robinson Pearl",
    taxiVoice: "Chợ Đêm Phú Quốc",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 450000,
      unit: " / 人",
      labelPrefix: "晚餐約"
    },
    transport: "自飯店搭短程車或步行即達夜市商圈",
    address: "54 Đường Nguyễn Trãi, Khu Phố 1, Dương Đông, Phú Quốc",
    phone: "+84 297 3846 123",
    openingHours: "17:00 - 23:30",
    description: "第一晚海島宵夜時光！品嚐現烤香蔥花生海膽、越式炒冰捲、烤大蝦與法國麵包。夜市週邊知名珍珠珠寶門市「Robinson Pearl」提供美金或台幣換匯服務，匯率優渥透明且安全（越南盾匯率約 1:800）。",
    tips: "💡 換匯秘訣：攜帶 2013 年後發行、無折痕的百元美金新鈔換匯最划算！點活海鮮請先確認每公斤（1kg）單價。",
    mapsQuery: "Phu Quoc Night Market Cho Dem"
  },

  // ---------- DAY 2: 10/14 (三) 北部 ----------
  {
    day: 2,
    time: "09:00 - 10:00",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 搭車前往北部渡假區",
    nameVn: "Vinholidays Fiesta Phú Quốc",
    taxiVoice: "Khách sạn Vinholidays Fiesta Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "Grab 約 280,000 ₫ 或搭免費 VinBus",
      calcTwd: (r) => `Grab 約 NT$ ${Math.round(280000 / r)} / VinBus 免費`
    },
    transport: "搭乘 Grab 專車或搭乘免費綠色 VinBus 電動公車北上（車程約 35 分鐘）",
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc",
    phone: "VinBus: 1900 866 663",
    openingHours: "全天營運",
    description: "享用早餐後辦理退房，啟程往北島移動。北島是富國島最精彩的娛樂核心區，擁有野生動物園、VinWonders 水陸樂園與富國大世界威尼斯不夜城。",
    tips: "💡 手機可下載「VinBus APP」，即時查詢免費電動公車路線與到站動態！",
    mapsQuery: "Vinholidays Fiesta Phu Quoc"
  },
  {
    day: 2,
    time: "10:00 - 10:30",
    category: "交通",
    nameZh: "富國島溫佩假期1號 Check-in 寄放行李 (連住 2 晚)",
    nameVn: "Vinholidays Fiesta Phú Quốc",
    taxiVoice: "Vinholidays Fiesta Phú Quốc, Grand World",
    pricing: {
      type: "custom",
      vndText: "2晚 VN 4,891,494 ₫ (10/9 前免費取消)",
      calcTwd: () => "2晚約 NT$ 5,997 (已確認訂房)"
    },
    transport: "抵達飯店大廳",
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3550 550",
    openingHours: "24 小時前台服務",
    description: "入住座落於富國大世界核心園區內的「富國島溫佩假期1號 (Vinholidays Fiesta Phú Quốc)」，連住 2 晚免除每天整理換飯店的奔波。步行即達大世界運河商圈，前往 Safari 動物園與 VinWonders 樂園車程僅需 5 分鐘。",
    tips: "💡 先在櫃檯寄放大件行李，輕裝出發前往 Safari 動物園！",
    mapsQuery: "Vinholidays Fiesta Phu Quoc"
  },
  {
    day: 2,
    time: "11:00 - 15:00",
    category: "樂園",
    nameZh: "Vinpearl Safari 富國島野生動物園 (搭遊園巴士・猛禽區・長頸鹿餵食午餐・飛禽秀)",
    nameVn: "Vinpearl Safari Phú Quốc",
    taxiVoice: "Vinpearl Safari Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "Safari + VinWonders 雙人2日套票",
      calcTwd: () => "2人套票 NT$ 4,646"
    },
    transport: "搭乘免費接駁車或 Grab (約 8 分鐘)",
    address: "Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3636 699",
    openingHours: "08:30 - 16:00 (15:00 開始準備閉園)",
    description: "越南規模最大的開放式野生動物園！重點體驗：① 先搭乘特製防彈 Safari Bus 遊園，深入猛獸放養區與猛禽區，近距離觀察孟加拉虎、非洲獅、白犀牛與斑馬；② 13:00 前往「長頸鹿餐廳」購買紅蘿蔔與長頸鹿零距離餵食合照並享用午餐；③ 14:00 觀賞精彩的飛禽表演秀 (Bird Show，場次 10:00 & 14:00)；④ 走進互動區近距離觀賞可愛的環尾狐猴。",
    tips: "💡 2人 Safari + VinWonders 2日套票已包含入園，長頸鹿餵食紅蘿蔔每份約 30,000 ₫！",
    mapsQuery: "Vinpearl Safari Phu Quoc"
  },
  {
    day: 2,
    time: "15:00 - 16:30",
    category: "放鬆",
    nameZh: "閉園、回溫佩假期1號飯店休息・梳洗小憩",
    nameVn: "Vinholidays Fiesta Phú Quốc",
    taxiVoice: "Khách sạn Vinholidays Fiesta Phú Quốc",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "搭乘接駁車返回飯店",
    address: "Vinholidays Fiesta Phú Quốc",
    phone: "+84 297 3550 550",
    openingHours: "隨時",
    description: "結束動物園精彩行程後返回飯店正式進房，吹冷氣小憩補眠、使用飯店超大戶外泳池，為晚上的大世界、越南國粹秀與威尼斯不夜城儲備體力。",
    tips: "💡 稍作休養，準備迎接 16:30 的大世界歐風運河與夜晚大秀！",
    mapsQuery: "Vinholidays Fiesta Phu Quoc"
  },
  {
    day: 2,
    time: "16:30 - 19:00",
    category: "景點",
    nameZh: "Grand World 富國大世界 (竹林傳奇・威尼斯水上計程車・泰迪熊博物館・當代藝術公園)",
    nameVn: "Grand World Phú Quốc",
    taxiVoice: "Grand World Phú Quốc",
    pricing: {
      type: "free",
      vndText: "街區參觀免費",
      twdText: "街區免門票"
    },
    transport: "自飯店步行 3 分鐘即達大世界運河核心區",
    address: "Grand World, Khu Bãi Dài, Gành Dầu, Phú Quốc",
    phone: "+84 297 3737 373",
    openingHours: "全天 24 小時開放",
    description: "漫步在富國島版威尼斯彩色不夜城！造訪全越南最大的「竹林傳奇 (Bamboo Legend)」震撼竹構建築、漫步威尼斯貢多拉運河兩岸、打卡泰迪熊博物館週邊與當代藝術公園歐風街景。",
    tips: "💡 運河兩岸彩色房子傍晚點燈後拍照極美，建議穿亮色系衣服打卡！",
    mapsQuery: "Grand World Phu Quoc Bamboo Legend"
  },
  {
    day: 2,
    time: "19:00 - 20:15",
    category: "美食",
    nameZh: "大世界晚餐 (Bún Quậy Kiến Xây 小卷米粉)",
    nameVn: "Bún Quậy Kiến Xây (Grand World)",
    taxiVoice: "Quán Bún Quậy Kiến Xây, Grand World",
    pricing: {
      type: "vnd_range",
      min: 65000,
      max: 95000,
      unit: " / 碗",
      labelPrefix: "小卷米粉約"
    },
    transport: "大世界園區內步行",
    address: "Grand World Phú Quốc, Gành Dầu",
    phone: "現場",
    openingHours: "營業至 22:30",
    description: "品嚐富國島最知名特色小吃「Bún Quậy Kiến Xây」招牌小卷米粉！新鮮現燙蝦漿、魚漿與鮮甜小卷，搭配自己調配的金桔、朝天椒與胡椒鹽乳化特調沾醬，鮮味十足。",
    tips: "💡 小卷米粉吃法：自己調配金桔、朝天椒、砂糖與胡椒鹽醬汁，沾現燙小卷美味無比！",
    mapsQuery: "Bun Quay Kien Xay Grand World Phu Quoc"
  },
  {
    day: 2,
    time: "20:15 - 21:00",
    category: "樂園",
    nameZh: "當代藝術公園 - 越南國粹秀 (The Quintessence of Vietnam)",
    nameVn: "Tinh Hoa Việt Nam (The Quintessence of Vietnam)",
    taxiVoice: "Tinh Hoa Việt Nam, Grand World Phú Quốc",
    pricing: {
      type: "free",
      vndText: "套票/大世界實景演出",
      twdText: "包含於套票或現場入場"
    },
    transport: "步行至大世界當代藝術公園古城劇場",
    address: "Grand World, Gành Dầu, Phú Quốc",
    phone: "+84 297 3737 373",
    openingHours: "20:15 - 21:00 準時開演",
    description: "富國大世界最具文化震撼力的宏偉實景大秀「越南國粹秀 (Tinh Hoa Việt Nam)」！耗資數百萬美元打造，由 300 多位專業舞者在水上古典舞台精彩演繹越南古王朝的繁華、武術、民俗祭典與傳統文化。",
    tips: "💡 建議 20:00 提前就座，散場後正好接著前往中央愛情湖觀賞 21:00 水舞秀！",
    mapsQuery: "Tinh Hoa Viet Nam Grand World Phu Quoc"
  },
  {
    day: 2,
    time: "21:00 - 21:45",
    category: "景點",
    nameZh: "愛情湖威尼斯水上聲光水舞秀 (The Colors of Venice)",
    nameVn: "Hồ Tình Yêu, Grand World Phú Quốc",
    taxiVoice: "Hồ Tình Yêu, Grand World Phú Quốc",
    pricing: {
      type: "free",
      vndText: "全區免費觀賞",
      twdText: "完全免費"
    },
    transport: "步行至大世界愛情湖畔中央石橋",
    address: "Hồ Tình Yêu, Grand World, Gành Dầu",
    phone: "+84 297 3737 373",
    openingHours: "21:00 準時開演 (約 30 分鐘)",
    description: "晚上 21:00 準時在愛情湖畔上演的壓軸閉幕大秀！巨型發光機械道具船、3D 水幕投影、激光雷射與湖面盛裝舞者交織出極致視覺盛宴。大秀結束後悠閒散步即可回到溫佩假期1號飯店，完全無需等車！",
    tips: "💡 最佳觀秀機位：威尼斯石橋（Cầu Ánh Sáng）正中央，建議 20:45 提前佔據好視野！",
    mapsQuery: "The Colors of Venice Grand World Phu Quoc"
  },

  // ---------- DAY 3: 10/15 (四) 北部 ----------
  {
    day: 3,
    time: "09:00 - 11:00",
    category: "美食",
    nameZh: "飯店早餐 ➔ 前往 VinWonders 珍珠島水陸主題樂園",
    nameVn: "VinWonders Phú Quốc",
    taxiVoice: "VinWonders Phú Quốc",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "搭乘免費 VinBus 或大世界接駁車（約 5 分鐘車程）",
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3737 373",
    openingHours: "樂園 09:00 開園",
    description: "在飯店享用早餐後，搭乘接駁車前往被譽為「越南迪士尼」的夢幻主題樂園 VinWonders。今日以海龜海王宮殿巨型水族館、美人魚秀、魚群餵食秀、陸上各大奇幻城堡設施與閉幕 ONCE 秀為主軸。",
    tips: "💡 建議入園前先確認水族館各場次表演時間，拍照更順暢！",
    mapsQuery: "VinWonders Phu Quoc"
  },
  {
    day: 3,
    time: "11:00 - 18:45",
    category: "樂園",
    nameZh: "VinWonders 珍珠島水陸主題樂園 (海龜水族館・美人魚秀・餵食秀・閉幕煙火秀)",
    nameVn: "VinWonders Phú Quốc (The Sea Shell)",
    taxiVoice: "VinWonders Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "包含於 Safari + VinWonders 2日套票",
      calcTwd: () => "已含於雙園套票"
    },
    transport: "園區內步行",
    address: "VinWonders Phú Quốc, Gành Dầu",
    phone: "+84 297 3737 373",
    openingHours: "09:00 - 19:30 (18:45 閉幕秀，19:30 閉園)",
    description: "暢遊奇幻主題樂園（越南迪士尼）！重點攻略：① 11:00 打卡世界五大巨型海龜造型「海王宮殿水族館 (The Sea Shell)」；② 13:00 於海王宮殿水族館內享用午餐；③ 14:00 觀賞優雅夢幻的美人魚秀 (Mermaid Show)；④ 15:00 巨型大洋池魚群餵食秀；⑤ 體驗各大奇幻陸上遊樂設施；⑥ 18:45 觀賞城堡前華麗震撼的閉幕遊行煙火聲光秀「ONCE Show」。",
    tips: "💡 海龜水族館內冷氣極佳，是午後避暑的最佳去處！19:30 閉園後返回大世界。",
    mapsQuery: "VinWonders Phu Quoc Sea Shell"
  },
  {
    day: 3,
    time: "19:00 - 22:30",
    category: "放鬆",
    nameZh: "Grand World 富國大世界、晚餐 (逛街・按摩)",
    nameVn: "Grand World Phú Quốc & Massage",
    taxiVoice: "Grand World Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "60分鐘全身按摩約 250,000 ~ 380,000 ₫；晚餐約 280,000 ₫",
      calcTwd: (r) => `按摩約 NT$ ${Math.round(250000 / r)} ~ ${Math.round(380000 / r)}；晚餐約 NT$ ${Math.round(280000 / r)}`
    },
    transport: "自樂園搭接駁車返回大世界街區",
    address: "Grand World Phú Quốc, Gành Dầu",
    phone: "大世界商圈",
    openingHours: "營業至 23:30",
    description: "結束樂園一整天的歡樂行程，回到大世界運河旁挑選一家氣氛絕佳的餐廳享用晚餐。餐後安排一場道地的越式全身草藥精油按摩，徹底釋放雙腿疲勞，回溫佩假期1號飯店享受舒適好眠。",
    tips: "💡 推薦大世界商圈正規 SPA 按摩館，入店前可先確認價目表規範。",
    mapsQuery: "Grand World Phu Quoc"
  },

  // ---------- DAY 4: 10/16 (五) 南部 ----------
  {
    day: 4,
    time: "11:00 - 12:00",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 搭車前往南部日落小鎮 (Sunset Town)",
    nameVn: "Thị trấn Hoàng Hôn (Sunset Town)",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town, An Thới",
    pricing: {
      type: "vnd_range",
      min: 480000,
      max: 580000,
      unit: " (全車均攤)",
      labelPrefix: "Grab 專車約"
    },
    transport: "預約 Grab 專車由北島直達南島日落小鎮（車程約 50 分鐘）",
    address: "Thị trấn Hoàng Hôn (Sunset Town), An Thới, Phú Quốc",
    phone: "各飯店前台專線",
    openingHours: "隨時出發",
    description: "在溫佩假期1號飯店享用早餐後退房，準備「一路往南」！南島是富國島最浪漫的地中海風情核心區，著名的親吻橋、跨海纜車與海洋之吻大秀皆匯聚於此。",
    tips: "💡 約 12:00 抵達日落小鎮辦理行李寄放，即可展開地中海街區漫步。",
    mapsQuery: "Sunset Town Phu Quoc An Thoi"
  },
  {
    day: 4,
    time: "12:00 - 12:30",
    category: "交通",
    nameZh: "富國日落小鎮諾沃斯索爾飯店公寓 Check-in 寄放行李 (連住 2 晚)",
    nameVn: "Khách sạn Novus Sol Sunset Town",
    taxiVoice: "Khách sạn Novus Sol, Sunset Town, An Thới",
    pricing: {
      type: "custom",
      vndText: "2晚 VN 2,660,869 ₫ (10/12 前免費取消)",
      calcTwd: () => "2晚約 NT$ 3,262 (已確認訂房)"
    },
    transport: "抵達日落小鎮飯店大廳",
    address: "Thị trấn Hoàng Hôn (Sunset Town), An Thới, TP. Phú Quốc",
    phone: "+84 297 3999 777",
    openingHours: "24 小時前台",
    description: "入住座落於日落小鎮核心的「富國日落小鎮諾沃斯索爾飯店公寓 (Novus Sol Hotel & Apartment Sunset Town Phu Quoc)」，連住南部 2 晚。緊鄰地中海小鎮廣場、親吻橋與纜車站，看完全球頂級大秀與煙火後，可直接步行回到飯店休息！",
    tips: "💡 寄放行李後即可漫步出門探索地中海風情街道並享用午餐。",
    mapsQuery: "Novus Sol Hotel Sunset Town Phu Quoc"
  },
  {
    day: 4,
    time: "12:00 - 15:00",
    category: "美食",
    nameZh: "午餐 - 日落小鎮 Sunset Town (逛街漫步)",
    nameVn: "Thị trấn Hoàng Hôn (Sunset Town)",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town",
    pricing: {
      type: "vnd_range",
      min: 180000,
      max: 350000,
      unit: " / 人",
      labelPrefix: "午餐約"
    },
    transport: "小鎮內悠閒步行",
    address: "Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "各餐廳現場",
    openingHours: "全天開放",
    description: "挑選一家座落於小鎮海景街區的特色餐館享用午餐。漫步在彷彿義大利阿瑪菲海岸的五彩斑斕街道中，打卡聖馬可鐘樓、羅馬競技場拱門、星巴克海景旗艦店與特色噴泉雕塑，每個轉角都是絕美大片視角。",
    tips: "💡 推薦穿著亮色系或白色度假風洋裝/襯衫，在彩色建築群中拍照層次感極佳！",
    mapsQuery: "Sunset Town Phu Quoc Thi tran Hoang Hon"
  },
  {
    day: 4,
    time: "15:00 - 17:00",
    category: "放鬆",
    nameZh: "返回飯店休息小憩・吹冷氣充電",
    nameVn: "Khách sạn Novus Sol Sunset Town",
    taxiVoice: "Khách sạn Novus Sol, Sunset Town",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "步行返回飯店",
    address: "Sunset Town, An Thới",
    phone: "飯店前台",
    openingHours: "隨時",
    description: "下午時段返回飯店吹冷氣小憩補眠，避開正午烈日，為傍晚海鮮晚餐與晚上的海洋之吻旗艦大秀儲備最佳體力。",
    tips: "💡 稍作休養，準備前往 17:00 的在地海鮮大餐！",
    mapsQuery: "Novus Sol Hotel Sunset Town Phu Quoc"
  },
  {
    day: 4,
    time: "17:00 - 19:00",
    category: "美食",
    nameZh: "晚餐 (海鮮餐廳 369 Đ. Nguyễn Văn Cừ)",
    nameVn: "Nhà hàng Hải Sản 369",
    taxiVoice: "Nhà hàng Hải Sản 369, 369 Nguyễn Văn Cừ, An Thới",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 450000,
      unit: " / 人",
      labelPrefix: "晚餐約"
    },
    transport: "搭乘 Grab 短程直達（約 5 分鐘）",
    address: "369 Đường Nguyễn Văn Cừ, Phường An Thới, TP. Phú Quốc",
    phone: "+84 918 369 369",
    openingHours: "10:00 - 22:30",
    description: "安泰在地高口碑海鮮餐廳「369 Đ. Nguyễn Văn Cừ」！各式生猛活體海鮮現點現秤現煮，招牌烤大蝦、清蒸花蟹、蒜蓉烤生蠔與越式海鮮火鍋鮮美無比，價格實惠公道。",
    tips: "💡 用餐後返回日落小鎮，準備 20:00 提前進場卡位 Kiss of the Sea！",
    mapsQuery: "369 Nguyen Van Cu An Thoi Phu Quoc"
  },
  {
    day: 4,
    time: "21:00 - 21:30",
    category: "樂園",
    nameZh: "Kiss of the Sea 海之吻光影秀 (20:00 須先進場卡位・壓軸高空煙火)",
    nameVn: "Sân khấu Kiss of the Sea",
    taxiVoice: "Sân khấu Kiss of the Sea, Sunset Town",
    pricing: {
      type: "custom",
      vndText: "纜車 + Kiss Of The Sea 雙人套票",
      calcTwd: () => "2人套票 NT$ 3,410"
    },
    transport: "日落小鎮主圓形水上劇場（步行 3 分鐘）",
    address: "Sân khấu mái vòm Kiss of the Sea, Sunset Town, An Thới",
    phone: "+84 886 045 888",
    openingHours: "21:00 準時開演 (20:00 須先進場卡位)",
    description: "耗資數百萬美元打造的全球頂級多媒體水幕光影秀（週二休息）！由 60 位國際舞者登台，融合巨型水幕投影、高空火柱、雷射與壯麗音效。大秀結束時，長達數分鐘的「高空璀璨煙火」在海面與地中海小鎮上空震撼綻放，為南島留下最浪漫的巔峰回憶！",
    tips: "💡 重要提醒：20:00 須先進場卡位佔據中段最佳視野！煙火結束後步行即可回到 Novus Sol 飯店，避開所有車潮。",
    mapsQuery: "Kiss of the Sea Show Sunset Town"
  },

  // ---------- DAY 5: 10/17 (六) 南部 ----------
  {
    day: 5,
    time: "09:00 - 11:00",
    category: "美食",
    nameZh: "悠閒早餐 ➔ 前往安泰纜車站",
    nameVn: "Ga Cáp treo Hòn Thơm (Sun World)",
    taxiVoice: "Ga Cáp treo Hòn Thơm, An Thới",
    pricing: {
      type: "free",
      vndText: "包含於套票 / 贈送纜車票",
      twdText: "已含於套票憑證"
    },
    transport: "步行或接駁車至日落小鎮安泰纜車站 (Ga Ánh Dương)",
    address: "Bãi Đất Đỏ, Phường An Thới, TP. Phú Quốc, Kiên Giang",
    phone: "+84 886 045 888",
    openingHours: "纜車上午營運：09:00-11:30",
    description: "在日落小鎮享用早餐後，前往安泰纜車站。準備搭乘獲金氏世界紀錄認證的香島跨海纜車前往香島自然公園！",
    tips: "💡 請先確認手機內已載妥纜車門票憑證 QR Code，上午 09:00-11:30 搭乘可避開排隊人潮！",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 5,
    time: "11:00 - 13:00",
    category: "樂園",
    nameZh: "Hon Thom 香島跨海纜車 - 去 ➔ 太陽世界香島自然公園 (水陸設施)",
    nameVn: "Ga Cáp treo Hòn Thơm & Sun World Hon Thom",
    taxiVoice: "Ga Cáp treo Hòn Thơm, An Thới",
    pricing: {
      type: "custom",
      vndText: "包含於纜車套票",
      calcTwd: () => "已含於套票"
    },
    transport: "搭乘跨海纜車飛越安泰群島（單程約 20 分鐘）",
    address: "Đảo Hòn Thơm, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "全世界最長跨海纜車去程：09:00-11:30",
    description: "搭乘全世界最長的跨海纜車（全長 7,899 公尺）！360度全景玻璃車廂凌空飛越安泰群島，俯瞰無數彩色漁船與碧綠珊瑚海灣。抵達香島後暢遊 Sun World Hon Thom Nature Park 太陽世界香島自然公園，體驗水上與陸上遊樂設施。",
    tips: "💡 纜車中午有保養休息時段，下午回程時段為 13:30-17:00！",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 5,
    time: "13:00 - 15:00",
    category: "美食",
    nameZh: "午餐 - 香島園內用餐",
    nameVn: "Nhà hàng Sun World Hòn Thơm",
    taxiVoice: "Nhà hàng Hòn Thơm, An Thới",
    pricing: {
      type: "vnd_range",
      min: 150000,
      max: 280000,
      unit: " / 人",
      labelPrefix: "園內午餐約"
    },
    transport: "香島園區內步行",
    address: "Đảo Hòn Thơm, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "11:00 - 15:00",
    description: "在香島太陽世界自然公園內景觀餐廳享用午餐，享受熱帶海島植被與海浪景觀，補充體力。",
    tips: "💡 園內有多樣化自助餐與單點餐飲選擇。",
    mapsQuery: "Sun World Hon Thom Nature Park"
  },
  {
    day: 5,
    time: "15:00 - 15:30",
    category: "交通",
    nameZh: "Hon Thom 香島跨海纜車 - 回 ➔ 返回日落小鎮本島",
    nameVn: "Ga Cáp treo Hòn Thơm (Về)",
    taxiVoice: "Ga Cáp treo Hòn Thơm, An Thới",
    pricing: {
      type: "free",
      vndText: "包含於來回套票",
      twdText: "已含"
    },
    transport: "搭乘纜車返回日落小鎮本島",
    address: "Thị trấn Hoàng Hôn, An Thới",
    phone: "+84 886 045 888",
    openingHours: "全世界最長跨海纜車回程：13:30-17:00",
    description: "搭乘全世界最長的跨海纜車下午回程時段（13:30-17:00）返回日落小鎮本島，飽覽午後陽光照耀下的蔚藍泰國灣全景。",
    tips: "💡 下午 15:00 返程正好銜接親吻橋購票漫步與夕陽水上大秀！",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 5,
    time: "15:00 - 17:30",
    category: "景點",
    nameZh: "購票上 Kiss Bridge 親吻橋 (看夕陽・拍照・水上活動表演)",
    nameVn: "Cầu Hôn (Kiss Bridge Sunset Town)",
    taxiVoice: "Cầu Hôn, Thị trấn Hoàng Hôn",
    pricing: {
      type: "custom",
      vndText: "現場購票或套票憑證",
      calcTwd: (r) => `約 NT$ ${Math.round(100000 / r)} (或套票包含)`
    },
    transport: "自纜車站沿海濱步道步行即達親吻橋",
    address: "Cầu Hôn, Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "全天開放 (最佳夕陽時段 16:30 - 17:30)",
    description: "購票踏上由義大利建築大師設計的世紀地標「吻橋 (Kiss Bridge)」！兩座橋身自南北兩側優雅伸向大海，在中央相隔 30 公分。近距離欣賞海面上空極限水上摩托車與水上飛人特技表演，傍晚 16:30~17:30 捕捉落日金光落在雙橋指尖縫隙間的世紀剪影！",
    tips: "💡 站在北橋與南橋交會點，利用手機長焦鏡頭借位拍出親吻夕陽的經典照片！",
    mapsQuery: "Kiss Bridge Phu Quoc Cau Hon"
  },
  {
    day: 5,
    time: "18:00 - 19:00",
    category: "放鬆",
    nameZh: "LUMI SPA 按摩 (日落小鎮專業舒壓水療)",
    nameVn: "LUMI SPA Sunset Town",
    taxiVoice: "LUMI SPA, Thị trấn Hoàng Hôn, An Thới",
    pricing: {
      type: "vnd_range",
      min: 350000,
      max: 600000,
      unit: " / 療程",
      labelPrefix: "SPA 按摩約"
    },
    transport: "日落小鎮步行即達",
    address: "Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "+84 297 3777 999",
    openingHours: "10:00 - 23:30",
    description: "座落於南部日落小鎮的高質感 SPA 水療館，提供深層精油熱石按摩、肩頸穴道舒壓與足部護理，徹底舒緩白天走橋與香島的腿部疲勞。",
    tips: "💡 按摩後整個人放鬆舒暢，接著享用景觀晚餐！",
    mapsQuery: "LUMI SPA Sunset Town Phu Quoc"
  },
  {
    day: 5,
    time: "19:00 - 20:00",
    category: "美食",
    nameZh: "晚餐 (景觀餐廳優先)",
    nameVn: "Nhà hàng Sunset Town",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 450000,
      unit: " / 人",
      labelPrefix: "晚餐約"
    },
    transport: "日落小鎮海景餐廳漫步",
    address: "Bờ biển Thị trấn Hoàng Hôn, An Thới",
    phone: "現場",
    openingHours: "全天開放",
    description: "挑選一家座落於懸崖邊或海濱看台旁的海景景觀餐廳享用美味晚餐，伴隨海風與地中海小鎮迷人夜景乾杯。",
    tips: "💡 景觀餐廳氣氛絕佳，適合拍照留念。",
    mapsQuery: "Sunset Town Phu Quoc"
  },
  {
    day: 5,
    time: "20:00 - 22:30",
    category: "美食",
    nameZh: "VUI-Fest Bazaar 海濱夜市、日落小鎮夜市 (逛街漫遊)",
    nameVn: "Chợ đêm Vui-Fest Bazaar",
    taxiVoice: "Chợ đêm Vui-Fest, Sunset Town",
    pricing: {
      type: "vnd_range",
      min: 150000,
      max: 300000,
      unit: " / 人",
      labelPrefix: "夜市小吃約"
    },
    transport: "小鎮海濱步道漫步",
    address: "Bờ biển Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "現場",
    openingHours: "17:00 - 23:00",
    description: "漫步於全越南最浪漫的海濱文青夜市「Vui-Fest Bazaar」與日落小鎮夜市，欣賞街頭打擊樂秀 Loảng Xoảng Show 與文創手作市集，品嚐特色熱帶飲品與海島小吃，享受愜意的地中海夜晚。",
    tips: "💡 逛完後悠閒走回 Novus Sol 飯店休息。",
    mapsQuery: "Vui-Fest Bazaar Sunset Town"
  },

  // ---------- DAY 6: 10/18 (日) 中部 ----------
  {
    day: 6,
    time: "11:00 - 12:00",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 搭車前往中部渡假區",
    nameVn: "Dương Tơ / Dương Đông",
    taxiVoice: "Khách sạn Mường Thanh Luxury Phú Quốc, Dương Tơ",
    pricing: {
      type: "vnd_range",
      min: 240000,
      max: 320000,
      unit: " (全車均攤)",
      labelPrefix: "Grab 專車約"
    },
    transport: "退房後搭乘 Grab 專車返回中部（車程約 20 分鐘）",
    address: "Bãi Trường, Dương Tơ, Phú Quốc",
    phone: "飯店前台",
    openingHours: "隨時出發",
    description: "享受輕鬆慢活早晨，享用早餐後辦理退房，專車返回中部渡假區，入住海景奢華孟青飯店。最後一晚住中部離機場僅 10 分鐘，免除隔天趕飛機的奔波風險！",
    tips: "💡 中部交通極為便利，前往 Sonasea 商圈、桑奈托沙灘與機場都很近！",
    mapsQuery: "Muong Thanh Luxury Phu Quoc Hotel"
  },
  {
    day: 6,
    time: "12:00 - 13:00",
    category: "交通",
    nameZh: "富國島奢華孟青飯店 Check-in 寄放行李",
    nameVn: "Muong Thanh Luxury Phu Quoc Hotel",
    taxiVoice: "Khách sạn Mường Thanh Luxury Phú Quốc, Dương Tơ",
    pricing: {
      type: "custom",
      vndText: "1晚 VN 2,274,896 ₫ (10/11 前免費取消)",
      calcTwd: () => "約 NT$ 2,789 (已確認訂房)"
    },
    transport: "抵達飯店大廳",
    address: "Khu phức hợp Bãi Trường, Ấp Đường Bào, Xã Dương Tơ, TP. Phú Quốc",
    phone: "+84 297 3645 555",
    openingHours: "24 小時服務",
    description: "入住座落於中部 Long Beach 渡假區的五星規格「富國島奢華孟青飯店 (Muong Thanh Luxury Phu Quoc Hotel)」。飯店設施豪華齊全，緊鄰沙灘與 Sonasea 街區，離機場僅 10 分鐘車程。",
    tips: "💡 辦理登記並寄放大件行李，即可輕鬆出發享用在地午餐。",
    mapsQuery: "Muong Thanh Luxury Phu Quoc Hotel"
  },
  {
    day: 6,
    time: "13:00 - 14:30",
    category: "美食",
    nameZh: "午餐 - Sonasea 夜市 / 商圈美食",
    nameVn: "Khu phố Sonasea Shopping Center",
    taxiVoice: "Sonasea Shopping Center, Dương Tơ",
    pricing: {
      type: "vnd_range",
      min: 100000,
      max: 200000,
      unit: " / 人",
      labelPrefix: "午餐約"
    },
    transport: "自飯店步行 3 分鐘即達 Sonasea 步行商圈",
    address: "Sonasea Villas & Resort, Bãi Trường, Dương Tơ, Phú Quốc",
    phone: "現場",
    openingHours: "全天開放",
    description: "在緊鄰飯店的 Sonasea 步行街商圈享用午餐，品嚐道地越南河粉、碎米烤肉飯或海島冰品咖啡，享受悠閒的午後漫活時光。",
    tips: "💡 街區內有便利商店、咖啡館與各式餐廳，環境寬敞舒適。",
    mapsQuery: "Sonasea Night Market Phu Quoc"
  },
  {
    day: 6,
    time: "15:00 - 17:30",
    category: "放鬆",
    nameZh: "桑奈托日落海灘 (Sunset Sanato Beach Club) 日落沙灘下午茶",
    nameVn: "Sunset Sanato Beach Club",
    taxiVoice: "Sunset Sanato Beach, Dương Tơ",
    pricing: {
      type: "custom",
      vndText: "門票約 100,000 ₫；飲品約 70,000 ~ 120,000 ₫",
      calcTwd: (r) => `門票約 NT$ ${Math.round(100000 / r)}；飲品約 NT$ ${Math.round(70000 / r)} ~ ${Math.round(120000 / r)}`
    },
    transport: "搭乘 Grab 專車前往 Sunset Sanato（約 8 分鐘）",
    address: "Bãi Trường, Tổ 3, Ấp Đường Bào, Xã Dương Tơ, Phú Quốc",
    phone: "+84 297 6266 662",
    openingHours: "09:00 - 21:00",
    description: "造訪富國島最具代表性的網美日落聖地「桑奈托日落海灘 (Sunset Sanato)」！打卡佇立在海中的超現實長腿大象雕塑、通往天堂之梯與巨女人頭雕像。點一杯椰子咖啡冰沙或熱帶果汁，坐在沙灘躺椅上欣賞富國島最後一個醉人的金色日落。",
    tips: "💡 傍晚 16:30~17:30 是拍攝海中長腿大象剪影的最佳黃金魔幻時刻！",
    mapsQuery: "Sunset Sanato Beach Club Phu Quoc"
  },
  {
    day: 6,
    time: "18:00 - 20:00",
    category: "美食",
    nameZh: "晚餐 (海鮮餐廳)",
    nameVn: "Nhà hàng Hải sản Bãi Trường / Dương Đông",
    taxiVoice: "Nhà hàng Hải sản, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 300000,
      max: 600000,
      unit: " / 人",
      labelPrefix: "海鮮大餐約"
    },
    transport: "搭車前往海鮮餐廳",
    address: "Bãi Trường / Dương Đông, Phú Quốc",
    phone: "各海景餐廳現場",
    openingHours: "17:00 - 23:00",
    description: "在海景餐廳享用豐盛的海島告別海鮮晚餐！品嚐現烤蒜蓉奶油龍蝦、香煎海斑魚、越式炸春捲與清蒸花蟹，伴隨海浪聲乾杯。",
    tips: "💡 點活海鮮時務必先確認每公斤（1kg）計價並過磅瀝水！",
    mapsQuery: "Long Beach Phu Quoc Tran Hung Dao"
  },
  {
    day: 6,
    time: "20:00 - 22:30",
    category: "購物",
    nameZh: "Sonasea 夜市 or 陽東夜市 (金剛超市伴手禮採買) ➔ Như Ý 越式洗頭 ➔ ZEN SPA 按摩",
    nameVn: "Chợ Đêm & Siêu thị Kingkong Mart & Như Ý Hair Spa & ZEN SPA",
    taxiVoice: "Như Ý Hair Spa, Dương Đông",
    pricing: {
      type: "custom",
      vndText: "採買腰果胡椒約 400,000 ₫；越式洗頭按摩約 250,000 ₫",
      calcTwd: (r) => `採買約 NT$ ${Math.round(400000 / r)}；洗頭按摩約 NT$ ${Math.round(250000 / r)}`
    },
    transport: "搭乘 Grab 專車或步行",
    address: "Dương Đông, Phú Quốc",
    phone: "+84 966 690 999",
    openingHours: "營業至 23:30",
    description: "旅程最後一晚的採買與放鬆盛宴！① 前往金剛超市（Kingkong Mart）或夜市採買四大富國島必買特產：黑/紅胡椒粒、帶皮大腰果、中原傳奇咖啡與優質魚露；② 體驗知名「Như Ý Hair Spa Phú Quốc」道地草藥越式洗頭與「ZEN SPA」全身精油熱石舒壓按摩，徹底洗去一身疲憊！",
    tips: "💡 購買胡椒與腰果務必選擇密封真空包裝，行李箱好收納且能防潮保鮮！",
    mapsQuery: "Kingkong Mart Phu Quoc Tran Hung Dao"
  },

  // ---------- DAY 7: 10/19 (一) 返台 ----------
  {
    day: 7,
    time: "08:00 - 09:00",
    category: "美食",
    nameZh: "早餐、Check-out (搭車前往機場・須提前 2.5 小時 09:00 抵達機場)",
    nameVn: "Khách sạn Mường Thanh Luxury Phú Quốc",
    taxiVoice: "Khách sạn Mường Thanh Luxury Phú Quốc",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "飯店餐廳享用早餐後辦理退房",
    address: "飯店內",
    phone: "前台",
    openingHours: "06:30 - 09:00",
    description: "享用飯店早餐後辦理退房，收拾行李。搭車前往富國國際機場 PQC（車程僅約 10 分鐘）。須提前 2.5 小時（09:00）抵達機場第一航站櫃檯辦理報到手續。",
    tips: "💡 隨身行李再次檢查護照正本、機票與行動電源（行動電源嚴禁托運，需隨身攜帶）。",
    mapsQuery: "Muong Thanh Luxury Phu Quoc Hotel"
  },
  {
    day: 7,
    time: "11:30 - 16:10",
    category: "交通",
    nameZh: "PQC 富國島 → 桃園 TPE (Sun PhuQuoc Airways 9G 510)",
    nameVn: "Sân bay Quốc tế Phú Quốc ✈ Sân bay Đào Viên",
    taxiVoice: "Sân bay Phú Quốc (Ga đi)",
    pricing: {
      type: "custom",
      vndText: "Grab 車資約 80,000 ₫",
      calcTwd: (r) => `車資約 NT$ ${Math.round(80000 / r)}`
    },
    transport: "Grab 叫車至富國機場（約 10 分鐘）；搭乘 Sun PhuQuoc 9G 510 (A321NEO)",
    address: "Sân bay Quốc tế Phú Quốc (PQC)",
    phone: "+84 297 3848 078",
    openingHours: "航班起飛前 2.5 小時開櫃報到",
    description: "由孟青飯店搭車約 10 分鐘抵達富國國際機場。辦理登機與托運行李手續，出境大廳內有免稅店可做最後巡禮。搭乘 Sun PhuQuoc Airways 9G 510 (11:30 富國島起飛 ➔ 16:10 平安抵達台北桃園機場 TPE)。",
    tips: "💡 魚露特別提醒：所有航空公司嚴禁隨身手提一般瓶裝魚露上機，若有購買需為機場免稅店官方合格密封盒！",
    mapsQuery: "Phu Quoc International Airport PQC"
  },
  {
    day: 7,
    time: "16:10 - 18:00",
    category: "交通",
    nameZh: "抵達桃園機場 T1 ➔ 18:00 回溫暖的家",
    nameVn: "Sân bay Quốc tế Đào Viên (TPE)",
    taxiVoice: "Sân bay Đào Viên",
    pricing: {
      type: "custom",
      vndText: "機捷 / 接送約 160 NT$",
      calcTwd: () => "約 NT$ 160"
    },
    transport: "搭乘桃園機場捷運或專車返家",
    address: "桃園國際機場第一航廈",
    phone: "+886 3 273 5081",
    openingHours: "24 小時",
    description: "16:10 平安抵達台北桃園國際機場第一航廈，領取托運行李並順暢通關，搭乘機場捷運返家，約 18:00 回到溫暖的家，圓滿結束 7 天 6 夜充實精彩的富國島海島渡假旅程！",
    tips: "💡 回家後好好休息，整理美麗的照片與難忘回憶！",
    mapsQuery: "Taoyuan International Airport Terminal 1"
  }
];

// ==========================================
// 2. DATA: BACKUP POCKET PLACES (備選私房口袋清單)
// ==========================================
const BACKUP_PLACES_DATA = [
  // ---------- 美食老饕 (FOOD) ----------
  {
    id: "p_food_1",
    category: "food",
    categoryZh: "🍲 美食老饕",
    area: "中部陽東",
    nameZh: "Bún quậy Kiến-Xây 招牌小卷米粉 (創始本店)",
    nameVn: "Bún quậy Kiến-Xây (A-C noodles)",
    taxiVoice: "Quán Bún quậy Kiến-Xây, 28 Bạch Đằng, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 65000,
      max: 90000,
      unit: " / 碗",
      labelPrefix: "小卷米粉約"
    },
    address: "28 Đường Bạch Đằng, Phường Dương Đông, TP. Phú Quốc",
    phone: "+84 838 718 714",
    openingHours: "07:00 - 23:00",
    description: "富國島最傳奇的小卷米粉創始發源總店！新鮮現打蝦漿、手打魚漿與整隻鮮嫩小卷在滾水中現燙，顧客自己親手調配金桔、砂糖與胡椒辣醬，湯頭鮮甜無比，老饕必訪。",
    tips: "💡 隱藏吃法：自己調配金桔3顆 + 糖1匙 + 朝天椒 + 胡椒鹽，瘋狂攪拌成乳化粉紅色沾醬！",
    mapsQuery: "Bun quay Kien-Xay Bach Dang Phu Quoc"
  },
  {
    id: "p_food_2",
    category: "food",
    categoryZh: "🍲 美食老饕",
    area: "中部陽東",
    nameZh: "Cơm Tấm Chín Tâm 炭烤香茅排骨碎米飯",
    nameVn: "Quán Cơm Tấm Chín Tâm",
    taxiVoice: "Quán Cơm Tấm Chín Tâm, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 50000,
      max: 80000,
      unit: " / 份",
      labelPrefix: "排骨飯約"
    },
    address: "Đường Nguyễn Trãi / 30 Tháng 4, Dương Đông, Phú Quốc",
    phone: "+84 918 234 567",
    openingHours: "06:30 - 20:30",
    description: "陽東在地人激推的平價排骨飯名店！厚切豬排經過香茅特調醬汁醃漬後炭火現烤，外焦裡嫩、香氣撲鼻，搭配肉皮蒸蛋與荷包蛋，淋上酸甜魚露，飽足感十足。",
    tips: "💡 推薦加點一顆半熟蛋 (Trứng ốp la)，蛋黃拌著碎米飯吃絕配！",
    mapsQuery: "Com Tam Chin Tam Phu Quoc"
  },
  {
    id: "p_food_3",
    category: "food",
    categoryZh: "🍲 美食老饕",
    area: "中部陽東",
    nameZh: "Nhà Xưa 68 復古越南家常菜海鮮餐廳",
    nameVn: "Nhà hàng Nhà Xưa 68",
    taxiVoice: "Nhà hàng Nhà Xưa 68, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 150000,
      max: 280000,
      unit: " / 人",
      labelPrefix: "家常合菜約"
    },
    address: "68 Đường Lý Thường Kiệt, Dương Đông, Phú Quốc",
    phone: "+84 297 3992 268",
    openingHours: "10:00 - 22:00",
    description: "充滿越南古董懷舊風情的庭園餐廳，招牌菜包含：焦糖陶鍋燉魚 (Cá kho tộ)、越式酸辣魚湯 (Canh chua cá)、香茅炒蛤蜊與越式炸春捲，環境古色古香且價格透明公道。",
    tips: "💡 推薦 2~4 人點合菜分食，每道菜都極下飯！",
    mapsQuery: "Nha Xua 68 Restaurant Phu Quoc"
  },
  {
    id: "p_food_4",
    category: "food",
    categoryZh: "🍲 美食老饕",
    area: "中部陽東",
    nameZh: "Ra Khơi Seafood 出海活海鮮大排檔",
    nameVn: "Nhà hàng Ra Khơi Phú Quốc",
    taxiVoice: "Nhà hàng Ra Khơi, 131 Đường 30 Tháng 4, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 500000,
      unit: " / 人",
      labelPrefix: "活海鮮約"
    },
    address: "131 Đường 30 Tháng 4, Dương Đông, Phú Quốc",
    phone: "+84 918 096 096",
    openingHours: "10:00 - 23:00",
    description: "陽東鎮上人氣最旺的活海鮮餐廳之一，水槽海鮮透明過磅瀝水確認價格。必點：炭烤香蔥海膽、蒜蓉奶油皮皮蝦（巨型螳螂蝦）、清蒸花蟹與胡椒炒小卷。",
    tips: "💡 入座點海鮮時，請店家在眼前過磅並確認料理方式與總價後再下鍋！",
    mapsQuery: "Ra Khoi Restaurant Phu Quoc 30 Thang 4"
  },
  {
    id: "p_food_5",
    category: "food",
    categoryZh: "🍲 美食老饕",
    area: "中部陽東",
    nameZh: "Bánh Xèo Cuội Quán 酥脆越南煎餅",
    nameVn: "Bánh Xèo Cuội Quán",
    taxiVoice: "Bánh Xèo Cuội Quán, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 60000,
      max: 120000,
      unit: " / 份",
      labelPrefix: "煎餅約"
    },
    address: "Dương Đông, Phú Quốc",
    phone: "+84 939 123 456",
    openingHours: "15:00 - 22:00",
    description: "金黃薄脆的薑黃椰奶煎餅皮，包覆鮮蝦、豆芽與豬五花。吃法是用薄米紙捲上生菜、薄荷葉、九層塔與煎餅，沾酸甜辣魚露醬汁大口咬下，外脆內嫩層次豐富。",
    tips: "💡 傳統在地下午點心，現點現煎香氣四溢！",
    mapsQuery: "Banh Xeo Cuoi Quan Phu Quoc"
  },

  // ---------- 海景咖啡與酒吧 (CAFE & BAR) ----------
  {
    id: "p_cafe_1",
    category: "cafe",
    categoryZh: "☕ 海景咖啡/酒吧",
    area: "中部陽東",
    nameZh: "58 CAFÉ 復古法式文青咖啡館",
    nameVn: "58 CAFÉ Phú Quốc",
    taxiVoice: "58 CAFÉ, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 45000,
      max: 85000,
      unit: " / 杯",
      labelPrefix: "特調咖啡約"
    },
    address: "Dương Đông, Phú Quốc",
    phone: "+84 908 585 858",
    openingHours: "07:00 - 22:30",
    description: "充滿法式復古工業風的質感冷氣咖啡廳，座位寬敞安靜，招牌經典鋁壺滴漏咖啡、鹽奶蓋冰咖啡與椰子咖啡冰沙非常道地，避暑小憩好去處。",
    tips: "💡 推薦 Bạc xỉu（白咖啡，煉乳奶香濃厚）或 Cà phê muối（海鹽奶蓋咖啡）！",
    mapsQuery: "58 CAFE Phu Quoc"
  },
  {
    id: "p_cafe_2",
    category: "cafe",
    categoryZh: "☕ 海景咖啡/酒吧",
    area: "中部陽東",
    nameZh: "Island Phu Quoc 熱帶綠植庭園咖啡",
    nameVn: "Island Coffee Phú Quốc",
    taxiVoice: "Island Coffee, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 50000,
      max: 95000,
      unit: " / 杯",
      labelPrefix: "熱帶飲品約"
    },
    address: "Dương Đông, Phú Quốc",
    phone: "+84 932 789 123",
    openingHours: "07:30 - 22:00",
    description: "綠意盎然的熱帶植物庭院咖啡廳，拍照採光極佳，提供精緻手工蛋糕甜點、熱帶芒果冰沙與冷萃黑咖啡，是午後放空好去處。",
    tips: "💡 室內外皆有座位，戶外花園採光非常適合拍渡假風美照！",
    mapsQuery: "Island Coffee Phu Quoc"
  },
  {
    id: "p_cafe_3",
    category: "cafe",
    categoryZh: "☕ 海景咖啡/酒吧",
    area: "中部陽東制高點",
    nameZh: "Chuồn Chuồn Bistro & Sky Bar 俯瞰全島全景日落酒吧",
    nameVn: "Chuồn Chuồn Bistro & Sky Bar",
    taxiVoice: "Chuồn Chuồn Bistro & Sky Bar, Đồi Sao Mai, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 80000,
      max: 180000,
      unit: " / 杯",
      labelPrefix: "景觀調酒/飲品約"
    },
    address: "Đồi Sao Mai, Phường Dương Đông, Phú Quốc",
    phone: "+84 297 3608 883",
    openingHours: "07:30 - 23:00",
    description: "座落於陽東鎮制高點 Sao Mai 山丘上的景觀餐廳酒吧，能 180 度居高臨下俯瞰整個陽東市景與海灣日落，傍晚來喝調酒看金色晚霞氣氛絕頂！",
    tips: "💡 建議 17:00 前抵達佔據露台第一排景觀座位，看日落漸層天色！",
    mapsQuery: "Chuon Chuon Bistro & Sky Bar Phu Quoc"
  },
  {
    id: "p_cafe_4",
    category: "cafe",
    categoryZh: "☕ 海景咖啡/酒吧",
    area: "中部 Long Beach",
    nameZh: "OCSEN Beach Bar & Club 橘色沙灘懶骨頭火舞酒吧",
    nameVn: "OCSEN Beach Bar & Club",
    taxiVoice: "OCSEN Beach Bar, 118/10 Trần Hưng Đạo, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 70000,
      max: 150000,
      unit: " / 杯",
      labelPrefix: "入場飲品約"
    },
    address: "118/10 Đường Trần Hưng Đạo, Dương Đông, Phú Quốc",
    phone: "+84 902 298 886",
    openingHours: "16:00 - 01:00 (每晚 21:00 火舞秀)",
    description: "富國島網美打卡第一名沙灘酒吧！沙灘上鋪滿標誌性的亮橘色懶骨頭沙發，每晚日落時分有 DJ 音樂，21:00 還有震撼精彩的沙灘火舞表演 (Fire Show)。",
    tips: "💡 週末人潮眾多，建議傍晚 17:00 前進場佔據前排沙灘懶骨頭！",
    mapsQuery: "OCSEN Beach Bar & Club Phu Quoc"
  },
  {
    id: "p_cafe_5",
    category: "cafe",
    categoryZh: "☕ 海景咖啡/酒吧",
    area: "中部陽東夜市",
    nameZh: "夜市原粒椰子手工冰淇淋 (Coconut Ice Cream)",
    nameVn: "Kem Dừa Phú Quốc",
    taxiVoice: "Chợ Đêm Phú Quốc",
    pricing: {
      type: "vnd_range",
      min: 40000,
      max: 60000,
      unit: " / 份",
      labelPrefix: "椰子冰約"
    },
    address: "Chợ Đêm Phú Quốc, Dương Đông",
    phone: "夜市現場",
    openingHours: "17:00 - 23:30",
    description: "使用整顆新鮮椰子當碗，刮出滿滿鮮甜椰肉，挖上兩大球香濃椰奶冰淇淋，再撒上烤花生碎、椰絲與煉乳，夜市逛街必吃解暑甜品。",
    tips: "💡 逛夜市吃完烤海鮮後，來一份冰涼椰子冰超級解膩！",
    mapsQuery: "Phu Quoc Night Market Coconut Ice Cream"
  },

  // ---------- 備選景點 (ATTRACTIONS) ----------
  {
    id: "p_att_1",
    category: "attraction",
    categoryZh: "🏖️ 備選景點",
    area: "東南部",
    nameZh: "護國寺 (Chùa Hộ Quốc) — 背山面海宏偉禪院",
    nameVn: "Chùa Hộ Quốc (Thiền viện Trúc Lâm)",
    taxiVoice: "Chùa Hộ Quốc, Xã Dương Tơ",
    pricing: {
      type: "free",
      vndText: "免費參觀 (自由參拜)",
      twdText: "免費參觀"
    },
    transport: "Grab 專車前往（陽東出發約 25 分鐘車程）",
    address: "Ấp Suối Lớn, Xã Dương Tơ, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3990 000",
    openingHours: "06:00 - 18:00",
    description: "富國島規模最宏偉的背山面海佛教聖地！依山傍海而建，登上長長的祥龍漢白玉石階後，能一覽無遺俯瞰壯麗的泰國灣碧海藍天，清晨看海景日出氣勢磅礡。",
    tips: "💡 參觀寺廟請穿著過膝長褲或長裙，保持莊嚴寧靜。",
    mapsQuery: "Chua Ho Quoc Phu Quoc Truc Lam"
  },
  {
    id: "p_att_2",
    category: "attraction",
    categoryZh: "🏖️ 備選景點",
    area: "東南部安泰",
    nameZh: "星星海灘 (Bãi Sao / Starfish Beach) — 白沙如奶粉",
    nameVn: "Bãi Sao Phú Quốc",
    taxiVoice: "Bãi Sao, Phường An Thới, TP. Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "沙灘免費 (租躺椅約 50,000~100,000 ₫)",
      calcTwd: (r) => `入場免費 (躺椅約 NT$ ${Math.round(50000 / r)} ~ ${Math.round(100000 / r)})`
    },
    transport: "Grab 專車直達（近南島日落小鎮）",
    address: "Ấp 4, Bãi Sao, Phường An Thới, TP. Phú Quốc",
    phone: "現場",
    openingHours: "全天開放 (推薦白天 09:00 - 16:00)",
    description: "被譽為富國島沙質最細膩的海灘，純白細沙如奶粉般柔軟，海水呈現夢幻清澈的蒂芬妮藍，海面平靜如鏡，椰林樹影，適合踏浪與拍照。",
    tips: "💡 海水極淺平緩，拍照時可租借椰子樹下標誌性鞦韆打卡！",
    mapsQuery: "Bai Sao Beach Phu Quoc An Thoi"
  },
  {
    id: "p_att_3",
    category: "attraction",
    categoryZh: "🏖️ 備選景點",
    area: "東部海岸",
    nameZh: "涵寧古漁村 (Làng Chài Hàm Ninh) — 百年木棧道與海鮮產地",
    nameVn: "Làng Chài Hàm Ninh",
    taxiVoice: "Làng Chài Hàm Ninh, Rạch Hàm, Phú Quốc",
    pricing: {
      type: "free",
      vndText: "參觀免費 (海鮮現點現秤自費)",
      twdText: "免費參觀"
    },
    transport: "Grab 專車前往（陽東出發約 20 分鐘）",
    address: "Xã Hàm Ninh, TP. Phú Quốc, Kiên Giang",
    phone: "現場",
    openingHours: "06:00 - 20:00",
    description: "富國島最古老的傳統漁村，延伸至海中的木棧橋極富歲月韻味，清晨日出極美，也是島上海蟹（Ghẹ Hàm Ninh）最便宜新鮮的捕撈發源地。",
    tips: "💡 適合清晨看日出或傍晚前往品嚐水上餐廳新鮮花蟹！",
    mapsQuery: "Ham Ninh Fishing Village Phu Quoc"
  },
  {
    id: "p_att_4",
    category: "attraction",
    categoryZh: "🏖️ 備選景點",
    area: "南部安泰",
    nameZh: "富國島監獄歷史古蹟 (Nhà tù Phú Quốc / Coconut Tree Prison)",
    nameVn: "Nhà tù Phú Quốc (Nhà lao Cây Dừa)",
    taxiVoice: "Nhà tù Phú Quốc, 350 Nguyễn Văn Cừ, An Thới",
    pricing: {
      type: "free",
      vndText: "免費參觀 (自由捐獻)",
      twdText: "免費參觀"
    },
    transport: "Grab 專車直達（日落小鎮車程約 8 分鐘）",
    address: "350 Nguyễn Văn Cừ, Phường An Thới, TP. Phú Quốc",
    phone: "+84 297 3860 113",
    openingHours: "07:30 - 17:00",
    description: "富國島重要的歷史人文古蹟，完整保留了過去的鐵絲網、牢房、虎籠與地道模型，生動呈現戰爭時期的歷史記憶，具備深厚歷史教育意義。",
    tips: "💡 園區戶外較曬，建議攜帶遮陽傘與水瓶。",
    mapsQuery: "Phu Quoc Prison Nha Tu An Thoi"
  },

  // ---------- 特產購物 (SHOPPING) ----------
  {
    id: "p_shop_1",
    category: "shopping",
    categoryZh: "🛍️ 特產購物",
    area: "中部陽東",
    nameZh: "Robinson Pearl 羅賓森珍珠珠寶門市 (換匯首選)",
    nameVn: "Robinson Pearl Phú Quốc",
    taxiVoice: "Robinson Pearl, Dương Đông",
    pricing: {
      type: "custom",
      vndText: "換匯免手續費；飾品數萬至數百萬盾不等",
      calcTwd: () => "依當日換匯行情"
    },
    address: "Dương Đông, Phú Quốc",
    phone: "+84 297 3988 888",
    openingHours: "08:00 - 22:00",
    description: "陽東鎮上誠信老牌的珍珠門市，提供安全、匯率優渥的美金/台幣換匯服務，同時展示富國島頂級海水珍珠、黑珍珠工藝品與飾品。",
    tips: "💡 換匯請出示 2013 年後發行之百元美金新鈔，匯率最佳！",
    mapsQuery: "Robinson Pearl Phu Quoc"
  },
  {
    id: "p_shop_2",
    category: "shopping",
    categoryZh: "🛍️ 特產購物",
    area: "中部 Long Beach",
    nameZh: "金剛超市 Long Beach 旗艦店 (Kingkong Mart)",
    nameVn: "Siêu thị Kingkong Mart",
    taxiVoice: "Siêu thị Kingkong Mart, 141A Trần Hưng Đạo, Dương Đông",
    pricing: {
      type: "custom",
      vndText: "特產零食伴手禮明碼標價",
      calcTwd: () => "明碼標價可刷卡"
    },
    address: "141A Đường Trần Hưng Đạo, Dương Đông, Phú Quốc",
    phone: "+84 966 690 999",
    openingHours: "08:00 - 23:00",
    description: "全島商品最齊全、價格最公道的大型量販超市！所有富國黑/紅胡椒粒、帶皮大腰果、中原傳奇咖啡、波羅蜜果乾、越南泡麵與防蚊液應有盡有，支援信用卡扣款。",
    tips: "💡 購買胡椒與腰果請指名真空密封袋包裝，方便行李箱防潮收納！",
    mapsQuery: "Kingkong Mart Phu Quoc Tran Hung Dao"
  },
  {
    id: "p_shop_3",
    category: "shopping",
    categoryZh: "🛍️ 特產購物",
    area: "中部陽東漁港",
    nameZh: "陽東傳統早市 (Chợ Dương Đông) — 清晨漁港在地文化",
    nameVn: "Chợ Dương Đông",
    taxiVoice: "Chợ Dương Đông, 21 Đường Trần Phú",
    pricing: {
      type: "custom",
      vndText: "依現撈海鮮與早點品項自費",
      calcTwd: () => "在地銅板價"
    },
    address: "21 Đường Trần Phú, Phường Dương Đông, TP. Phú Quốc",
    phone: "現場",
    openingHours: "05:00 - 11:00 (06:00~08:00 最熱鬧)",
    description: "富國島在地人清晨採買的靈魂市場！清晨漁船靠港，各類野生海魚、海膽、魷魚現撈秤重，周邊還有熱氣騰騰的現煮牛肉河粉、烤豬肉法國麵包與熱帶水果。",
    tips: "💡 想體驗最接地氣的海島早晨，建議 06:30~07:30 前往！",
    mapsQuery: "Duong Dong Market Cho Duong Dong"
  },

  // ---------- 洗頭與舒壓 SPA (SPA & MASSAGE) ----------
  {
    id: "p_spa_1",
    category: "spa",
    categoryZh: "💆 洗頭舒壓",
    area: "中部陽東",
    nameZh: "Như Ý Hair Spa 專業養生越式洗頭門市",
    nameVn: "Như Ý Hair Spa Phú Quốc",
    taxiVoice: "Như Ý Hair Spa, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 180000,
      max: 280000,
      unit: " / 療程",
      labelPrefix: "越式洗頭約"
    },
    address: "Dương Đông, Phú Quốc",
    phone: "+84 966 123 789",
    openingHours: "09:00 - 23:00",
    description: "評價極佳的專業越式洗頭水療館！完整 60~90 分鐘療程包含：草藥水循環薰蒸、頭皮深層清潔、水循環沖洗、肩頸穴道放鬆、臉部去角質與天然小黃瓜敷臉舒壓。",
    tips: "💡 晚上洗完頭整個人極致清爽，回飯店能享受最深層的高品質睡眠！",
    mapsQuery: "Nhu Y Hair Spa Phu Quoc"
  },
  {
    id: "p_spa_2",
    category: "spa",
    categoryZh: "💆 洗頭舒壓",
    area: "中部陽東",
    nameZh: "ZEN SPA 專業泰越精油熱石按摩館",
    nameVn: "ZEN SPA Phú Quốc",
    taxiVoice: "ZEN SPA, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 450000,
      unit: " / 60分",
      labelPrefix: "全身按摩約"
    },
    address: "Dương Đông, Phú Quốc",
    phone: "+84 297 3998 899",
    openingHours: "09:00 - 23:30",
    description: "陽東鎮知名高評價正規 SPA 按摩館，手法到位專業，提供全身精油芳療、熱石舒壓按摩、足底穴道按摩與草藥包熱敷，環境安靜典雅。",
    tips: "💡 入店可選擇輕柔、中等或深層力道，放鬆整天雙腿疲勞！",
    mapsQuery: "ZEN SPA Phu Quoc"
  },
  {
    id: "p_spa_3",
    category: "spa",
    categoryZh: "💆 洗頭舒壓",
    area: "南部日落小鎮",
    nameZh: "LUMI SPA 日落小鎮五星規格舒壓水療館",
    nameVn: "LUMI SPA Sunset Town",
    taxiVoice: "LUMI SPA, Thị trấn Hoàng Hôn, An Thới",
    pricing: {
      type: "vnd_range",
      min: 350000,
      max: 600000,
      unit: " / 療程",
      labelPrefix: "精油芳療約"
    },
    address: "Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "+84 297 3777 999",
    openingHours: "10:00 - 23:30",
    description: "座落於南部日落小鎮的地中海風質感 SPA 館，看完全球大秀後步行即可抵達，提供深層精油放鬆、曬後蘆薈修復與足部護理，裝潢時尚新穎。",
    tips: "💡 建議觀賞 21:00 海洋之吻大秀前先預約 21:45 的按摩時段！",
    mapsQuery: "LUMI SPA Sunset Town Phu Quoc"
  },
  {
    id: "p_spa_4",
    category: "spa",
    categoryZh: "💆 洗頭舒壓",
    area: "中部 Long Beach",
    nameZh: "Galina 熱帶花園天然礦物泥漿溫泉 (Mud Bath & Spa)",
    nameVn: "Galina Mud Bath & Spa Phú Quốc",
    taxiVoice: "Galina Mud Bath & Spa, Trần Hưng Đạo, Dương Tơ",
    pricing: {
      type: "vnd_range",
      min: 300000,
      max: 500000,
      unit: " / 人",
      labelPrefix: "泥浴水療約"
    },
    address: "Đường Trần Hưng Đạo, Xã Dương Tơ, Phú Quốc",
    phone: "+84 297 3999 999",
    openingHours: "08:00 - 19:00",
    description: "結合熱帶海景花園與天然礦物泥漿浴的溫泉水療體驗！泥漿溫熱滑順富含礦物質，能深層滋潤肌膚，泡完泥浴後再享受水療衝擊池與泳池，消暑又放鬆。",
    tips: "💡 園區提供泳衣浴巾租借，建議自備深色泳裝體驗！",
    mapsQuery: "Galina Phu Quoc Mud Bath & Spa"
  },

  // ---------- 備選飯店 (HOTELS) ----------
  {
    id: "p_hotel_1",
    category: "hotel",
    categoryZh: "🏨 備選飯店",
    area: "中部 Long Beach",
    nameZh: "杜斯特公主月出海灘度假村 (Dusit Princess Moonrise)",
    nameVn: "Dusit Princess Moonrise Beach Resort",
    taxiVoice: "Dusit Princess Moonrise Beach Resort, Trần Hưng Đạo",
    pricing: {
      type: "vnd_range",
      min: 2800000,
      max: 4500000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    address: "Đường Trần Hưng Đạo, Xã Dương Tơ, TP. Phú Quốc",
    phone: "+84 297 6266 688",
    openingHours: "24 小時服務",
    description: "泰國知名五星奢華酒店品牌！擁有開闊海景無邊際泳池、泰式熱情服務與精緻海景客房，多數預訂方案含免費機場接送專車，第6晚中部換住首選。",
    tips: "💡 緊鄰沙灘，傍晚在泳池畔躺椅上看日落非常浪漫！",
    mapsQuery: "Dusit Princess Moonrise Beach Resort Phu Quoc"
  },
  {
    id: "p_hotel_2",
    category: "hotel",
    categoryZh: "🏨 備選飯店",
    area: "南部日落小鎮",
    nameZh: "富國島希爾頓格芮精選 La Festa (La Festa Phu Quoc, Curio Collection)",
    nameVn: "La Festa Phu Quoc, Curio Collection by Hilton",
    taxiVoice: "Khách sạn La Festa Phu Quoc, Sunset Town, An Thới",
    pricing: {
      type: "vnd_range",
      min: 3500000,
      max: 6500000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    address: "Thị trấn Hoàng Hôn, An Thới, TP. Phú Quốc",
    phone: "+84 297 3555 888",
    openingHours: "24 小時服務",
    description: "緊鄰日落小鎮鐘樓與親吻橋的希爾頓奢華海景酒店，陽台直面海洋之吻水舞秀與煙火，頂級義大利阿瑪菲宮廷風設計，極盡奢華浪漫。",
    tips: "💡 房間陽台即是觀賞夜間海洋之吻大秀與高空煙火的頂級私人包廂！",
    mapsQuery: "La Festa Phu Quoc Curio Collection by Hilton"
  },
  {
    id: "p_hotel_3",
    category: "hotel",
    categoryZh: "🏨 備選飯店",
    area: "南部日落小鎮",
    nameZh: "蔚藍尊貴海景公寓 (Azure Premium Apartment)",
    nameVn: "Azure Premium Apartment Sunset Town",
    taxiVoice: "Azure Premium Apartment, Sunset Town, An Thới",
    pricing: {
      type: "vnd_range",
      min: 1200000,
      max: 2000000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    address: "Sunset Town, An Thới, TP. Phú Quốc",
    phone: "+84 909 888 777",
    openingHours: "24 小時前台",
    description: "擁有開闊地中海海景的景觀公寓酒店，附小廚房、獨立客廳與陽台，適合喜愛大空間與家庭朋友入住，性價比極高。",
    tips: "💡 步行 3 分鐘即達日落小鎮中心廣場與親吻橋！",
    mapsQuery: "Azure Premium Apartment Sunset Town Phu Quoc"
  },
  {
    id: "p_hotel_4",
    category: "hotel",
    categoryZh: "🏨 備選飯店",
    area: "北部星灣",
    nameZh: "富國島星灣假日皇冠五星酒店 (Crowne Plaza Phu Quoc Starbay)",
    nameVn: "Crowne Plaza Phu Quoc Starbay",
    taxiVoice: "Crowne Plaza Phu Quoc Starbay, Khu Bãi Dài, Gành Dầu",
    pricing: {
      type: "vnd_range",
      min: 2600000,
      max: 4200000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3888 888",
    openingHours: "24 小時服務",
    description: "北部奢華五星渡假村，擁有私人白沙灘、巨大環形泳池與熱帶雨林景觀，離 Safari 動物園與 VinWonders 樂園車程僅 10 分鐘，渡假氛圍濃厚。",
    tips: "💡 飯店提供免費接駁車前往富國大世界與機場！",
    mapsQuery: "Crowne Plaza Phu Quoc Starbay"
  }
];

// Helper to compute spot prices dynamically
function computeSpotCost(spot, rate) {
  const p = spot.pricing;
  if (!p) return { vnd: "即時行情", twd: "以匯率換算" };

  if (p.type === "fixed_twd") {
    return {
      vnd: p.vndLabel || `約 ${(p.twd * rate).toLocaleString()} ₫`,
      twd: p.twdLabel || `約 NT$ ${p.twd.toLocaleString()}`
    };
  }
  if (p.type === "free") {
    return { vnd: p.vndText, twd: p.twdText };
  }
  if (p.type === "vnd_range") {
    const twdMin = Math.round(p.min / rate);
    const twdMax = Math.round(p.max / rate);
    return {
      vnd: `${p.labelPrefix} ${p.min.toLocaleString()} ~ ${p.max.toLocaleString()} ₫${p.unit || ''}`,
      twd: `約 NT$ ${twdMin.toLocaleString()} ~ ${twdMax.toLocaleString()}${p.unit || ''}`
    };
  }
  if (p.type === "custom") {
    return {
      vnd: p.vndText,
      twd: p.calcTwd(rate)
    };
  }
  return { vnd: "即時行情", twd: "以匯率換算" };
}

// ==========================================
// 3. DATA: BUDGET TABLE & QUICK MATRIX
// ==========================================
const BUDGET_ITEMS_DATA = [
  { icon: "✈️", name: "直飛來回機票", desc: "Sun PhuQuoc 直飛特惠 (2人含20kg托運行李/稅金/贈送香島纜車門票)", twd2p: 12824, ratio: "22.8%" },
  { icon: "🏨", name: "6 晚精選住宿", desc: "1 間雙人房：羅塞塔(1晚 1,629) + 溫佩假期1號(2晚 5,997) + 諾沃斯索爾(2晚 3,262) + 孟青奢華(1晚 2,789)", twd2p: 13677, ratio: "24.3%" },
  { icon: "🎟️", name: "樂園與大秀門票", desc: "雙人2日套票 Safari+VinWonders(4,646) + 雙人套票 纜車+海之吻(3,410)", twd2p: 8056, ratio: "14.3%" },
  { icon: "🍲", name: "7 日餐飲與海鮮", desc: "每日三餐、小卷米粉、369海鮮餐廳、海景日落餐廳、夜市美食等", twd2p: 12000, ratio: "21.3%" },
  { icon: "🚗", name: "全島 Grab 交通", desc: "機場來回接送、北中南跨區專車 (搭配北部免費 VinBus)", twd2p: 3000, ratio: "5.3%" },
  { icon: "🛡️", name: "旅遊平安保險", desc: "2人全程海外旅遊平安險與不便險保障", twd2p: 1737, ratio: "3.1%" },
  { icon: "🛍️", name: "其他消費與舒壓", desc: "金剛超市伴手禮、Như Ý 越式洗頭、ZEN/LUMI 按摩等", twd2p: 5000, ratio: "8.9%" }
];

const QUICK_MATRIX_DATA = [
  { vnd: 10000, desc: "礦泉水 / 街頭甘蔗汁" },
  { vnd: 40000, desc: "炭烤蔥油海膽 / 法國麵包" },
  { vnd: 70000, desc: "Bún quậy 小卷米粉 / 椰子咖啡" },
  { vnd: 250000, desc: "如意越式洗頭 / 60分鐘按摩" },
  { vnd: 850000, desc: "Safari 野生動物園全票" },
  { vnd: 1500000, desc: "Safari + VinWonders 雙園套票" }
];

// ==========================================
// 4. DATA: VIETNAMESE SURVIVAL PHRASES
// ==========================================
const PHRASES_DATA = [
  // Taxi & Location (Short & Pure Destination for Driver)
  { category: "taxi", vn: "Cho tôi đến đây", pinyin: "對問地登代", zh: "請載我到這裡 (出示手機)" },
  { category: "taxi", vn: "Khách sạn Rosetta Phú Quốc", pinyin: "卡傘羅塞塔", zh: "羅塞塔酒店 (ROSETTA HOTEL)" },
  { category: "taxi", vn: "Vinholidays Fiesta Phú Quốc", pinyin: "溫佩假期一號", zh: "溫佩假期1號飯店 (Grand World)" },
  { category: "taxi", vn: "Novus Sol Hotel Sunset Town", pinyin: "諾沃斯索爾飯店", zh: "諾沃斯索爾飯店公寓 (Sunset Town)" },
  { category: "taxi", vn: "Muong Thanh Luxury Phu Quoc", pinyin: "孟青奢華飯店", zh: "富國島奢華孟青飯店 (Long Beach)" },
  { category: "taxi", vn: "Nhà hàng Hải Sản 369", pinyin: "三六九海鮮", zh: "369 海鮮餐廳 (Nguyễn Văn Cừ)" },
  { category: "taxi", vn: "LUMI SPA Sunset Town", pinyin: "露米水療", zh: "LUMI SPA (日落小鎮)" },
  { category: "taxi", vn: "Vinpearl Safari", pinyin: "珍珠野生動物園", zh: "野生動物園" },
  { category: "taxi", vn: "VinWonders Phú Quốc", pinyin: "珍珠奇幻樂園", zh: "珍珠水陸主題樂園" },
  { category: "taxi", vn: "Grand World Phú Quốc", pinyin: "富國大世界", zh: "富國大世界 (不夜城)" },
  { category: "taxi", vn: "Thị trấn Hoàng Hôn, Sunset Town", pinyin: "日落小鎮", zh: "日落小鎮 Sunset Town" },
  { category: "taxi", vn: "Ga Cáp treo Hòn Thơm", pinyin: "香島跨海纜車", zh: "香島跨海纜車站" },
  { category: "taxi", vn: "Cầu Hôn", pinyin: "親吻橋", zh: "吻橋 Kiss Bridge" },
  { category: "taxi", vn: "Sunset Sanato Beach Club", pinyin: "桑奈托日落海灘", zh: "桑奈托日落海灘 (長腿大象)" },
  { category: "taxi", vn: "Chợ Đêm Phú Quốc", pinyin: "陽東夜市", zh: "陽東夜市" },
  { category: "taxi", vn: "Chợ Đêm Sonasea", pinyin: "索納西夜市", zh: "Sonasea 夜市商圈" },
  { category: "taxi", vn: "Siêu thị Kingkong Mart", pinyin: "金剛超市", zh: "金剛超市 Kingkong Mart" },
  { category: "taxi", vn: "Robinson Pearl", pinyin: "羅賓森珍珠換匯", zh: "Robinson Pearl 珠寶換匯門市" },
  { category: "taxi", vn: "Như Ý Hair Spa", pinyin: "如意美髮水療", zh: "如意越式洗頭 Hair Spa" },
  { category: "taxi", vn: "ZEN SPA Phú Quốc", pinyin: "禪水療", zh: "ZEN SPA 按摩館" },
  { category: "taxi", vn: "Sân bay Phú Quốc", pinyin: "富國島機場", zh: "富國國際機場" },
  { category: "taxi", vn: "Dừng lại ở đây, cảm ơn", pinyin: "榮來鵝代，感恩", zh: "請停在這裡，謝謝" },
  { category: "taxi", vn: "Bật đồng hồ tính tiền giúp tôi", pinyin: "博同火頂頂友對", zh: "請按跳表計費" },

  // Order & Food
  { category: "order", vn: "Xin chào!", pinyin: "新潮！", zh: "你好！" },
  { category: "order", vn: "Cảm ơn!", pinyin: "感恩！", zh: "謝謝！" },
  { category: "order", vn: "Cho tôi xem thực đơn", pinyin: "抽對先特騰", zh: "請給我看一下菜單" },
  { category: "order", vn: "Cho tôi một tô bún quậy", pinyin: "抽對莫斗奔刮", zh: "請給我一碗招牌小卷米粉" },
  { category: "order", vn: "Cho tôi một đĩa cơm tấm sườn", pinyin: "抽對莫碟更丹森", zh: "請給我一份排骨碎米飯" },
  { category: "order", vn: "Cho tôi một ly cà phê sữa đá", pinyin: "抽對莫利卡啡素搭", zh: "請給我一杯冰煉乳咖啡" },
  { category: "order", vn: "Không cay", pinyin: "空蓋", zh: "不要辣！" },
  { category: "order", vn: "Không bỏ rau mùi", pinyin: "空薄饒美", zh: "不要香菜！" },
  { category: "order", vn: "Tính tiền", pinyin: "頂頂", zh: "買單結帳！" },

  // Shopping
  { category: "shopping", vn: "Bao nhiêu tiền?", pinyin: "包妞頂？", zh: "這個多少錢？" },
  { category: "shopping", vn: "Đắt quá! Giảm giá được không?", pinyin: "得瓜！樣價得空？", zh: "太貴了！可以算便宜點嗎？" },
  { category: "shopping", vn: "Tôi lấy cái này", pinyin: "對淚該耐", zh: "我要買這個" },

  // Emergency
  { category: "emergency", vn: "Làm ơn giúp tôi!", pinyin: "藍恩友對！", zh: "請幫幫我！" },
  { category: "emergency", vn: "Tôi bị lạc đường", pinyin: "對比辣等", zh: "我迷路了" },
  { category: "emergency", vn: "Nhà vệ sinh ở đâu?", pinyin: "雅威新鵝逗？", zh: "請問洗手間在哪裡？" }
];

// ==========================================
// 5. DATA: PACKING CHECKLIST
// ==========================================
const CHECKLIST_DATA = [
  {
    category: "重要證件、保險與金融",
    icon: "🛂",
    items: [
      { id: "c1_0", text: "旅遊平安保險 (海外突發醫療與不便險)" },
      { id: "c1_1", text: "護照正本 (效期需滿 6 個月以上)" },
      { id: "c1_2", text: "機票影印本 (來回電子機票紙本行程單 + 手機截圖)" },
      { id: "c1_3", text: "電子入境卡影印本 (抵達前 72 小時內線上申報完成截圖)" },
      { id: "c1_4", text: "住宿訂房紀錄影印 (羅塞塔 / 溫佩假期 / 諾沃斯索爾 / 孟青)" },
      { id: "c1_5", text: "美金現鈔 (2013年後百元新鈔無折痕，Robinson Pearl 換匯最優)" },
      { id: "c1_6", text: "台幣現鈔 (備用)" },
      { id: "c1_7", text: "信用卡 (海外高回饋，Grab 扣款與大筆消費必備)" },
      { id: "c1_8", text: "紙筆 (隨身筆記與填寫文件備用)" }
    ]
  },
  {
    category: "常備藥品與健康防護",
    icon: "💊",
    items: [
      { id: "c2_1", text: "腸胃藥 (胃散、止瀉藥，適應海鮮與夜市飲食)" },
      { id: "c2_2", text: "感冒藥 (綜合感冒退燒藥)" },
      { id: "c2_3", text: "止痛藥" },
      { id: "c2_4", text: "消炎藥" },
      { id: "c2_5", text: "慢性病藥 (個人日常固定常備處方藥品)" },
      { id: "c2_6", text: "眼藥水 (舒緩眼部乾澀與防風沙)" },
      { id: "c2_7", text: "防蚊液 (Safari 動物園與戶外防蚊)" },
      { id: "c2_8", text: "外傷藥膏" },
      { id: "c2_9", text: "OK 繃 (防水型創口貼)" }
    ]
  },
  {
    category: "3C 電子與電力通訊",
    icon: "🔌",
    items: [
      { id: "c3_1", text: "攝影器材 (相機 / 手機三軸穩定器 / 備用記憶卡)" },
      { id: "c3_2", text: "電源轉接插頭 (越南雙圓孔/雙扁孔通用轉接頭)" },
      { id: "c3_3", text: "充電器 (手機 / 3C 設備快速充電頭)" },
      { id: "c3_4", text: "多孔充電器 (USB / Type-C 多孔延長排插)" },
      { id: "c3_5", text: "行動電源 (隨身行李攜帶上機，嚴禁托運)" },
      { id: "c3_6", text: "越南上網 eSIM / 實體 SIM 卡 (Viettel / Vinaphone / Sun PhuQuoc)" }
    ]
  },
  {
    category: "個人盥洗與衛生清潔",
    icon: "🪥",
    items: [
      { id: "c4_1", text: "盥洗用具 (牙刷、牙膏、旅行裝洗沐用品)" },
      { id: "c4_2", text: "刮鬍刀" },
      { id: "c4_3", text: "小包面紙 (隨身衛生紙、抗菌濕紙巾)" },
      { id: "c4_4", text: "平板衛生紙" },
      { id: "c4_5", text: "小方巾 (吸汗擦手必備)" }
    ]
  },
  {
    category: "防曬、配件與玩水裝備",
    icon: "🏖️",
    items: [
      { id: "c5_1", text: "防曬乳液 (高係數 SPF 50+ 海洋友善防曬)" },
      { id: "c5_2", text: "太陽眼鏡 (抗 UV 偏光鏡)" },
      { id: "c5_3", text: "帽子 (大遮陽草帽 / 棒球帽)" },
      { id: "c5_4", text: "眼鏡擦拭布" },
      { id: "c5_5", text: "泳衣 / 泳褲 (飯店無邊際泳池、水上樂園與海灘必備)" },
      { id: "c5_6", text: "蛙鏡 (水上活動與泳池戲水必備)" },
      { id: "c5_7", text: "防水小背包 (出海與海灘防潑水)" },
      { id: "c5_8", text: "雨傘 (輕便折疊晴雨傘)" },
      { id: "c5_9", text: "拖鞋 (海灘防滑拖鞋 / 涼鞋)" }
    ]
  }
];

// ==========================================
// 6. APPLICATION CONTROLLER
// ==========================================
let currentDayFilter = "all";
let currentPlaceFilter = "all";
let placesSearchQuery = "";
let currentPhraseFilter = "all";
let exchangeRate = 800; // 1 TWD = 800 VND

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDayFilters();
  initPlaces();
  initCurrencyCalculator();
  initPhrases();
  initChecklist();
  
  // Initial renders
  renderDynamicCurrencyElements();
  renderSpots();
  renderPlaces();
  renderPhrases();
  renderChecklist();
});

// Toast notification
function showToast(message, icon = "✅") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// Copy to clipboard helper
window.copyText = function(text, label = "內容") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`已複製${label}：${text}`, "📋");
    }).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
};

function fallbackCopy(text, label) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`已複製${label}！`, "📋");
  } catch (err) {
    showToast("複製失敗，請手動選取複製", "⚠️");
  }
  document.body.removeChild(textArea);
}

// Crisp, authentic native Vietnamese speech for Grab/Taxi drivers & phrases
window._currentAudio = null;

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    try { window.speechSynthesis.getVoices(); } catch (e) {}
  };
}

window.speakVietnamese = function(text) {
  if (!text) return;
  // Clean text: strip brackets, parens, and any non-Vietnamese characters
  const cleanDestination = text
    .replace(/\(.*?\)/g, '')
    .replace(/（.*?）/g, '')
    .replace(/\[.*?\]/g, '')
    .replace(/【.*?】/g, '')
    .replace(/[\u4e00-\u9fa5]/g, '') // strip Chinese characters
    .replace(/\s+/g, ' ')
    .trim();
    
  if (!cleanDestination) return;

  // Stop any currently playing audio or speech
  if (window._currentAudio) {
    try {
      window._currentAudio.pause();
      window._currentAudio.currentTime = 0;
    } catch (e) {}
    window._currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }

  showToast(`🔊 播放越南語發音：${cleanDestination}`, "🇻🇳");

  // 1. Primary: 100% Pure Native Google Translate Vietnamese TTS (MP3 stream)
  const encodedText = encodeURIComponent(cleanDestination);
  const primaryUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodedText}`;
  
  const audio = new Audio();
  audio.referrerPolicy = "no-referrer";
  audio.src = primaryUrl;
  window._currentAudio = audio;
  
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      // 2. Secondary backup: Googleapis TTS endpoint
      const backupUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=vi&client=gtx&q=${encodedText}`;
      const backupAudio = new Audio();
      backupAudio.referrerPolicy = "no-referrer";
      backupAudio.src = backupUrl;
      window._currentAudio = backupAudio;

      const backupPromise = backupAudio.play();
      if (backupPromise !== undefined) {
        backupPromise.catch(() => {
          fallbackSpeechSynthesis(cleanDestination);
        });
      }
    });
  }
};

function fallbackSpeechSynthesis(cleanText) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.85;
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => 
    (v.lang && (v.lang.toLowerCase().startsWith('vi') || v.lang.toLowerCase().includes('vn'))) ||
    (v.name && v.name.toLowerCase().includes('vietnam'))
  );

  // Safeguard: ONLY speak with browser TTS if an actual Vietnamese voice exists on this device!
  // Prevents default English/Chinese TTS engines from mispronouncing Vietnamese text awkwardly.
  if (viVoice) {
    utterance.voice = viVoice;
    window.speechSynthesis.speak(utterance);
  }
}

const ACTIVE_TAB_KEY = "phu_quoc_active_tab_v3";
const ACTIVE_DAY_KEY = "phu_quoc_selected_day_v3";
const DAY_BAR_SCROLL_KEY = "phu_quoc_day_bar_scroll_v3";
const CUSTOM_RATE_KEY = "phu_quoc_custom_rate_v3";

function scrollItineraryToTop() {
  const itineraryTab = document.getElementById("tab-itinerary");
  if (!itineraryTab || !itineraryTab.classList.contains("active")) return;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// ==========================================
// 7. TAB NAVIGATION
// ==========================================
function initTabs() {
  const topTabs = document.querySelectorAll(".nav-tab");
  const bottomTabs = document.querySelectorAll(".bottom-nav-item");
  const tabContents = document.querySelectorAll(".tab-content");

  function switchTab(tabId, shouldScrollTop = true) {
    topTabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabId));
    bottomTabs.forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
    tabContents.forEach(content => content.classList.toggle("active", content.id === `tab-${tabId}`));
    
    // Save active tab
    try {
      localStorage.setItem(ACTIVE_TAB_KEY, tabId);
    } catch (e) {}

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Restore saved tab on load
  try {
    const savedTab = localStorage.getItem(ACTIVE_TAB_KEY);
    if (savedTab && document.getElementById(`tab-${savedTab}`)) {
      switchTab(savedTab, false);
    }
  } catch (e) {}

  topTabs.forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));
  bottomTabs.forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));
}

function initDayFilters() {
  const dayPillsContainer = document.querySelector(".day-pills");
  const dayPills = document.querySelectorAll(".day-pill");
  const allPill = document.querySelector('.day-pill[data-day="all"]');

  // 1. Restore saved day filter from localStorage
  try {
    const savedDay = localStorage.getItem(ACTIVE_DAY_KEY);
    if (savedDay) {
      currentDayFilter = savedDay;
      dayPills.forEach(p => p.classList.toggle("active", p.dataset.day === savedDay));
    }
  } catch (e) {}

  // 2. Restore saved horizontal scroll position of the Day Bar
  function restoreBarPosition() {
    if (!dayPillsContainer) return;
    const activePill = document.querySelector(`.day-pill[data-day="${currentDayFilter}"]`);
    if (activePill && currentDayFilter !== "all") {
      const pillOffset = activePill.offsetLeft - (dayPillsContainer.clientWidth / 2) + (activePill.clientWidth / 2);
      dayPillsContainer.scrollTo({ left: Math.max(0, pillOffset), behavior: "instant" });
    } else {
      try {
        const savedScroll = localStorage.getItem(DAY_BAR_SCROLL_KEY);
        if (savedScroll) {
          dayPillsContainer.scrollLeft = parseFloat(savedScroll);
        }
      } catch (e) {}
    }
  }

  // Listen to manual scrolling on the Day Bar and save position
  if (dayPillsContainer) {
    dayPillsContainer.addEventListener("scroll", () => {
      try {
        localStorage.setItem(DAY_BAR_SCROLL_KEY, dayPillsContainer.scrollLeft);
      } catch (e) {}
    }, { passive: true });
  }

  // Initial restore after render
  setTimeout(restoreBarPosition, 60);

  dayPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const clickedDay = pill.dataset.day;

      // Toggle feature: clicking the already active day switches back to "all"!
      if (pill.classList.contains("active") && clickedDay !== "all") {
        currentDayFilter = "all";
        dayPills.forEach(p => p.classList.toggle("active", p.dataset.day === "all"));
        if (dayPillsContainer) {
          dayPillsContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
        showToast("已切換回「全部總覽」", "🗺️");
      } else {
        currentDayFilter = clickedDay;
        dayPills.forEach(p => p.classList.toggle("active", p.dataset.day === clickedDay));
        if (dayPillsContainer) {
          const pillOffset = pill.offsetLeft - (dayPillsContainer.clientWidth / 2) + (pill.clientWidth / 2);
          dayPillsContainer.scrollTo({ left: Math.max(0, pillOffset), behavior: "smooth" });
        }
      }

      // Persist day and bar position to localStorage
      try {
        localStorage.setItem(ACTIVE_DAY_KEY, currentDayFilter);
        if (dayPillsContainer) {
          setTimeout(() => {
            localStorage.setItem(DAY_BAR_SCROLL_KEY, dayPillsContainer.scrollLeft);
          }, 350);
        }
      } catch (e) {}

      renderSpots();
      setTimeout(scrollItineraryToTop, 10);
    });
  });
}

// ==========================================
// 8. ITINERARY RENDERING
// ==========================================
function renderSpots() {
  const container = document.getElementById("spotsContainer");
  if (!container) return;

  // Toggle Top Header Quick Stats Bar & Itinerary Summary Card: only show on "全部總覽" (all)
  const isSingleDay = (currentDayFilter !== "all");
  document.body.classList.toggle("hide-overview", isSingleDay);

  const quickStatsBar = document.getElementById("quickStatsBar") || document.querySelector(".quick-stats-bar");
  if (quickStatsBar) {
    quickStatsBar.style.display = isSingleDay ? "none" : "flex";
  }

  const summaryCard = document.querySelector(".itinerary-summary-card");
  if (summaryCard) {
    summaryCard.style.display = isSingleDay ? "none" : "block";
  }

  const DAY_TITLES = {
    1: "Day 1 (10/13 二) : 桃園出發 ✈ 富國島 ➔ 宿羅塞塔酒店 ➔ 陽東夜市晚餐與 Robinson Pearl 換匯",
    2: "Day 2 (10/14 三) : 往北移動 ➔ 宿溫佩假期1號 ➔ Safari 動物園 ➔ 小卷米粉 ➔ 越南國粹秀 ➔ 威尼斯水秀",
    3: "Day 3 (10/15 四) : VinWonders 珍珠水陸樂園 (海龜水族館・美人魚秀) ➔ 閉幕煙火 ➔ 大世界晚餐按摩",
    4: "Day 4 (10/16 五) : 一路往南 ➔ 宿諾沃斯索爾 ➔ 369海鮮晚餐 ➔ 21:00海洋之吻大秀與高空煙火",
    5: "Day 5 (10/17 六) : 免費香島跨海纜車 ➔ 親吻橋夕陽 ➔ LUMI SPA 按摩 ➔ VUI-Fest 夜市",
    6: "Day 6 (10/18 日) : 往中部移動 ➔ 宿孟青奢華飯店 ➔ 桑奈托日落沙灘 ➔ 伴手禮採買 ➔ 如意洗頭/ZEN SPA",
    7: "Day 7 (10/19 一) : 飯店早餐退房 ➔ 富國國際機場 (PQC) ✈ 搭乘 9G 510 平安返抵桃園 (TPE)"
  };

  const DAY_OVERVIEWS = [
    {
      day: 1,
      date: "10/13 (二)",
      area: "中部陽東",
      title: "Day 1 (10/13 二) : 桃園出發 ✈ 富國島 ➔ 宿羅塞塔酒店 ➔ 陽東夜市晚餐與 Robinson Pearl 換匯",
      summary: "桃園機場 T1 報到 ➔ 17:35 直飛航班 9G 511 ➔ 20:25 抵達富國機場 ➔ 機場換匯/SIM卡 ➔ 宿羅塞塔酒店 ➔ 陽東夜市/換匯",
      color: "#0f766e"
    },
    {
      day: 2,
      date: "10/14 (三)",
      area: "北部珍珠區",
      title: "Day 2 (10/14 三) : 往北移動 ➔ 宿溫佩假期1號 ➔ Safari 動物園 ➔ 小卷米粉 ➔ 越南國粹秀 ➔ 威尼斯水秀",
      summary: "退房往北 ➔ 宿溫佩假期1號 ➔ Safari 野生動物園 (巴士+長頸鹿餵食+飛禽秀) ➔ 大世界小卷米粉 ➔ 20:15 越南國粹秀 ➔ 21:00 威尼斯水舞秀",
      color: "#0284c7"
    },
    {
      day: 3,
      date: "10/15 (四)",
      area: "北部珍珠區",
      title: "Day 3 (10/15 四) : VinWonders 珍珠水陸樂園 (海龜水族館・美人魚秀) ➔ 閉幕煙火 ➔ 大世界晚餐按摩",
      summary: "VinWonders 珍珠水陸主題樂園 (海龜水族館、美人魚秀、餵食秀) ➔ 18:45 閉幕遊行煙火聲光秀 ➔ 大世界晚餐/按摩 ➔ 宿溫佩假期1號",
      color: "#8b5cf6"
    },
    {
      day: 4,
      date: "10/16 (五)",
      area: "南部日落小鎮",
      title: "Day 4 (10/16 五) : 一路往南 ➔ 宿諾沃斯索爾 ➔ 369海鮮晚餐 ➔ 21:00海洋之吻大秀與高空煙火",
      summary: "退房往南 ➔ 宿日落小鎮諾沃斯索爾飯店公寓 ➔ 日落小鎮漫步 ➔ 17:00 369海鮮晚餐 ➔ 21:00 海洋之吻大秀與璀璨高空煙火 (20:00卡位)",
      color: "#ea580c"
    },
    {
      day: 5,
      date: "10/17 (六)",
      area: "南部香島與小鎮",
      title: "Day 5 (10/17 六) : 免費香島跨海纜車 ➔ 親吻橋夕陽 ➔ LUMI SPA 按摩 ➔ VUI-Fest 夜市",
      summary: "全世界最長跨海纜車 ➔ 太陽世界香島自然公園 ➔ 15:00 購票上親吻橋看夕陽與水上表演 ➔ 18:00 LUMI SPA 按摩 ➔ VUI-Fest 海濱夜市",
      color: "#d97706"
    },
    {
      day: 6,
      date: "10/18 (日)",
      area: "中部陽東/長灘",
      title: "Day 6 (10/18 日) : 往中部移動 ➔ 宿孟青奢華飯店 ➔ 桑奈托日落沙灘 ➔ 伴手禮採買 ➔ 如意洗頭/ZEN SPA",
      summary: "退房往中部 ➔ 宿奢華孟青飯店 ➔ Sonasea 午餐 ➔ 桑奈托日落沙灘 (長腿大象打卡) ➔ 金剛超市伴手禮 ➔ 如意越式洗頭 & ZEN SPA",
      color: "#059669"
    },
    {
      day: 7,
      date: "10/19 (一)",
      area: "中部/機場",
      title: "Day 7 (10/19 一) : 飯店早餐退房 ➔ 富國國際機場 (PQC) ✈ 搭乘 9G 510 平安返抵桃園 (TPE)",
      summary: "飯店早餐 ➔ 08:00 退房前往富國國際機場 (PQC) ➔ 11:30 搭乘 9G 510 ➔ 16:10 平安抵達桃園機場 T1 ➔ 18:00 返家",
      color: "#475569"
    }
  ];

  // 1. If "全部總覽" (all): Show ONLY Day titles summary cards (no detailed spot cards)
  if (currentDayFilter === "all") {
    let allHtml = `<div class="overview-days-list">`;
    DAY_OVERVIEWS.forEach(d => {
      allHtml += `
        <div class="overview-day-card" style="border-left-color: ${d.color};" onclick="selectDay('${d.day}')">
          <div class="overview-day-header">
            <span class="overview-day-pill" style="background: ${d.color};">Day ${d.day} (${d.date})</span>
            <span class="overview-area-badge">📍 ${d.area}</span>
          </div>
          <h3 class="overview-day-title">${d.title}</h3>
          <div class="overview-day-spots">
            <strong>重點精華：</strong>${d.summary}
          </div>
          <div class="overview-day-footer" style="color: ${d.color};">
            <span>點擊查看 Day ${d.day} 詳細景點時間表</span> ➔
          </div>
        </div>
      `;
    });
    allHtml += `</div>`;
    container.innerHTML = allHtml;
    return;
  }

  // 2. If single day (Day 1~7): Filter and render detailed spot cards
  const filteredSpots = ITINERARY_DATA.filter(spot => spot.day.toString() === currentDayFilter);

  if (filteredSpots.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; background: #fff; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🏝️</div>
        <h3 style="color: #0f172a; margin-bottom: 4px;">此天暫無排定行程</h3>
        <p style="color: #64748b; font-size: 0.9rem;">請點選其他天數或點選「全部總覽」查看完整行程</p>
      </div>
    `;
    return;
  }

  let html = "";
  let lastDay = null;

  filteredSpots.forEach(spot => {
    if (spot.day !== lastDay) {
      lastDay = spot.day;
      html += `
        <div class="day-section-header">
          <h3 class="day-section-title">
            <span>📅</span> ${DAY_TITLES[spot.day] || `Day ${spot.day}`}
          </h3>
          <span class="day-section-sub">10/${12 + spot.day} 精華行程</span>
        </div>
      `;
    }

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapsQuery || spot.nameVn)}`;
    const driverVoiceText = spot.taxiVoice || spot.nameVn;
    const dynamicCost = computeSpotCost(spot, exchangeRate);

    html += `
      <article class="spot-card">
        <div class="spot-card-top">
          <div>
            <div class="spot-time-category">
              <span class="spot-time">⏰ ${spot.time}</span>
              <span class="spot-badge">#${spot.category}</span>
              <span class="spot-badge">Day ${spot.day}</span>
            </div>
            <h4 class="spot-name-zh">${spot.nameZh}</h4>
            <div class="spot-name-vn">🇻🇳 ${spot.nameVn}</div>
          </div>
          <div class="spot-cost-tag">
            <div class="cost-vnd">${dynamicCost.vnd}</div>
            <div class="cost-twd">${dynamicCost.twd}</div>
          </div>
        </div>

        <div class="spot-card-body">
          <p class="spot-desc">${spot.description}</p>
          
          <div class="spot-details-grid">
            <div class="spot-detail-row">
              <span class="detail-label">🚗 交通方式</span>
              <span class="detail-val">${spot.transport}</span>
            </div>
            <div class="spot-detail-row">
              <span class="detail-label">📍 地點地址</span>
              <span class="detail-val font-mono">${spot.address}</span>
            </div>
            <div class="spot-detail-row">
              <span class="detail-label">🕒 營業時間</span>
              <span class="detail-val">${spot.openingHours}</span>
            </div>
            <div class="spot-detail-row">
              <span class="detail-label">📞 聯絡電話</span>
              <span class="detail-val"><a href="tel:${spot.phone.replace(/[^0-9+]/g, '')}" style="color: #0f766e; font-weight:600; text-decoration:none;">${spot.phone}</a></span>
            </div>
          </div>

          <div class="spot-cultural-note">
            ${spot.tips}
          </div>
        </div>

        <div class="spot-card-footer">
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-spot-action primary">
            <span>🗺️</span> 導航 Google Maps
          </a>
          <button class="btn-spot-action" onclick="copyText('${spot.address.replace(/'/g, "\\'")}', '越文地址')">
            <span>📋</span> 複製地址 (貼入Grab)
          </button>
          <button class="btn-spot-action" onclick="speakVietnamese('${driverVoiceText.replace(/'/g, "\\'")}')" style="background:#f0fdfa; border-color:#0f766e; color:#0f766e; font-weight:700;">
            <span>🔊</span> 播給司機聽 (地名)
          </button>
          <button class="btn-spot-action" onclick="copyText('${spot.nameVn.replace(/'/g, "\\'")}', '店名')">
            <span>📋</span> 複製名稱
          </button>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// 9. BACKUP POCKET PLACES ENGINE (備選私房清單)
// ==========================================
function initPlaces() {
  const chips = document.querySelectorAll(".place-chip");
  const searchInput = document.getElementById("placesSearchInput");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentPlaceFilter = chip.dataset.filter;
      renderPlaces();
    });
  });

  searchInput?.addEventListener("input", (e) => {
    placesSearchQuery = e.target.value.trim().toLowerCase();
    renderPlaces();
  });
}

function renderPlaces() {
  const container = document.getElementById("placesContainer");
  if (!container) return;

  const filtered = BACKUP_PLACES_DATA.filter(place => {
    const matchCategory = (currentPlaceFilter === "all" || place.category === currentPlaceFilter);
    const matchSearch = (!placesSearchQuery || 
      place.nameZh.toLowerCase().includes(placesSearchQuery) ||
      place.nameVn.toLowerCase().includes(placesSearchQuery) ||
      place.area.toLowerCase().includes(placesSearchQuery) ||
      place.description.toLowerCase().includes(placesSearchQuery) ||
      place.address.toLowerCase().includes(placesSearchQuery)
    );
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; background: #fff; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🔍</div>
        <h3 style="color: #0f172a; margin-bottom: 4px;">未找到符合的備選地點</h3>
        <p style="color: #64748b; font-size: 0.9rem;">請嘗試不同關鍵字或切換至「全部」分類</p>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(place => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapsQuery || place.nameVn)}`;
    const driverVoiceText = place.taxiVoice || place.nameVn;
    const dynamicCost = computeSpotCost(place, exchangeRate);

    html += `
      <article class="spot-card" style="border-left: 4px solid #0f766e;">
        <div class="spot-card-top">
          <div>
            <div class="spot-time-category">
              <span class="spot-badge" style="background:#ccfbf1; color:#0f766e; font-weight:700;">${place.categoryZh}</span>
              <span class="spot-badge" style="background:#f1f5f9; color:#475569;">📍 ${place.area}</span>
            </div>
            <h4 class="spot-name-zh" style="margin-top: 4px;">${place.nameZh}</h4>
            <div class="spot-name-vn">🇻🇳 ${place.nameVn}</div>
          </div>
          <div class="spot-cost-tag">
            <div class="cost-vnd">${dynamicCost.vnd}</div>
            <div class="cost-twd">${dynamicCost.twd}</div>
          </div>
        </div>

        <div class="spot-card-body">
          <p class="spot-desc">${place.description}</p>
          
          <div class="spot-details-grid">
            <div class="spot-detail-row">
              <span class="detail-label">📍 地點地址</span>
              <span class="detail-val font-mono">${place.address}</span>
            </div>
            <div class="spot-detail-row">
              <span class="detail-label">🕒 營業時間</span>
              <span class="detail-val">${place.openingHours}</span>
            </div>
            <div class="spot-detail-row">
              <span class="detail-label">📞 聯絡電話</span>
              <span class="detail-val"><a href="tel:${place.phone.replace(/[^0-9+]/g, '')}" style="color: #0f766e; font-weight:600; text-decoration:none;">${place.phone}</a></span>
            </div>
          </div>

          <div class="spot-cultural-note">
            ${place.tips}
          </div>
        </div>

        <div class="spot-card-footer">
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-spot-action primary">
            <span>🗺️</span> 導航 Google Maps
          </a>
          <button class="btn-spot-action" onclick="copyText('${place.address.replace(/'/g, "\\'")}', '越文地址')">
            <span>📋</span> 複製地址 (貼入Grab)
          </button>
          <button class="btn-spot-action" onclick="speakVietnamese('${driverVoiceText.replace(/'/g, "\\'")}')" style="background:#f0fdfa; border-color:#0f766e; color:#0f766e; font-weight:700;">
            <span>🔊</span> 播給司機聽 (地名)
          </button>
          <button class="btn-spot-action" onclick="copyText('${place.nameVn.replace(/'/g, "\\'")}', '店名')">
            <span>📋</span> 複製名稱
          </button>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// 10. REAL-TIME DYNAMIC CURRENCY ENGINE
// ==========================================
function initCurrencyCalculator() {
  const twdInput = document.getElementById("twdInput");
  const vndInput = document.getElementById("vndInput");
  const customRate = document.getElementById("customRate");

  if (!twdInput || !vndInput || !customRate) return;

  // Restore saved custom rate from localStorage
  try {
    const savedRate = localStorage.getItem(CUSTOM_RATE_KEY);
    if (savedRate && parseFloat(savedRate) > 0) {
      exchangeRate = parseFloat(savedRate);
      customRate.value = exchangeRate;
      twdInput.value = 1000;
      vndInput.value = Math.round(1000 * exchangeRate);
    }
  } catch (e) {}

  function onRateChange(newRate) {
    if (!newRate || newRate <= 0) return;
    exchangeRate = newRate;
    try {
      localStorage.setItem(CUSTOM_RATE_KEY, newRate);
    } catch (e) {}
    
    // Sync other components
    renderDynamicCurrencyElements();
    renderSpots(); // Re-render spot cards with newly calculated TWD values!
    renderPlaces(); // Re-render backup places with newly calculated TWD values!
  }

  twdInput.addEventListener("input", () => {
    const twd = parseFloat(twdInput.value) || 0;
    vndInput.value = Math.round(twd * exchangeRate);
  });

  vndInput.addEventListener("input", () => {
    const vnd = parseFloat(vndInput.value) || 0;
    if (exchangeRate > 0) twdInput.value = Math.round(vnd / exchangeRate);
  });

  customRate.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (val && val > 0) {
      onRateChange(val);
      const twd = parseFloat(twdInput.value) || 0;
      vndInput.value = Math.round(twd * val);
    }
  });
}

// Re-renders all currency-dependent UI (Top Bar, Quick Matrix, Budget Table)
function renderDynamicCurrencyElements() {
  const rate = exchangeRate || 800;

  // 1. Top Quick Stats Banner
  const statRatePill = document.getElementById("statRatePill");
  if (statRatePill) statRatePill.innerText = `1 TWD ≈ ${rate} VND`;

  const statFormulaPill = document.getElementById("statFormulaPill");
  if (statFormulaPill) {
    const multiplier = (1000 / rate).toFixed(2);
    statFormulaPill.innerText = `去3個0 × ${multiplier}`;
  }

  // 2. Quick Reference Matrix
  const matrixContainer = document.querySelector(".quick-matrix");
  if (matrixContainer) {
    let matrixHtml = "";
    QUICK_MATRIX_DATA.forEach(item => {
      const twdVal = item.vnd / rate;
      const twdStr = twdVal < 100 ? twdVal.toFixed(1) : Math.round(twdVal).toLocaleString();
      matrixHtml += `
        <div class="matrix-item" data-vnd="${item.vnd}" onclick="loadMatrixVnd(${item.vnd})">
          <span class="matrix-vnd">${item.vnd.toLocaleString()} ₫</span>
          <span class="matrix-twd">≈ NT$ ${twdStr}</span>
          <span class="matrix-desc">${item.desc}</span>
        </div>
      `;
    });
    matrixContainer.innerHTML = matrixHtml;
  }

  // 3. Dynamic Budget Breakdown Table
  const budgetTableBody = document.querySelector(".budget-table tbody");
  const budgetTableFoot = document.querySelector(".budget-table tfoot");

  if (budgetTableBody) {
    let tableHtml = "";
    let totalTwd2p = 0;
    let totalVnd2p = 0;

    BUDGET_ITEMS_DATA.forEach(item => {
      const twd2p = item.twd2p;
      const vnd2p = Math.round(twd2p * rate);
      const twdPerPerson = Math.round(twd2p / 2);
      totalTwd2p += twd2p;
      totalVnd2p += vnd2p;

      tableHtml += `
        <tr>
          <td><strong>${item.icon} ${item.name}</strong></td>
          <td>${item.desc}</td>
          <td class="font-mono">約 ${vnd2p.toLocaleString()} ₫</td>
          <td class="price-highlight">NT$ ${twd2p.toLocaleString()}</td>
          <td class="price-highlight" style="color:#0f766e; font-weight:700;">NT$ ${twdPerPerson.toLocaleString()}</td>
          <td>${item.ratio}</td>
        </tr>
      `;
    });

    budgetTableBody.innerHTML = tableHtml;

    if (budgetTableFoot) {
      const totalPerPerson = Math.round(totalTwd2p / 2);
      budgetTableFoot.innerHTML = `
        <tr>
          <td colspan="2"><strong>💰 7 天 6 夜 2 人同行總費用 (Total)</strong></td>
          <td class="font-mono"><strong>約 ${totalVnd2p.toLocaleString()} ₫</strong></td>
          <td class="total-price">約 NT$ ${totalTwd2p.toLocaleString()}</td>
          <td class="total-price" style="color:#0f766e;">每人約 NT$ ${totalPerPerson.toLocaleString()}</td>
          <td>100%</td>
        </tr>
      `;
    }
  }
}

window.loadMatrixVnd = function(vndVal) {
  const vndInput = document.getElementById("vndInput");
  const twdInput = document.getElementById("twdInput");
  if (vndInput && twdInput) {
    vndInput.value = vndVal;
    twdInput.value = Math.round(vndVal / exchangeRate);
    showToast(`已載入 ${vndVal.toLocaleString()} ₫ 換算！`, "💱");
  }
};

// ==========================================
// 11. VIETNAMESE PHRASES ENGINE
// ==========================================
function initPhrases() {
  const filterBtns = document.querySelectorAll(".phrase-filter");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPhraseFilter = btn.dataset.filter;
      renderPhrases();
    });
  });
}

function renderPhrases() {
  const container = document.getElementById("phrasesContainer");
  if (!container) return;

  const filtered = PHRASES_DATA.filter(item => {
    return currentPhraseFilter === "all" || item.category === currentPhraseFilter;
  });

  let html = "";
  filtered.forEach(p => {
    html += `
      <div class="phrase-card" onclick="copyText('${p.vn.replace(/'/g, "\\'")}', '越文會話')">
        <div class="phrase-content">
          <div class="phrase-vn">${p.vn}</div>
          <div class="phrase-pinyin">🗣️ 諧音：${p.pinyin}</div>
          <div class="phrase-zh">💡 意思：${p.zh}</div>
        </div>
        <button class="btn-tts" title="點擊發音" onclick="event.stopPropagation(); speakVietnamese('${p.vn.replace(/'/g, "\\'")}')">
          🔊
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// 12. CHECKLIST ENGINE
// ==========================================
const STORAGE_KEY = "phu_quoc_checklist_checked_v7";

function getCheckedItems() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveCheckedItems(checkedMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap));
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }
}

function initChecklist() {
  document.getElementById("btnCheckAll")?.addEventListener("click", () => {
    const checkedMap = {};
    CHECKLIST_DATA.forEach(cat => cat.items.forEach(item => checkedMap[item.id] = true));
    saveCheckedItems(checkedMap);
    renderChecklist();
    showToast("已將所有行李項目設為已準備！", "🎉");
  });

  document.getElementById("btnUncheckAll")?.addEventListener("click", () => {
    saveCheckedItems({});
    renderChecklist();
    showToast("已重置所有清單勾選狀態", "🔄");
  });
}

function renderChecklist() {
  const container = document.getElementById("checklistContainer");
  const progressBar = document.getElementById("packProgressBar");
  const progressText = document.getElementById("packProgressText");
  if (!container) return;

  const checkedMap = getCheckedItems();
  let totalItems = 0;
  let checkedCount = 0;

  let html = "";
  CHECKLIST_DATA.forEach(cat => {
    let catItemsHtml = "";
    cat.items.forEach(item => {
      totalItems++;
      const isChecked = !!checkedMap[item.id];
      if (isChecked) checkedCount++;

      catItemsHtml += `
        <label class="check-item ${isChecked ? 'checked' : ''}" data-id="${item.id}">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleCheckItem('${item.id}', this.checked)">
          <span class="check-item-text">${item.text}</span>
        </label>
      `;
    });

    html += `
      <div class="check-category-card">
        <h4 class="check-cat-title">
          <span>${cat.icon}</span> ${cat.category}
        </h4>
        <div class="check-items-list">
          ${catItemsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
  if (progressBar) progressBar.style.width = `${percentage}%`;
  if (progressText) progressText.innerText = `${percentage}% (${checkedCount}/${totalItems})`;
}

window.toggleCheckItem = function(id, isChecked) {
  const checkedMap = getCheckedItems();
  if (isChecked) {
    checkedMap[id] = true;
  } else {
    delete checkedMap[id];
  }
  saveCheckedItems(checkedMap);
  renderChecklist();
};

window.selectDay = function(dayNum) {
  const targetPill = document.querySelector(`.day-pill[data-day="${dayNum}"]`);
  if (targetPill) {
    targetPill.click();
  }
};
