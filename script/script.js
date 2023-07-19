document.addEventListener("DOMContentLoaded",function(event){
    var urlParams = new URLSearchParams(window.location.search);
    var berat = parseInt(urlParams.get("berat"));
    var tinggi = parseInt(urlParams.get("tinggi"));

    var tinggim = tinggi / 100; // mengubah tinggi badan dari centimeter menjadi meter
    var calculate= berat / (tinggim * tinggim); //hitung BMI menggunakan rumus BMI
    var bmi = calculate .toFixed(1); // mengurangi angka di belakang koma menjadi 1
    var bmiElement = document.getElementById("bmi"); //mengubah variabel dari data bmi bmielement
    bmiElement.textContent = bmi; 

    var kondisi = document.getElementById("kondisi");
    var comment = document.getElementById("comment");
    var interpretasi = document.getElementById("interpretasi");
    var kategori = document.getElementById("kategori");
    var rujukan = document.getElementById("rujukan");

    if (bmi > 30){
        document.getElementById("kondisi").innerHTML = "Obesitas" ;
        document.getElementById("comment").innerHTML = "Anda Berada dalam Kategori Obesitas";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI lebih dari 30";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori kegemukan atau Obesitas.";
        document.getElementById("Rujukan").innerHTML = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
    } else if (bmi > 29.9){
        document.getElementById("kondisi").innerHTML = "kelebihan Berat Badan";
        document.getElementById("comment").innerHTML = "Anda memiliki berat badan Berlebih";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI diantara 25.0 hingga 29.9";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori Overweight atau kelebihan berat badan."
        document.getElementById("Rujukan").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
    } else if(bmi > 24.9){
        document.getElementById("kondisi").innerHTML = "Normal (Ideal)";
        document.getElementById("comment").innerHTML = "Anda memiliki Berat badan Yang Ideal";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI diantara 18.5 hingga 24.9"
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori Ideal atau Normal.";
        document.getElementById("Rujukan").innerHTML = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else {
        document.getElementById("kondisi").innerHTML = "Kekurangan berat Badan";
        document.getElementById("comment").innerHTML = "Anda kekurangan berat badan";
        document.getElementsById("interpretasi").innerHTML = "Hasil BMI Kurang dari 18.5";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori kategori kekurangan berat badan.";
        document.getElementById("Rujukan").innerHTML = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
    }
})

function goToPage(){
    window.location.href = "index.html";
}