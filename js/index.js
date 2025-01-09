// Chọn tất cả các tab link
const tabLinks = document.querySelectorAll('.tab-link');
const tabPanels = document.querySelectorAll('.tab-panel');

// Lặp qua từng tab link
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Loại bỏ active khỏi tất cả các tab link và panel
        tabLinks.forEach(tab => tab.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Thêm active vào tab và panel được chọn
        link.classList.add('active');
        const tabId = link.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
