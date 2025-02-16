document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            text: "Все проходит, и это пройдет.",
            author: "Соломон"
        },
        {
            text: "Мы тратим время на поиски смысла, забывая, что само время – это и есть жизнь.",
            author: "Сенека"
        },
        {
            text: "Жизнь коротка, искусство вечно.",
            author: "Гиппократ"
        },
        {
            text: "Время — это то, что мы больше всего хотим, но хуже всего используем.",
            author: "Уильям Пенн"
        },
        {
            text: "Мы создаем наше время, а не время создает нас.",
            author: "Джордж Бернард Шоу"
        },
        {
            text: "Прошлое – это призрак, будущее – мечта, у нас есть только настоящее.",
            author: "Билл Кин"
        },
        {
            text: "Те, кто понимают время, никогда не торопятся.",
            author: "Лао-цзы"
        },
        {
            text: "Время лечит все раны, но оно же оставляет шрамы.",
            author: "Джейн Остин"
        },
        {
            text: "Будущее принадлежит тем, кто готовится к нему сегодня.",
            author: "Малкольм Икс"
        },
        {
            text: "Время — это самый ценный ресурс, который у нас есть, потому что он невозобновляем.",
            author: "Стив Джобс"
        }
    ];

    const quoteText = document.querySelector('.quote p');
    const quoteAuthor = document.querySelector('.quote cite');
    let currentQuoteIndex = 0;

    function updateQuote() {
        // Добавляем класс для анимации исчезновения
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            const quote = quotes[currentQuoteIndex];
            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `— ${quote.author}`;

            // Добавляем класс для анимации появления
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;

            // Обновляем индекс для следующей цитаты
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }, 500);
    }

    // Обновляем цитату каждые 3 секунд
    setInterval(updateQuote, 3 * 1000);

    // Инициализируем первую случайную цитату
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    updateQuote();

    const telegramBtn = document.querySelector('.telegram-btn');
    
    // Add hover effect sound
    telegramBtn.addEventListener('mouseenter', () => {
        const hoverSound = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UEQAAAAAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1JEAAAEoAHALAAAAIAAANIAAAARUQeQBmKAABnA8gDMwABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
        hoverSound.play().catch(() => {
            // Ignore audio play errors
        });
    });

    // Add click handler for Telegram button
    telegramBtn.addEventListener('click', () => {
        window.open('https://t.me/webbshelf', '_blank');
    });

    // Add smooth scroll for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a simple loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}); 