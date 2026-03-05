// 1. Создаем список всех трех менеджеров
const MANAGERS = [
    { 
        name: 'Карина', 
        role: 'Менеджер по подбору персонала', 
        photo: 'assets/manager-1.jpg', 
        whatsapp: '48578588916', // Только цифры (например: 971501112233)
        telegram: 'karina_oae'    // Без собачки @ (например: manager1_dxb)
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

function waLink(n, t) { 
    return 'https://wa.me/' + encodeURIComponent(n) + '?text=' + encodeURIComponent(t || DEFAULT_WA_TEXT) 
}

function tgLink(u) { 
    return 'https://t.me/' + u 
}

function init() {
    // 2. Проверяем, закреплен ли уже менеджер за этим клиентом
    let savedIndex = localStorage.getItem('assignedManagerIndex');
    let managerIndex;

    if (savedIndex !== null && savedIndex < MANAGERS.length) {
        // Если клиент уже заходил, показываем того же менеджера
        managerIndex = parseInt(savedIndex, 10);
    } else {
        // Если клиент новый, рулетка выбирает случайного менеджера (0, 1 или 2)
        managerIndex = Math.floor(Math.random() * MANAGERS.length);
        localStorage.setItem('assignedManagerIndex', managerIndex); // Запоминаем выбор
    }

    const MANAGER = MANAGERS[managerIndex];

    // 3. Подставляем данные менеджера на сайт
    document.getElementById('mName').textContent = MANAGER.name;
    document.getElementById('mRole').textContent = MANAGER.role;
    document.getElementById('mPhoto').src = MANAGER.photo;
    
    const wa = document.getElementById('btnWa'),
          tg = document.getElementById('btnTg');
          
    if (MANAGER.whatsapp) wa.href = waLink(MANAGER.whatsapp);
    else wa.style.display = 'none';
    
    if (MANAGER.telegram) tg.href = tgLink(MANAGER.telegram);
    else tg.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', init);
