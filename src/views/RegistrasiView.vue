<template>
  <div class="register">
    <div class="img-regist">
      <img src="../assets/register.png" alt="bg" />
    </div>
    <div class="form-regist bg-dark">
      <form class="form-padding">
        <h1 class="h5 text-warning">Midaz.</h1>
        <h2 class="mt-4 text-white">Daftar</h2>
        <p class="mt-4 text-white">
          Jika sudah mempunyai akun<br />Silahkan
          <a href="/login" class="text-warning text-decoration-none">masuk</a>
          disini !
        </p>
        <div class="mt-4 d-flex">
          <div class="round" />
          <div class="ms-3 round-inactive" />
          <div class="ms-3 round-inactive" />
        </div>
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
            <span class="input-group-text bg-dark"
              ><img src="../assets/lock.svg" class="img-icon" alt="" />
              <input
                type="password"
                class="mt-1 form-control bg-dark text-white"
                id="password"
                placeholder="Masukan kata sandi anda"
              />
            </span>
          </div>
        </div>
        <div class="form-space col-md-12">
          <label for="password-confirmation" class="form-label text-white"
            >Konfirmasi kata sandi</label
          >
          <div class="input-group d-grid">
            <span class="input-group-text bg-dark">
              <img src="../assets/lock.svg" class="img-icon" alt="" />
              <input
                type="password"
                class="mt-1 form-control bg-dark text-white"
                id="password-confirmation"
                placeholder="Ketik ulang kata sandi anda"
              />
            </span>
          </div>
        </div>
        <div class="form-space d-grid">
          <a
            class="btn btn-warning text-white"
            href="/verifikasi"
            role="button"
          >
            Lanjutkan
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// export default {
//   name: "Register",
//   data() {
//     return {
//       email: "",
//       password: "",
//       confpassword: "",
//       msg: "",
//     };
//   },
//   methods: {
//     async submit() {
//       console.log(this.email, "wakakaakka");
//       try {
//         const form = new URLSearchParams();
//         form.append("email", this.email);
//         form.append("password", this.password);
//         form.append("confpassword", this.confpassword);
//         const register = await axios.post(
//           "http://localhost:3000/register",
//           form
//         );
//         console.log(register.data.msg, "respon dari backend");
//         this.msg = register.data.msg;
//       } catch (error) {
//         console.log(error);
//         this.msg = error.response.data.msg;
//       }
//     },
//   },
// };
</script>

<style scoped>
.register {
  width: 100vw;
  display: flex;
  margin: 0 !important;
  padding: 0 !important;
}

.img-regist {
  width: 60vw;
  margin: 0 !important;
  padding: 0 !important;
}

img {
  max-height: 100vh;
  width: 100%;
}

.form-regist {
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
  background-color: #f0a500;
}

.round-inactive {
  border-radius: 10rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: grey;
}

.form-space {
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

.img-icon {
  width: 8%;
}
</style>
