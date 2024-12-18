<template>
    <div class="form">
        <h1>Авторизация</h1>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Имя пользователя" required />
            <input v-model="password" type="password" placeholder="Пароль" required />
            <button type="submit">Войти</button>
        </form>
        <p>Нет аккаунта? <router-link to="/register">Регистрация</router-link></p>
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
        login() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(
                (u) => u.username === this.username && u.password === this.password
            );

            if (user) {
                localStorage.setItem('currentUser', user.username);
                this.$router.push('/home');
            } else {
                alert('Неверное имя пользователя или пароль');
            }
        },
    },
};
</script>



<style></style>
