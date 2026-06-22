export const brand = {
  name: "Luna Beauty Salon",
  tagline: "Твой идеальный образ — у нас",
  phone: "+7 777 183 8414",
  instagram1: "luna_beautty_salon",
  instagram2: "luna_beauty_sallon",
  whatsapp: "77771838414",
};

export const branches = [
  {
    id: "fil1",
    name: "Филиал 1",
    address: "ул. Акан серы, 55",
    city: "Алматы",
    instagram: "luna_beautty_salon",
    phone: null,
    mapUrl: "https://2gis.kz/almaty/search/%D0%90%D0%BA%D0%B0%D0%BD%20%D1%81%D0%B5%D1%80%D1%8B%2055",
  },
  {
    id: "fil2",
    name: "Филиал 2",
    address: "ул. Хаби Халиуллина, 140/9",
    city: "Алматы",
    instagram: "luna_beauty_sallon",
    phone: "+7 777 183 8414",
    mapUrl: "https://2gis.kz/almaty/search/%D0%A5%D0%B0%D0%B1%D0%B8%20%D0%A5%D0%B0%D0%BB%D0%B8%D1%83%D0%BB%D0%BB%D0%B8%D0%BD%D0%B0%20140%2F9",
  },
];

export interface PriceItem {
  name: string;
  price: string;
}

export interface PriceCategory {
  category: string;
  icon: string;
  subtitle?: string;
  items: PriceItem[];
}

export const priceFilial1: PriceCategory[] = [
  {
    category: "Ламинирование",
    icon: "✨",
    items: [
      { name: "Ламинирование ресниц", price: "8 000 тг" },
      { name: "Ламинирование бровей", price: "8 000 тг" },
      { name: "Комплекс (ламинирование, окрашивание, ботокс, коррекция)", price: "10 000 тг" },
      { name: "Ресницы + Брови", price: "16 000 тг" },
    ],
  },
  {
    category: "Наращивание ресниц",
    icon: "👁",
    items: [
      { name: "Классика", price: "8 000 тг" },
      { name: "Объём 2Д", price: "10 000 тг" },
      { name: "Объём 3-4Д", price: "11 000 тг" },
      { name: "Объём 5Д", price: "12 000 тг" },
      { name: "Мега объём", price: "15 000 тг" },
      { name: "Мокрый эффект", price: "+ 2 000 тг" },
      { name: "Изгиб L, M", price: "+ 2 000 тг" },
      { name: "Лучики", price: "+ 1 000 тг" },
      { name: "Чужое снятие", price: "2 000 тг" },
    ],
  },
  {
    category: "Женский зал",
    icon: "💇‍♀️",
    items: [
      { name: "Женская стрижка", price: "от 8 000 тг" },
      { name: "Окрашивание в 1 тон", price: "от 20 000 тг" },
      { name: "Окрашивание корней", price: "15 000 тг" },
      { name: "Тонирование", price: "от 10 000 тг" },
      { name: "Сложное окрашивание", price: "от 35 000 тг" },
      { name: "Укладка на фен", price: "8 000 тг" },
      { name: "Укладка на плойку", price: "от 9 000 тг" },
      { name: "Вечерняя причёска", price: "от 13 000 тг" },
      { name: "Реконструкция волос", price: "от 15 000 тг" },
      { name: "Мытьё + сушка головы", price: "3 000 тг" },
      { name: "Холодный ботокс", price: "от 13 000 тг" },
    ],
  },
  {
    category: "Антицеллюлитный массаж",
    icon: "💆",
    subtitle: "Ручной + аппаратный + термо обёртывание",
    items: [
      { name: "Живот + Бока — разовое", price: "7 000 тг" },
      { name: "Живот + Бока — 6 сеансов", price: "25 000 тг" },
      { name: "Живот + Бока — 10 сеансов", price: "38 000 тг" },
      { name: "Спина + Холка — разовое", price: "6 000 тг" },
      { name: "Спина + Холка — 6 сеансов", price: "24 000 тг" },
      { name: "Спина + Холка — 10 сеансов", price: "35 000 тг" },
      { name: "Ноги + Ягодицы — разовое", price: "8 000 тг" },
      { name: "Ноги + Ягодицы — 6 сеансов", price: "23 000 тг" },
      { name: "Ноги + Ягодицы — 10 сеансов", price: "35 000 тг" },
    ],
  },
  {
    category: "Макияж",
    icon: "💄",
    items: [
      { name: "Дневной макияж", price: "8 000 тг" },
      { name: "Вечерний макияж", price: "10 000 тг" },
      { name: "Свадебный макияж", price: "20 000 тг" },
      { name: "Тон", price: "6 000 тг" },
      { name: "Пучковые ресницы", price: "2 000 тг" },
    ],
  },
  {
    category: "Перманентный макияж",
    icon: "🪡",
    items: [
      { name: "Перманент бровей / губ", price: "20 000 тг" },
      { name: "Перекрытие старого татуажа", price: "24 000 тг" },
      { name: "Обновление работы (нашей)", price: "18 000 тг" },
      { name: "Удаление ремувером", price: "15 000 тг" },
    ],
  },
  {
    category: "Мужской зал",
    icon: "✂️",
    items: [
      { name: "Стрижка", price: "5 000 тг" },
      { name: "Борода", price: "3 000 тг" },
      { name: "Детская стрижка до 14 лет", price: "4 000 тг" },
      { name: "Бритьё головы", price: "3 000 тг" },
      { name: "Покраска волос", price: "5 000 тг" },
      { name: "Покраска бороды", price: "2 000 тг" },
      { name: "Окантовка", price: "2 000 тг" },
      { name: "Воск / маска", price: "1 000 / 1 500 тг" },
    ],
  },
  {
    category: "Маникюр",
    icon: "💅",
    items: [
      { name: "С гель покрытием", price: "7 000 тг" },
      { name: "Классический маникюр", price: "4 000 тг" },
      { name: "Наращивание ногтей", price: "10 000 тг" },
      { name: "Френч / дизайн", price: "+ 1 000 тг" },
      { name: "Снятие гель лака", price: "1 000 тг" },
      { name: "Снятие нарощенных ногтей", price: "2 000 тг" },
      { name: "Ремонт 1 ногтя", price: "500 тг" },
      { name: "Наращивание 1 ногтя", price: "1 500 тг" },
    ],
  },
  {
    category: "Педикюр",
    icon: "🦶",
    items: [
      { name: "С гель покрытием", price: "8 000 тг" },
      { name: "Классический педикюр", price: "6 500 тг" },
    ],
  },
];

export const priceFilial2: PriceCategory[] = [
  {
    category: "Женский зал",
    icon: "💇‍♀️",
    items: [
      { name: "Женская стрижка", price: "от 8 000 тг" },
      { name: "Окрашивание в 1 тон", price: "от 20 000 тг" },
      { name: "Окрашивание корней", price: "15 000 тг" },
      { name: "Тонирование", price: "от 10 000 тг" },
      { name: "Сложное окрашивание", price: "от 35 000 тг" },
      { name: "Укладка на фен", price: "8 000 тг" },
      { name: "Укладка на плойку", price: "от 9 000 тг" },
      { name: "Вечерняя причёска", price: "от 13 000 тг" },
      { name: "Реконструкция волос", price: "от 15 000 тг" },
      { name: "Мытьё + сушка головы", price: "3 000 тг" },
      { name: "Холодный ботокс", price: "от 13 000 тг" },
    ],
  },
  {
    category: "Наращивание ресниц",
    icon: "👁",
    items: [
      { name: "Классика", price: "10 000 тг" },
      { name: "2-3D", price: "15 000 тг" },
      { name: "4-5D", price: "16 000 тг" },
      { name: "Мега объём", price: "20 000 тг" },
      { name: "Bio ресницы", price: "18 000 тг" },
      { name: "Эффекты", price: "+ 1 000 тг" },
      { name: "Изгибы M, L, N, +", price: "+ 1 000 тг" },
      { name: "Цветные ресницы", price: "+ 1 000 тг" },
      { name: "Снятие ресниц", price: "1 000 тг" },
    ],
  },
  {
    category: "Мужской зал",
    icon: "✂️",
    items: [
      { name: "Стрижка", price: "6 000 тг" },
      { name: "Борода", price: "3 000 тг" },
      { name: "Детская стрижка до 14 лет", price: "5 000 тг" },
      { name: "Бритьё головы", price: "3 000 тг" },
      { name: "Покраска волос", price: "5 000 тг" },
      { name: "Покраска бороды", price: "2 000 тг" },
      { name: "Окантовка", price: "2 000 тг" },
      { name: "Воск / маска", price: "1 000 / 1 500 тг" },
    ],
  },
  {
    category: "Маникюр",
    icon: "💅",
    items: [
      { name: "С гель покрытием", price: "8 000 тг" },
      { name: "Классический маникюр", price: "5 000 тг" },
      { name: "Наращивание ногтей", price: "от 10 000 тг" },
      { name: "Френч / дизайн", price: "+ 1 000 тг" },
      { name: "Снятие гель лака", price: "1 000 тг" },
      { name: "Снятие нарощенных ногтей", price: "2 000 тг" },
      { name: "Ремонт 1 ногтя", price: "500 тг" },
      { name: "Наращивание 1 ногтя", price: "1 500 тг" },
    ],
  },
  {
    category: "Педикюр",
    icon: "🦶",
    items: [
      { name: "С гель покрытием", price: "9 000 тг" },
      { name: "Классический педикюр", price: "6 500 тг" },
      { name: "Мужской маникюр", price: "7 000 тг" },
      { name: "Мужской педикюр", price: "9 000 тг" },
    ],
  },
];

export const servicePreview = [
  {
    id: "hair",
    title: "Волосы",
    description: "Стрижки, окрашивание, укладки, ботокс и реконструкция",
    priceFrom: "от 3 000 тг",
    href: "/uslugi",
  },
  {
    id: "nails",
    title: "Ногти",
    description: "Маникюр, педикюр, наращивание, гель-покрытие, дизайн",
    priceFrom: "от 4 000 тг",
    href: "/uslugi",
  },
  {
    id: "lashes",
    title: "Ресницы и брови",
    description: "Наращивание, ламинирование, коррекция, окрашивание",
    priceFrom: "от 8 000 тг",
    href: "/uslugi",
  },
  {
    id: "makeup",
    title: "Макияж",
    description: "Дневной, вечерний, свадебный и перманентный макияж",
    priceFrom: "от 6 000 тг",
    href: "/uslugi",
  },
  {
    id: "massage",
    title: "Массаж",
    description: "Антицеллюлитный ручной + аппаратный + термо обёртывание",
    priceFrom: "от 6 000 тг",
    href: "/uslugi",
  },
  {
    id: "men",
    title: "Мужской зал",
    description: "Стрижка, борода, окрашивание, бритьё, детские стрижки",
    priceFrom: "от 2 000 тг",
    href: "/uslugi",
  },
];

export function buildWhatsAppUrl(text?: string): string {
  const base = "https://wa.me/77771838414";
  const message = text
    ? encodeURIComponent(text)
    : encodeURIComponent("Привет! Хочу записаться на услугу в Luna Beauty Salon");
  return `${base}?text=${message}`;
}

export function buildWhatsAppUrlForService(service: string): string {
  return buildWhatsAppUrl(`Привет! Хочу записаться на ${service} в Luna Beauty`);
}
