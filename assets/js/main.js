
// =============== Active Navbar =============================

// Lấy danh sách tất cả các liên kết trong menu
const navbarLinks = document.querySelectorAll(".navbar__link");

// Lặp qua từng liên kết và thêm sự kiện click
navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        // Loại bỏ lớp navbar-active khỏi tất cả các liên kết
        navbarLinks.forEach((link) => {
            link.classList.remove("navbar-active");
        });

        // Gắn lớp navbar-active vào liên kết được click
        this.classList.add("navbar-active");

        // Ngăn sự kiện mặc định của liên kết (nếu có)
        event.preventDefault();
    });
});


// ==========