let sudeOlcek = 1;
let resimOlcek = 1;

function yanlisCevap() {
    const sudeButon = document.getElementById('sude-btn');
    const resim = document.getElementById('ana-resim');
    const mesaj = document.getElementById('mesaj');

    // Her tıklamada boyutları artırıyoruz
    sudeOlcek += 0.4;
    resimOlcek += 0.15;

    sudeButon.style.transform = `scale(${sudeOlcek})`;
    resim.style.transform = `scale(${resimOlcek})`;

    // Komik mesajlar
    const mesajlar = [
        "Emin misin? Bir daha düşün...",
        "I-ıh, bu cevap olmadı.",
        "Bence Melih butonu daha güzel duruyor!",
        "Tıkladıkça büyüyorum, dur bence!",
        "Mecbur diğerini seçeceksin..."
    ];
    let rastgeleMesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
    mesaj.innerText = rastgeleMesaj;

    // Sude butonu çok büyüdüğünde (örneğin 5 kat) artık yok edelim
    if (sudeOlcek > 5) {
        sudeButon.style.opacity = "0";
        sudeButon.style.pointerEvents = "none"; // Tıklanamaz hale getirir
        mesaj.innerText = "Bak seçenek kalmadı, sadece Melih var! 😂";
    }
}

function dogruCevap() {
    const mesaj = document.getElementById('mesaj');
    const sudeButon = document.getElementById('sude-btn');
    
    mesaj.innerHTML = "❤️ Evet Melih daha çokk seviyorr zaaxd ❤️";
    document.body.style.backgroundColor = "#fff176"; // Mutluluk rengi sarı
    
    // Yanlış butonu tamamen kaldıralım
    sudeButon.style.display = "none";
}
