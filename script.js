<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aşk Testi</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #fce4ec;
            font-family: 'Arial', sans-serif;
            text-align: center;
            overflow-x: hidden; /* Taşmaları engeller */
        }
        .container {
            max-width: 600px;
            padding: 20px;
        }
        #resim-alani img {
            width: 250px;
            border-radius: 15px;
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
        }
        h1 { color: #d81b60; margin-bottom: 30px; }
        .buton-grubu {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap; /* Butonlar büyüdükçe alt alta geçebilir */
        }
        button {
            padding: 15px 25px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        #melih-btn { background-color: #2196f3; color: white; }
        #sude-btn { background-color: #f48fb1; color: white; }
        #mesaj {
            margin-top: 40px;
            font-size: 22px;
            color: #880e4f;
            min-height: 30px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div id="resim-alani">
            <img id="ana-resim" src="https://via.placeholder.com/300" alt="Resim">
        </div>

        <h1 id="soru">Sence kim daha çok seviyor?</h1>

        <div class="buton-grubu">
            <button id="melih-btn" onclick="dogruCevap()">Melih daha çok seviyor</button>
            <button id="sude-btn" onclick="yanlisCevap()">Sude daha çok seviyor</button>
        </div>

        <div id="mesaj"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
