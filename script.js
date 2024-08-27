// const btn = document.getElementById("btn");
// const container = document.querySelector(".container");
// const reset = document.getElementById("btn-reset");
// let iteration = 20;
// let min = 7;
// let max = 20;
// let target = Math.floor(Math.random() * (max - min + 1)) + min + "CM";

// btn.addEventListener("click", () => {
//     const intervalId = setInterval(() => {
//         if (iteration > 0) {
//             container.innerHTML = iteration + "CM";
//             iteration--;
//         } else {
//             clearInterval(intervalId);
//             container.innerHTML = target;
            
//             const numericValue = parseInt(target);
//             let p = document.createElement("p");
//             p.classList.add("message"); // Tambahkan kelas khusus
//             if (numericValue === 20) {
//                 p.innerHTML = "GILAAA GEDE BANGET !";
//             } else if (numericValue > 10 && numericValue < 20) {
//                 p.innerHTML = "Nah gitu dong jantan !";
//             } else if (numericValue <= 10) {
//                 p.innerHTML = "PUNYA AKMAL WKWKWK";
//             }
            
//             container.insertAdjacentElement("afterend", p);

//             // Hapus elemen <p> setelah 3 detik
//             setTimeout(() => {
//                 p.remove();
//             }, 3000);
//         }
//     }, 100);
// });

// reset.addEventListener("click", () => {
//     container.textContent = "0CM";
//     iteration = 20;
//     target = Math.floor(Math.random() * (max - min + 1)) + min + "CM";

//     // Hapus hanya elemen <p> yang memiliki kelas "message"
//     const messageElements = document.querySelectorAll(".message");
//     messageElements.forEach(p => p.remove());
// });

const btn = document.getElementById("btn");
const container = document.querySelector(".container");
let iteration = 20;
let min = 7;
let max = 20;
let target;
let intervalId;

// Fungsi untuk memulai animasi
function startAnimation() {
    iteration = 20;
    target = Math.floor(Math.random() * (max - min + 1)) + min + "CM";

    intervalId = setInterval(() => {
        if (iteration > 0) {
            container.innerHTML = iteration + "CM";
            iteration--;
        } else {
            clearInterval(intervalId);
            container.innerHTML = target;

            const numericValue = parseInt(target);
            let p = document.createElement("p");
            p.classList.add("message"); // Tambahkan kelas khusus
            if (numericValue === 20) {
                p.innerHTML = "GILAAA GEDE BANGET !";
            } else if (numericValue > 10 && numericValue < 20) {
                p.innerHTML = "Nah gitu dong jantan !";
            } else if (numericValue <= 10) {
                p.innerHTML = "PUNYA AKMAL WKWKWKWKWK";
            }
            
            container.insertAdjacentElement("afterend", p);

            // Hapus elemen <p> setelah 3 detik
            setTimeout(() => {
                p.remove();
            }, 3000);
            
            // Ubah tombol kembali ke "Start" setelah animasi selesai
            btn.innerHTML = "MO DIKASIH LIAT LAGI ? BOLEHHH";
        }
    }, 100);
}

// Event listener untuk tombol
btn.addEventListener("click", () => {
    // Hapus semua elemen <p> yang mungkin ada
    const messageElements = document.querySelectorAll(".message");
    messageElements.forEach(p => p.remove());

    if (btn.innerHTML === "MO DIKASIH LIAT LAGI ? BOLEHHH") {
        startAnimation();
        btn.innerHTML = "buka celana dulu";
    } else {
        clearInterval(intervalId); // Hentikan animasi yang sedang berjalan (jika ada)
        container.textContent = "0CM"; // Reset tampilan
        startAnimation(); // Mulai ulang animasi
    }
});

