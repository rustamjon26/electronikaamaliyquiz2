import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Tok ko‘zgusi (Current Mirror) sxemasining asosiy vazifasi nima?",
    options: [
      "Kollektor kuchlanishini stabilizatsiya qilish",
      "Chiqish tokini barqaror saqlash (yuklamadan mustaqil)",
      "Baza tokini oshirish",
      "Fazani 180° ga o‘zgartirish"
    ],
    correctIndex: 1,
    topic: "BJT",
    difficulty: "medium",
    explanation: "Tok ko'zgusi kirish tokini aniq nusxalab, chiqishga barqaror tok berish uchun ishlatiladi."
  },
  {
    id: 2,
    text: "Ideal Operatsion Kuchaytirgich (OpAmp) uchun qaysi tasdiq noto‘g‘ri?",
    options: [
      "Kirish qarshiligi cheksiz katta",
      "Kuchaytirish koeffitsienti (Aol) cheksiz",
      "Chiqish qarshiligi nolga teng",
      "Singular (Common-mode) signallarni to‘liq kuchaytiradi"
    ],
    correctIndex: 3,
    topic: "OpAmp",
    difficulty: "easy",
    explanation: "Ideal OpAmp синфаз (common-mode) signallarni kuchaytirmasligi kerak (CMRR cheksiz)."
  },
  {
    id: 3,
    text: "MOSFET tranzistori 'Saturation' (to‘yinish) rejimida ishlashi uchun qanday shart bajarilishi kerak (n-kanal)?",
    options: [
      "Vds < Vgs - Vth",
      "Vds > Vgs - Vth",
      "Vgs < Vth",
      "Vds = 0"
    ],
    correctIndex: 1,
    topic: "FET",
    difficulty: "hard",
    explanation: "To'yinish rejimida Vds kuchlanishi (Vgs - Vth) dan katta bo'lishi shart."
  },
  {
    id: 4,
    text: "RC zanjirining vaqt doimiysi (τ) qaysi formula bilan aniqlanadi?",
    options: [
      "τ = R / C",
      "τ = 1 / (RC)",
      "τ = R * C",
      "τ = 2πfRC"
    ],
    correctIndex: 2,
    topic: "RC",
    difficulty: "easy",
    explanation: "Vaqt doimiysi Tau (τ) qarshilik va kondensator sig'imi ko'paytmasiga teng."
  },
  {
    id: 5,
    text: "Tri-state (uch holatli) buferning 'High-Z' holati nimani anglatadi?",
    options: [
      "Mantiqiy 1 kuchlanishini",
      "Juda kichik chiqish qarshiligini",
      "Sxemadan uzilgan (ochiq zanjir) holatni",
      "Qisqa tutashuv holatini"
    ],
    correctIndex: 2,
    topic: "Digital",
    difficulty: "medium",
    explanation: "High-Z bu yuqori qarshilikli holat bo'lib, chiqishni sxemadan uzilgan deb hisoblash mumkin."
  },
  {
    id: 6,
    text: "Impulsli ta’minot manbai (SMPS) da 'Flyback' diodining vazifasi nima?",
    options: [
      "Tokni to‘g‘rilash",
      "Induktiv yuklamadagi teskari kuchlanishdan himoya qilish",
      "Kuchlanishni oshirish",
      "Chastotani barqarorlash"
    ],
    correctIndex: 1,
    topic: "Power",
    difficulty: "medium",
    explanation: "Flyback diod induktiv yuklama uzilganda hosil bo'ladigan yuqori teskari kuchlanishni 'o'chiradi'."
  },
  {
    id: 7,
    text: "BJT tranzistorida 'Thermal Runaway' (issiqlik qochishi) jarayoni nima sababdan yuzaga keladi?",
    options: [
      "Harorat oshganda baza-emitter kuchlanishi (Vbe) kamayib, kollektor toki oshib ketishi",
      "Harorat oshganda qarshilik ortishi",
      "Kollektor tokining kamayishi",
      "Baza tokining nolga tushishi"
    ],
    correctIndex: 0,
    topic: "BJT",
    difficulty: "hard",
    explanation: "Vbe manfiy harorat koeffitsientiga ega, harorat oshsa Vbe tushadi, bu esa Ic ni oshiradi va tranzistorni yanada qizdiradi."
  },
  {
    id: 8,
    text: "JFET tranzistori normal ishlashi uchun Zatvor (Gate) o‘tish qatlami qanday ulanishi kerak?",
    options: [
      "To‘g‘ri yo‘nalishda",
      "Teskari yo‘nalishda",
      "Ochiq qoldirilishi kerak",
      "Faqat o‘zgaruvchan tokka ulanadi"
    ],
    correctIndex: 1,
    topic: "FET",
    difficulty: "medium",
    explanation: "JFET da kirish o'tish qatlami doimo teskari kuchlanishda bo'lishi kerak, aks holda kirish qarshiligi pasayadi."
  },
  {
    id: 9,
    text: "OpAmp yordamida yasalgan 'Voltage Follower' (Kuchlanish takrorlagich) sxemasining kuchaytirish koeffitsienti nechaga teng?",
    options: [
      "Cheksiz",
      "10",
      "1",
      "-1"
    ],
    correctIndex: 2,
    topic: "OpAmp",
    difficulty: "easy",
    explanation: "Voltage follower sxemasida chiqish kirishga teng bo'ladi, ya'ni Ku = 1."
  },
  {
    id: 10,
    text: "Past chastota filtri (Low Pass Filter) qaysi chastotalarni o‘tkazadi?",
    options: [
      "Kesish chastotasidan yuqori barcha chastotalarni",
      "Faqat rezonans chastotasini",
      "Kesish chastotasidan past barcha chastotalarni",
      "Barcha chastotalarni bir xil o‘tkazadi"
    ],
    correctIndex: 2,
    topic: "RC",
    difficulty: "easy",
    explanation: "LPF past chastotalarni o'tkazib, yuqori chastotalarni so'ndiradi."
  },
  {
    id: 11,
    text: "KMO‘Y (CMOS) mantiqiy elementlarining asosiy afzalligi nimada?",
    options: [
      "Juda yuqori tezlik",
      "Statik rejimda juda kam quvvat sarfi",
      "Yuqori chiqish toki",
      "Past kirish qarshiligi"
    ],
    correctIndex: 1,
    topic: "Digital",
    difficulty: "medium",
    explanation: "CMOS elementlari statik holatda deyarli tok iste'mol qilmaydi."
  },
  {
    id: 12,
    text: "Tiristor (SCR) o‘tkazuvchan holatga o‘tgandan so‘ng uni qanday o‘chirish mumkin?",
    options: [
      "Boshqaruv elektrodiga manfiy impuls berib",
      "Anod tokini ushlab turish toki (Holding current) dan kamaytirish orqali",
      "Kuchlanishni oshirish orqali",
      "Boshqaruv elektrodini uzib qo‘yish orqali"
    ],
    correctIndex: 1,
    topic: "Power",
    difficulty: "hard",
    explanation: "SCR bir marta ochilgach, boshqaruv elektrodi uni yopa olmaydi. Faqat anod tokini kamaytirish orqali yopiladi."
  },
  {
    id: 13,
    text: "Earli effekti (Early Effect) BJT da qanday oqibatga olib keladi?",
    options: [
      "Chiqish xarakteristikasida tokning Vce ga bog‘liq holda biroz oshishi",
      "Baza tokining yo‘qolishi",
      "Tranzistorning teskari teshilishi",
      "Tok kuchaytirish koeffitsientining nolga tushishi"
    ],
    correctIndex: 0,
    topic: "BJT",
    difficulty: "hard",
    explanation: "Earli effekti baza kengligining modulyatsiyasi bo'lib, kollektor tokining Vce ga bog'liqligini keltirib chiqaradi."
  },
  {
    id: 14,
    text: "Shmitt triggeri (Schmitt Trigger) oddiy komparatordan nimasi bilan farq qiladi?",
    options: [
      "Chiqish kuchlanishi o‘zgaruvchan",
      "Gisterezis (Hysteresis) xususiyatiga ega",
      "Faqat manfiy kuchlanishda ishlaydi",
      "Ishlash tezligi juda past"
    ],
    correctIndex: 1,
    topic: "Digital",
    difficulty: "medium",
    explanation: "Shmitt triggeri shovqinlarga chidamli bo'lish uchun ikkita (yuqori va past) ostonaviy kuchlanishga (gisterezis) ega."
  },
  {
    id: 15,
    text: "Invertirlanuvchi kuchaytirgichda (Inverting Amplifier) kirish va chiqish signallari orasidagi faza farqi qancha?",
    options: [
      "0°",
      "90°",
      "180°",
      "45°"
    ],
    correctIndex: 2,
    topic: "OpAmp",
    difficulty: "easy",
    explanation: "Invertirlanuvchi kuchaytirgich signal ishorasini teskarisiga o'zgartiradi, ya'ni 180 gradus faza siljishi beradi."
  },
  {
    id: 16,
    text: "PWM (Impuls kengligi modulyatsiyasi) signalining to‘ldirish koeffitsienti (Duty Cycle) 75% bo‘lsa va Vmax=12V bo‘lsa, o‘rtacha kuchlanish qancha?",
    options: [
      "3V",
      "6V",
      "9V",
      "12V"
    ],
    correctIndex: 2,
    topic: "Power",
    difficulty: "medium",
    explanation: "V_avg = DutyCycle * Vmax = 0.75 * 12V = 9V."
  },
  {
    id: 17,
    text: "Differensial kuchaytirgichning CMRR (Common Mode Rejection Ratio) ko‘rsatkichi nimani anglatadi?",
    options: [
      "Foydali signalni shovqindan ajratish qobiliyatini",
      "Maksimal chiqish kuchlanishini",
      "Ishlash haroratini",
      "Kirishdagi maksimal tokni"
    ],
    correctIndex: 0,
    topic: "OpAmp",
    difficulty: "medium",
    explanation: "CMRR kuchaytirgichning sinfaz (shovqin) signallarni qanchalik yaxshi so'ndirishi va differensial signalni kuchaytirishi nisbatidir."
  },
  {
    id: 18,
    text: "Miller effekti kuchaytirgichning qaysi parametriga salbiy ta’sir qiladi?",
    options: [
      "Chiqish quvvatiga",
      "Yuqori chastotadagi o‘tkazish polosasiga (Bandwidth)",
      "Statik ish rejimiga",
      "Past chastotali kuchaytirishga"
    ],
    correctIndex: 1,
    topic: "BJT",
    difficulty: "hard",
    explanation: "Miller effekti kirish sig'imini oshirib yuboradi, bu esa yuqori chastotalarda kuchaytirishni pasaytiradi."
  },
  {
    id: 19,
    text: "Qaysi turdagi kondensator qutbli (polyar) hisoblanadi?",
    options: [
      "Keramik",
      "Plyonkali (Film)",
      "Elektrolitik",
      "Slyudali"
    ],
    correctIndex: 2,
    topic: "RC",
    difficulty: "easy",
    explanation: "Elektrolitik kondensatorlar + va - qutblarga ega va noto'g'ri ulanishi portlashga olib kelishi mumkin."
  },
  {
    id: 20,
    text: "H-ko‘prik (H-Bridge) sxemasi asosan nima uchun ishlatiladi?",
    options: [
      "Signalni filtrlash uchun",
      "DC dvigatelning aylanish yo‘nalishini o‘zgartirish uchun",
      "O‘zgaruvchan tokni to‘g‘rilash uchun",
      "Stabilizator sifatida"
    ],
    correctIndex: 1,
    topic: "Power",
    difficulty: "medium",
    explanation: "H-ko'prik dvigatelga beriladigan kuchlanish qutbini o'zgartirish orqali uni oldinga yoki orqaga aylantirish imkonini beradi."
  },
  {
    id: 21,
    text: "Darlington juftligi (Darlington Pair) qanday asosiy afzallikka ega?",
    options: [
      "Juda yuqori tok kuchaytirish koeffitsienti (β)",
      "Juda yuqori ishlash tezligi",
      "Past to‘yinish kuchlanishi",
      "Kam quvvat sarfi"
    ],
    correctIndex: 0,
    topic: "BJT",
    difficulty: "medium",
    explanation: "Darlington sxemasi ikkita tranzistordan iborat bo'lib, umumiy kuchaytirish koeffitsienti β1 * β2 ga teng."
  },
  {
    id: 22,
    text: "R-2R zanjiri (Ladder network) qaysi qurilmada ishlatiladi?",
    options: [
      "Raqamli-Analog O‘zgartirgich (DAC)",
      "Analog-Raqamli O‘zgartirgich (ADC)",
      "Operatsion kuchaytirgich",
      "Tiristorli boshqaruvchi"
    ],
    correctIndex: 0,
    topic: "Digital",
    difficulty: "hard",
    explanation: "R-2R zanjiri raqamli kodni analog kuchlanishga o'tkazish uchun eng keng tarqalgan usullardan biridir."
  },
  {
    id: 23,
    text: "IGBT tranzistori qaysi ikki komponentning afzalliklarini birlashtiradi?",
    options: [
      "Diod va Rezistor",
      "BJT va MOSFET",
      "JFET va BJT",
      "SCR va Triac"
    ],
    correctIndex: 1,
    topic: "Power",
    difficulty: "medium",
    explanation: "IGBT kirishda MOSFET kabi yuqori qarshilikka va chiqishda BJT kabi katta tok o'tkazish qobiliyatiga ega."
  },
  {
    id: 24,
    text: "Slew Rate (O‘sish tezligi) OpAmp uchun nimani belgilaydi?",
    options: [
      "Chiqish kuchlanishining vaqt birligida o‘zgarishining maksimal tezligi",
      "Maksimal kuchlanish amplitudasi",
      "Eng kichik kuchaytiriladigan signal",
      "Shovqin darajasi"
    ],
    correctIndex: 0,
    topic: "OpAmp",
    difficulty: "hard",
    explanation: "Slew Rate (V/µs) kuchaytirgichning tez o'zgaruvchan signallarga qanchalik tez reaksiya bera olishini ko'rsatadi."
  },
  {
    id: 25,
    text: "De Morgan qonuniga ko‘ra, (A + B)' ifodasi nimaga teng?",
    options: [
      "A' + B'",
      "A' * B'",
      "A * B",
      "A + B"
    ],
    correctIndex: 1,
    topic: "Digital",
    difficulty: "medium",
    explanation: "Mantiqiy yig'indining inkori (NOR), inkorlarning ko'paytmasiga (AND) teng."
  },
  {
    id: 26,
    text: "Depletion mode (kambag‘allashgan) MOSFET normal holatda (Vgs=0) qanday holatda bo‘ladi?",
    options: [
      "Ochiq (tok o‘tkazadi)",
      "Yopiq (tok o‘tkazmaydi)",
      "Kuygan",
      "Stabilizatsiya rejimida"
    ],
    correctIndex: 0,
    topic: "FET",
    difficulty: "hard",
    explanation: "Depletion MOSFET normal holatda kanalga ega bo'ladi va uni yopish uchun teskari kuchlanish berish kerak."
  },
  {
    id: 27,
    text: "Rezonans paytida ketma-ket LC zanjirining impedansi (qarshiligi) qanday bo‘ladi?",
    options: [
      "Cheksiz katta",
      "Nolga teng (ideal holda)",
      "Faqat sig‘im qarshiligiga teng",
      "Faqat induktiv qarshilikka teng"
    ],
    correctIndex: 1,
    topic: "RC",
    difficulty: "medium",
    explanation: "Ketma-ket rezonansda XL va XC bir-birini yo'q qiladi, natijada impedans minimal (ideal holda nol) bo'ladi."
  },
  {
    id: 28,
    text: "Buck Converter (Pasaytiruvchi o‘zgartirgich) da chiqish kuchlanishi kirish kuchlanishidan...",
    options: [
      "Har doim katta",
      "Har doim kichik",
      "Teng",
      "Teskari qutbli"
    ],
    correctIndex: 1,
    topic: "Power",
    difficulty: "easy",
    explanation: "Buck konvertori faqat kuchlanishni pasaytirish uchun ishlatiladi."
  },
  {
    id: 29,
    text: "Emitter takrorlagich (Common Collector) sxemasining kuchlanish kuchaytirish koeffitsienti taxminan nechaga teng?",
    options: [
      "100",
      "50",
      "1",
      "0"
    ],
    correctIndex: 2,
    topic: "BJT",
    difficulty: "easy",
    explanation: "Emitter takrorlagich kuchlanishni kuchaytirmaydi (Ku ≈ 1), lekin tokni kuchaytiradi."
  },
  {
    id: 30,
    text: "Flip-Flop (Trigger) sxemasi qanday qurilma hisoblanadi?",
    options: [
      "Kombinatsion mantiqiy sxema",
      "Ketma-ketlik (Sequential) mantiqiy sxema",
      "Analog kuchaytirgich",
      "Passiv filtr"
    ],
    correctIndex: 1,
    topic: "Digital",
    difficulty: "medium",
    explanation: "Flip-flop xotiraga ega bo'lgani uchun ketma-ketlik (sequential) mantiqiy sxema hisoblanadi."
  }
];