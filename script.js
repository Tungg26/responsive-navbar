document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Lắng nghe sự kiện click vào nút ☰
    menuIcon.addEventListener("click", function () {
        // Thêm/Xóa class "active" để ẩn hiện menu trên mobile
        navLinks.classList.toggle("active");
    });
});