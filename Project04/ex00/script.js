// 1. تحديد العناصر من شجرة الـ DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 2. قراءة الثيم المحفوظ في الذاكرة المحلية (localStorage) إن وجد
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
}

// 3. إضافة مستمع الحدث (Event Listener) عند النقر على الزر
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonText('dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateButtonText('light');
    }
});

// دالة تحديث النص والمظهر للزر
function updateButtonText(theme) {
    if (theme === 'light') {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
}