// Highlight link navbar sesuai halaman yang sedang dibuka
const halamanSekarang = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(function (link) {
  if (link.getAttribute("href") === halamanSekarang) {
    link.style.textDecoration = "underline";
  }
});

// ===== Animasi "mantul" saat kartu profil di Beranda diklik =====
const semuaKartu = document.querySelectorAll(".card");

semuaKartu.forEach(function (kartu) {
  kartu.addEventListener("click", function (e) {
    e.preventDefault();
    kartu.classList.add("diklik");

    setTimeout(function () {
      window.location.href = kartu.getAttribute("href");
    }, 400);
  });
});

// ===== Elemen muncul pas kelihatan saat di-scroll =====
const pengamatScroll = new IntersectionObserver(function (daftarElemen) {
  daftarElemen.forEach(function (item) {
    if (item.isIntersecting) {
      item.target.classList.add("tampil");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(function (el) {
  pengamatScroll.observe(el);
});

// ===== Efek riak (ripple) saat tombol/link .btn diklik =====
document.querySelectorAll(".btn, button").forEach(function (tombol) {
  tombol.addEventListener("click", function (e) {
    const riak = document.createElement("span");
    riak.classList.add("ripple");

    const rect = tombol.getBoundingClientRect();
    const ukuran = Math.max(rect.width, rect.height);
    riak.style.width = riak.style.height = ukuran + "px";
    riak.style.left = (e.clientX - rect.left - ukuran / 2) + "px";
    riak.style.top = (e.clientY - rect.top - ukuran / 2) + "px";

    tombol.appendChild(riak);

    setTimeout(function () {
      riak.remove();
    }, 600);
  });
});

// ===== Transisi halus saat pindah halaman lewat navbar =====
document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const tujuan = link.getAttribute("href");
    document.body.classList.add("keluar");

    setTimeout(function () {
      window.location.href = tujuan;
    }, 280);
  });
});