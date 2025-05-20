document.querySelectorAll('.faq-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('faqPopupQuestion').textContent = this.querySelector('.faq-question').textContent;
        document.getElementById('faqPopupAnswer').textContent = this.getAttribute('data-answer');
        document.getElementById('faqPopup').style.display = 'flex';
    });
});
document.getElementById('faqPopupClose').onclick = function() {
    document.getElementById('faqPopup').style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === document.getElementById('faqPopup')) {
        document.getElementById('faqPopup').style.display = 'none';
    }
};

// Form hỗ trợ
document.getElementById('supportForm').addEventListener('submit', function(e) {
    const emailInput = document.getElementById('email');
    const questionInput = document.getElementById('question');
    const email = emailInput.value.trim();
    const question = questionInput.value.trim();

    //validate
    if (!email) {
        alert('Vui lòng nhập email của bạn.');
        emailInput.focus();
        e.preventDefault();
        return false;
    }
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
        alert('Email phải đúng định dạng @gmail.com');
        emailInput.focus();
        e.preventDefault();
        return false;
    }
    // Kiểm tra câu hỏi không để trống
    if (!question) {
        alert('Vui lòng nhập câu hỏi của bạn.');
        questionInput.focus();
        e.preventDefault();
        return false;
    }

    e.preventDefault();

    emailjs.send("service_u8hvc9g", "template_2h3t8ng", {
        name: "Test User",          
        title: "Test Question",      
        email: "testuser@gmail.com"  
    })
    .then(function(response) {
        document.getElementById('supportSuccess').style.display = 'block';
        document.getElementById('supportForm').reset();
    }, function(error) {
        alert('Gửi email thất bại. Vui lòng thử lại sau.');
    });
});