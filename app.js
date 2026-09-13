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
    nameZh: "中部安富飯店 Check-in 放行李",
    nameVn: "Khách sạn An Phú",
    taxiVoice: "Khách sạn An Phú, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 640000,
      max: 750000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    transport: "機場搭乘 Grab 專車直達（車資約 120,000 ₫ / 約 NT$ 150）",
    address: "Đường 30 Tháng 4, Phường Dương Đông, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3988 989",
    openingHours: "24 小時前台服務",
    description: "第一晚入住中部陽東鎮核心區域的「安富飯店 (An Phu Hotel)」，離機場僅 15 分鐘車程，性價比極高。辦理入住並放妥行李後，即可步行出發逛夜市吃宵夜與換匯。",
    tips: "💡 飯店步行至陽東夜市僅需 5~8 分鐘，隔天一早往北部移動非常順路！",
    mapsQuery: "An Phu Hotel Phu Quoc 30 Thang 4"
  },
  {
    day: 1,
    time: "22:00 - 23:30",
    category: "美食",
    nameZh: "Sonasea 夜市 / 陽東夜市晚餐 & Robinson Pearl 店內換匯",
    nameVn: "Chợ Đêm Phú Quốc & Robinson Pearl",
    taxiVoice: "Chợ Đêm Phú Quốc",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 450000,
      unit: " / 人",
      labelPrefix: "晚餐約"
    },
    transport: "自飯店步行約 5 分鐘即達夜市商圈",
    address: "54 Đường Nguyễn Trãi, Khu Phố 1, Dương Đông, Phú Quốc",
    phone: "+84 297 3846 123",
    openingHours: "17:00 - 23:30",
    description: "第一晚海島宵夜時光！品嚐現烤香蔥花生海膽、越式炒冰捲、烤大蝦與法國麵包。夜市週邊知名珍珠珠寶門市「Robinson Pearl」提供美金或台幣換匯服務，匯率優渥透明且安全。",
    tips: "💡 換匯秘訣：攜帶 2013 年後發行、無折痕的百元美金新鈔換匯最划算！點活海鮮請先確認每公斤（1kg）單價。",
    mapsQuery: "Phu Quoc Night Market Cho Dem"
  },

  // ---------- DAY 2: 10/14 (三) 北部 ----------
  {
    day: 2,
    time: "09:00 - 10:00",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 專車前往北部渡假區",
    nameVn: "Wyndham Garden Grandworld",
    taxiVoice: "Khách sạn Wyndham Garden Grand World",
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
    mapsQuery: "Wyndham Garden Grandworld Phu Quoc"
  },
  {
    day: 2,
    time: "10:00 - 10:30",
    category: "交通",
    nameZh: "溫德姆花園飯店 Check-in 寄放行李 (連住 2 晚)",
    nameVn: "Wyndham Garden Grandworld",
    taxiVoice: "Khách sạn Wyndham Garden Grand World Phú Quốc",
    pricing: {
      type: "vnd_range",
      min: 1450000,
      max: 1850000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    transport: "抵達飯店大廳",
    address: "Khu Grand World, Bãi Dài, Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3636 555",
    openingHours: "24 小時服務",
    description: "入住座落於富國大世界園區內的「溫德姆花園飯店 (Wyndham Garden Grandworld)」，連住 2 晚免除每天整理換飯店的奔波。步行 3 分鐘即達大世界運河商圈，前往 Safari 動物園與 VinWonders 樂園車程僅需 5~10 分鐘。",
    tips: "💡 先在櫃檯寄放大件行李，輕裝出發前往 Safari 動物園！",
    mapsQuery: "Wyndham Garden Grandworld Phu Quoc"
  },
  {
    day: 2,
    time: "11:00 - 16:00",
    category: "樂園",
    nameZh: "Vinpearl Safari 富國野生動物園 (猛獸巴士・長頸鹿餵食午餐・飛禽秀)",
    nameVn: "Vinpearl Safari Phú Quốc",
    taxiVoice: "Vinpearl Safari Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "全票約 850,000 ₫ (長者約 650,000 ₫)；長頸鹿飼料 30,000 ₫",
      calcTwd: (r) => `全票約 NT$ ${Math.round(850000 / r)} (長者約 NT$ ${Math.round(650000 / r)})；飼料約 NT$ ${Math.round(30000 / r)}`
    },
    transport: "搭乘免費接駁車或 Grab (約 8 分鐘)",
    address: "Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3636 699",
    openingHours: "08:30 - 16:00 (16:00 閉園)",
    description: "越南規模最大的開放式野生動物園！重點體驗：① 搭乘特製防彈 Safari Bus 深入猛獸野生放養區，近距離觀察孟加拉虎、非洲獅、白犀牛與斑馬；② 前往「長頸鹿餐廳 (Giraffe Restaurant)」購買紅蘿蔔與長頸鹿零距離餵食合照，並在此享用午餐；③ 14:00 觀賞精彩的飛禽表演秀 (Bird Show)；④ 走進互動區近距離觀賞可愛的環尾狐猴。",
    tips: "💡 建議購買 Safari + VinWonders 雙園套票更划算，長頸鹿互動建議早點前往以避開人潮！",
    mapsQuery: "Vinpearl Safari Phu Quoc"
  },
  {
    day: 2,
    time: "16:00 - 18:00",
    category: "放鬆",
    nameZh: "閉園返回溫德姆花園飯店休息・悠閒梳洗",
    nameVn: "Wyndham Garden Grandworld",
    taxiVoice: "Khách sạn Wyndham Garden Grand World",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "搭乘接駁車返回飯店",
    address: "Wyndham Garden Grandworld Phu Quoc",
    phone: "+84 297 3636 555",
    openingHours: "隨時",
    description: "結束動物園行程後返回飯店正式進房，吹冷氣小憩、使用飯店泳池設施，為晚上的大世界威尼斯不夜城儲備體力。",
    tips: "💡 飯店室外泳池傍晚非常舒適，適合放鬆消暑。",
    mapsQuery: "Wyndham Garden Grandworld Phu Quoc"
  },
  {
    day: 2,
    time: "18:00 - 21:00",
    category: "景點",
    nameZh: "Grand World 富國大世界 ➔ 竹林傳奇 ➔ Bún quậy số 1 小卷米線晚餐",
    nameVn: "Grand World Phú Quốc & Bún quậy số 1",
    taxiVoice: "Grand World Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "街區參觀完全免費；小卷米線晚餐約 65,000 ~ 95,000 ₫ / 人",
      calcTwd: (r) => `街區免費；晚餐約 NT$ ${Math.round(65000 / r)} ~ ${Math.round(95000 / r)}`
    },
    transport: "自飯店步行 3 分鐘即達大世界運河核心區",
    address: "Grand World, Khu Bãi Dài, Gành Dầu, Phú Quốc",
    phone: "+84 297 3737 373",
    openingHours: "全天 24 小時開放",
    description: "漫步在富國島版威尼斯彩色不夜城！造訪全越南最大的「竹林傳奇 (Bamboo Legend)」震撼竹構建築、當代藝術公園與泰迪熊博物館週邊歐風街景。晚餐安排品嚐富國島最知名特色小吃「Bún quậy số 1」招牌小卷米粉（新鮮現燙蝦漿魷魚佐特製金桔胡椒辣醬）。",
    tips: "💡 小卷米粉吃法：自己調配金桔、朝天椒、砂糖與胡椒鹽醬汁，沾現燙小卷與蝦肉美味無比！",
    mapsQuery: "Grand World Phu Quoc Bamboo Legend"
  },
  {
    day: 2,
    time: "21:00 - 22:00",
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
    description: "晚上 21:00 準時在愛情湖畔上演的壓軸閉幕大秀！巨型發光機械道具船、3D 水幕投影、激光雷射與湖面盛裝舞者交織出極致視覺盛宴。大秀結束後悠閒散步 3 分鐘即可回到溫德姆花園飯店，完全無需等車！",
    tips: "💡 最佳觀秀機位：威尼斯石橋（Cầu Ánh Sáng）正中央，建議 20:35 提前佔據好視野！",
    mapsQuery: "The Colors of Venice Grand World Phu Quoc"
  },

  // ---------- DAY 3: 10/15 (四) 北部 ----------
  {
    day: 3,
    time: "09:00 - 11:00",
    category: "美食",
    nameZh: "飯店悠閒早餐 ➔ 前往 VinWonders 珍珠奇幻樂園",
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
    description: "在飯店享用豐盛早餐後，搭乘接駁車前往被譽為「越南迪士尼」的夢幻主題樂園 VinWonders。今日以海王宮殿巨型水族館、美人魚秀、魚群餵食秀、陸上各大奇幻城堡設施與閉幕 ONCE 秀為主軸。",
    tips: "💡 建議入園前先確認水族館各場次表演時間，拍照更順暢！",
    mapsQuery: "VinWonders Phu Quoc"
  },
  {
    day: 3,
    time: "11:00 - 19:30",
    category: "樂園",
    nameZh: "VinWonders 珍珠水陸主題樂園 (海龜水族館・美人魚秀・餵食秀・閉幕秀)",
    nameVn: "VinWonders Phú Quốc",
    taxiVoice: "VinWonders Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "單票約 950,000 ₫ (長者約 710,000 ₫) / 雙園套票約 1,500,000 ₫",
      calcTwd: (r) => `單票約 NT$ ${Math.round(950000 / r)} / 雙園套票約 NT$ ${Math.round(1500000 / r)}`
    },
    transport: "園區內步行",
    address: "VinWonders Phú Quốc, Gành Dầu",
    phone: "+84 297 3737 373",
    openingHours: "09:00 - 19:30 (19:30 閉園)",
    description: "暢遊奇幻主題樂園！重點攻略：① 打卡世界五大巨型海龜造型「海王宮殿水族館 (The Sea Shell)」；② 13:00 於水族館景觀餐廳享用午餐；③ 14:00 優雅夢幻的美人魚秀 (Mermaid Show)；④ 15:00 巨型大洋池魚群餵食秀；⑤ 體驗各大室內外主題陸上遊樂設施；⑥ 18:45 觀賞城堡前華麗震撼的閉幕光影煙火秀「ONCE Show」。",
    tips: "💡 水族館內冷氣極佳，是午後避暑的最佳去處！",
    mapsQuery: "VinWonders Phu Quoc Sea Shell"
  },
  {
    day: 3,
    time: "20:00 - 22:30",
    category: "放鬆",
    nameZh: "Grand World 大世界特色晚餐 & 越式全身 SPA 按摩",
    nameVn: "Grand World Phú Quốc & Spa",
    taxiVoice: "Grand World Phú Quốc",
    pricing: {
      type: "custom",
      vndText: "60分鐘全身按摩約 250,000 ~ 380,000 ₫；晚餐約 280,000 ₫",
      calcTwd: (r) => `按摩約 NT$ ${Math.round(250000 / r)} ~ ${Math.round(380000 / r)}；晚餐約 NT$ ${Math.round(280000 / r)}`
    },
    transport: "自樂園搭車返回大世界街區",
    address: "Grand World Phú Quốc, Gành Dầu",
    phone: "大世界正規 SPA 館",
    openingHours: "營業至 23:30",
    description: "結束樂園一整天的歡樂行程，回到大世界運河旁挑選一家氣氛絕佳的餐廳享用晚餐。餐後安排一場道地的越式全身草藥精油按摩，徹底釋放雙腿疲勞，回溫德姆花園飯店享受甜美睡眠。",
    tips: "💡 推薦大世界商圈透明平價的正規 SPA 按摩館，入店前可先確認價目表規範。",
    mapsQuery: "Grand World Phu Quoc"
  },

  // ---------- DAY 4: 10/16 (五) 南部 ----------
  {
    day: 4,
    time: "10:00 - 11:30",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 一路往南前往日落小鎮 (Sunset Town)",
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
    description: "在溫德姆花園飯店享用豐盛早餐後退房，準備「一路往南」！南島是富國島最浪漫的地中海風情核心區，著名的親吻橋、跨海纜車與海洋之吻大秀皆匯聚於此。",
    tips: "💡 約 11:30 抵達日落小鎮辦理行李寄放，即可展開地中海街區漫步。",
    mapsQuery: "Sunset Town Phu Quoc An Thoi"
  },
  {
    day: 4,
    time: "11:30 - 12:00",
    category: "交通",
    nameZh: "富國海岸生活飯店 Check-in 寄放行李 (連住 2 晚)",
    nameVn: "Coastal Living Hotel Phu Quoc",
    taxiVoice: "Khách sạn Coastal Living Hotel, Sunset Town, An Thới",
    pricing: {
      type: "vnd_range",
      min: 1000000,
      max: 1400000,
      unit: " / 晚",
      labelPrefix: "即時房價約"
    },
    transport: "抵達日落小鎮飯店大廳",
    address: "Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "+84 297 3999 888",
    openingHours: "24 小時服務",
    description: "入住座落於日落小鎮核心的「富國海岸生活飯店 (Coastal Living Hotel Phu Quoc)」或週邊海景特色酒店，連住南部 2 晚。看完全球頂級大秀與煙火後，可直接步行回到飯店，無需在深夜排隊叫車！",
    tips: "💡 寄放行李後即可漫步出門探索地中海風情街道。",
    mapsQuery: "Sunset Town Phu Quoc Thi tran Hoang Hon"
  },
  {
    day: 4,
    time: "12:00 - 15:00",
    category: "美食",
    nameZh: "日落小鎮 Sunset Town 海景午餐 & 漫步彩色阿瑪菲街區",
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
    description: "挑選一家座落於懸崖邊的海景餐館享用午餐。漫步在彷彿義大利阿瑪菲海岸的五彩斑斕街道中，打卡聖馬可鐘樓、羅馬競技場拱門、星巴克海景旗艦店與特色噴泉雕塑，每個轉角都是絕美大片視角。",
    tips: "💡 推薦穿著亮色系或白色度假風洋裝/襯衫，在彩色建築群中拍照層次感極佳！",
    mapsQuery: "Sunset Town Phu Quoc Thi tran Hoang Hon"
  },
  {
    day: 4,
    time: "15:00 - 16:30",
    category: "放鬆",
    nameZh: "返回飯店吹冷氣小憩・充電休息",
    nameVn: "Coastal Living Hotel Phu Quoc",
    taxiVoice: "Khách sạn Sunset Town",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "步行返回飯店",
    address: "Sunset Town, An Thới",
    phone: "飯店前台",
    openingHours: "隨時",
    description: "下午午後時段返回飯店吹冷氣小憩補眠，避開正午烈日，為傍晚夕陽與晚上的海洋交響特技水舞秀儲備最佳體力。",
    tips: "💡 稍作休養，準備迎接 16:30 的親吻橋夕陽大片！",
    mapsQuery: "Sunset Town Phu Quoc"
  },
  {
    day: 4,
    time: "16:30 - 18:30",
    category: "景點",
    nameZh: "Kiss Bridge 親吻橋 ➔ 漫步踏海・絕美日落餘暉合影 ➔ 海景晚餐",
    nameVn: "Cầu Hôn (Kiss Bridge)",
    taxiVoice: "Cầu Hôn, Thị trấn Hoàng Hôn",
    pricing: {
      type: "custom",
      vndText: "單買約 100,000 ₫ (常含於套票)；海景晚餐約 250,000 ~ 450,000 ₫",
      calcTwd: (r) => `橋門票約 NT$ ${Math.round(100000 / r)}；晚餐約 NT$ ${Math.round(250000 / r)} ~ ${Math.round(450000 / r)}`
    },
    transport: "自小鎮廣場沿海濱步道步行 3 分鐘",
    address: "Cầu Hôn, Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "07:00 - 22:00",
    description: "由義大利建築大師設計的富國島世紀地標「吻橋 (Kiss Bridge)」！兩座橋身自南北兩側優雅伸向大海，在海中央僅相隔 30 公分。傍晚 17:00~17:45，火紅的夕陽恰好落在雙橋指尖縫隙之間。拍照後於海景餐廳享用美味晚餐。",
    tips: "💡 站在北橋與南橋交會點，利用手機長焦鏡頭借位拍出親吻夕陽的經典剪影照片！",
    mapsQuery: "Kiss Bridge Phu Quoc Cau Hon"
  },
  {
    day: 4,
    time: "19:00 - 19:45",
    category: "樂園",
    nameZh: "《海洋交響》(Symphony of the Sea) 水幕・雷射・極限特技秀",
    nameVn: "Sân khấu bờ biển Sunset Town",
    taxiVoice: "Sân khấu nhạc nước Sunset Town, An Thới",
    pricing: {
      type: "vnd_range",
      min: 300000,
      max: 450000,
      unit: "",
      labelPrefix: "即時票價約"
    },
    transport: "日落小鎮海上海灣專屬看台區",
    address: "Sân khấu bờ biển Sunset Town, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "19:00 準時開演",
    description: "結合世界級極限水上摩托車特技、水上飛人（Flyboard）、璀璨雷射激光、立體水幕投影與澎湃交響樂的沉浸式震撼大秀！特技演員在海面上空翻轉旋轉，視覺張力極具衝擊感！",
    tips: "💡 提前線上購票憑 QR Code 掃描快速入場，佔據中段視野最佳。",
    mapsQuery: "Sunset Town Show Arena Phu Quoc"
  },
  {
    day: 4,
    time: "19:45 - 22:00",
    category: "美食",
    nameZh: "VUI-Fest Bazaar 海濱夜市逛街漫遊",
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
    description: "漫步於全越南最浪漫的海濱文青夜市「Vui-Fest Bazaar」，欣賞街頭打擊樂秀 Loảng Xoảng Show 與文創手作市集，品嚐特色熱帶飲品與海島小吃，享受愜意的地中海海島夜晚。",
    tips: "💡 今晚早點休息，為隔天世界最長纜車與海之吻光影大秀煙火做好準備！",
    mapsQuery: "Vui-Fest Bazaar Sunset Town"
  },

  // ---------- DAY 5: 10/17 (六) 南部 ----------
  {
    day: 5,
    time: "09:00 - 11:00",
    category: "美食",
    nameZh: "悠閒早餐 ➔ 前往安泰纜車站 (憑機票兌換免費纜車票)",
    nameVn: "Ga Cáp treo Hòn Thơm (Sun World)",
    taxiVoice: "Ga Cáp treo Hòn Thơm, An Thới",
    pricing: {
      type: "free",
      vndText: "購機票免費贈送纜車票",
      twdText: "機票已贈送"
    },
    transport: "步行或接駁車至日落小鎮安泰纜車站 (Ga Ánh Dương)",
    address: "Bãi Đất Đỏ, Phường An Thới, TP. Phú Quốc, Kiên Giang",
    phone: "+84 886 045 888",
    openingHours: "纜車上午營運：09:00-11:30",
    description: "在日落小鎮享用早餐後，前往安泰纜車站。憑 Sun PhuQuoc Airways 機票兌換免費的香島跨海纜車門票！",
    tips: "💡 請先確認手機內已載妥纜車門票兌換 QR Code，上午 09:00-11:30 搭乘可避開排隊人潮！",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 5,
    time: "11:00 - 15:00",
    category: "樂園",
    nameZh: "Hon Thom 香島跨海纜車 (全世界最長跨海纜車) ➔ 太陽世界自然公園 ➔ 午餐",
    nameVn: "Ga Cáp treo Hòn Thơm & Công viên Hòn Thơm",
    taxiVoice: "Ga Cáp treo Hòn Thơm, An Thới",
    pricing: {
      type: "vnd_range",
      min: 150000,
      max: 280000,
      unit: " / 人",
      labelPrefix: "園內午餐約"
    },
    transport: "搭乘跨海纜車飛越安泰群島（單程約 20 分鐘）",
    address: "Đảo Hòn Thơm, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "公園開放至 17:00",
    description: "搭乘獲金氏世界紀錄認證「全球最長三線跨海纜車」（全長 7,899 公尺）！360度全景玻璃車廂凌空飛越安泰群島，俯瞰無數彩色漁船與碧綠珊瑚海灣。抵達香島後漫步於太陽世界香島自然公園，享受熱帶海島植被與海風景觀，並在園內享用午餐（註：本行程以纜車與景觀漫遊為主，不安排水上活動）。",
    tips: "💡 纜車中午有保養休息時段，下午回程時段為 13:30-17:00！",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 5,
    time: "15:00 - 16:30",
    category: "交通",
    nameZh: "搭乘香島纜車回程 ➔ 返回日落小鎮飯店休息小憩",
    nameVn: "Thị trấn Hoàng Hôn",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town",
    pricing: {
      type: "free",
      vndText: "包含於纜車來回票",
      twdText: "已含"
    },
    transport: "搭乘纜車返回日落小鎮本島",
    address: "Thị trấn Hoàng Hôn, An Thới",
    phone: "飯店前台",
    openingHours: "纜車下午時段：13:30-17:00",
    description: "搭乘纜車返回日落小鎮本島，返回飯店吹冷氣休息、小憩補眠。今晚有連續兩場頂級大秀與煙火表演，下午充分休息能確保夜間擁有最棒的精神享受演出！",
    tips: "💡 請先確認手機內電子門票憑證已下載好今晚 21:00 的入場 QR Code。",
    mapsQuery: "Sunset Town Phu Quoc"
  },
  {
    day: 5,
    time: "16:30 - 18:30",
    category: "景點",
    nameZh: "Kiss Bridge 親吻橋 ➔ 夕陽暮光 ➔ 海景餐廳晚餐",
    nameVn: "Cầu Hôn (Kiss Bridge)",
    taxiVoice: "Cầu Hôn, Thị trấn Hoàng Hôn",
    pricing: {
      type: "vnd_range",
      min: 250000,
      max: 450000,
      unit: " / 人",
      labelPrefix: "晚餐約"
    },
    transport: "步行前往親吻橋與海景餐廳",
    address: "Cầu Hôn & Bờ biển Sunset Town",
    phone: "現場",
    openingHours: "全天開放",
    description: "再次踏上親吻橋，欣賞落日將海面染成醉人深金色的魔幻時刻（Magic Hour）。隨後在海景餐廳提早享用美味晚餐，準備迎接夜間大秀！",
    tips: "💡 建議於 18:30 前完成用餐，從容步行前往表演看台區驗票入場。",
    mapsQuery: "Kiss Bridge Sunset Town Phu Quoc"
  },
  {
    day: 5,
    time: "19:00 - 19:40",
    category: "樂園",
    nameZh: "Kiss Bridge 親吻橋景觀區 ➔《海洋交響》水舞秀",
    nameVn: "Sân khấu bờ biển Sunset Town",
    taxiVoice: "Sân khấu nhạc nước Sunset Town, An Thới",
    pricing: {
      type: "free",
      vndText: "日落小鎮景觀區欣賞",
      twdText: "景觀區免費"
    },
    transport: "日落小鎮海上海灣專屬看台區",
    address: "Sân khấu bờ biển Sunset Town, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "19:00 準時開演",
    description: "在親吻橋畔與海濱看台欣賞水上摩托車、飛人特技與水幕音樂交織的壯觀水舞秀，感受海風與震撼音效的共鳴。",
    tips: "💡 欣賞完後可在小鎮咖啡館稍作休息，準備 20:30 入場海之吻主劇場！",
    mapsQuery: "Sunset Town Show Arena Phu Quoc"
  },
  {
    day: 5,
    time: "21:00 - 21:45",
    category: "樂園",
    nameZh: "《海洋之吻》(Kiss of the Sea) 旗艦大秀 ➔ 壓軸海面璀璨煙火",
    nameVn: "Sân khấu Kiss of the Sea",
    taxiVoice: "Sân khấu Kiss of the Sea, Sunset Town",
    pricing: {
      type: "custom",
      vndText: "即時票價約 550,000 ~ 700,000 ₫ (煙火免費)",
      calcTwd: (r) => `約 NT$ ${Math.round(550000 / r)} ~ ${Math.round(700000 / r)}`
    },
    transport: "日落小鎮主圓形水上劇場（步行 2 分鐘）",
    address: "Sân khấu mái vòm Kiss of the Sea, Sunset Town, An Thới",
    phone: "+84 886 045 888",
    openingHours: "21:00 準時開演 (約 30 分鐘 + 壓軸煙火)",
    description: "耗資數百萬美元打造的全球頂級多媒體水幕光影秀！由 60 位國際舞者登台，融合水幕投影、高空火柱、雷射與壯麗音效。大秀結束時，長達數分鐘的「高空璀璨煙火」在海面與地中海小鎮上空震撼綻放，為整趟海島旅程留下最浪漫的巔峰回憶！",
    tips: "💡 煙火結束後，因為住在 Sunset Town 飯店，可直接輕鬆步行走回房間，避開所有散場車潮！",
    mapsQuery: "Kiss of the Sea Show Sunset Town"
  },

  // ---------- DAY 6: 10/18 (日) 中部 ----------
  {
    day: 6,
    time: "10:00 - 11:30",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 南部專車返回中部陽東鎮／Long Beach",
    nameVn: "Dương Đông (Long Beach)",
    taxiVoice: "Thị trấn Dương Đông, Đường Trần Hưng Đạo",
    pricing: {
      type: "vnd_range",
      min: 240000,
      max: 320000,
      unit: " (全車均攤)",
      labelPrefix: "Grab 專車約"
    },
    transport: "睡到自然醒後搭乘 Grab 專車返回中部（車程約 25 分鐘）",
    address: "Đường Trần Hưng Đạo, Phường Dương Đông, Phú Quốc",
    phone: "飯店前台",
    openingHours: "隨時出發",
    description: "昨晚觀看海之吻與煙火較晚，今天早晨安排輕鬆慢活。享用早餐後辦理退房，專車返回中部陽東鎮 / Long Beach 區域，入住海景渡假飯店（海貝水療飯店 Seashells、富國天清飯店 Thien Thanh 或 杜斯特公主月出度假村 Dusit Princess）。",
    tips: "💡 最後一晚住中部離機場僅需 15 分鐘，免除隔天趕飛機的奔波風險！",
    mapsQuery: "Seashells Phu Quoc Hotel & Spa Tran Hung Dao"
  },
  {
    day: 6,
    time: "11:30 - 12:30",
    category: "交通",
    nameZh: "中部渡假飯店 Check-in 寄放行李 (海貝飯店 / 天清飯店 / 杜斯特公主)",
    nameVn: "Seashells Hotel / Thien Thanh Resort",
    taxiVoice: "Khách sạn Seashells Phú Quốc, Võ Thị Sáu",
    pricing: {
      type: "custom",
      vndText: "海貝約 2,200,000 ₫ / 天清約 1,750,000 ₫ / 杜斯特約 2,800,000 ₫",
      calcTwd: (r) => `海貝約 NT$ ${Math.round(2200000 / r)} / 天清約 NT$ ${Math.round(1750000 / r)}`
    },
    transport: "抵達飯店大廳",
    address: "1 Võ Thị Sáu / Đường Trần Hưng Đạo, Dương Đông, Phú Quốc",
    phone: "+84 297 3923 999",
    openingHours: "24 小時服務",
    description: "入住中部海景渡假酒店（海貝水療飯店 Seashells 或 富國天清飯店 Thien Thanh 或 杜斯特公主月出海灘度假村 Dusit Princess，多數含免費機場接送）。飯店緊鄰沙灘，擁有開闊無邊際海景泳池與私人沙灘躺椅。",
    tips: "💡 辦理登記並寄放大件行李，即可輕鬆出發享用在地午餐。",
    mapsQuery: "Seashells Phu Quoc Hotel & Spa"
  },
  {
    day: 6,
    time: "13:00 - 14:30",
    category: "美食",
    nameZh: "中部在地午餐 (推薦 Cơm Tấm Chín Tâm 烤肉飯 或 Nhà Xưa 68 家常菜)",
    nameVn: "Cơm Tấm Chín Tâm / Nhà Xưa 68",
    taxiVoice: "Quán Cơm Tấm Chín Tâm, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 70000,
      max: 180000,
      unit: " / 人",
      labelPrefix: "午餐約"
    },
    transport: "步行或 Grab 短程 (約 3 分鐘)",
    address: "Dương Đông, Phú Quốc",
    phone: "現場",
    openingHours: "10:30 - 21:00",
    description: "品嚐富國島中部超人氣排隊美食！推薦：Cơm Tấm Chín Tâm 炭烤香茅豬排碎米飯（配蒸蛋與半熟荷包蛋），或前往 Nhà Xưa 68 品嚐道地的越南古早味家常海鮮合菜。",
    tips: "💡 碎米飯份量十足、香氣撲鼻，價格親民極具在地代表性！",
    mapsQuery: "Com Tam Chin Tam Phu Quoc"
  },
  {
    day: 6,
    time: "15:00 - 17:30",
    category: "放鬆",
    nameZh: "桑奈托日落海灘 (Sunset Sanato) 海景下午茶 ➔ 沙灘漫步打卡",
    nameVn: "Sunset Sanato Beach Club",
    taxiVoice: "Sunset Sanato Beach, Dương Tơ",
    pricing: {
      type: "custom",
      vndText: "門票約 100,000 ₫；飲品約 70,000 ~ 120,000 ₫",
      calcTwd: (r) => `門票約 NT$ ${Math.round(100000 / r)}；飲品約 NT$ ${Math.round(70000 / r)} ~ ${Math.round(120000 / r)}`
    },
    transport: "搭乘 Grab 專車前往 Sunset Sanato（約 10 分鐘）",
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
    nameZh: "Long Beach 沿海海鮮大餐",
    nameVn: "Nhà hàng Hải sản Bãi Trường",
    taxiVoice: "Nhà hàng Hải sản, Trần Hưng Đạo, Dương Đông",
    pricing: {
      type: "vnd_range",
      min: 300000,
      max: 600000,
      unit: " / 人",
      labelPrefix: "海鮮大餐約"
    },
    transport: "步行或 Grab 短程 (約 5 分鐘)",
    address: "Đường Trần Hưng Đạo, Dương Đông, Phú Quốc",
    phone: "各海景餐廳現場",
    openingHours: "17:00 - 23:00",
    description: "在 Long Beach 沿海海景餐廳享用豐盛的海島告別海鮮晚餐！品嚐現烤蒜蓉奶油龍蝦、香煎海斑魚、越式炸春捲與清蒸花蟹，伴隨海浪聲乾杯。",
    tips: "💡 點活海鮮時務必先確認每公斤（1kg）計價並過磅瀝水！",
    mapsQuery: "Long Beach Phu Quoc Tran Hung Dao"
  },
  {
    day: 6,
    time: "20:00 - 22:30",
    category: "購物",
    nameZh: "Sonasea / 陽東夜市伴手禮大採買 ➔ Như Ý Hair Spa 越式洗頭 & 精油 SPA",
    nameVn: "Chợ Đêm & Siêu thị Kingkong Mart & Như Ý Hair Spa",
    taxiVoice: "Như Ý Hair Spa, Dương Đông",
    pricing: {
      type: "custom",
      vndText: "採買腰果胡椒約 400,000 ₫；越式洗頭按摩約 250,000 ₫",
      calcTwd: (r) => `採買約 NT$ ${Math.round(400000 / r)}；洗頭按摩約 NT$ ${Math.round(250000 / r)}`
    },
    transport: "步行至陽東商圈",
    address: "Dương Đông, Phú Quốc",
    phone: "+84 966 690 999",
    openingHours: "營業至 23:30",
    description: "旅程最後一晚的採買與放鬆盛宴！① 前往金剛超市（Kingkong Mart）採買四大富國島必買特產：黑/紅胡椒粒、帶皮大腰果、中原傳奇咖啡與優質魚露；② 體驗知名「Như Ý Hair Spa」道地草藥越式洗頭與 ZEN / LUMI SPA 全身精油熱石按摩，徹底洗去一身疲憊！",
    tips: "💡 購買胡椒與腰果務必選擇密封真空包裝，行李箱好收納且能防潮保鮮！",
    mapsQuery: "Kingkong Mart Phu Quoc Tran Hung Dao"
  },

  // ---------- DAY 7: 10/19 (一) 返台 ----------
  {
    day: 7,
    time: "08:00 - 09:30",
    category: "美食",
    nameZh: "飯店海景自助早餐 ➔ 悠閒收拾行李與退房",
    nameVn: "Khách sạn nghỉ dưỡng Phú Quốc",
    taxiVoice: "Khách sạn Phú Quốc",
    pricing: {
      type: "free",
      vndText: "包含於房費",
      twdText: "已含"
    },
    transport: "飯店海景餐廳",
    address: "飯店內",
    phone: "前台",
    openingHours: "06:30 - 10:00",
    description: "在海景晨光中享用豐盛的五星自助早餐！品嚐現煮的生牛肉河粉 (Phở Bò)，擠上新鮮檸檬汁、九層塔與朝天椒，搭配熱騰騰可頌與香濃冰煉乳咖啡。隨後辦理退房，準備前往機場（須於起飛前 2 小時 09:30 抵達）。",
    tips: "💡 隨身行李再次檢查護照正本、機票與行動電源（行動電源嚴禁托運，需隨身攜帶）。",
    mapsQuery: "Phu Quoc resort breakfast"
  },
  {
    day: 7,
    time: "09:30 - 16:10",
    category: "交通",
    nameZh: "富國國際機場 (PQC) ✈ 桃園機場 (TPE) (航班 9G 510)",
    nameVn: "Sân bay Quốc tế Phú Quốc",
    taxiVoice: "Sân bay Phú Quốc (Ga đi)",
    pricing: {
      type: "custom",
      vndText: "Grab 車資約 100,000 ₫ (部分飯店含接送)",
      calcTwd: (r) => `車資約 NT$ ${Math.round(100000 / r)}`
    },
    transport: "Grab 叫車或飯店接駁至富國機場（約 15 分鐘）；搭乘 Sun PhuQuoc 9G 510",
    address: "Sân bay Quốc tế Phú Quốc (PQC)",
    phone: "+84 297 3848 078",
    openingHours: "航班起飛前 2.5 小時開櫃報到",
    description: "由陽東飯店搭車約 15 分鐘抵達富國機場。辦理登機與托運行李手續，出境大廳內有免稅店可做最後巡禮。搭乘 Sun PhuQuoc Airways 9G 510 (11:30 富國島起飛 ➔ 16:10 平安抵達台北桃園機場 TPE)。",
    tips: "💡 魚露特別提醒：所有航空公司嚴禁隨身手提一般瓶裝魚露上機，若有購買需為機場免稅店官方合格密封盒！",
    mapsQuery: "Phu Quoc International Airport PQC"
  },
  {
    day: 7,
    time: "16:10 - 18:00",
    category: "交通",
    nameZh: "抵達桃園機場 T1 ➔ 平安返抵溫暖的家",
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
    description: "16:10 平安抵達台北桃園國際機場第一航廈，領取托運行李並通關，搭乘機場捷運返家，圓滿結束 7 天 6 夜充實精彩的富國島海島渡假旅程！",
    tips: "💡 回家後好好整理美麗的照片與難忘回憶！",
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
  { icon: "✈️", name: "來回機票", desc: "Sun PhuQuoc 直飛來回 (含托運行李/稅金/贈香島纜車門票)", vnd: 10250000, ratio: "38%" },
  { icon: "🏨", name: "6 晚精選住宿", desc: "安富(1晚)+溫德姆(2晚)+海岸生活(2晚)+海貝/天清(1晚) 雙人均攤", vnd: 7200000, ratio: "27%" },
  { icon: "🎟️", name: "樂園與大秀門票", desc: "Safari動物園、VinWonders水陸雙園、Kiss of the Sea光影秀 (纜車機票贈送)", vnd: 3200000, ratio: "12%" },
  { icon: "🍲", name: "餐飲與夜市海鮮", desc: "小卷米粉、長頸鹿餐廳、烤肉飯、日落海景餐廳、夜市海鮮大餐", vnd: 3600000, ratio: "14%" },
  { icon: "🚗", name: "島內 Grab 與接送", desc: "機場接送、北南跨區 Grab 專車 (搭配北部免費 VinBus)", vnd: 750000, ratio: "3%" },
  { icon: "💆", name: "越式洗頭與伴手禮", desc: "如意越式洗頭、全身精油 SPA、上網卡、胡椒與腰果特產採買", vnd: 1500000, ratio: "6%" }
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
  { category: "taxi", vn: "Khách sạn An Phú", pinyin: "卡傘安富", zh: "安富飯店 (An Phu Hotel)" },
  { category: "taxi", vn: "Wyndham Grand World", pinyin: "溫德姆格蘭世界", zh: "溫德姆花園飯店" },
  { category: "taxi", vn: "Khách sạn Coastal Living Hotel, Sunset Town", pinyin: "海岸生活飯店", zh: "富國海岸生活飯店 (Sunset Town)" },
  { category: "taxi", vn: "Khách sạn Seashells Phú Quốc", pinyin: "海貝飯店", zh: "海貝水療飯店 (Seashells)" },
  { category: "taxi", vn: "Khách sạn Thien Thanh Resort", pinyin: "天清渡假村", zh: "富國天清渡假飯店" },
  { category: "taxi", vn: "Vinpearl Safari", pinyin: "珍珠野生動物園", zh: "野生動物園" },
  { category: "taxi", vn: "VinWonders Phú Quốc", pinyin: "珍珠奇幻樂園", zh: "珍珠水陸主題樂園" },
  { category: "taxi", vn: "Grand World Phú Quốc", pinyin: "富國大世界", zh: "富國大世界 (不夜城)" },
  { category: "taxi", vn: "Thị trấn Hoàng Hôn, Sunset Town", pinyin: "日落小鎮", zh: "日落小鎮 Sunset Town" },
  { category: "taxi", vn: "Ga Cáp treo Hòn Thơm", pinyin: "香島跨海纜車", zh: "香島跨海纜車站" },
  { category: "taxi", vn: "Cầu Hôn", pinyin: "親吻橋", zh: "吻橋 Kiss Bridge" },
  { category: "taxi", vn: "Sunset Sanato Beach Club", pinyin: "桑奈托日落海灘", zh: "桑奈托日落海灘 (長腿大象)" },
  { category: "taxi", vn: "Chợ Đêm Phú Quốc", pinyin: "陽東夜市", zh: "陽東夜市" },
  { category: "taxi", vn: "Siêu thị Kingkong Mart", pinyin: "金剛超市", zh: "金剛超市 Kingkong Mart" },
  { category: "taxi", vn: "Robinson Pearl", pinyin: "羅賓森珍珠換匯", zh: "Robinson Pearl 珠寶換匯門市" },
  { category: "taxi", vn: "Như Ý Hair Spa", pinyin: "如意美髮水療", zh: "如意越式洗頭 Hair Spa" },
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
    category: "重要證件與金融",
    icon: "🛂",
    items: [
      { id: "c1_1", text: "中華民國護照正本 (效期需 6 個月以上)" },
      { id: "c1_2", text: "Sun PhuQuoc Airways 來回電子機票行程單 (紙本+截圖)" },
      { id: "c1_3", text: "越南官方電子入境卡線上申報確認單截圖 (抵達前 72h 完成)" },
      { id: "c1_4", text: "安富 / 溫德姆 / 海岸生活 / 海貝或天清 住宿預訂確認單" },
      { id: "c1_5", text: "美金百元新鈔 (2013年後版本無折痕，Robinson Pearl 換匯最優) 或台幣" },
      { id: "c1_6", text: "海外高回饋信用卡 (至少 2 張，Grab 扣款與大筆消費必備)" },
      { id: "c1_7", text: "海外突發疾病醫療險與旅遊平安險保單" }
    ]
  },
  {
    category: "3C 電子與通訊",
    icon: "📱",
    items: [
      { id: "c2_1", text: "越南當地上網 eSIM 或實體 SIM 卡 (Viettel / Vinaphone)" },
      { id: "c2_2", text: "手機下載「VinBus APP」(查看北島免費公車動態)" },
      { id: "c2_3", text: "手機下載「Grab APP」並預先綁定信用卡" },
      { id: "c2_4", text: "香島免費纜車門票領取 QR Code (官網兌換專頁)" },
      { id: "c2_5", text: "大容量行動電源 (隨身行李攜帶，請勿託運)" },
      { id: "c2_6", text: "手機防水袋 (日落沙灘與纜車拍照防護)" }
    ]
  },
  {
    category: "衣物穿搭與防曬防蚊",
    icon: "👗",
    items: [
      { id: "c3_1", text: "渡假風洋裝、亮色襯衫 (日落小鎮與威尼斯拍照超美)" },
      { id: "c3_2", text: "舒適好走的防滑涼鞋 / 運動鞋 (Safari 與主題樂園步行必備)" },
      { id: "c3_3", text: "強效防蚊液 (Soffell 等，森林與動物園防護)" },
      { id: "c3_4", text: "高係數海洋友善防曬乳 (SPF 50+ PA++++)、大遮陽帽、太陽眼鏡" },
      { id: "c3_5", text: "輕便折疊晴雨傘 (防午後陣雨或大太陽遮陽)" }
    ]
  },
  {
    category: "個人常備藥品",
    icon: "💊",
    items: [
      { id: "c4_1", text: "常備腸胃藥、止瀉藥、胃散 (適應海鮮與夜市飲食)" },
      { id: "c4_2", text: "綜合感冒退燒藥、止痛藥、防水 OK 繃" },
      { id: "c4_3", text: "個人慢性病固定藥物與維他命 B/C" }
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

// Crisp, direct Vietnamese speech for Grab/Taxi drivers (No toast popup)
window.speakVietnamese = function(text) {
  const cleanDestination = text.replace(/\(.*?\)/g, '').trim();
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanDestination);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
    if (viVoice) utterance.voice = viVoice;
    
    window.speechSynthesis.speak(utterance);
  }
};

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

  document.getElementById("btnQuickCalc")?.addEventListener("click", () => switchTab("budget"));
  document.getElementById("btnSurvivalKit")?.addEventListener("click", () => switchTab("emergency"));
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

  const filteredSpots = ITINERARY_DATA.filter(spot => {
    return currentDayFilter === "all" || spot.day.toString() === currentDayFilter;
  });

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

  const DAY_TITLES = {
    1: "Day 1 (10/13 二) : 桃園出發 ✈ 富國島 ➔ 宿安富飯店 ➔ 陽東夜市晚餐與 Robinson Pearl 換匯",
    2: "Day 2 (10/14 三) : 往北移動 ➔ 宿溫德姆 ➔ Safari 野生動物園 ➔ 大世界小卷米線 ➔ 威尼斯水秀",
    3: "Day 3 (10/15 四) : VinWonders 珍珠水陸樂園 (海龜水族館・美人魚秀) ➔ 閉幕煙火 ➔ 越式 SPA",
    4: "Day 4 (10/16 五) : 一路往南 ➔ 宿海岸生活飯店 ➔ 親吻橋夕陽 ➔ 19:00海洋交響秀 ➔ VUI-Fest 夜市",
    5: "Day 5 (10/17 六) : 免費香島跨海纜車 ➔ 太陽世界香島公園 ➔ 親吻橋夕陽 ➔ 21:00海洋之吻與高空煙火",
    6: "Day 6 (10/18 日) : 往中部移動 ➔ 宿海貝/天清 ➔ 桑奈托日落沙灘下午茶 ➔ 特產採買 ➔ 如意越式洗頭",
    7: "Day 7 (10/19 一) : 飯店海景早餐 ➔ 富國國際機場 (PQC) ✈ 搭乘 9G 510 平安返抵桃園 (TPE)"
  };

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
  const budgetTotalVnd = document.querySelector(".budget-table tfoot td:nth-child(2)");
  const budgetTotalTwd = document.querySelector(".budget-table tfoot .total-price");

  if (budgetTableBody) {
    let tableHtml = "";
    let totalVnd = 0;

    BUDGET_ITEMS_DATA.forEach(item => {
      totalVnd += item.vnd;
      const twdVal = Math.round(item.vnd / rate);
      tableHtml += `
        <tr>
          <td><strong>${item.icon} ${item.name}</strong></td>
          <td>${item.desc}</td>
          <td>約 ${item.vnd.toLocaleString()} ₫</td>
          <td class="price-highlight">NT$ ${twdVal.toLocaleString()}</td>
          <td>${item.ratio}</td>
        </tr>
      `;
    });

    budgetTableBody.innerHTML = tableHtml;

    const totalTwd = Math.round(totalVnd / rate);
    if (budgetTotalVnd) budgetTotalVnd.innerHTML = `<strong>約 ${totalVnd.toLocaleString()} ₫</strong>`;
    if (budgetTotalTwd) budgetTotalTwd.innerText = `約 NT$ ${totalTwd.toLocaleString()}`;
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
const STORAGE_KEY = "phu_quoc_checklist_checked_v5";

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
