export const brand = {
  name:       "Luna Beauty Salon",
  tagline:    "Твой идеальный образ — у нас",
  phone:      "+7 777 183 8414",
  instagram1: "luna_beautty_salon",
  instagram2: "luna_beauty_sallon",
  whatsapp:   "77771838414",
};

export const branches = [
  {
    id:        "fil1",
    name:      "Филиал 1",
    address:   "ул. Акан серы, 55",
    city:      "Алматы",
    instagram: "luna_beautty_salon",
    phone:     null as string | null,
    mapUrl:    "https://2gis.kz/almaty/search/%D0%90%D0%BA%D0%B0%D0%BD%20%D1%81%D0%B5%D1%80%D1%8B%2055",
  },
  {
    id:        "fil2",
    name:      "Филиал 2",
    address:   "ул. Хаби Халиуллина, 140/9",
    city:      "Алматы",
    instagram: "luna_beauty_sallon",
    phone:     "+7 777 183 8414" as string | null,
    mapUrl:    "https://2gis.kz/almaty/search/%D0%A5%D0%B0%D0%B1%D0%B8%20%D0%A5%D0%B0%D0%BB%D0%B8%D1%83%D0%BB%D0%BB%D0%B8%D0%BD%D0%B0%20140%2F9",
  },
];

export interface PriceItem     { name: string; price: string }
export interface PriceCategory { category: string; icon: string; subtitle?: string; items: PriceItem[] }

export const priceFilial1: PriceCategory[] = [
  {
    category: "Ламинирование",
    icon: "✨",
    items: [
      { name: "Ламинирование ресниц",                                              price: "8 000 ₸"  },
      { name: "Ламинирование бровей",                                              price: "8 000 ₸"  },
      { name: "Комплекс (ламинирование, окрашивание, ботокс, коррекция)",          price: "10 000 ₸" },
      { name: "Ресницы + Брови",                                                   price: "16 000 ₸" },
    ],
  },
  {
    category: "Наращивание ресниц",
    icon: "👁",
    items: [
      { name: "Классика",       price: "8 000 ₸"  },
      { name: "Объём 2Д",       price: "10 000 ₸" },
      { name: "Объём 3-4Д",     price: "11 000 ₸" },
      { name: "Объём 5Д",       price: "12 000 ₸" },
      { name: "Мега объём",     price: "15 000 ₸" },
      { name: "Мокрый эффект",  price: "+ 2 000 ₸" },
      { name: "Изгиб L, M",     price: "+ 2 000 ₸" },
      { name: "Лучики",         price: "+ 1 000 ₸" },
      { name: "Чужое снятие",   price: "2 000 ₸"  },
    ],
  },
  {
    category: "Женский зал",
    icon: "💇‍♀️",
    items: [
      { name: "Женская стрижка",       price: "от 8 000 ₸"  },
      { name: "Окрашивание в 1 тон",   price: "от 20 000 ₸" },
      { name: "Окрашивание корней",     price: "15 000 ₸"   },
      { name: "Тонирование",           price: "от 10 000 ₸" },
      { name: "Сложное окрашивание",   price: "от 35 000 ₸" },
      { name: "Укладка на фен",        price: "8 000 ₸"     },
      { name: "Укладка на плойку",     price: "от 9 000 ₸"  },
      { name: "Вечерняя причёска",     price: "от 13 000 ₸" },
      { name: "Реконструкция волос",   price: "от 15 000 ₸" },
      { name: "Мытьё + сушка головы",  price: "3 000 ₸"     },
      { name: "Холодный ботокс",       price: "от 13 000 ₸" },
    ],
  },
  {
    category: "Антицеллюлитный массаж",
    icon: "💆",
    subtitle: "Ручной + аппаратный + термо обёртывание",
    items: [
      { name: "Живот + Бока — разовое",       price: "7 000 ₸"  },
      { name: "Живот + Бока — 6 сеансов",     price: "25 000 ₸" },
      { name: "Живот + Бока — 10 сеансов",    price: "38 000 ₸" },
      { name: "Спина + Холка — разовое",      price: "6 000 ₸"  },
      { name: "Спина + Холка — 6 сеансов",    price: "24 000 ₸" },
      { name: "Спина + Холка — 10 сеансов",   price: "35 000 ₸" },
      { name: "Ноги + Ягодицы — разовое",     price: "8 000 ₸"  },
      { name: "Ноги + Ягодицы — 6 сеансов",   price: "23 000 ₸" },
      { name: "Ноги + Ягодицы — 10 сеансов",  price: "35 000 ₸" },
    ],
  },
  {
    category: "Макияж",
    icon: "💄",
    items: [
      { name: "Дневной макияж",    price: "8 000 ₸"  },
      { name: "Вечерний макияж",   price: "10 000 ₸" },
      { name: "Свадебный макияж",  price: "20 000 ₸" },
      { name: "Тон",               price: "6 000 ₸"  },
      { name: "Пучковые ресницы",  price: "2 000 ₸"  },
    ],
  },
  {
    category: "Перманентный макияж",
    icon: "🪡",
    items: [
      { name: "Перманент бровей / губ",       price: "20 000 ₸" },
      { name: "Перекрытие старого татуажа",   price: "24 000 ₸" },
      { name: "Обновление работы (нашей)",    price: "18 000 ₸" },
      { name: "Удаление ремувером",           price: "15 000 ₸" },
    ],
  },
  {
    category: "Мужской зал",
    icon: "✂️",
    items: [
      { name: "Стрижка",                  price: "5 000 ₸"        },
      { name: "Борода",                   price: "3 000 ₸"        },
      { name: "Детская стрижка до 14 лет", price: "4 000 ₸"       },
      { name: "Бритьё головы",            price: "3 000 ₸"        },
      { name: "Покраска волос",           price: "5 000 ₸"        },
      { name: "Покраска бороды",          price: "2 000 ₸"        },
      { name: "Окантовка",                price: "2 000 ₸"        },
      { name: "Воск / маска",             price: "1 000 / 1 500 ₸" },
    ],
  },
  {
    category: "Маникюр",
    icon: "💅",
    items: [
      { name: "С гель покрытием",          price: "7 000 ₸"  },
      { name: "Классический маникюр",      price: "4 000 ₸"  },
      { name: "Наращивание ногтей",        price: "10 000 ₸" },
      { name: "Френч / дизайн",           price: "+ 1 000 ₸" },
      { name: "Снятие гель лака",         price: "1 000 ₸"  },
      { name: "Снятие нарощенных ногтей", price: "2 000 ₸"  },
      { name: "Ремонт 1 ногтя",           price: "500 ₸"    },
      { name: "Наращивание 1 ногтя",      price: "1 500 ₸"  },
    ],
  },
  {
    category: "Педикюр",
    icon: "🦶",
    items: [
      { name: "С гель покрытием",    price: "8 000 ₸" },
      { name: "Классический педикюр", price: "6 500 ₸" },
    ],
  },
];

export const priceFilial2: PriceCategory[] = [
  {
    category: "Женский зал",
    icon: "💇‍♀️",
    items: [
      { name: "Женская стрижка",       price: "от 8 000 ₸"  },
      { name: "Окрашивание в 1 тон",   price: "от 20 000 ₸" },
      { name: "Окрашивание корней",     price: "15 000 ₸"   },
      { name: "Тонирование",           price: "от 10 000 ₸" },
      { name: "Сложное окрашивание",   price: "от 35 000 ₸" },
      { name: "Укладка на фен",        price: "8 000 ₸"     },
      { name: "Укладка на плойку",     price: "от 9 000 ₸"  },
      { name: "Вечерняя причёска",     price: "от 13 000 ₸" },
      { name: "Реконструкция волос",   price: "от 15 000 ₸" },
      { name: "Мытьё + сушка головы",  price: "3 000 ₸"     },
      { name: "Холодный ботокс",       price: "от 13 000 ₸" },
    ],
  },
  {
    category: "Наращивание ресниц",
    icon: "👁",
    items: [
      { name: "Классика",          price: "10 000 ₸" },
      { name: "2-3D",              price: "15 000 ₸" },
      { name: "4-5D",              price: "16 000 ₸" },
      { name: "Мега объём",        price: "20 000 ₸" },
      { name: "Bio ресницы",       price: "18 000 ₸" },
      { name: "Эффекты",           price: "+ 1 000 ₸" },
      { name: "Изгибы M, L, N, +", price: "+ 1 000 ₸" },
      { name: "Цветные ресницы",   price: "+ 1 000 ₸" },
      { name: "Снятие ресниц",     price: "1 000 ₸"  },
    ],
  },
  {
    category: "Мужской зал",
    icon: "✂️",
    items: [
      { name: "Стрижка",                   price: "6 000 ₸"        },
      { name: "Борода",                    price: "3 000 ₸"        },
      { name: "Детская стрижка до 14 лет", price: "5 000 ₸"        },
      { name: "Бритьё головы",             price: "3 000 ₸"        },
      { name: "Покраска волос",            price: "5 000 ₸"        },
      { name: "Покраска бороды",           price: "2 000 ₸"        },
      { name: "Окантовка",                 price: "2 000 ₸"        },
      { name: "Воск / маска",              price: "1 000 / 1 500 ₸" },
    ],
  },
  {
    category: "Маникюр",
    icon: "💅",
    items: [
      { name: "С гель покрытием",          price: "8 000 ₸"       },
      { name: "Классический маникюр",      price: "5 000 ₸"       },
      { name: "Наращивание ногтей",        price: "от 10 000 ₸"   },
      { name: "Френч / дизайн",           price: "+ 1 000 ₸"      },
      { name: "Снятие гель лака",         price: "1 000 ₸"       },
      { name: "Снятие нарощенных ногтей", price: "2 000 ₸"       },
      { name: "Ремонт 1 ногтя",           price: "500 ₸"         },
      { name: "Наращивание 1 ногтя",      price: "1 500 ₸"       },
    ],
  },
  {
    category: "Педикюр",
    icon: "🦶",
    items: [
      { name: "С гель покрытием",    price: "9 000 ₸" },
      { name: "Классический педикюр", price: "6 500 ₸" },
      { name: "Мужской маникюр",     price: "7 000 ₸" },
      { name: "Мужской педикюр",     price: "9 000 ₸" },
    ],
  },
];

export const servicePreview = [
  { id: "hair",    title: "Волосы",            description: "Стрижки, окрашивание, укладки, ботокс и реконструкция", priceFrom: "от 3 000 ₸" },
  { id: "nails",   title: "Ногти",             description: "Маникюр, педикюр, наращивание, гель-покрытие, дизайн",  priceFrom: "от 4 000 ₸" },
  { id: "lashes",  title: "Ресницы и брови",   description: "Наращивание, ламинирование, коррекция, окрашивание",    priceFrom: "от 8 000 ₸" },
  { id: "makeup",  title: "Макияж",            description: "Дневной, вечерний, свадебный и перманентный макияж",    priceFrom: "от 6 000 ₸" },
  { id: "massage", title: "Массаж",            description: "Антицеллюлитный ручной + аппаратный + термо обёртывание", priceFrom: "от 6 000 ₸" },
  { id: "men",     title: "Мужской зал",       description: "Стрижка, борода, окрашивание, бритьё, детские стрижки", priceFrom: "от 2 000 ₸" },
];

export function buildWhatsAppUrl(text?: string): string {
  const msg = text ?? "Привет! Хочу записаться на услугу в Luna Beauty Salon";
  return `https://wa.me/77771838414?text=${encodeURIComponent(msg)}`;
}

export function buildWhatsAppUrlForService(service: string): string {
  return buildWhatsAppUrl(`Привет! Хочу записаться на ${service} в Luna Beauty`);
}
