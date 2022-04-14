<template>
  <div class="login">
    <div class="background-img">
      <img src="../assets/login.png" alt="bg" />
    </div>
    <div class="form-login bg-dark">
      <form class="form-padding">
        <h1 class="h4 text-warning">Midaz.</h1>
        <h2 class="mt-4 text-white">Masuk</h2>
        <p class="mt-4 text-white">
          Jika belum mempunyai akun<br />Silahkan
          <a href="/register" class="text-warning text-decoration-none"
            >daftar</a
          >
          disini !
        </p>

        <div class="form-space">
          <label for="email" class="form-label text-white">Email</label>
          <div class="input-group d-grid">
            <span class="input-group-text bg-dark">
              <img src="../assets/email.svg" class="img-icon" alt="" />
              <input
                type="email"
                class="mt-1 form-control bg-dark text-white"
                id="email"
                placeholder="Masukan alamat email anda"
              />
            </span>
          </div>
        </div>

        <div class="form-space">
          <label for="password" class="form-label text-white">Kata sandi</label>
          <div class="input-group d-grid">
            <span class="input-group-text bg-dark">
              <img src="../assets/lock.svg" class="img-icon" alt="" />
              <input
                type="password"
                class="mt-1 form-control bg-dark text-white"
                id="password"
                placeholder="Masukan kata sandi anda"
              />
            </span>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label text-white" for="exampleCheck1"
              >Ingat saya</label
            >
          </div>
          <div class="text-pass">
            <p class="text-white">Lupa Password?</p>
          </div>
        </div>

        <div class="form-space d-grid">
          <button type="submit" class="btn btn-warning text-white">
            Masuk
          </button>
        </div>

        <div class="d-flex justify-content-center text-pass">
          <p class="text-white">atau masuk menggunakan</p>
        </div>

        <div class="container d-flex justify-content-center">
          <a class="btn icon" href="#" role="button"
            ><img src="../assets/facebook-svgrepo-com.svg" alt=""
          /></a>
          <a class="btn icon" href="#" role="button"
            ><img src="../assets/apple-svgrepo-com.svg" alt=""
          /></a>
          <a class="btn icon" href="#" role="button"
            ><img src="../assets/google-svgrepo-com.svg" alt=""
          /></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Register",
  // data() {
  //   return {
  //     email: "",
  //     password: "",
  //   };
  // },
};
</script>

<style scoped>
.login {
  width: 100vw;
  display: flex;
  margin: 0 !important;
  padding: 0 !important;
}

.background-img {
  width: 60vw;
  margin: 0 !important;
  padding: 0 !important;
}

.icon {
  width: 13%;
}

img {
  max-height: 100vh;
  width: 100%;
}

.form-login {
  width: 40vw;
  padding-top: 7rem;
}

.form-padding {
  padding-left: 4rem;
  padding-right: 4rem;
}

.round {
  border-radius: 10rem;
  width: 1.5rem;
  height: 1.5rem;
}

.round-inactive {
  border-radius: 10rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: grey;
}

.form-space {
  margin-top: 1rem;
}

.form-check {
  margin-top: 2rem;
}

.form-control {
  color: white;
  border-color: white;
  border-top-width: 0;
  border-left-width: 0;
  border-right: 0;
  border-bottom-width: 2px;
  border-radius: 0;
}

.form-control:focus {
  box-shadow: none;
  border-color: yellow;
}

.form-control::placeholder {
  color: white;
}

.text-pass {
  margin-top: 2rem;
}

.img-icon {
  width: 8%;
}
</style>
