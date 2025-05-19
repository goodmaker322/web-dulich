document.addEventListener('DOMContentLoaded', function() {

    // Thêm sự kiện click cho từng ảnh trong destination-card để mở popup
    document.querySelectorAll('.destination-card img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('popup-img').src = this.src;
            document.getElementById('image-popup').classList.add('active');
        });
    });

    // Đóng popup
    document.getElementById('close-popup').onclick = function() {
        document.getElementById('image-popup').classList.remove('active');
        document.getElementById('popup-img').src = '';
    };

    // Đóng popup khi click ra ngoài ảnh lớn (vào nền mờ)
    document.getElementById('image-popup').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('popup-img').src = '';
        }
    };

    // Popup combo images
    // Danh sách ảnh combo
    const comboImages = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80", // Hạ Long
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80", // Vũng Tàu
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80", // Phan Thiết
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=200&q=80", // Đà Lạt
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"  // Nha Trang
    ];
    let currentCombo = 0;

    // Sự kiện click vào ảnh combo để mở popup
    document.querySelectorAll('.combo-img').forEach(img => {
        img.addEventListener('click', function() {
            currentCombo = Number(this.dataset.index);
            document.getElementById('combo-popup-img').src = comboImages[currentCombo];
            document.getElementById('combo-popup').classList.add('active');
        });
    });

    // Đóng popup combo
    document.getElementById('close-combo-popup').onclick = function() {
        document.getElementById('combo-popup').classList.remove('active');
        document.getElementById('combo-popup-img').src = '';
    };

    // Chuyển ảnh combo về trước
    document.getElementById('combo-prev').onclick = function(e) {
        e.stopPropagation();
        currentCombo = (currentCombo + comboImages.length - 1) % comboImages.length;
        document.getElementById('combo-popup-img').src = comboImages[currentCombo];
    };

    // Chuyển ảnh combo tiếp theo
    document.getElementById('combo-next').onclick = function(e) {
        e.stopPropagation();
        currentCombo = (currentCombo + 1) % comboImages.length;
        document.getElementById('combo-popup-img').src = comboImages[currentCombo];
    };

    // Đóng popup khi click ra ngoài ảnh lớn
    document.getElementById('combo-popup').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('combo-popup-img').src = '';
        }
    };
});