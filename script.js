 function gotolib() {
    Swal.fire({
      title: "Kunjungi Halaman Perpustakaan Rujukan?",
      text: "Anda akan dialihkan ke halaman web perpustakaan Rujukan.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Lanjutkan!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Mengalihkan...",
          text: "Permintaan Anda Sedang Diproses.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500, // Tutup otomatis setelah 1.5 detik
        }).then(() => {
          window.open("https://library.usu.ac.id/", "_blank");
        });
      }
    });
  }
