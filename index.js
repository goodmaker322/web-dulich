document.addEventListener('DOMContentLoaded', function() {
    // Popup cho ảnh điểm đến
    document.querySelectorAll('.destination-card img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('popup-img').src = this.src;
            document.getElementById('image-popup').classList.add('active');
        });
    });
    document.getElementById('close-popup').onclick = function() {
        document.getElementById('image-popup').classList.remove('active');
        document.getElementById('popup-img').src = '';
    };
    document.getElementById('image-popup').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('popup-img').src = '';
        }
    };

    // Popup combo
    const comboImages = [
        [
            "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/12/13/cac-dia-diem-check-in-o-ha-long-1-1429.jpg",
            "https://special.nhandan.vn/30-nam-mot-chang-duong-di-san-Vinh-Ha-Long/assets/HLCklusX0n/things-to-do-in-ha-long-bay-banner-1-1920x1080.jpg",
            "https://static-images.vnncdn.net/files/publish/2022/7/27/untitled-1-850.jpg?width=0&s=3etwDxm9j4604hWdPpB0Rw"
        ],
        [
            "https://t2.ex-cdn.com/crystalbay.com/resize/1860x570/files/content/2024/10/22/vung-tau-ve-dem-co-gi-hap-dan-1-1118.jpeg",
            "https://baria-vungtau.dcs.vn/portal/editor/images/8.3-vung-tau.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/96/vung-tau.jpg?w=1400&h=1400&s=1"
        ]
        // Thêm các combo khác nếu có
    ];
    let currentCombo = 0, currentImg = 0;

    document.querySelectorAll('.combo-thumb').forEach(img => {
        img.addEventListener('click', function() {
            currentCombo = Number(this.dataset.combo);
            currentImg = Number(this.dataset.img);
            document.getElementById('combo-popup-img').src = comboImages[currentCombo][currentImg];
            document.getElementById('combo-popup').classList.add('active');
        });
    });

    document.getElementById('close-combo-popup').onclick = function() {
        document.getElementById('combo-popup').classList.remove('active');
        document.getElementById('combo-popup-img').src = '';
    };

    document.getElementById('combo-prev').onclick = function(e) {
        e.stopPropagation();
        currentImg = (currentImg + comboImages[currentCombo].length - 1) % comboImages[currentCombo].length;
        document.getElementById('combo-popup-img').src = comboImages[currentCombo][currentImg];
    };

    document.getElementById('combo-next').onclick = function(e) {
        e.stopPropagation();
        currentImg = (currentImg + 1) % comboImages[currentCombo].length;
        document.getElementById('combo-popup-img').src = comboImages[currentCombo][currentImg];
    };

    document.getElementById('combo-popup').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('combo-popup-img').src = '';
        }
    };
});