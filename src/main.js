import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'


import en from './locales/en.json';
import ru from './locales/ru.json';

const messages = {
    en,
    ru,
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})


createApp(App).use(router).use(i18n).mount('#app');





