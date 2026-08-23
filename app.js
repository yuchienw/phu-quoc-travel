/**
 * Phu Quoc 7-Day Independent Travel Guide - Interactive Engine
 * Pure Vanilla JS, Zero External Dependencies, High Performance
 */

// ==========================================
// 1. DATA: 7-DAY COMPLETE DETAILED ITINERARY
// ==========================================
const ITINERARY_DATA = [
  // ---------- DAY 1 ----------
  {
    day: 1,
    time: "07:30 - 11:30",
    category: "交通",
    nameZh: "台灣出發 ✈ 抵達富國島國際機場 (PQC)",
    nameVn: "Sân bay Quốc tế Phú Quốc",
    costVnd: "包含於機票",
    costTwd: "機票均價 NT$ 12,000",
    transport: "直飛航班 (星宇 / 虎航 / 越捷)，航程約 3.5 ~ 4 小時",
    address: "Tổ 2, Ấp Dương Tơ, Xã Dương Tơ, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3848 078",
    openingHours: "24 小時營運",
    description: "抵達富國島國際機場。台灣護照享有「直飛富國島 30 天免簽證」待遇，直接排隊出示 6 個月以上效期護照與 30 天內離境機票即可蓋章入境。出海關後於大廳辦理/領取當地 eSIM (推薦 Viettel / Vinaphone)，並可在機場銀行櫃檯小額換匯（亦可至陽東市區銀樓換匯更划算）。",
    tips: "💡 提醒：直飛免簽印章為特殊章，切勿中途自行買機票/船票前往越南本島（胡志明、河內等），否則屬於非法越境。",
    mapsQuery: "Phu Quoc International Airport"
  },
  {
    day: 1,
    time: "12:30 - 14:00",
    category: "交通",
    nameZh: "中部陽東度假村 Check-in 放行李與休息",
    nameVn: "Nhận phòng khách sạn Dương Đông",
    costVnd: "依預訂房型",
    costTwd: "均攤約 NT$ 2,000/晚",
    transport: "機場搭乘 Grab 或飯店預約接駁車（車程約 15 分鐘）",
    address: "Khu phố 7, Đường Trần Hưng Đạo, Phường Dương Đông, Phú Quốc",
    phone: "各飯店前台專線",
    openingHours: "通常 14:00 後可辦理入住",
    description: "建議前 3 晚入住中部陽東鎮（Duong Dong）或長灘（Long Beach）沿海渡假村（如 Dusit Princess Moonrise, Sol by Meliá, 或 Seashells Phu Quoc），交通最為便利，前往夜市、各大人氣咖啡廳均在 10 分鐘車程內。",
    tips: "💡 辦理入住時可向櫃檯出示預訂憑證，並順便詢問隔日跳島行程的接駁集合點。",
    mapsQuery: "Dương Đông Phu Quoc resort"
  },
  {
    day: 1,
    time: "14:30 - 15:45",
    category: "購物",
    nameZh: "金剛超市採買補給 (King Kong Mart)",
    nameVn: "Kingkong Mart Phú Quốc",
    costVnd: "約 200,000 ~ 500,000 ₫",
    costTwd: "約 NT$ 250 ~ 625",
    transport: "Grab 叫車或自度假村步行 5~10 分鐘",
    address: "141A Đường Trần Hưng Đạo, Dương Tơ, Phú Quốc, Kiên Giang",
    phone: "+84 966 690 999",
    openingHours: "08:00 - 22:30 (每日)",
    description: "全富國島規模最大、品項最齊全的超級旗艦超市！所有旅人的第一站補給站。先在此買齊瓶裝礦泉水、椰子水、熱帶防蚊液（Soffell 超好用必買）、高係數防水防曬乳、熱帶水果果乾，也可先物色伴手禮（帶皮大腰果、富國島特產胡椒鹽）。",
    tips: "💡 超市內伴手禮明碼標價，比夜市更有保障。買整箱礦泉水放飯店喝最省錢。",
    mapsQuery: "Kingkong Mart Phu Quoc Tran Hung Dao"
  },
  {
    day: 1,
    time: "16:15 - 18:00",
    category: "美食",
    nameZh: "Chuon Chuon Bistro 半山景觀夕陽咖啡",
    nameVn: "Chuồn Chuồn Bistro & Skybar",
    costVnd: "飲料點心約 80,000 ~ 160,000 ₫ / 人",
    costTwd: "約 NT$ 100 ~ 200",
    transport: "Grab 叫車至半山腰（山路較陡，建議搭車）",
    address: "Đồi Sao Mai, 69 Trần Hưng Đạo, Khu Phố 1, Dương Đông, Phú Quốc",
    phone: "+84 297 3608 883",
    openingHours: "07:30 - 22:30",
    description: "座落於陽東鎮最高峰 Sao Mai 山丘上的超人氣網美景觀餐廳！擁有 360 度無死角俯瞰陽東全鎮市景與泰國灣無垠蔚藍海景。傍晚時分點一杯招牌百香果特調或冰滴咖啡，看著金黃夕陽染紅整片天際線，正式宣告海島假期展開。",
    tips: "💡 最佳賞日落時間為 17:00~17:45，建議 16:30 前抵達搶佔靠懸崖邊的最佳拍照景觀座位。",
    mapsQuery: "Chuon Chuon Bistro & Skybar Phu Quoc"
  },
  {
    day: 1,
    time: "18:30 - 21:00",
    category: "美食",
    nameZh: "陽東夜市海鮮巡禮與特色小吃",
    nameVn: "Chợ Đêm Phú Quốc",
    costVnd: "約 300,000 ~ 600,000 ₫ / 人",
    costTwd: "約 NT$ 375 ~ 750",
    transport: "Grab 叫車至夜市大門口（約 5~10 分鐘）",
    address: "54 Đường Nguyễn Trãi, Khu Phố 1, Dương Đông, Phú Quốc",
    phone: "+84 297 3846 123",
    openingHours: "17:00 - 23:30 (每日)",
    description: "富國島最繁華熱鬧的夜市！攤位綿延整條街區。必吃三寶：① 炭烤蔥油花生海膽 (Nhum Biển nướng mỡ hành) ② 炒冰捲 (Kem Cuộn) ③ 巨型皮皮蝦 (Tôm Tít) 與現烤鮮魷魚。街道兩旁還有熱情請試吃炒花生的店家（ChouChou 法式花生，多達 30 種口味）。",
    tips: "💡 避坑重點：點秤重海鮮前務必先確認「每公斤」價格，看清楚過磅數字與瀝水，避免糾紛。",
    mapsQuery: "Phu Quoc Night Market Cho Dem"
  },
  {
    day: 1,
    time: "21:15 - 22:00",
    category: "景點",
    nameZh: "舅舅廟 (龍王殿) 漫步夜景祈福",
    nameVn: "Dinh Cậu Phú Quốc",
    costVnd: "免費參觀",
    costTwd: "免費",
    transport: "從陽東夜市尾端步行 3 分鐘即達港邊巨石",
    address: "Khu phố 2, Phường Dương Đông, TP. Phú Quốc, Kiên Giang",
    phone: "無專線 (公共宗教古蹟)",
    openingHours: "07:00 - 20:30 (外圍海堤與步道 24H 開放)",
    description: "座落於陽東河出海口岩石上的百年古廟，供奉海神與水龍聖母，是島上世代漁民出海前的精神寄託與守護燈塔。夜間登上石階吹海風，欣賞海堤邊靜謐停泊的漁船與燈火，感受最道地的海島信仰文化。",
    tips: "💡 廟旁的海堤長廊是當地情侶與青年夜晚散步看浪的私房景點，氣氛浪漫愜意。",
    mapsQuery: "Dinh Cau Temple Phu Quoc"
  },

  // ---------- DAY 2 ----------
  {
    day: 2,
    time: "08:00 - 15:30",
    category: "景點",
    nameZh: "南部夢幻快艇跳島 (雲腿島・指甲島・甘吉島珊瑚礁浮潛)",
    nameVn: "Tour 3 Đảo Phú Quốc (Hòn Mây Rút - Móng Tay - Gầm Ghì)",
    costVnd: "跳島一日遊約 750,000 ~ 1,100,000 ₫ / 人 (含接送午餐)",
    costTwd: "約 NT$ 950 ~ 1,380",
    transport: "含飯店專車接送至南部安泰港 (Cảng An Thới)，再轉乘快艇出海",
    address: "Cảng Quốc tế An Thới, Phường An Thới, Phú Quốc",
    phone: "依預訂平台/旅行社憑證",
    openingHours: "08:00 - 16:00",
    description: "富國島最精華的海上冒險！搭乘快艇前往南部無人島群：① 雲腿島 (Hòn Mây Rút)：超夢幻玻璃海水與網美鞦韆，教練會操作無人機進行空拍視訊；② 指甲島 (Hòn Móng Tay)：白沙椰林享用島上海鮮家常午餐；③ 甘吉島 (Hòn Gầm Ghì)：全島最大活珊瑚礁群，穿戴浮潛面鏡探索小丑魚與巨型車渠貝。",
    tips: "💡 請自備泳裝、大浴巾、手機防水袋、水母衣防曬傷。強烈建議出海前半小時服用暈船藥。",
    mapsQuery: "An Thoi Port Phu Quoc"
  },
  {
    day: 2,
    time: "16:00 - 17:30",
    category: "景點",
    nameZh: "白沙灘 (Sao Beach) 踏浪與椰林鞦韆",
    nameVn: "Bãi Sao Phú Quốc",
    costVnd: "沙灘免費；租沙灘躺椅約 50,000 ₫",
    costTwd: "躺椅約 NT$ 60",
    transport: "跳島行程專車送返途中順遊，或搭乘 Grab",
    address: "Ấp Bãi Sao, Phường An Thới, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3990 099",
    openingHours: "全天開放 (推薦白天至傍晚)",
    description: "被譽為富國島最美沙灘！因沙質潔白細緻如奶粉、海水如蒂芙尼藍而聞名全球。沙灘兩旁延伸著翠綠椰子樹，樹幹上懸掛著延伸向大海的木製鞦韆，是 Instagram 最火紅的打卡地標。",
    tips: "💡 傍晚退潮時踩在溫暖淺灘上非常放鬆，點一顆現剖冰椰子坐在躺椅上最享受。",
    mapsQuery: "Sao Beach Phu Quoc Bai Sao"
  },
  {
    day: 2,
    time: "18:00 - 19:15",
    category: "景點",
    nameZh: "護國寺 (Chùa Hộ Quốc) 面海背山巨龍禪院",
    nameVn: "Thiền Viện Trúc Lâm Hộ Quốc",
    costVnd: "免費參觀",
    costTwd: "免費",
    transport: "包車或 Grab 叫車前往（自白沙灘約 15 分鐘車程）",
    address: "Ấp Suối Lớn, Xã Dương Tơ, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3998 888",
    openingHours: "06:00 - 18:00",
    description: "全島規模最大、香火最鼎盛的佛教禪院。地理位置得天獨厚，背倚蒼翠國家公園山林，正對壯闊無邊的泰國灣大海。走上雕工精美的雙龍石雕百級階梯，回頭俯瞰整片無垠海天一色，心情瞬間寧靜遼闊。",
    tips: "💡 入內殿請穿著遮肩、過膝的莊重服飾，不可穿泳裝進入。",
    mapsQuery: "Ho Quoc Pagoda Phu Quoc"
  },
  {
    day: 2,
    time: "20:00 - 22:30",
    category: "美食",
    nameZh: "OCSEN Beach Bar 沙灘懶骨頭日落與 21:00 震撼火舞秀",
    nameVn: "ỐC SÊN Beach Bar & Club",
    costVnd: "入場與低消飲品約 150,000 ~ 300,000 ₫ / 人",
    costTwd: "約 NT$ 180 ~ 375",
    transport: "Grab 叫車至長灘 (Long Beach) 巷弄海邊",
    address: "118/10 Đường Trần Hưng Đạo, Dương Tơ, Phú Quốc",
    phone: "+84 902 228 988",
    openingHours: "16:00 - 02:00",
    description: "全富國島最具盛名的沙灘夕陽酒吧！沙灘上鋪滿了標誌性的亮橘色懶骨頭豆袋（Bean Bags），搭配漂流木火把。每晚 21:00 上演長達 30 分鐘的專業雙人/多人「沙灘旋轉甩火球與噴火舞表演」，火花在黑夜海浪聲中四射，全場氣氛嗨到最高點！",
    tips: "💡 想佔第一排海景懶骨頭，建議 17:30 前抵達；若專程看火舞秀，可於 20:15 入座點特調調酒。",
    mapsQuery: "OCSEN Beach Bar & Club Phu Quoc"
  },

  // ---------- DAY 3 ----------
  {
    day: 3,
    time: "09:00 - 11:30",
    category: "樂園",
    nameZh: "太陽世界跨海纜車 (全球最長三線跨海纜車)",
    nameVn: "Cáp treo Hòn Thơm - Sun World Phu Quoc",
    costVnd: "纜車+水上樂園套票約 650,000 ~ 700,000 ₫",
    costTwd: "約 NT$ 810 ~ 875",
    transport: "Grab 至安泰纜車站 (Ga Ánh Dương / Sun World Station)",
    address: "Bãi Đất Đỏ, Phường An Thới, TP. Phú Quốc, Kiên Giang",
    phone: "+84 886 045 888",
    openingHours: "09:00 - 17:00 (注意：纜車中午 12:00-13:30 通常停機維護)",
    description: "榮獲金氏世界紀錄認證「全球最長雙向三線跨海纜車」（全長 7,899 公尺）！單程約 20 分鐘。車廂四面大片全景玻璃，高懸於數十公尺碧海之上，居高臨下俯瞰安泰群島成百上千艘五彩繽紛的木造漁船與珊瑚礁海灣，壯觀無比！",
    tips: "💡 務必留意纜車發車時刻表（下午最後返程通常為 17:00），避免錯過返回本島的末班車。",
    mapsQuery: "Sun World Hon Thom Cable Car Station An Thoi"
  },
  {
    day: 3,
    time: "11:30 - 15:30",
    category: "樂園",
    nameZh: "香島水上樂園 (Aquatopia) & 巨木過山車冒險",
    nameVn: "Công viên nước Aquatopia & Mộc Xà Thịnh Nộ",
    costVnd: "包含於纜車套票內",
    costTwd: "已含",
    transport: "抵達香島 (Hon Thom) 出纜車站即達樂園大門",
    address: "Đảo Hòn Thơm, Phường An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "10:00 - 16:30",
    description: "東南亞最頂級現代化水上樂園之一，擁有超過 20 款極速滑水道、漂漂河、人造浪池。島上陸地園區還有世界級木造雲霄飛車「怒木狂蛇 (Mộc Xà Thịnh Nộ)」與 360 度旋轉鷹眼觀景台 (Mắt Đại Bàng)，一次滿足驚險刺激與海島玩水樂趣。",
    tips: "💡 樂園內設有電子手環儲值租借置物櫃與毛巾，園內提供豐富美式與越式自助餐/簡餐。",
    mapsQuery: "Aquatopia Water Park Hon Thom Phu Quoc"
  },
  {
    day: 3,
    time: "16:30 - 18:30",
    category: "景點",
    nameZh: "漫步地中海日落小鎮 (Sunset Town) & 吻橋 (Kiss Bridge)",
    nameVn: "Thị trấn Hoàng Hôn & Cầu Hôn (Kiss Bridge)",
    costVnd: "小鎮免費；吻橋門票約 100,000 ₫ (持纜車票常有優惠或免費)",
    costTwd: "約 NT$ 125",
    transport: "搭乘纜車返回安泰本島纜車站，出站即為日落小鎮",
    address: "Thị trấn Hoàng Hôn, Bãi Đất Đỏ, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "小鎮 24H 開放；吻橋 07:00 - 22:00",
    description: "由太陽集團斥巨資打造的義大利阿瑪菲風格濱海小鎮！五彩斑斕的地中海式樓房、聖馬可鐘樓、羅馬競技場拱門沿著山坡錯落排列。橫跨於海上的「吻橋 (Kiss Bridge)」由義大利知名建築師設計，兩座橋身在海中央僅相隔 30 公分，傍晚夕陽剛好穿透雙橋縫隙，美得令人窒息。",
    tips: "💡 吻橋最佳拍攝角度為 17:30 站在兩橋交會處，利用長焦鏡頭借位拍出親吻夕陽剪影。",
    mapsQuery: "Sunset Town Phu Quoc Thi tran Hoang Hon"
  },
  {
    day: 3,
    time: "19:00 - 20:30",
    category: "美食",
    nameZh: "日落小鎮海景精釀晚餐 & Vui-Fest 白沙海濱夜市",
    nameVn: "Chợ đêm Vui-Fest Bazaar & Ẩm thực Hoàng Hôn",
    costVnd: "晚餐消費約 250,000 ~ 500,000 ₫ / 人",
    costTwd: "約 NT$ 310 ~ 625",
    transport: "小鎮內步行漫遊",
    address: "Bờ biển Thị trấn Hoàng Hôn, An Thới, Phú Quốc",
    phone: "各餐廳現場",
    openingHours: "17:00 - 23:00",
    description: "全越南首座海邊文青夜市「Vui-Fest Bazaar」！聚集了手作甜點、海鮮串燒、現拉生啤酒與街頭藝人雜耍打擊樂表演。可選擇在露天海景餐館一邊吹海風一邊享用熱騰騰的現烤生蠔與越南精釀啤酒。",
    tips: "💡 夜市定時有「Loảng Xoảng Show」廚具打擊樂街頭秀，互動感十足非常歡樂。",
    mapsQuery: "Vui-Fest Bazaar Sunset Town"
  },
  {
    day: 3,
    time: "21:00 - 21:45",
    category: "樂園",
    nameZh: "《海洋之吻》(Kiss of the Sea) 多媒體大秀與壓軸璀璨高空煙火",
    nameVn: "Show Nụ Hôn Giữa Ngàn Sao & Pháo Hoa Hàng Đêm",
    costVnd: "門票約 450,000 ~ 650,000 ₫ (常有套票折扣)",
    costTwd: "約 NT$ 560 ~ 810",
    transport: "日落小鎮主舞台看台區（步行 3 分鐘）",
    address: "Sân khấu bờ biển Sunset Town, An Thới, Phú Quốc",
    phone: "+84 886 045 888",
    openingHours: "每晚 21:00 準時開演 (演出約 30 分鐘，含高空煙火秀)",
    description: "法國 ECA2 團隊傾力打造的頂級沉浸式海上大秀！擁有世界最大的水幕投影、雷射激光、火焰爆破與 60 位國際特技演員水上共舞。演出最後 5 分鐘，長達數百發的璀璨高空煙火在海面與地中海小鎮上空震撼綻放，將浪漫推向頂點！",
    tips: "💡 煙火全島皆能遠眺，但正中間舞台觀眾席視角最具沉浸感與震撼音效。",
    mapsQuery: "Kiss of the Sea Show Sunset Town"
  },

  // ---------- DAY 4 ----------
  {
    day: 4,
    time: "09:30 - 11:00",
    category: "景點",
    nameZh: "啟寰百年魚露工廠 (Khai Hoan Fish Sauce) 深度文化體驗",
    nameVn: "Nhà Thùng Nước Mắm Khải Hoàn",
    costVnd: "免費參觀導覽",
    costTwd: "免費",
    transport: "包車或 Grab 叫車（陽東市區河畔）",
    address: "11 Cầu Hùng Vương, Phường Dương Đông, Phú Quốc",
    phone: "+84 297 3848 555",
    openingHours: "07:30 - 18:00",
    description: "富國島最具代表性的百年傳統黑金產業！親自走進數十個高達 3 公尺的巨大熱帶硬木釀造木桶林，聆聽解說員介紹新鮮鯷魚如何與天然海鹽在木桶中經過 12 至 15 個月自然滴漏發酵，現場可免費試聞試嚐不同氮度（40N, 43N）的極品特級純魚露。",
    tips: "💡 傳統玻璃瓶裝魚露嚴禁攜帶上飛機！若要購買回台，務必選購專為航空設計的「密封真空寄送版」或至機場免稅店購買。",
    mapsQuery: "Khai Hoan Fish Sauce Factory Phu Quoc"
  },
  {
    day: 4,
    time: "11:15 - 12:30",
    category: "景點",
    nameZh: "盛興黑胡椒生態園 (Khu Tuong Pepper Garden)",
    nameVn: "Vườn Tiêu Khu Tượng / Sáng Tươi",
    costVnd: "免費入園參觀；試吃特產胡椒",
    costTwd: "免費 (胡椒伴手禮約 NT$ 100~200)",
    transport: "包車或 Grab 往北移動順遊",
    address: "TL47, Xã Cửa Dương, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3847 486",
    openingHours: "08:00 - 18:00",
    description: "富國島的胡椒因火山土壤與海島海風滋養，香氣濃烈辛辣被譽為「東方黑金」。走在一人多高的胡椒藤蔓柱林中，近距離觀察青綠色未熟果、紅色成熟果與黑胡椒的採摘日曬過程。園內提供獨門「富國島胡椒鹽粉 (Muối Tiêu)」試吃，沾水果或海鮮無敵美味。",
    tips: "💡 必買「紅胡椒粒 (Tiêu Đỏ)」與「檸檬胡椒鹽 (Muối Tiêu Chanh)」，送禮自用兩相宜。",
    mapsQuery: "Khu Tuong Pepper Garden Phu Quoc"
  },
  {
    day: 4,
    time: "13:00 - 15:00",
    category: "景點",
    nameZh: "異形沙灘 (Sunset Sanato Beach Club) 藝術打卡",
    nameVn: "Sunset Sanato Beach Club",
    costVnd: "門票 100,000 ₫ / 人",
    costTwd: "約 NT$ 125",
    transport: "Grab 叫車前往中部海灘",
    address: "Khu Bãi Trường, Ấp Đường Bào, Xã Dương Tơ, Phú Quốc",
    phone: "+84 297 6266 662",
    openingHours: "08:00 - 21:00",
    description: "以超現實主義海中裝置藝術風靡全球的網美海灘！佇立於海水中的長腿大象（The Elephants）、雙生人臉雕像（Split Head）、通往天空的白色日落天梯與水上竹編天使之翼。在此喝杯冰飲拍下如同達利畫作般的奇幻美照。",
    tips: "💡 建議著鮮豔長裙或比基尼，下午順光時在海中巨象下拍攝倒影效果絕佳。",
    mapsQuery: "Sunset Sanato Beach Club Phu Quoc"
  },
  {
    day: 4,
    time: "15:30 - 17:00",
    category: "交通",
    nameZh: "前往北部五星渡假村 Check-in (Vinpearl / Crowne Plaza)",
    nameVn: "Nhận phòng khách sạn Bắc Đảo",
    costVnd: "包含於住宿",
    costTwd: "約 NT$ 2,500/晚",
    transport: "Grab 專車北上或搭乘 VinBus 免費綠色電動公車（約 35~45 分鐘）",
    address: "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "各度假村前台專線",
    openingHours: "24 小時前台服務",
    description: "啟程前往北島度假區！北部擁有富國大世界、野生動物園、珍珠樂園與私房海星沙灘，換宿至北島可省去每日南北奔波 1 小時的車程。度假村多擁有私人沙灘與超大型無邊際泳池。",
    tips: "💡 北島區域內可隨時免費搭乘「VinBus」電動巴士穿梭於各度假村、大世界與樂園之間，超級方便省錢！",
    mapsQuery: "Vinpearl Resort Phu Quoc Bai Dai"
  },
  {
    day: 4,
    time: "17:30 - 21:30",
    category: "景點",
    nameZh: "富國大世界 (Grand World) 威尼斯水上貢多拉 & 泰迪熊博物館",
    nameVn: "Grand World Phú Quốc & Teddy Bear Museum",
    costVnd: "園區免費入園；貢多拉船約 200,000 ₫；泰迪熊博物館約 200,000 ₫",
    costTwd: "約 NT$ 250 ~ 500",
    transport: "度假村步行 5 分鐘或搭乘免費 VinBus 直達大世界大門",
    address: "Khu Bãi Dài, Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3737 373",
    openingHours: "全天 24 小時不夜城開放",
    description: "號稱「越南不夜城」的超大型歐風水上娛樂城！中心是一條長達數百公尺的夢幻威尼斯大運河，兩旁排列著馬卡龍色調的義式洋樓。可搭乘義式傳統貢多拉船（船夫身著條紋水手服現場清唱），造訪全越首座泰迪熊博物館（珍藏超過 500 隻探險主題泰迪熊）與越南國粹竹構建築。",
    tips: "💡 運河兩岸有許多特色咖啡廳與越式燒烤餐廳，晚餐可在河畔一邊品嚐一邊賞景。",
    mapsQuery: "Grand World Phu Quoc"
  },
  {
    day: 4,
    time: "21:45 - 22:15",
    category: "樂園",
    nameZh: "《威尼斯的顏色》(The Colors of Venice) 湖畔免費水上聲光秀",
    nameVn: "Show Sắc Màu Venice Grand World",
    costVnd: "完全免費觀賞",
    costTwd: "免費",
    transport: "大世界中心湖泊愛情湖畔",
    address: "Hồ Tình Yêu, Grand World, Gành Dầu, Phú Quốc",
    phone: "+84 297 3737 373",
    openingHours: "每晚 21:45 準時開演 (演出約 25 分鐘)",
    description: "每晚在愛情湖上演的巨型水上聲光實景秀！以中世紀威尼斯嘉年華面具舞會為主題，結合高科技水幕投影、立體激光水舞、巨型發光機械道具船與身穿華麗發光禮服的舞者在水面上起舞，視聽效果極為震撼，且完全免門票！",
    tips: "💡 最佳觀賞點在湖中央的「威尼斯石橋」上，建議 21:20 提前就定位佔據橋中央視野。",
    mapsQuery: "Venice Lake Grand World Phu Quoc"
  },

  // ---------- DAY 5 ----------
  {
    day: 5,
    time: "08:45 - 13:00",
    category: "樂園",
    nameZh: "珍珠野生動物園 (Vinpearl Safari) & 長頸鹿餐廳餵食",
    nameVn: "Vinpearl Safari Phú Quốc & Giraffe Restaurant",
    costVnd: "Safari 單園票約 650,000 ₫ (或雙園套票)；長頸鹿飼料 30,000 ₫/盒",
    costTwd: "約 NT$ 810 (門票) + NT$ 38 (飼料)",
    transport: "搭乘免費 VinBus 或 Grab 叫車（車程約 10 分鐘）",
    address: "Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3636 699",
    openingHours: "08:30 - 16:00 (野生放養區猛獸專車 09:00 - 15:20)",
    description: "越南最大的開放式野生動物園！分為兩大區：① 開放式步行區：可漫步近距離觀賞狐猴、紅鶴、大象；最受歡迎的亮點是「長頸鹿餐廳 (Giraffe Restaurant)」，在半開放露台上購買紅蘿蔔，長頸鹿會伸出長長舌頭與你親密互動合照！② 猛獸野生放養區：搭乘特製防彈玻璃遊園巴士，深入叢林近距離觀看自由漫步的孟加拉虎、非洲獅、白犀牛與斑馬群。",
    tips: "💡 早上 09:00~10:30 動物活動力最高、食慾最好，強烈建議一開門就先直衝長頸鹿餐廳！",
    mapsQuery: "Vinpearl Safari Phu Quoc"
  },
  {
    day: 5,
    time: "13:30 - 16:30",
    category: "樂園",
    nameZh: "珍珠奇幻樂園 (VinWonders) & 巨型海龜水族館 (The Sea Shell)",
    nameVn: "VinWonders Phú Quốc & Thủy cung Cung Điện Hải Vương",
    costVnd: "VinWonders 門票約 950,000 ₫ (建議購買 Safari+VinWonders 雙園套票約 1,350,000 ₫)",
    costTwd: "雙園套票約 NT$ 1,680",
    transport: "從 Safari 搭乘免費接駁園區公車直達 VinWonders 大門（車程 5 分鐘）",
    address: "Khu Bãi Dài, Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3737 373",
    openingHours: "09:00 - 19:30",
    description: "全亞洲最大主題樂園之一！最震撼的地標是造型如同一隻趴在沙灘上的「世界前五大巨型神龜水族館（海王宮殿）」，館內擁有超大巨幅壓克力主觀景窗、夢幻水母走廊、企鵝世界與每日定時的優雅美人魚水下餵食秀。樂園內還有童話城堡、歐洲風情街與雲霄飛車等豐富設施。",
    tips: "💡 美人魚表演時間通常為 14:00 與 15:00，入館前請先確認當日時刻表以防水族館內人潮擁擠。",
    mapsQuery: "The Sea Shell Aquarium VinWonders Phu Quoc"
  },
  {
    day: 5,
    time: "17:00 - 19:30",
    category: "景點",
    nameZh: "秘境海星沙灘 (Rach Vem Beach) & 水上高腳屋海鮮晚餐",
    nameVn: "Làng Chài Rạch Vẹm & Nhà Bè Hải Sản Con Sao",
    costVnd: "海鮮晚餐約 350,000 ~ 600,000 ₫ / 人",
    costTwd: "約 NT$ 430 ~ 750",
    transport: "包車或搭乘 Grab / 專車前往北島漁村（路況部分為土路，建議包車）",
    address: "Ấp Rạch Vẹm, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "+84 947 167 178",
    openingHours: "08:00 - 20:00 (海星乾季 11月~4月數量最多)",
    description: "富國島最原始純樸的漁村秘境！走過長長的木製棧道來到建於海中央的「水上高腳屋餐廳（Nhà Bè）」。清澈見底的淺灘中隨處可見野生的鮮紅色海星。傍晚坐在水上木屋吹海風，享用現點現撈的活花蟹、清蒸瀨尿蝦、烤生蠔與新鮮海鮮炒飯，遠眺落日餘暉。",
    tips: "⚠️ 生態重要守則：絕對不可將海星抓出水面拍照！海星離開水數秒便會因乾燥灼傷致死，請在水下拍照保護大自然。",
    mapsQuery: "Rach Vem Beach Starfish Phu Quoc"
  },
  {
    day: 5,
    time: "19:45 - 20:45",
    category: "景點",
    nameZh: "甘油角海岬 (Ganh Dau Cape) 遠眺柬埔寨邊界夜色",
    nameVn: "Mũi Gành Dầu",
    costVnd: "免費參觀",
    costTwd: "免費",
    transport: "自海星沙灘返程順道停留（車程約 15 分鐘）",
    address: "Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
    phone: "無專線",
    openingHours: "全天開放",
    description: "富國島最西北端的海角，也是距離鄰國柬埔寨最近的地理位置（直線距離僅約 4 公里）。天氣晴朗時肉眼即可清晰看見柬埔寨的貢布山脈與離島，海岬岩石嶙峋，氣氛靜謐祥和。",
    tips: "💡 岬角邊有幾間靜謐的小型海邊咖啡館，可在此喝杯冰滴咖啡享受海浪拍岸聲。",
    mapsQuery: "Mui Ganh Dau Phu Quoc"
  },

  // ---------- DAY 6 ----------
  {
    day: 6,
    time: "09:30 - 12:00",
    category: "放鬆",
    nameZh: "Galina 礦泥浴與熱帶溫泉水療放鬆 (Galina Mud Bath & Spa)",
    nameVn: "Tắm Bùn Khoáng Galina Phú Quốc",
    costVnd: "泥漿浴+水療套票約 350,000 ~ 500,000 ₫ / 人",
    costTwd: "約 NT$ 430 ~ 625",
    transport: "Grab 叫車或包車接送",
    address: "Đường Trần Hưng Đạo, Ấp Cửa Lấp, Xã Dương Tơ, Phú Quốc",
    phone: "+84 297 3986 999",
    openingHours: "08:00 - 20:00",
    description: "在熱帶園林環抱的獨立石雕浴缸中，浸泡富含多種天然礦物質的溫熱火山泥漿！質地如絲綢般滑順，能深層清潔肌膚、去除連日曝曬後的角質與疲勞。泥漿浴後接著享受高壓水柱衝擊水療池、溫水泳池與芳香桑拿房，身心全面釋放。",
    tips: "💡 店家會提供深色泳衣與毛巾，但建議著深色或舊泳裝前往（淺色泳衣容易被泥漿染色）。",
    mapsQuery: "Galina Phu Quoc Mud Bath & Spa"
  },
  {
    day: 6,
    time: "12:30 - 14:00",
    category: "景點",
    nameZh: "富國島生態蜜蜂農場 (Phu Quoc Bee Farm)",
    nameVn: "Trang Trại Ong Phú Quốc (Phu Quoc Bee Farm)",
    costVnd: "入園免費；特色蜂蜜飲品約 50,000 ~ 80,000 ₫",
    costTwd: "約 NT$ 60 ~ 100",
    transport: "Grab 叫車（位於國家公園森林邊緣）",
    address: "Ấp 2, Xã Cửa Cạn, TP. Phú Quốc, Kiên Giang",
    phone: "+84 947 167 178",
    openingHours: "09:00 - 17:00",
    description: "隱身於翠綠森林中的天然有機生態蜜蜂農場！園區被茂密的熱帶果樹與野花包圍，在導覽員帶領下觀察無刺蜂的生態蜂箱。坐在木造涼亭中品嚐一杯新鮮現壓的野生純蜂蜜檸檬冰飲、蜂蜜生薑茶與蜂蜜冰淇淋，清涼解暑。",
    tips: "💡 這裡販售的野生純蜂蜜（帶有熱帶野花香氣）與蜂膠香皂是極受歡迎的天然伴手禮。",
    mapsQuery: "Phu Quoc Bee Farm Cua Can"
  },
  {
    day: 6,
    time: "14:30 - 17:00",
    category: "放鬆",
    nameZh: "渡假村私人沙灘日光浴 & 無邊際泳池放空慢活",
    nameVn: "Nghỉ dưỡng tại Resort bãi biển riêng",
    costVnd: "免費享受度假村設施",
    costTwd: "包含於房費",
    transport: "返回渡假村內",
    address: "渡假村私人海灘區",
    phone: "飯店前台",
    openingHours: "全天開放",
    description: "旅行不只是趕行程，更是要懂得海島的慢活藝術。下午回到五星度假村，換上泳裝，躺在棕櫚樹下的私人沙灘躺椅上聽海浪聲讀一本好書，或在泳池池畔酒吧點杯雞尾酒，盡情享受熱帶陽光與微風。",
    tips: "💡 許多度假村提供免費獨木舟 (Kayak) 或站立式划槳板 (SUP) 租借，可向海灘活動中心登記體驗。",
    mapsQuery: "Phu Quoc luxury resort beach"
  },
  {
    day: 6,
    time: "17:30 - 20:30",
    category: "美食",
    nameZh: "On The Rocks (Mango Bay) 岩石海岸夕陽燭光海鮮晚餐",
    nameVn: "On The Rocks Restaurant - Mango Bay Resort",
    costVnd: "精緻海鮮晚餐約 500,000 ~ 900,000 ₫ / 人",
    costTwd: "約 NT$ 625 ~ 1,125",
    transport: "Grab 叫車前往 Mango Bay 度假村岩石海岸",
    address: "Bãi biển Ông Lang, Xã Cửa Dương, TP. Phú Quốc",
    phone: "+84 297 3981 693",
    openingHours: "06:30 - 23:00",
    description: "富國島公認最浪漫的傳奇日落海景餐廳！木質平台直接搭建在昂朗海灘（Ong Lang Beach）的天然黑色礁石之上。傍晚海水輕拍岩石，夕陽將海面染成粉紫色與金橘色，在燭光下品嚐現烤龍蝦、香煎海鱸魚配富國島胡椒醬汁與白酒，為旅程倒數留下難忘印記。",
    tips: "💡 由於極受歡迎，請務必於出發前 1~2 週透過官網或信件提前預訂傍晚 17:30 靠海第一排座位！",
    mapsQuery: "On The Rocks Restaurant Mango Bay Phu Quoc"
  },

  // ---------- DAY 7 ----------
  {
    day: 7,
    time: "08:00 - 10:00",
    category: "美食",
    nameZh: "海景晨光自助早餐 & 渡假村最後漫步",
    nameVn: "Ăn sáng buffet & Thư giãn buổi sáng",
    costVnd: "包含於房費內",
    costTwd: "已含",
    transport: "渡假村海景餐廳",
    address: "渡假村內",
    phone: "前台",
    openingHours: "06:30 - 10:30",
    description: "在海邊微風中享用豐盛的五星自助早餐！品嚐現點現煮的越南生牛肉河粉 (Phở Bò)，擠上新鮮檸檬汁、加入九層塔與朝天椒，搭配熱騰騰的現烤牛角麵包、百香果、紅心芭樂與香濃的滴漏煉乳咖啡，享受最後悠閒的海島早晨。",
    tips: "💡 辦理退房時間通常為 12:00，退房後可將大件行李暫時寄放於飯店大廳行李房。",
    mapsQuery: "Phu Quoc Resort buffet breakfast"
  },
  {
    day: 7,
    time: "10:30 - 12:30",
    category: "購物",
    nameZh: "最後伴手禮採買巡禮 (特產帶皮腰果・胡椒・滴漏咖啡・果乾)",
    nameVn: "Mua sắm đặc sản Phú Quốc làm quà",
    costVnd: "依個人採購需求約 500,000 ~ 1,500,000 ₫",
    costTwd: "約 NT$ 625 ~ 1,875",
    transport: "Grab 叫車前往金剛超市或特產專賣店",
    address: "Trung tâm Dương Đông / Kingkong Mart",
    phone: "+84 966 690 999",
    openingHours: "08:00 - 22:30",
    description: "出發前往機場前的最後掃貨時機！清點必買伴手禮清單：① 富國島特產鹽焗帶皮大腰果 (Hạt Điều) ② 富國黑/紅胡椒粒與檸檬胡椒鹽 ③ 中原傳奇咖啡豆/滴漏咖啡粉 (Trung Nguyên Coffee) ④ 越南頂級波羅蜜乾與芒果乾 ⑤ 椰子糖與天然蜂膠皂。",
    tips: "💡 建議購買真空包裝，行李箱收納更省空間且能保持堅果爽脆口感。",
    mapsQuery: "Kingkong Mart Phu Quoc"
  },
  {
    day: 7,
    time: "13:00 - 16:30",
    category: "交通",
    nameZh: "前往富國島國際機場 (PQC) 辦理退稅・登機手續 ✈ 滿載返台",
    nameVn: "Sân bay Phú Quốc - Khởi hành về Đài Loan",
    costVnd: "交通費約 100,000 ~ 200,000 ₫ (Grab)",
    costTwd: "車資約 NT$ 125 ~ 250",
    transport: "Grab 叫車或預約飯店機場送機（車程約 20 分鐘）",
    address: "Tổ 2, Ấp Dương Tơ, Xã Dương Tơ, TP. Phú Quốc, Kiên Giang",
    phone: "+84 297 3848 078",
    openingHours: "航班起飛前 2.5 ~ 3 小時開始辦理報到",
    description: "提前抵達機場辦理登機與托運行李手續。出境大廳內有免稅商店（可購買合格密封包裝之魚露、免稅菸酒與特產）。搭乘直飛航班返回台灣（桃園 TPE / 高雄 KHH），結束 7 天充實又放鬆的富國島夢幻海島假期！",
    tips: "💡 隨身行李記得檢查液體限制（單瓶 ≤ 100ml，總量 ≤ 1L），行動電源請隨身攜帶切勿托運。",
    mapsQuery: "Phu Quoc International Airport PQC"
  }
];

// ==========================================
// 2. DATA: VIETNAMESE SURVIVAL PHRASES
// ==========================================
const PHRASES_DATA = [
  // Order & Food
  { category: "order", vn: "Xin chào!", pinyin: "新潮！", zh: "你好！(通用問候)" },
  { category: "order", vn: "Cảm ơn bạn rất nhiều.", pinyin: "感恩班熱扭", zh: "非常感謝你！" },
  { category: "order", vn: "Cho tôi xem thực đơn.", pinyin: "抽對先特騰", zh: "請給我看一下菜單。" },
  { category: "order", vn: "Cho tôi một tô Phở Bò.", pinyin: "抽對莫斗ㄈㄜˇ波", zh: "請給我一碗牛肉河粉。" },
  { category: "order", vn: "Cho tôi một ly cà phê sữa đá.", pinyin: "抽對莫利卡啡素搭", zh: "請給我一杯冰煉乳咖啡。" },
  { category: "order", vn: "Không cay / Đừng bỏ ớt.", pinyin: "空蓋 / 頂薄俄", zh: "不要辣 / 請不要加辣椒！" },
  { category: "order", vn: "Không bỏ rau mùi (ngò rí).", pinyin: "空薄饒美 (鵝利)", zh: "請不要加香菜！" },
  { category: "order", vn: "Ít đường / Ít sữa.", pinyin: "意登 / 意素", zh: "微糖 / 少奶。" },
  { category: "order", vn: "Cho tôi xin thêm nước đá.", pinyin: "抽對心添呢搭", zh: "請給我加一些冰塊。" },
  { category: "order", vn: "Ngon quá!", pinyin: "昂瓜！", zh: "太好吃了！(讚美廚師)" },
  { category: "order", vn: "Tính tiền / Em ơi thanh toán.", pinyin: "頂頂 / 恩鵝意停端", zh: "買單！/ 服務生結帳。" },

  // Taxi & Transport
  { category: "taxi", vn: "Tôi muốn đi đến đây.", pinyin: "對問地登代", zh: "我要去這裡。(出示手機地址)" },
  { category: "taxi", vn: "Bật đồng hồ tính tiền giúp tôi.", pinyin: "博同火頂頂友對", zh: "請幫我按跳表計費。" },
  { category: "taxi", vn: "Dừng lại ở đây, cảm ơn.", pinyin: "榮來鵝代，感恩", zh: "請停在這裡，謝謝。" },
  { category: "taxi", vn: "Đi thẳng / Rẽ trái / Rẽ phải.", pinyin: "地躺 / 熱災 / 熱害", zh: "直走 / 左轉 / 右轉。" },
  { category: "taxi", vn: "Bao lâu thì đến nơi?", pinyin: "包樓提登呢？", zh: "大概多久會到達目的地？" },

  // Shopping & Bargaining
  { category: "shopping", vn: "Cái này bao nhiêu tiền?", pinyin: "該耐包妞頂？", zh: "這個多少錢？" },
  { category: "shopping", vn: "Đắt quá! Giảm giá được không?", pinyin: "得瓜！樣價得空？", zh: "太貴了！可以算便宜一點嗎？" },
  { category: "shopping", vn: "Có cái mới / màu khác không?", pinyin: "過該妹 / 矛客空？", zh: "有全新的 / 其他顏色嗎？" },
  { category: "shopping", vn: "Tôi lấy cái này.", pinyin: "對淚該耐", zh: "我要買這個。" },
  { category: "shopping", vn: "Có nhận quẹt thẻ tín dụng không?", pinyin: "過認桂貼頂用空？", zh: "可以刷信用卡嗎？" },

  // Emergency & Help
  { category: "emergency", vn: "Làm ơn giúp tôi với!", pinyin: "藍恩友對威！", zh: "拜託請幫幫我！" },
  { category: "emergency", vn: "Tôi bị lạc đường.", pinyin: "對比辣等", zh: "我迷路了。" },
  { category: "emergency", vn: "Tôi cần đi bệnh viện.", pinyin: "對跟地敏院", zh: "我需要去醫院。" },
  { category: "emergency", vn: "Nhà vệ sinh ở đâu?", pinyin: "雅威新鵝逗？", zh: "請問洗手間在哪裡？" },
  { category: "emergency", vn: "Cứu tôi với! / Gọi cảnh sát!", pinyin: "救對威！/ 乖警薩！", zh: "救命！/ 請叫警察！" }
];

// ==========================================
// 3. DATA: PACKING CHECKLIST
// ==========================================
const CHECKLIST_DATA = [
  {
    category: "重要證件與金融",
    icon: "🛂",
    items: [
      { id: "c1_1", text: "中華民國護照正本 (效期需大於 6 個月)" },
      { id: "c1_2", text: "富國島來回電子機票行程確認單 (紙本+手機截圖，免簽必查)" },
      { id: "c1_3", text: "渡假村住宿確認單 (紙本+電子檔)" },
      { id: "c1_4", text: "海外高回饋信用卡 (至少備 2 張，建議開啟海外無密碼刷卡)" },
      { id: "c1_5", text: "美金百元新鈔 (2013年後版本無折痕，換匯匯率最優) 或台幣現金" },
      { id: "c1_6", text: "旅遊平安險與海外突發疾病醫療險保單" }
    ]
  },
  {
    category: "衣物穿搭與配件",
    icon: "👗",
    items: [
      { id: "c2_1", text: "輕便透氣短袖、海灘洋裝、渡假風花襯衫 (4~6 套)" },
      { id: "c2_2", text: "泳衣、比基尼、防磨水母衣 (跳島浮潛必備防曬防礁石)" },
      { id: "c2_3", text: "防曬薄外套、遮陽大草帽、偏光抗 UV 太陽眼鏡" },
      { id: "c2_4", text: "舒適好走的防滑涼鞋 / 溯溪鞋 / 夾腳拖" },
      { id: "c2_5", text: "遮肩長褲/長裙 (進護國寺、舅舅廟等宗教聖地必穿)" }
    ]
  },
  {
    category: "3C 電子與通訊",
    icon: "📱",
    items: [
      { id: "c3_1", text: "越南當地上網 eSIM 憑證或實體 SIM 卡 (推薦 Viettel / Vinaphone)" },
      { id: "c3_2", text: "智慧型手機 (預先下載好 Grab APP 並綁定信用卡、VinBus APP、Google 地圖離線地圖)" },
      { id: "c3_3", text: "大容量行動電源 (隨身行李攜帶，請勿託運)" },
      { id: "c3_4", text: "防水手機密封袋 (附掛繩，跳島與水上樂園拍照必備)" },
      { id: "c3_5", text: "充電線與萬國多孔充電頭 (越南一般為雙圓孔/雙扁孔 220V，台灣雙扁插頭通常可直插相容)" }
    ]
  },
  {
    category: "個人醫藥與防護",
    icon: "💊",
    items: [
      { id: "c4_1", text: "強效防蚊液 (富國島植被豐富，推薦含 DEET 或 Picaridin 成分)" },
      { id: "c4_2", text: "高係數海洋友善防水防曬乳 (SPF 50+ PA++++，保護珊瑚礁)" },
      { id: "c4_3", text: "強效暈船藥 (跳島出海與搭乘快艇前 30 分鐘服用)" },
      { id: "c4_4", text: "常備腸胃藥、止瀉藥、胃散 (適應海鮮與熱帶飲食)" },
      { id: "c4_5", text: "綜合感冒退燒藥、止痛藥、防水 OK 繃、優碘棉棒" },
      { id: "c4_6", text: "蘆薈曬後舒緩修護凝膠 (日曬後厚敷降溫鎮靜)" }
    ]
  },
  {
    category: "水上活動與便利小物",
    icon: "🤿",
    items: [
      { id: "c5_1", text: "個人浮潛面鏡與全乾式呼吸管 (較衛生舒適，亦可現場借用)" },
      { id: "c5_2", text: "快乾超細纖維大毛巾 / 渡假村海灘巾" },
      { id: "c5_3", text: "防水背包 (10L~20L，跳島防浪花打濕相機與衣物)" },
      { id: "c5_4", text: "輕便折疊晴雨兩用傘 (遮陽或防午後熱帶雷陣雨)" },
      { id: "c5_5", text: "濕紙巾、隨身面紙、手部乾洗手凝膠" }
    ]
  }
];

// ==========================================
// 4. APPLICATION STATE & DOM HANDLERS
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
function copyText(text, label = "內容") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`已複製${label}到剪貼簿！`, "📋");
    }).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

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
    showToast(`已複製${label}到剪貼簿！`, "📋");
  } catch (err) {
    showToast("複製失敗，請手動選取複製", "⚠️");
  }
  document.body.removeChild(textArea);
}

// Text to Speech for Vietnamese
function speakVietnamese(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.85; // Slightly slower for clear learning
    utterance.pitch = 1.0;
    
    // Check if Vietnamese voice is available
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
    if (viVoice) {
      utterance.voice = viVoice;
    }
    
    window.speechSynthesis.speak(utterance);
    showToast(`正在朗讀：${text}`, "🔊");
  } else {
    showToast("您的瀏覽器不支援語音朗讀功能", "⚠️");
  }
}

// ==========================================
// 5. TAB NAVIGATION
// ==========================================
function initTabs() {
  const topTabs = document.querySelectorAll(".nav-tab");
  const bottomTabs = document.querySelectorAll(".bottom-nav-item");
  const tabContents = document.querySelectorAll(".tab-content");

  function switchTab(tabId) {
    // Sync Top Tabs
    topTabs.forEach(t => {
      if (t.dataset.tab === tabId) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    // Sync Bottom Tabs
    bottomTabs.forEach(b => {
      if (b.dataset.tab === tabId) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    // Switch Content
    tabContents.forEach(content => {
      if (content.id === `tab-${tabId}`) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  topTabs.forEach(t => {
    t.addEventListener("click", () => switchTab(t.dataset.tab));
  });

  bottomTabs.forEach(b => {
    b.addEventListener("click", () => switchTab(b.dataset.tab));
  });

  // Header quick buttons
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
    if (currentSearchQuery) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
    renderSpots();
  });

  clearBtn.addEventListener("click", () => {
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
    // Match Day
    const matchDay = currentDayFilter === "all" || spot.day.toString() === currentDayFilter;
    
    // Match Category
    const matchCategory = currentCategoryFilter === "all" || spot.category === currentCategoryFilter;

    // Match Search Query
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

  // Group spots by Day if viewing all or multi-day
  let html = "";
  let lastDay = null;

  const DAY_TITLES = {
    1: "Day 1 : 台灣直飛啟程 ✈ 抵達富國島 ➔ 陽東日落與夜市海鮮",
    2: "Day 2 : 南部夢幻跳島 ➔ 玻璃海浮潛 ➔ 白沙灘與 OCSEN 火舞秀",
    3: "Day 3 : 世界最長跨海纜車 ➔ 香島水樂園 ➔ 地中海日落小鎮吻橋與煙火",
    4: "Day 4 : 百年魚露黑胡椒文化 ➔ 異形沙灘 ➔ 富國大世界威尼斯不夜城",
    5: "Day 5 : 野生動物園近距離餵長頸鹿 ➔ 海龜水族館 ➔ 秘境海星沙灘",
    6: "Day 6 : 天然礦泥浴水療 ➔ 蜜蜂生態農場 ➔ 岩石海岸奢華燭光晚餐",
    7: "Day 7 : 渡假村慢活早餐 ➔ 最後伴手禮採買 ➔ 機場返台圓滿落幕"
  };

  filteredSpots.forEach((spot, idx) => {
    // If day changes and we are in "all" view, insert Day Header
    if (spot.day !== lastDay && currentDayFilter === "all") {
      lastDay = spot.day;
      html += `
        <div class="day-section-header">
          <h3 class="day-section-title">
            <span>📅</span> ${DAY_TITLES[spot.day] || `Day ${spot.day}`}
          </h3>
          <span class="day-section-sub">第 ${spot.day} 天行程</span>
        </div>
      `;
    }

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapsQuery || spot.nameVn)}`;

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
            <span>📋</span> 複製地址 (給司機看)
          </button>
          <button class="btn-spot-action" onclick="speakVietnamese('${spot.nameVn.replace(/'/g, "\\'")}')">
            <span>🔊</span> 聽地名發音
          </button>
          <button class="btn-spot-action" onclick="copyText('${spot.nameVn.replace(/'/g, "\\'")}', '越文名稱')">
            <span>📋</span> 複製店名
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
    const vnd = Math.round(twd * rate);
    vndInput.value = vnd;
  }

  function updateFromVnd() {
    const vnd = parseFloat(vndInput.value) || 0;
    const rate = parseFloat(customRate.value) || 800;
    if (rate > 0) {
      const twd = Math.round(vnd / rate);
      twdInput.value = twd;
    }
  }

  twdInput.addEventListener("input", updateFromTwd);
  vndInput.addEventListener("input", updateFromVnd);
  customRate.addEventListener("input", () => {
    exchangeRate = parseFloat(customRate.value) || 800;
    updateFromTwd();
  });

  // Preset matrix click
  const matrixItems = document.querySelectorAll(".matrix-item");
  matrixItems.forEach(item => {
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
          <div class="phrase-pinyin">🗣️ 中文諧音：${p.pinyin}</div>
          <div class="phrase-zh">💡 中文意思：${p.zh}</div>
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
// 9. CHECKLIST & LOCALSTORAGE ENGINE
// ==========================================
const STORAGE_KEY = "phu_quoc_checklist_checked";

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
    CHECKLIST_DATA.forEach(cat => {
      cat.items.forEach(item => {
        checkedMap[item.id] = true;
      });
    });
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

  // Update progress
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
