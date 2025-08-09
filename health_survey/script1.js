document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('healthForm');

    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const genderSelect = document.getElementById('gender');
    const healthSelect = document.getElementById('healthSelect');
    const diseaseDetails = document.getElementById('diseaseDetails');

    // error messages
    const errorName = document.getElementById('error-name');
    const errorAge = document.getElementById('error-age');
    const errorHeight = document.getElementById('error-height');
    const errorWeight = document.getElementById('error-weight');
    const errorGender = document.getElementById('error-gender');
    const errorDisease = document.getElementById('error-disease');

    // modal
    const resultModal = document.getElementById('resultModal');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const closeModal = document.getElementById('closeModal');

    healthSelect.addEventListener('change', () => {
        if (healthSelect.value === 'yes') {
            diseaseDetails.classList.remove('hidden');
            diseaseDetails.required = true;
        } else {
            diseaseDetails.classList.add('hidden');
            diseaseDetails.required = false;
            diseaseDetails.value = '';
        }
        errorDisease.classList.add('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        // ชื่อ
        if (!nameInput.value.trim()) {
            errorName.classList.remove('hidden');
            valid = false;
        } else {
            errorName.classList.add('hidden');
        }

        // อายุ
        if (ageInput.value < 15 || ageInput.value > 60) {
            errorAge.classList.remove('hidden');
            valid = false;
        } else {
            errorAge.classList.add('hidden');
        }

        // ส่วนสูง
        if (heightInput.value <= 0) {
            errorHeight.classList.remove('hidden');
            valid = false;
        } else {
            errorHeight.classList.add('hidden');
        }

        // น้ำหนัก
        if (weightInput.value <= 0) {
            errorWeight.classList.remove('hidden');
            valid = false;
        } else {
            errorWeight.classList.add('hidden');
        }

        // เพศ
        if (!genderSelect.value) {
            errorGender.classList.remove('hidden');
            valid = false;
        } else {
            errorGender.classList.add('hidden');
        }

        // โรคประจำตัว
        if (healthSelect.value === 'yes' && !diseaseDetails.value.trim()) {
            errorDisease.classList.remove('hidden');
            valid = false;
        } else {
            errorDisease.classList.add('hidden');
        }

        if (!valid) return;

        // คำนวณ BMI
        const heightM = heightInput.value / 100;
        const bmi = (weightInput.value / (heightM ** 2)).toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'น้ำหนักน้อย';
        } else if (bmi < 24.9) {
            category = 'ปกติ';
        } else if (bmi < 29.9) {
            category = 'น้ำหนักเกิน';
        } else {
            category = 'อ้วน';
        }

        bmiValue.textContent = `ค่า BMI ของคุณคือ: ${bmi}`;
        bmiCategory.textContent = `หมวดหมู่: ${category}`;
        resultModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        resultModal.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... โค้ดเดิม ...

    const successMessage = document.createElement('p');
    successMessage.textContent = 'ส่งเรียบร้อย';
    successMessage.className = 'text-green-600 font-semibold mt-2 hidden';
    form.appendChild(successMessage);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        // ... ตรวจสอบฟอร์มเหมือนเดิม ...

        if (!valid) return;

        // คำนวณ BMI
        const heightM = heightInput.value / 100;
        const bmi = (weightInput.value / (heightM ** 2)).toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'น้ำหนักน้อย';
        } else if (bmi < 24.9) {
            category = 'ปกติ';
        } else if (bmi < 29.9) {
            category = 'น้ำหนักเกิน';
        } else {
            category = 'อ้วน';
        }

        bmiValue.textContent = `ค่า BMI ของคุณคือ: ${bmi}`;
        bmiCategory.textContent = `หมวดหมู่: ${category}`;
        resultModal.classList.remove('hidden');

        // ซ่อน modal และแสดงข้อความส่งเรียบร้อยแทน
        setTimeout(() => {
            resultModal.classList.add('hidden');
            successMessage.classList.remove('hidden');
            // ล้างฟอร์มด้วยถ้าต้องการ
            // form.reset();

            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        }, 3000);
    });

    closeModal.addEventListener('click', () => {
        resultModal.classList.add('hidden');
    });
});
