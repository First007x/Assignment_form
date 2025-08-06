function updateOptions() {
    const ticketType = document.getElementById("tickets").value;
    const qtyInput = document.getElementById("ticketQty");
    const qtyContainer = document.getElementById("quantityContainer");
    const priceDisplay = document.getElementById("priceDisplay");

    let maxQty = 0;
    let pricePerTicket = 0;

    switch (ticketType) {
        case "ปกติ":
            maxQty = 5;
            pricePerTicket = 100;
            break;
        case "VIP":
            maxQty = 2;
            pricePerTicket = 200;
            break;
        case "Preminum":
            maxQty = 2;
            pricePerTicket = 300;
            break;
        default:
            qtyContainer.style.display = "none";
            priceDisplay.textContent = "";
            return;
    }

    qtyContainer.style.display = "block";
    qtyInput.value = 1;
    qtyInput.max = maxQty;
    qtyInput.min = 1;

    priceDisplay.textContent = `ราคา ${pricePerTicket} บาท / ใบ (สูงสุด ${maxQty} ใบ)`;

    qtyInput.oninput = function () {
        let qty = parseInt(qtyInput.value) || 1;
        if (qty > maxQty) qty = maxQty;
        priceDisplay.textContent = `รวม ${qty * pricePerTicket} บาท (${pricePerTicket} บาท/ใบ × ${qty} ใบ)`;
    };
}

function validateForm(event) {
    event.preventDefault(); // ป้องกันการ submit หน้าเว็บ

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("PhoneNumber").value.trim();
    const ticketType = document.getElementById("tickets").value;
    const qty = document.getElementById("ticketQty").value;

    let errorMessage = "";

    if (!name) {
        errorMessage += "- กรุณากรอกชื่อ-นามสกุล\n";
    }

    if (!/^0\d{9}$/.test(phone)) {
        errorMessage += "- กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)\n";
    }

    if (!ticketType) {
        errorMessage += "- กรุณาเลือกประเภทตั๋ว\n";
    }

    if (ticketType && (!qty || qty < 1)) {
        errorMessage += "- กรุณาระบุจำนวนตั๋วให้ถูกต้อง\n";
    }

    if (errorMessage) {
        alert("พบข้อผิดพลาด:\n" + errorMessage);
        return false;
    }

    // แสดงผลสำเร็จ
    alert(`จองตั๋วสำเร็จ!\nชนิดตั๋ว: ${ticketType}\nจำนวน: ${qty} ใบ`);
    return true;
}
