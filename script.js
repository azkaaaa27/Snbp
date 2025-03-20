document.getElementById('formPengumuman').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const namaPeserta = document.getElementById('namaPeserta').value;
    const nomorPendaftaran = document.getElementById('nomorPendaftaran').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const hasilPengumuman = document.getElementById('hasilPengumuman');

    // Semua input dianggap LULUS
    hasilPengumuman.innerHTML = `
        <h2>Selamat!</h2>
        <p>Anda dinyatakan <strong>LULUS</strong> seleksi SNBP 2025.</p>
        <p><strong>Nama:</strong> ${namaPeserta}</p>
        <p><strong>Program Studi:</strong> Hukum Agama Islam (Jinayat)</p>
        <p><strong>Universitas:</strong> UNIVERSITAS SUNAN AMPEL SURABAYA</p>
        <img class="qr-code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://snpmb.bppp.kemdikbud.go.id" alt="QR Code">
    `;
    hasilPengumuman.className = 'hasil lulus';
    hasilPengumuman.style.display = 'block';
});