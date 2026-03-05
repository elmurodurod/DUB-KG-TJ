// 1. База ваших менеджеров
const MANAGERS = [
    { 
        name: 'Карина', 
        role: 'Менеджер по подбору персонала', 
        photo: 'assets/manager-1.jpg', 
        whatsapp: '48578588916', 
        telegram: 'karina_oae' 
    },
    { 
        name: 'Виктория', 
        role: 'Менеджер по подбору персонала', 
        photo: 'assets/manager-2.jpg', 
        whatsapp: '48795659432', 
        telegram: 'viktoria_oae'    
    },
    { 
        name: 'Андрей', 
        role: 'Менеджер по подбору персонала', 
        photo: 'assets/manager-3.jpg', 
        whatsapp: '48791306492', 
        telegram: 'andrew_oae_work' 
    }
];

const DEFAULT_WA_TEXT = 'Здравствуйте! Хочу участвовать в наборе.';

// Бронебойная ссылка для WhatsApp (принудительно открывает приложение)
function waLink(n, t) { 
    return 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(n) + '&text=' + encodeURIComponent(t || DEFAULT_WA_TEXT);
}

// Стандартная и надежная ссылка для Telegram
function tgLink(u) { 
    return 'https://t.me/' + u; 
}

function init() {
    // Чистая рулетка: выбираем случайного менеджера при каждой загрузке страницы
    const MANAGER = MANAGERS[Math.floor(Math.random() * MANAGERS.length)];

    // Подставляем данные на страницу
    document.getElementById('mName').textContent = MANAGER.name;
    document.getElementById('mRole').textContent = MANAGER.role;
    document.getElementById('mPhoto').src = MANAGER.photo;
    
    const wa = document.getElementById('btnWa');
    const tg = document.getElementById('btnTg');
          
    if (MANAGER.whatsapp) wa.href = waLink(MANAGER.whatsapp);
    else wa.style.display = 'none';
    
    if (MANAGER.telegram) tg.href = tgLink(MANAGER.telegram);
    else tg.style.display = 'none';
}

// Запускаем скрипт
document.addEventListener('DOMContentLoaded', init);
