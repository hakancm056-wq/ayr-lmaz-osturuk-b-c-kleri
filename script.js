let melihOlcek = 1;
let resimOlcek = 1;

function melihBuyut() {
    const melihBtn = document.getElementById('melih-btn');
    const resim = document.getElementById('ana-resim');
    const mesaj = document.getElementById('mesaj');

    // Melih tıklandıkça her şey devleşir
    melihOlcek += 0.5;
    resimOlcek += 0.15;

    melihBtn.style.transform = `scale(${melihOlcek})`;
    resim.style.transform = `scale(${resimOlcek})`;

    mesaj.innerText = "Doğru yoldasın, Melih'in sevgisi sığmıyor! 🚀";

    // Final: Buton çok büyüdüğünde her şeyi ele geçirir
    if (melihOlcek > 5.5) {
        mesaj.innerHTML = "❤️ Evet Melih daha çokk seviyorr zaaxd ❤️<br>Gerçekler gün yüzüne çıktı!";
        document.getElementById('sude-btn').style.display = "none";
        document.body.style.backgroundColor = "#fff176"; // Sarı ekran
        resim.style.transform = `scale(${resimOlcek}) rotate(5deg)`;
    }
}

function sudeTiklandi() {
    const mesaj = document.getElementById('mesaj');
    const sudeBtn = document.getElementById('sude-btn');
    
    // Rastgele komik tepkiler
    const mesajlar = [
        "HAYIR! Yanlış cevap. 😜",
        "Emin misin? Bir daha düşün...",
        "I-ıh, Melih butonuna odaklan!",
        "Hata! Tekrar dene..."
    ];
    let rastgeleMesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
    mesaj.innerText = rastgeleMesaj;

    // Sude butonu basıldıkça küçülür
    let mevcutScale = parseFloat(sudeBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    sudeBtn.style.transform = `scale(${mevcutScale * 0.8})`;
}
