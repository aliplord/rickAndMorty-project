<template>
    <div class="form">
        <h1>Регистрация</h1>
        <form @submit.prevent="register">
            <input v-model="username" type="text" placeholder="Имя пользователя" required />
            <input v-model="password" type="password" placeholder="Пароль" required />
            <button type="submit">Зарегистрироваться</button>
        </form>
        <p>Уже есть аккаунт? <router-link to="/">Войти</router-link></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    register() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some((user) => user.username === this.username);
      if (userExists) {
        alert('пользователь с таким именем уже существует');
        return;
      }
      users.push({ username: this.username, password: this.password });
      localStorage.setItem('users', JSON.stringify(users));
      this.$router.push('/');
    },
  },
};
</script> 



<style>
form {
    height: 200px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

.form button {
    padding: 10px 15px;
    font-size: 16px;
    color: #ffffff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.form button:hover {
    background-color: #0056b3;
}

.form h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 800;
    margin: 300px 0 30px 33px;
}

.form p {
    text-align: center;
    margin-top: 10px;
    color: #ffffff;
}

.form a {
    color: #4c86c4;
    text-decoration: none;
    font-weight: 800;
    margin-left: 8px;
}

.form a:hover {
    text-decoration: underline;
}
</style>