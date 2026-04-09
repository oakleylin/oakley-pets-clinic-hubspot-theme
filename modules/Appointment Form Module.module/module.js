document.addEventListener("DOMContentLoaded", function() {
  // DOM Elements
  const step1 = document.getElementById("form-step-1");
  const step2 = document.getElementById("form-step-2");
  const successState = document.getElementById("success-state");
  const form = document.getElementById("customAppointmentForm");
  
  const btnNext = document.getElementById("btn-next");
  const btnBack = document.getElementById("btn-back");
  
  const indicatorStep1 = document.getElementById("indicator-step-1");
  const indicatorStep2 = document.getElementById("indicator-step-2");

  // Summary Elements
  const summaryService = document.getElementById("summary-service");
  const summaryDate = document.getElementById("summary-date");
  const summaryTime = document.getElementById("summary-time");

  // 切換到 Step 2
  btnNext.addEventListener("click", function() {
    // 簡單驗證 Step 1 必填欄位
    const inputs = step1.querySelectorAll("[required]");
    let allValid = true;
    inputs.forEach(input => {
      if (!input.value) {
        input.reportValidity();
        allValid = false;
      }
    });

    if (allValid) {
      step1.style.display = "none";
      step2.style.display = "block";
      indicatorStep1.classList.remove("active");
      indicatorStep2.classList.add("active");
    }
  });

  // 返回 Step 1
  btnBack.addEventListener("click", function() {
    step2.style.display = "none";
    step1.style.display = "block";
    indicatorStep2.classList.remove("active");
    indicatorStep1.classList.add("active");
  });

  // 送出表單 (串接 HubSpot Forms API)
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // 阻止原本的頁面重新整理

    // 1. 取得按鈕並改變狀態，防止重複點擊
    const submitBtn = form.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Submitting...";
    submitBtn.disabled = true;

    // 2. 從 HTML 標籤取得 Portal ID 和 Form ID
    const portalId = form.getAttribute('data-portal-id');
    const formId = form.getAttribute('data-form-id');

    // 3. 收集表單資料
    const selectedService = document.getElementById("serviceType").value;
    const selectedDate = document.getElementById("appointmentDate").value;
    const selectedTime = document.getElementById("preferredTime").value;

    // 🚨 注意：這裡的 "name" (如 firstname, pet_type) 必須跟 HubSpot 後台表單的「Internal Name」一模一樣！
    const formData = {
      "fields": [
        { "name": "firstname", "value": document.getElementById("fullName").value },
        { "name": "phone_number", "value": document.getElementById("phoneNumber").value },
        { "name": "email", "value": document.getElementById("emailAddress").value },
        { "name": "pet_type", "value": document.getElementById("petType").value },
        { "name": "pet_name", "value": document.getElementById("petName").value },
        { "name": "service_type", "value": selectedService },
        { "name": "appointment_date", "value": selectedDate },
        { "name": "preferred_time", "value": selectedTime },
        { "name": "message", "value": document.getElementById("notes").value }
      ],
      "context": {
        "pageUri": window.location.href,
        "pageName": document.title
      }
    };

    // 4. 發送 API 請求到 HubSpot
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // 更新 Success Summary 資訊
        summaryService.textContent = selectedService;
        summaryDate.textContent = selectedDate;
        summaryTime.textContent = selectedTime;

        // 隱藏表單，顯示成功畫面
        form.style.display = "none";
        successState.style.display = "block";
      } else {
        // 處理失敗狀態
        alert("Something went wrong. Please check if your Form ID and Portal ID are correct.");
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert("Network error. Please try again later.");
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    });
  });
});