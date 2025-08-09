const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันส่งฟอร์มจริง ๆ
    alert('ส่งแบบฟอร์มเรียบร้อยแล้ว');
    // ถ้าต้องการส่งฟอร์มจริง ๆ ให้เอา event.preventDefault() ออก หรือใช้ form.submit()
    form.submit();
});