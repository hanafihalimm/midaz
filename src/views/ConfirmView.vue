<template>
  <div class="confirm d-flex justify-content-center">
    <div>
      <img src="../assets/confirm.png" class="img-confirm" alt="" />
      <h2 class="text-asd text-white text-center">Selamat! Akun Anda</h2>
      <h2 class="text-as text-white text-center">Berhasil Terdaftar!</h2>

      <div class="form-btn">
        <a class="btn btn-warning d-grid text-white" href="/" role="button">
          Mulai Transaksi
        </a>
      </div>

      <div class="form-btn">
        <a
          class="btn btn-outline-warning d-grid text-white"
          href="/"
          role="button"
        >
          Ke Beranda
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.confirm {
  background-color: black;
  padding-top: 10rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0 !important;
}

.text-asd {
  font-size: 60px;
  padding-top: 3rem;
}

.text-as {
  font-size: 60px;
  padding-top: 1rem;
}

.form-btn {
  padding-top: 2rem;
}
</style>
