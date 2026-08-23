/**
 * 富國島 7 天 6 夜極致自由行手冊
 * 司機語音發音優化：專為 Grab / 計程車叫車設計，純地名發音無廢話
 */

// ==========================================
// 1. DATA: 7-DAY ITINERARY WITH REAL-TIME COSTS & TAXI VOICE
// ==========================================
const ITINERARY_DATA = [
  // ---------- DAY 1: 10/12 (一) 中部 ----------
  {
    day: 1,
    time: "17:35 - 20:25",
    category: "交通",
    nameZh: "桃園機場 (TPE) ✈ 富國島機場 (PQC)",
    nameVn: "Sân bay Quốc tế Phú Quốc",
    taxiVoice: "Sân bay Phú Quốc",
    costVnd: "機票即時行情",
    costTwd: "直飛來回約 NT$ 12,000",
    transport: "直飛航班 Sun PhuQuoc Airways 9G 511 (17:35 TPE ➔ 20:25 PQC)",
    address: "Tổ 2, Ấp Dương Tơ, Xã Dương Tơ, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3848 078",
    openingHours: "24 小時營運",
    description: "搭乘直飛航班抵達富國島國際機場。持有台灣護照享有「直飛富國島 30 天免簽證」待遇，出示 6 個月以上效期護照與 30 天內離境機票行程單即可蓋章通關。出關後領取/購買 eSIM，並可於機場或市區銀樓換匯。",
    tips: "💡 免簽政策：免簽章僅限富國島境內停留，切勿自行前往越南本島。隨身帶好回程機票行程單以備查驗。",
    mapsQuery: "Phu Quoc International Airport"
  },
  {
    day: 1,
    time: "20:45 - 21:30",
    category: "交通",
    nameZh: "中部安富飯店 Check-in 放行李",
    nameVn: "Khách sạn An Phú",
    taxiVoice: "Khách sạn An Phú, Dương Đông",
    costVnd: "即時房價約 640,000 ~ 750,000 ₫",
    costTwd: "約 NT$ 800 ~ 940 / 晚",
    transport: "機場搭乘 Grab 專車直達（車資約 120,000 ₫ / 約 NT$ 150）",
    address: "Đường 30 Tháng 4, Phường Dương Đông, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3988 989",
    openingHours: "24 小時前台服務",
    description: "第一晚約 20:25 抵達，選擇入住中部陽東鎮核心區域的「安富飯店 (An Phu Hotel)」，離機場僅 15 分鐘，性價比極高。辦理入住後卸下沉重行李，即可步行出發逛夜市吃宵夜。",
    tips: "💡 飯店步行至陽東夜市僅需 5~8 分鐘，隔天一早往北部移動非常便利！",
    mapsQuery: "An Phu Hotel Phu Quoc 30 Thang 4"
  },
  {
    day: 1,
    time: "21:30 - 23:30",
    category: "美食",
    nameZh: "陽東夜市海鮮晚餐 & 珠寶店換匯",
    nameVn: "Chợ Đêm Phú Quốc",
    taxiVoice: "Chợ Đêm Phú Quốc",
    costVnd: "晚餐約 250,000 ~ 450,000 ₫ / 人",
    costTwd: "約 NT$ 310 ~ 560",
    transport: "自飯店步行約 5 分鐘即達夜市入口",
    address: "54 Đường Nguyễn Trãi, Khu Phố 1, Dương Đông, Phú Quốc",
    phone: "+84 297 3846 123",
    openingHours: "17:00 - 23:30",
    description: "抵達富國島的第一頓海島宵夜！漫步於熱鬧非凡的陽東夜市，必吃：香蔥花生烤海膽 (約 35k~50k ₫/顆)、越式炒冰捲 (約 35k ₫)、現烤大頭蝦與越式法國麵包。夜市週邊知名珠寶銀樓（Tiệm Vàng）提供美金或台幣換匯服務，匯率通常比機場優渥。",
    tips: "💡 換匯秘訣：攜帶 2013 年後發行、無折痕的百元美金新鈔換匯最划算！點秤重活海鮮記得先確認每公斤（1kg）單價。",
    mapsQuery: "Phu Quoc Night Market Cho Dem"
  },

  // ---------- DAY 2: 10/13 (二) 北部 ----------
  {
    day: 2,
    time: "08:30 - 09:30",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 往北部渡假區移動",
    nameVn: "Wyndham Garden Grandworld",
    taxiVoice: "Khách sạn Wyndham Garden Grand World",
    costVnd: "Grab 約 280,000 ₫ 或搭免費 VinBus",
    costTwd: "Grab 約 NT$ 350 / VinBus 免費",
    transport: "搭乘 Grab 專車或搭乘免費綠色 VinBus 電動公車北上",
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc",
    phone: "VinBus: 1900 866 663",
    openingHours: "全天營運",
    description: "享用悠閒早餐後辦理退房，由中部陽東鎮啟程往北島移動。車程約 35 分鐘即可抵達富國大世界溫德姆花園飯店。",
    tips: "💡 手機可下載「VinBus APP」，即時查詢免費公車路線與到站動態！",
    mapsQuery: "Wyndham Garden Grandworld Phu Quoc"
  },
  {
    day: 2,
    time: "09:30 - 10:00",
    category: "交通",
    nameZh: "溫德姆花園飯店 Check-in 寄放行李 (連住 2 晚)",
    nameVn: "Wyndham Garden Grandworld",
    taxiVoice: "Khách sạn Wyndham Garden Grand World Phú Quốc",
    costVnd: "即時房價約 1,450,000 ~ 1,850,000 ₫",
    costTwd: "約 NT$ 1,800 ~ 2,300 / 晚",
    transport: "抵達飯店大廳",
    address: "Khu Grand World, Bãi Dài, Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3636 555",
    openingHours: "24 小時服務",
    description: "入住座落於富國大世界園區內的「溫德姆花園飯店 (Wyndham Garden Grandworld)」，連住 2 晚免除每天換飯店的麻煩。步行 3 分鐘即達大世界運河商圈，前往 Safari 動物園與 VinWonders 樂園車程僅需 5~10 分鐘。",
    tips: "💡 先在櫃檯寄加大件行李，輕裝出發前往 Safari 動物園！",
    mapsQuery: "Wyndham Garden Grandworld Phu Quoc"
  },
  {
    day: 2,
    time: "10:00 - 16:00",
    category: "樂園",
    nameZh: "Vinpearl Safari 野生動物園 (搭猛獸巴士・長頸鹿餵食午餐・飛禽表演)",
    nameVn: "Vinpearl Safari Phú Quốc",
    taxiVoice: "Vinpearl Safari Phú Quốc",
    costVnd: "全票約 850,000 ₫ (長者約 650,000 ₫)；長頸鹿飼料 30,000 ₫",
    costTwd: "全票約 NT$ 1,060 (長者約 NT$ 810)；飼料約 NT$ 38",
    transport: "搭乘免費接駁車或 Grab (約 8 分鐘)",
    address: "Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3636 699",
    openingHours: "08:30 - 16:00 (16:00 閉園)",
    description: "越南規模最大的開放式野生動物園！重點體驗：① 搭乘特製防彈 Safari Bus 深入猛獸野生放養區，近距離觀察孟加拉虎、非洲獅、白犀牛與斑馬；② 前往「長頸鹿餐廳 (Giraffe Restaurant)」購買紅蘿蔔與長頸鹿零距離餵食合照，並在此享用美味午餐；③ 走進互動區近距離觀賞環尾狐猴；④ 觀賞精彩的「飛禽表演秀 (Bird Show)」（固定演出時段：10:00 與 14:00）。",
    tips: "💡 建議購買 Safari + VinWonders 雙園套票（約 1,500,000 ₫ / NT$1,875），長頸鹿上午食慾最好，建議早點前往互動！",
    mapsQuery: "Vinpearl Safari Phu Quoc"
  },
  {
    day: 2,
    time: "16:30 - 18:30",
    category: "放鬆",
    nameZh: "返回溫德姆花園飯店休息・悠閒梳洗",
    nameVn: "Wyndham Garden Grandworld",
    taxiVoice: "Khách sạn Wyndham Garden Grand World",
    costVnd: "包含於房費",
    costTwd: "已含",
    transport: "搭乘接駁車返回飯店",
    address: "Wyndham Garden Grandworld Phu Quoc",
    phone: "+84 297 3636 555",
    openingHours: "隨時",
    description: "結束動物園行程後返回飯店正式進房，吹冷氣小憩、使用飯店泳池設施，為晚上的大世界威尼斯不夜城儲備體力。",
    tips: "💡 飯店提供室外泳池，傍晚非常適合放鬆消暑。",
    mapsQuery: "Wyndham Garden Grandworld Phu Quoc"
  },
  {
    day: 2,
    time: "18:30 - 22:30",
    category: "景點",
    nameZh: "Grand World 富國大世界晚餐 ➔ 竹林傳奇 ➔ 21:00 威尼斯水上光影秀",
    nameVn: "Grand World Phú Quốc",
    taxiVoice: "Grand World Phú Quốc",
    costVnd: "街區與水上光影秀完全免費；晚餐約 250,000 ~ 400,000 ₫",
    costTwd: "秀免費；晚餐約 NT$ 310 ~ 500",
    transport: "自飯店步行 3 分鐘即達大世界運河核心區",
    address: "Grand World, Khu Bãi Dài, Gành Dầu, Phú Quốc",
    phone: "+84 297 3737 373",
    openingHours: "全天 24 小時開放 (水舞秀 21:00-22:00)",
    description: "漫步在富國島版威尼斯彩色不夜城！造訪全越南最大的「竹林傳奇 (Bamboo Legend)」震撼竹構建築，欣賞運河兩旁歐風馬卡龍街景與各國美食餐廳。晚上 21:00 準時前往愛情湖畔（Hồ Tình Yêu），觀賞最震撼的壓軸閉幕大秀「威尼斯聲光水舞秀 (The Colors of Venice)」，巨型發光機械道具船與水幕激光舞者交織出極致視覺盛宴！（註：本行程不安排貢多拉付費乘船）。",
    tips: "💡 最佳觀秀機位：威尼斯石橋（Cầu Ánh Sáng）正中央，建議 20:35 提前佔據好視野！",
    mapsQuery: "Grand World Phu Quoc Bamboo Legend"
  },

  // ---------- DAY 3: 10/14 (三) 北部 ----------
  {
    day: 3,
    time: "09:00 - 19:30",
    category: "樂園",
    nameZh: "VinWonders 珍珠水陸樂園 (海龜水族館・美人魚秀・餵食秀・閉幕秀)",
    nameVn: "VinWonders Phú Quốc",
    taxiVoice: "VinWonders Phú Quốc",
    costVnd: "單票約 950,000 ₫ (長者約 710,000 ₫) / 雙園套票約 1,500,000 ₫",
    costTwd: "單票約 NT$ 1,180 / 雙園套票約 NT$ 1,875",
    transport: "搭乘免費 VinBus 或大世界接駁車（約 5 分鐘車程）",
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3737 373",
    openingHours: "09:00 - 19:30 (19:30 閉園)",
    description: "暢遊被譽為「越南迪士尼」的夢幻主題樂園！重點攻略：① 打卡世界五大巨型海龜造型「海王宮殿水族館 (The Sea Shell)」；② 11:00 與 15:00 魚群餵食秀；③ 14:00 優雅夢幻的美人魚秀 (Mermaid Show)；④ 園內主題餐廳享用午餐；⑤ 體驗各大室內外主題陸上遊樂設施（註：本行程專注於水族館與陸樂園，不安排水上樂園滑水道）；⑥ 18:45 觀賞城堡前華麗震撼的閉幕光影秀「ONCE Show」。",
    tips: "💡 建議購買雙園套票更划算！水族館內冷氣極佳，是午後避暑的最佳去處。",
    mapsQuery: "VinWonders Phu Quoc Sea Shell"
  },
  {
    day: 3,
    time: "20:00 - 22:30",
    category: "放鬆",
    nameZh: "Grand World 大世界特色晚餐 & 越式舒壓按摩 SPA",
    nameVn: "Grand World Phú Quốc",
    taxiVoice: "Grand World Phú Quốc",
    costVnd: "60分鐘全身按摩約 250,000 ~ 380,000 ₫；晚餐約 280,000 ₫",
    costTwd: "按摩約 NT$ 310 ~ 475；晚餐約 NT$ 350",
    transport: "自樂園搭車返回大世界街區",
    address: "Grand World Phú Quốc, Gành Dầu",
    phone: "各大世界正規 SPA 館",
    openingHours: "營業至 23:30",
    description: "結束樂園一整天的歡樂行程，回到大世界運河旁挑選一家氣氛絕佳的海鮮餐廳享用晚餐。餐後安排一場道地的越式全身草藥精油按摩或足底按摩，徹底釋放雙腿疲勞，回溫德姆花園飯店享受甜美睡眠。",
    tips: "💡 大世界商圈有多家正規透明的 SPA 按摩館，入店前可先確認價目表包含的小費規範。",
    mapsQuery: "Grand World Phu Quoc"
  },

  // ---------- DAY 4: 10/15 (四) 南部 ----------
  {
    day: 4,
    time: "09:00 - 10:30",
    category: "交通",
    nameZh: "早餐、Check-out ➔ 一路往南前往日落小鎮 (Sunset Town)",
    nameVn: "Thị trấn Hoàng Hôn (Sunset Town)",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town, An Thới",
    costVnd: "Grab 專車約 480,000 ~ 580,000 ₫",
    costTwd: "約 NT$ 600 ~ 725 (全車均攤)",
    transport: "預約 Grab 專車由北島直達南島日落小鎮（車程約 50 分鐘）",
    address: "Thị trấn Hoàng Hôn (Sunset Town), An Thới, Phú Quốc",
    phone: "各飯店前台專線",
    openingHours: "隨時出發",
    description: "在溫德姆花園飯店享用豐盛早餐後辦理退房，準備「一路往南」！南島是富國島最浪漫的地中海風情核心區，著名的親吻橋、跨海纜車與海洋之吻秀皆匯聚於此。",
    tips: "💡 約 10:00 前抵達日落小鎮辦理行李寄放，即可展開地中海街區漫步。",
    mapsQuery: "Sunset Town Phu Quoc An Thoi"
  },
  {
    day: 4,
    time: "10:30 - 11:30",
    category: "交通",
    nameZh: "南部日落小鎮飯店 Check-in 寄放行李 (連住 2 晚)",
    nameVn: "Khách sạn Sunset Town",
    taxiVoice: "Khách sạn La Festa Sunset Town, An Thới",
    costVnd: "即時房價約 1,350,000 ~ 2,500,000 ₫",
    costTwd: "約 NT$ 1,680 ~ 3,125 / 晚",
    transport: "抵達日落小鎮飯店",
    address: "Thị trấn Hoàng Hôn, Bãi Đất Đỏ, An Thới, Phú Quốc",
    phone: "飯店前台",
    openingHours: "24 小時服務",
    description: "入住南部地中海日落小鎮海景飯店（如 La Festa Phu Quoc 或週邊特色海景酒店）。連住南部 2 晚的最大優勢在於：欣賞完夜間大秀與煙火後，可直接步行回到飯店，無需在深夜排隊叫車！",
    tips: "💡 寄放行李後即可漫步出門探索地中海風情街道。",
    mapsQuery: "La Festa Phu Quoc Curio Collection by Hilton"
  },
  {
    day: 4,
    time: "11:30 - 14:00",
    category: "美食",
    nameZh: "日落小鎮 Sunset Town 海景午餐 & 漫步彩色阿瑪菲街區",
    nameVn: "Thị trấn Hoàng Hôn (Sunset Town)",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town",
    costVnd: "午餐約 180,000 ~ 350,000 ₫ / 人",
    costTwd: "約 NT$ 225 ~ 440",
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
    time: "16:30 - 18:30",
    category: "景點",
    nameZh: "Kiss Bridge 親吻橋 ➔ 漫步踏海・絕美日落餘暉合影",
    nameVn: "Cầu Hôn (Kiss Bridge)",
    taxiVoice: "Cầu Hôn, Thị trấn Hoàng Hôn",
    costVnd: "單買約 100,000 ₫ (常含於套票)",
    costTwd: "約 NT$ 125",
    transport: "自小鎮廣場沿海濱步道步行 3 分鐘",
    address: "Cầu Hôn, Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "07:00 - 22:00",
    description: "由義大利建築大師設計的富國島世紀地標「吻橋 (Kiss Bridge)」！兩座橋身自南北兩側優雅伸向大海，在海中央僅相隔 30 公分。傍晚 17:00~17:45，火紅的夕陽恰好落在雙橋指尖縫隙之間，海風徐徐、金光波光粼粼，浪漫無比。",
    tips: "💡 站在北橋與南橋交會點，利用手機長焦鏡頭借位拍出親吻夕陽的經典剪影照片！",
    mapsQuery: "Kiss Bridge Phu Quoc Cau Hon"
  },
  {
    day: 4,
    time: "19:00 - 22:00",
    category: "美食",
    nameZh: "Sunset Town 海景餐廳晚餐 & 海濱夜市自由漫遊",
    nameVn: "Chợ đêm Vui-Fest Bazaar",
    taxiVoice: "Chợ đêm Vui-Fest, Sunset Town",
    costVnd: "晚餐約 250,000 ~ 500,000 ₫ / 人",
    costTwd: "約 NT$ 310 ~ 625",
    transport: "小鎮內漫步",
    address: "Bờ biển Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "各海景餐廳現場",
    openingHours: "17:00 - 23:00",
    description: "優先選擇靠海露天座位餐廳享用晚餐，伴隨海浪聲品嚐新鮮海鮮與熱帶飲品。餐後漫步於海濱文青夜市「Vui-Fest Bazaar」，欣賞街頭打擊樂秀與文創手作市集，享受愜意的海島夜晚。",
    tips: "💡 今晚早點休息，為隔天最精彩的世界最長纜車與海之吻大秀做好準備！",
    mapsQuery: "Vui-Fest Bazaar Sunset Town"
  },

  // ---------- DAY 5: 10/16 (五) 南部 ----------
  {
    day: 5,
    time: "09:00 - 11:30",
    category: "樂園",
    nameZh: "Hon Thom 香島跨海纜車 (全世界最長跨海纜車) ➔ 太陽世界香島公園",
    nameVn: "Ga Cáp treo Hòn Thơm (Sun World)",
    taxiVoice: "Ga Cáp treo Hòn Thơm, An Thới",
    costVnd: "來回纜車票即時行情約 650,000 ~ 850,000 ₫",
    costTwd: "約 NT$ 810 ~ 1,060",
    transport: "步行至日落小鎮安泰纜車站 (Ga Ánh Dương)",
    address: "Bãi Đất Đỏ, Phường An Thới, TP. Phú Quốc, Kiên Giang",
    phone: "+84 886 045 888",
    openingHours: "纜車營運時段：09:00-11:30 , 13:30-17:00 (中午暫停保養)",
    description: "搭乘獲金氏世界紀錄認證「全球最長三線跨海纜車」（全長 7,899 公尺，單程約 20 分鐘）！360度全景玻璃車廂凌空飛越安泰群島，俯瞰無數彩色漁船與碧綠珊瑚海灣。抵達香島（Hon Thom）後漫步於太陽世界香島自然公園，享受熱帶海島植被與海風景觀（註：本行程以搭纜車與景觀漫遊為主，不安排水上活動）。",
    tips: "💡 務必留意纜車營運時間（上午 09:00-11:30，下午 13:30-17:00），上午搭乘可避開午後排隊人潮！",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 5,
    time: "12:00 - 15:30",
    category: "放鬆",
    nameZh: "返回 Sunset Town 享用午餐 ➔ 飯店吹冷氣休息充電",
    nameVn: "Thị trấn Hoàng Hôn",
    taxiVoice: "Thị trấn Hoàng Hôn, Sunset Town",
    costVnd: "午餐約 150,000 ~ 280,000 ₫ / 人",
    costTwd: "約 NT$ 180 ~ 350",
    transport: "搭乘纜車返回日落小鎮",
    address: "Thị trấn Hoàng Hôn, An Thới",
    phone: "飯店前台",
    openingHours: "隨時",
    description: "搭乘纜車返回日落小鎮本島，在小鎮內享用可口午餐後返回飯店吹冷氣休息、小憩補眠。由於今晚有連續兩場頂級大秀與煙火表演，下午充分休息能確保夜間擁有最棒的精神享受演出！",
    tips: "💡 請先確認手機內電子門票憑證已下載好今晚 19:00 與 21:00 的入場 QR Code。",
    mapsQuery: "Sunset Town Phu Quoc"
  },
  {
    day: 5,
    time: "17:00 - 18:45",
    category: "景點",
    nameZh: "Kiss Bridge 親吻橋 ➔ 夕陽暮光 ➔ 浪漫晚餐",
    nameVn: "Cầu Hôn (Kiss Bridge)",
    taxiVoice: "Cầu Hôn, Thị trấn Hoàng Hôn",
    costVnd: "晚餐約 250,000 ~ 450,000 ₫ / 人",
    costTwd: "約 NT$ 310 ~ 560",
    transport: "步行前往親吻橋與海景餐廳",
    address: "Cầu Hôn & Bờ biển Sunset Town",
    phone: "現場",
    openingHours: "全天開放",
    description: "再次踏上親吻橋，欣賞落日將海面染成醉人深金色的魔幻時刻（Magic Hour）。隨後在海景餐廳提早享用美味晚餐，準備迎接 19:00 開始的夜間大秀連發！",
    tips: "💡 建議於 18:30 前完成用餐，從容步行前往表演看台區驗票入場。",
    mapsQuery: "Kiss Bridge Sunset Town Phu Quoc"
  },
  {
    day: 5,
    time: "19:00 - 19:40",
    category: "樂園",
    nameZh: "《海洋交響》(Symphony of the Sea) 水幕・雷射・極限特技秀",
    nameVn: "Sân khấu bờ biển Sunset Town",
    taxiVoice: "Sân khấu nhạc nước Sunset Town, An Thới",
    costVnd: "即時票價約 300,000 ~ 450,000 ₫",
    costTwd: "約 NT$ 375 ~ 560",
    transport: "日落小鎮海上海灣專屬看台區",
    address: "Sân khấu bờ biển Sunset Town, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "19:00 準時開演",
    description: "結合世界級極限水上摩托車特技、水上飛人（Flyboard）、璀璨雷射激光、立體水幕投影與澎湃交響樂的沉浸式震撼大秀！特技演員在海面上空翻轉旋轉，視覺張力極具衝擊感！",
    tips: "💡 提前線上購票憑 QR Code 掃描快速入場，佔據中段視野最佳。",
    mapsQuery: "Sunset Town Show Arena Phu Quoc"
  },
  {
    day: 5,
    time: "21:00 - 21:45",
    category: "樂園",
    nameZh: "《海洋之吻》(Kiss of the Sea) 旗艦大秀 ➔ 壓軸海面璀璨煙火",
    nameVn: "Sân khấu Kiss of the Sea",
    taxiVoice: "Sân khấu Kiss of the Sea, Sunset Town",
    costVnd: "即時票價約 550,000 ~ 700,000 ₫ (煙火免費)",
    costTwd: "約 NT$ 680 ~ 875",
    transport: "日落小鎮主圓形水上劇場（步行 2 分鐘）",
    address: "Sân khấu mái vòm Kiss of the Sea, Sunset Town, An Thới",
    phone: "+84 886 045 888",
    openingHours: "21:00 準時開演 (約 30 分鐘 + 壓軸煙火)",
    description: "耗資數百萬美元打造的全球頂級多媒體水幕光影秀！由 60 位國際舞者登台，融合水幕投影、高空火柱、雷射與壯麗音效（純水幕光影觀賞大秀，不是遊客下水活動）。大秀結束時，長達數分鐘的「高空璀璨煙火」在海面與地中海小鎮上空震撼綻放，為整趟海島旅程留下最浪漫的巔峰回憶！",
    tips: "💡 煙火結束後，因為住在 Sunset Town 飯店，可直接輕鬆步行走回房間，避開所有散場車潮！",
    mapsQuery: "Kiss of the Sea Show Sunset Town"
  },

  // ---------- DAY 6: 10/17 (六) 中部 ----------
  {
    day: 6,
    time: "09:30 - 11:00",
    category: "交通",
    nameZh: "悠閒早餐、Check-out ➔ 南部移動至中部陽東鎮／Long Beach",
    nameVn: "Dương Đông (Long Beach)",
    taxiVoice: "Thị trấn Dương Đông, Đường Trần Hưng Đạo",
    costVnd: "Grab 專車約 240,000 ~ 320,000 ₫",
    costTwd: "約 NT$ 300 ~ 400 (全車均攤)",
    transport: "前一晚看秀較晚，今天睡到自然醒後搭 Grab 專車返回中部",
    address: "Khu Phố 7, Đường Trần Hưng Đạo, Phường Dương Đông, Phú Quốc",
    phone: "飯店前台",
    openingHours: "隨時出發",
    description: "昨晚觀看海之吻與煙火較晚，今天早晨安排輕鬆慢活。享用早餐後辦理退房，專車返回中部陽東鎮 / Long Beach 區域，入住五星海景渡假飯店（天清飯店 Thien Thanh Resort 或 Seashells 海貝水療飯店）。",
    tips: "💡 最後一晚住中部離機場僅需 15 分鐘，免除隔天趕飛機的奔波風險！",
    mapsQuery: "Seashells Phu Quoc Hotel & Spa Tran Hung Dao"
  },
  {
    day: 6,
    time: "11:00 - 12:00",
    category: "交通",
    nameZh: "中部渡假飯店 Check-in / 寄放行李 (天清飯店 或 海貝飯店)",
    nameVn: "Thien Thanh Resort / Seashells Hotel",
    taxiVoice: "Khách sạn Thien Thanh Resort, Trần Hưng Đạo",
    costVnd: "天清約 1,750,000 ₫ / 海貝約 2,200,000 ₫",
    costTwd: "天清約 NT$ 2,180 / 海貝約 NT$ 2,750",
    transport: "抵達飯店大廳",
    address: "Đường Trần Hưng Đạo / Võ Thị Sáu, Dương Đông, Phú Quốc",
    phone: "+84 297 3923 999",
    openingHours: "24 小時服務",
    description: "入住中部極富盛名的五星海景渡假酒店（Thien Thanh Resort 富國天清飯店 或 Seashells 海貝水療飯店）。飯店緊鄰沙灘，擁有開闊無邊際海景泳池與私人沙灘躺椅。",
    tips: "💡 辦理登記並寄放大件行李，即可步行出門享受午後慢活放空行程。",
    mapsQuery: "Thien Thanh Resort Phu Quoc"
  },
  {
    day: 6,
    time: "14:00 - 17:30",
    category: "放鬆",
    nameZh: "日落沙灘海景咖啡下午茶 ➔ 沙灘放空看海",
    nameVn: "Bãi Trường (Long Beach)",
    taxiVoice: "Bãi biển Long Beach, Trần Hưng Đạo",
    costVnd: "下午茶飲品約 70,000 ~ 150,000 ₫ / 人",
    costTwd: "約 NT$ 90 ~ 190",
    transport: "步行或 Grab 短程 (約 3~5 分鐘)",
    address: "Bãi Trường (Long Beach), Dương Đông, Phú Quốc",
    phone: "各海景咖啡廳",
    openingHours: "全天開放",
    description: "在 Long Beach 沿海挑選一間唯美的沙灘海景咖啡廳，點一杯香濃的越式椰子咖啡冰沙（Cà phê dừa）或新鮮熱帶果汁，坐在棕櫚樹蔭下的躺椅上聽海浪聲、吹海風，欣賞富國島最後一個午後的金色日落。",
    tips: "💡 可以在此寫明信片、整理前幾天的美麗照片與回憶。",
    mapsQuery: "Long Beach Phu Quoc Tran Hung Dao"
  },
  {
    day: 6,
    time: "18:00 - 22:30",
    category: "購物",
    nameZh: "陽東夜市美食 ➔ 特產伴手禮大採買 ➔ 越式洗頭與全身精油按摩",
    nameVn: "Chợ Đêm Phú Quốc & Kingkong Mart",
    taxiVoice: "Chợ Đêm Phú Quốc",
    costVnd: "採買腰果胡椒約 400,000 ₫；洗頭按摩約 250,000 ₫",
    costTwd: "採買約 NT$ 500；越式洗頭按摩約 NT$ 310",
    transport: "步行至陽東夜市商圈",
    address: "Chợ Đêm Phú Quốc & 金剛超市 Kingkong Mart",
    phone: "+84 966 690 999",
    openingHours: "17:00 - 23:30",
    description: "旅程最後一晚的採買與放鬆盛宴！行程規劃：① 陽東夜市品嚐道地海鮮、烤魷魚與甘蔗汁；② 前往金剛超市採買四大富國島必買伴手禮：富國特產黑/紅胡椒粒 (Tiêu)、帶皮大腰果 (Hạt điều)、中原傳奇咖啡 (Trung Nguyên) 與特級波羅蜜果乾；③ 體驗道地的「越式洗頭 (Gội đầu dưỡng sinh)」與全身熱石精油 SPA，包含頭皮深層清潔、草藥薰蒸、肩頸舒壓與臉部保養，徹底洗去一身疲憊！",
    tips: "💡 購買胡椒與腰果務必選擇密封真空包裝，行李箱好收納且能防潮保鮮！",
    mapsQuery: "Kingkong Mart Phu Quoc Tran Hung Dao"
  },

  // ---------- DAY 7: 10/18 (日) 返台 ----------
  {
    day: 7,
    time: "08:00 - 09:30",
    category: "美食",
    nameZh: "飯店海景自助早餐 ➔ 悠閒收拾行李與退房",
    nameVn: "Khách sạn nghỉ dưỡng Phú Quốc",
    taxiVoice: "Khách sạn Phú Quốc",
    costVnd: "包含於房費",
    costTwd: "已含",
    transport: "飯店海景餐廳",
    address: "飯店內",
    phone: "前台",
    openingHours: "06:30 - 10:00",
    description: "在海景晨光中享用豐盛的五星自助早餐！品嚐現煮的生牛肉河粉 (Phở Bò)，擠上新鮮檸檬汁、九層塔與朝天椒，搭配熱騰騰可頌與香濃冰煉乳咖啡。隨後辦理退房，準備前往機場。",
    tips: "💡 隨身行李再次檢查護照正本、機票與行動電源（行動電源嚴禁托運，需隨身攜帶）。",
    mapsQuery: "Phu Quoc resort breakfast"
  },
  {
    day: 7,
    time: "09:30 - 16:10",
    category: "交通",
    nameZh: "飯店 ➔ 富國國際機場 (PQC) ✈ 桃園機場 (TPE)",
    nameVn: "Sân bay Quốc tế Phú Quốc",
    taxiVoice: "Sân bay Phú Quốc (Ga đi)",
    costVnd: "Grab 車資約 100,000 ₫",
    costTwd: "車資約 NT$ 125",
    transport: "Grab 叫車至富國機場（約 15 分鐘）；搭乘班機 9G 510",
    address: "Sân bay Quốc tế Phú Quốc (PQC)",
    phone: "+84 297 3848 078",
    openingHours: "航班起飛前 2.5 小時開櫃報到",
    description: "由陽東飯店搭乘 Grab 約 15 分鐘抵達富國機場。辦理登機與托運行李手續，出境大廳內有免稅店可做最後巡禮。搭乘 Sun PhuQuoc Airways 9G 510 (11:30 富國島起飛 ➔ 16:10 平安抵達台北桃園機場 TPE)，圓滿結束 7 天 6 夜充實精彩的富國島海島假期！",
    tips: "💡 魚露特別提醒：所有航空公司嚴禁隨身手提一般瓶裝魚露上機，若有購買需為機場免稅店官方合格密封盒！",
    mapsQuery: "Phu Quoc International Airport PQC"
  }
];

// ==========================================
// 2. DATA: VIETNAMESE SURVIVAL PHRASES (TAXI FOCUSED)
// ==========================================
const PHRASES_DATA = [
  // Taxi & Location (Short & Pure Destination)
  { category: "taxi", vn: "Cho tôi đến đây", pinyin: "對問地登代", zh: "請載我到這裡 (出示手機)" },
  { category: "taxi", vn: "Khách sạn An Phú", pinyin: "卡傘安富", zh: "安富飯店 (An Phu Hotel)" },
  { category: "taxi", vn: "Wyndham Grand World", pinyin: "溫德姆格蘭世界", zh: "溫德姆花園飯店" },
  { category: "taxi", vn: "Vinpearl Safari", pinyin: "珍珠野生動物園", zh: "野生動物園" },
  { category: "taxi", vn: "VinWonders Phú Quốc", pinyin: "珍珠奇幻樂園", zh: "珍珠水陸主題樂園" },
  { category: "taxi", vn: "Grand World Phú Quốc", pinyin: "富國大世界", zh: "富國大世界 (不夜城)" },
  { category: "taxi", vn: "Thị trấn Hoàng Hôn, Sunset Town", pinyin: "日落小鎮", zh: "日落小鎮 Sunset Town" },
  { category: "taxi", vn: "Ga Cáp treo Hòn Thơm", pinyin: "香島跨海纜車", zh: "香島跨海纜車站" },
  { category: "taxi", vn: "Cầu Hôn", pinyin: "親吻橋", zh: "吻橋 Kiss Bridge" },
  { category: "taxi", vn: "Chợ Đêm Phú Quốc", pinyin: "陽東夜市", zh: "陽東夜市" },
  { category: "taxi", vn: "Siêu thị Kingkong Mart", pinyin: "金剛超市", zh: "金剛超市 Kingkong Mart" },
  { category: "taxi", vn: "Sân bay Phú Quốc", pinyin: "富國島機場", zh: "富國國際機場" },
  { category: "taxi", vn: "Dừng lại ở đây, cảm ơn", pinyin: "榮來鵝代，感恩", zh: "請停在這裡，謝謝" },
  { category: "taxi", vn: "Bật đồng hồ tính tiền giúp tôi", pinyin: "博同火頂頂友對", zh: "請按跳表計費" },

  // Order & Food
  { category: "order", vn: "Xin chào!", pinyin: "新潮！", zh: "你好！" },
  { category: "order", vn: "Cảm ơn!", pinyin: "感恩！", zh: "謝謝！" },
  { category: "order", vn: "Cho tôi xem thực đơn", pinyin: "抽對先特騰", zh: "請給我看一下菜單" },
  { category: "order", vn: "Cho tôi một tô Phở Bò", pinyin: "抽對莫斗ㄈㄜˇ波", zh: "請給我一碗牛肉河粉" },
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
// 3. DATA: PACKING CHECKLIST
// ==========================================
const CHECKLIST_DATA = [
  {
    category: "重要證件與金融",
    icon: "🛂",
    items: [
      { id: "c1_1", text: "中華民國護照正本 (效期需 6 個月以上)" },
      { id: "c1_2", text: "Sun PhuQuoc Airways 來回電子機票行程單 (紙本+手機截圖，免簽必查)" },
      { id: "c1_3", text: "安富 / 溫德姆 / 日落小鎮 / 天清或海貝 住宿預訂確認單" },
      { id: "c1_4", text: "美金百元新鈔 (2013年後版本無折痕，陽東銀樓換匯最優) 或台幣" },
      { id: "c1_5", text: "海外高回饋信用卡 (至少 2 張，Grab 扣款與大筆消費必備)" },
      { id: "c1_6", text: "海外突發疾病醫療險與旅遊平安險保單" }
    ]
  },
  {
    category: "3C 電子與通訊",
    icon: "📱",
    items: [
      { id: "c2_1", text: "越南當地上網 eSIM 或實體 SIM 卡 (Viettel / Vinaphone)" },
      { id: "c2_2", text: "手機下載「VinBus APP」(查看北島免費公車動態)" },
      { id: "c2_3", text: "手機下載「Grab APP」並預先綁定信用卡" },
      { id: "c2_4", text: "大容量行動電源 (隨身行李攜帶，請勿託運)" },
      { id: "c2_5", text: "手機防水袋 (日落沙灘與纜車拍照防護)" }
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
// 4. APPLICATION CONTROLLER
// ==========================================
let currentDayFilter = "all";
let currentCategoryFilter = "all";
let currentPhraseFilter = "all";
let currentSearchQuery = "";
let exchangeRate = 800; // 1 TWD = 800 VND

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDayFilters();
  initCategoryFilters();
  initSearch();
  initCurrencyCalculator();
  initPhrases();
  initChecklist();
  renderSpots();
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

// Crisp, direct Vietnamese speech for Grab/Taxi drivers
window.speakVietnamese = function(text) {
  // Strip any parentheses or subtitles to keep destination pure & clear
  const cleanDestination = text.replace(/\(.*?\)/g, '').trim();
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanDestination);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8; // Clear, audible pace for drivers
    utterance.pitch = 1.0;
    
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
    if (viVoice) utterance.voice = viVoice;
    
    window.speechSynthesis.speak(utterance);
    showToast(`🔊 播放地名給司機聽：${cleanDestination}`, "🚕");
  } else {
    showToast(`目的地：${cleanDestination}`, "🚕");
  }
};

// ==========================================
// 5. TAB NAVIGATION
// ==========================================
function initTabs() {
  const topTabs = document.querySelectorAll(".nav-tab");
  const bottomTabs = document.querySelectorAll(".bottom-nav-item");
  const tabContents = document.querySelectorAll(".tab-content");

  function switchTab(tabId) {
    topTabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabId));
    bottomTabs.forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
    tabContents.forEach(content => content.classList.toggle("active", content.id === `tab-${tabId}`));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  topTabs.forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));
  bottomTabs.forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));

  document.getElementById("btnQuickCalc")?.addEventListener("click", () => switchTab("budget"));
  document.getElementById("btnSurvivalKit")?.addEventListener("click", () => switchTab("emergency"));
}

// ==========================================
// 6. ITINERARY RENDERING & FILTERING
// ==========================================
function initDayFilters() {
  const dayPills = document.querySelectorAll(".day-pill");
  dayPills.forEach(pill => {
    pill.addEventListener("click", () => {
      dayPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentDayFilter = pill.dataset.day;
      renderSpots();
    });
  });
}

function initCategoryFilters() {
  const catTags = document.querySelectorAll(".cat-tag");
  catTags.forEach(tag => {
    tag.addEventListener("click", () => {
      catTags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      currentCategoryFilter = tag.dataset.cat;
      renderSpots();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById("spotSearch");
  const clearBtn = document.getElementById("clearSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    clearBtn.classList.toggle("hidden", !currentSearchQuery);
    renderSpots();
  });

  clearBtn?.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    clearBtn.classList.add("hidden");
    renderSpots();
  });
}

function renderSpots() {
  const container = document.getElementById("spotsContainer");
  if (!container) return;

  const filteredSpots = ITINERARY_DATA.filter(spot => {
    const matchDay = currentDayFilter === "all" || spot.day.toString() === currentDayFilter;
    const matchCategory = currentCategoryFilter === "all" || spot.category === currentCategoryFilter;
    const query = currentSearchQuery;
    const matchSearch = !query || 
      spot.nameZh.toLowerCase().includes(query) ||
      spot.nameVn.toLowerCase().includes(query) ||
      spot.description.toLowerCase().includes(query) ||
      spot.tips.toLowerCase().includes(query) ||
      spot.address.toLowerCase().includes(query);

    return matchDay && matchCategory && matchSearch;
  });

  if (filteredSpots.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; background: #fff; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🔍</div>
        <h3 style="color: #0f172a; margin-bottom: 4px;">沒有找到符合條件的景點或行程</h3>
        <p style="color: #64748b; font-size: 0.9rem;">請嘗試更換關鍵字或點選「全部總覽」查看完整清單</p>
      </div>
    `;
    return;
  }

  const DAY_TITLES = {
    1: "Day 1 (10/12 一) : 桃園出發 ✈ 富國島 ➔ 宿安富飯店 ➔ 陽東夜市晚餐與銀樓換匯",
    2: "Day 2 (10/13 二) : 往北移動 ➔ 宿溫德姆 ➔ Safari 野生動物園 (猛獸車+餵長頸鹿) ➔ 大世界威尼斯水秀",
    3: "Day 3 (10/14 三) : VinWonders 珍珠水陸樂園 (海龜水族館+美人魚秀) ➔ 大世界晚餐 ➔ 越式 SPA 按摩",
    4: "Day 4 (10/15 四) : 一路往南 ➔ 宿日落小鎮 ➔ 海景午餐 ➔ 親吻橋看夕陽 ➔ Vui-Fest 海濱夜市",
    5: "Day 5 (10/16 五) : 世界最長跨海纜車 ➔ 太陽世界香島公園 ➔ 親吻橋夕陽 ➔ 19:00海洋交響 ➔ 21:00海洋之吻+煙火",
    6: "Day 6 (10/17 六) : 往中部移動 ➔ 宿天清/海貝飯店 ➔ 日落沙灘海景下午茶 ➔ 陽東夜市伴手禮採買 ➔ 越式洗頭按摩",
    7: "Day 7 (10/18 日) : 飯店海景早餐 ➔ 富國國際機場 (PQC) ➔ 搭乘 9G 510 平安返抵桃園 (TPE)"
  };

  let html = "";
  let lastDay = null;

  filteredSpots.forEach(spot => {
    if (spot.day !== lastDay && currentDayFilter === "all") {
      lastDay = spot.day;
      html += `
        <div class="day-section-header">
          <h3 class="day-section-title">
            <span>📅</span> ${DAY_TITLES[spot.day] || `Day ${spot.day}`}
          </h3>
          <span class="day-section-sub">10/${11 + spot.day} 精華行程</span>
        </div>
      `;
    }

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapsQuery || spot.nameVn)}`;
    const driverVoiceText = spot.taxiVoice || spot.nameVn;

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
            <div class="cost-vnd">${spot.costVnd}</div>
            <div class="cost-twd">${spot.costTwd}</div>
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
// 7. CURRENCY CALCULATOR
// ==========================================
function initCurrencyCalculator() {
  const twdInput = document.getElementById("twdInput");
  const vndInput = document.getElementById("vndInput");
  const customRate = document.getElementById("customRate");

  if (!twdInput || !vndInput || !customRate) return;

  function updateFromTwd() {
    const twd = parseFloat(twdInput.value) || 0;
    const rate = parseFloat(customRate.value) || 800;
    vndInput.value = Math.round(twd * rate);
  }

  function updateFromVnd() {
    const vnd = parseFloat(vndInput.value) || 0;
    const rate = parseFloat(customRate.value) || 800;
    if (rate > 0) twdInput.value = Math.round(vnd / rate);
  }

  twdInput.addEventListener("input", updateFromTwd);
  vndInput.addEventListener("input", updateFromVnd);
  customRate.addEventListener("input", () => {
    exchangeRate = parseFloat(customRate.value) || 800;
    updateFromTwd();
  });

  document.querySelectorAll(".matrix-item").forEach(item => {
    item.addEventListener("click", () => {
      const vndVal = parseFloat(item.dataset.vnd);
      vndInput.value = vndVal;
      updateFromVnd();
      showToast(`已載入 ${vndVal.toLocaleString()} ₫ 換算！`, "💱");
    });
  });
}

// ==========================================
// 8. VIETNAMESE PHRASES ENGINE
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
// 9. CHECKLIST ENGINE
// ==========================================
const STORAGE_KEY = "phu_quoc_checklist_checked_v3";

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
