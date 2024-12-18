<template>

    <body>
        <header class="container">
            <nav class="header__nav">
                <div class="nav-left">
                    <div class="nav-icons">
                        <router-link to="/home"><a href="main.html">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                                    viewBox="0 0 64 64">
                                    <path
                                        d="M 21.033203 3.4277344 L 19.994141 15.572266 L 8.0332031 12.572266 L 15.033203 25.572266 L 4.0332031 29.572266 L 14.033203 35.572266 L 5.0332031 41.572266 L 15.033203 43.572266 L 10.033203 51.572266 C 10.033203 51.572266 15.021609 51.187953 17.974609 50.876953 C 20.691609 56.307953 25.958047 60 31.998047 60 C 38.083047 60 43.382031 56.252859 46.082031 50.755859 L 52.033203 51.572266 L 50.033203 43.572266 L 59.033203 39.572266 L 52.033203 34.572266 L 60.033203 26.572266 L 50.033203 25.572266 L 56.236328 13.826172 L 43.033203 15.572266 L 42.033203 3.5722656 L 32.033203 10.572266 L 21.033203 3.4277344 z M 31.998047 19 C 38.605047 19 43.982422 25.061672 43.982422 32.513672 L 43.982422 36.005859 C 44.000422 36.005859 44.015203 36 44.033203 36 C 45.413203 36 46.533203 37.12 46.533203 38.5 C 46.533203 39.88 45.413203 41 44.033203 41 C 44.015203 41 44.000422 40.994141 43.982422 40.994141 L 43.982422 42.486328 C 43.982422 49.938328 38.605047 56 31.998047 56 C 25.391047 56 20.015625 49.938328 20.015625 42.486328 L 20.015625 40.998047 C 18.642625 40.990047 17.53125 39.875953 17.53125 38.501953 C 17.53125 37.127953 18.642625 36.011906 20.015625 36.003906 L 20.015625 32.515625 C 20.015625 25.061625 25.391047 19 31.998047 19 z M 31.841797 24 C 27.838797 24 25.257391 24.668266 25.150391 24.697266 L 23.703125 25.080078 L 24.466797 27.976562 L 25.912109 27.599609 C 25.936109 27.593609 28.258797 27 31.841797 27 C 35.447797 27 37.671406 27.503812 37.691406 27.507812 L 39.152344 27.849609 L 39.837891 24.927734 L 38.376953 24.585938 C 38.273953 24.561937 35.825797 24 31.841797 24 z M 27.53125 28.5 C 24.77425 28.5 22.53125 30.743 22.53125 33.5 C 22.53125 36.257 24.77425 38.5 27.53125 38.5 C 29.51925 38.5 31.22625 37.325625 32.03125 35.640625 C 32.83625 37.325625 34.544203 38.501953 36.533203 38.501953 C 39.290203 38.501953 41.533203 36.258953 41.533203 33.501953 C 41.533203 30.744953 39.290203 28.501953 36.533203 28.501953 C 34.545203 28.501953 32.838203 29.676328 32.033203 31.361328 C 31.228203 29.676328 29.52025 28.5 27.53125 28.5 z M 27.53125 30.5 C 29.18525 30.5 30.53125 31.846 30.53125 33.5 C 30.53125 35.154 29.18625 36.5 27.53125 36.5 C 25.87725 36.5 24.53125 35.154 24.53125 33.5 C 24.53125 31.846 25.87725 30.5 27.53125 30.5 z M 36.533203 30.501953 C 38.187203 30.501953 39.533203 31.847953 39.533203 33.501953 C 39.533203 35.155953 38.188203 36.501953 36.533203 36.501953 C 34.879203 36.501953 33.533203 35.155953 33.533203 33.501953 C 33.533203 31.847953 34.879203 30.501953 36.533203 30.501953 z M 37.033203 32 A 1 1 0 0 0 37.033203 34 A 1 1 0 0 0 37.033203 32 z M 27.033203 33 A 1 1 0 0 0 27.033203 35 A 1 1 0 0 0 27.033203 33 z M 34.492188 38.712891 L 32.576172 39.287109 L 33.191406 41.333984 C 33.245406 41.513984 33.192734 41.704031 33.052734 41.832031 C 32.912734 41.960031 32.717969 41.995781 32.542969 41.925781 L 30.404297 41.072266 L 29.660156 42.927734 L 31.800781 43.783203 C 32.096781 43.901203 32.40775 43.958984 32.71875 43.958984 C 33.33075 43.958984 33.937391 43.734547 34.400391 43.310547 C 35.101391 42.670547 35.380422 41.668766 35.107422 40.759766 L 34.492188 38.712891 z M 32.089844 46 C 28.230844 46 25.739719 46.672172 25.636719 46.701172 L 24.193359 47.099609 L 24.984375 49.986328 L 26.427734 49.595703 C 26.449734 49.589703 28.666844 49 32.089844 49 C 35.533844 49 37.658734 49.499906 37.677734 49.503906 L 39.134766 49.859375 L 39.845703 46.943359 L 38.388672 46.589844 C 38.289672 46.565844 35.926844 46 32.089844 46 z">
                                    </path>
                                </svg>
                            </a>
                        </router-link>
                    </div>
                    <ul>
                        <router-link to="/profile">
                            <li><a href="">{{ $t('profile') }}</a></li>
                        </router-link>
                        <li><a href="">{{ $t('saves') }}</a></li>
                        <router-link to="/series">
                            <li><a href="">{{ $t('series') }}</a></li>
                        </router-link>
                        <router-link to="/location"><li><a href="">{{ $t('location') }}</a></li></router-link>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="container main-saves">
            <div class="store-title">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                        fill="#FF0000" />
                </svg>
                <h2>SAVES</h2>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                        fill="#FF0000" />
                </svg>
            </div>
            <div class="main-block">
                <div class="card-hero" v-for="character in likedCharacters" :key="character.id">
                    <img class="card-img" :src="character.image" :alt="character.name" />
                    <div class="card-bottom">
                        <p class="card-p">{{ character.name }}</p>
                        <div class="card-status">
                            <p>species - {{ character.species }}</p>
                            <p>status - {{ character.status }}</p>
                            <p>gender - {{ character.gender }}</p>
                            <p>location - {{ character.origin.name }}</p>
                        </div>
                        <div class="card-stuff">
                            <button class="card-delete" @click="deleteCard(character.id)">delete</button>
                            <button class="card-add" @click="addToFavorites(character.id)">favorite</button>
                        </div>
                    </div>
                </div>
            </div>


        </main>
        <footer class="container">
            <div class="footer-info">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path
                        d="M 25 4 C 19.986 4 13.099641 5.9681406 10.056641 11.494141 C 4.4771324 16.22449 4.4225757 23.532797 6.7753906 28.714844 C 6.4976479 28.945154 6.1863925 29.22791 5.8789062 29.595703 C 5.107659 30.518213 4.3629054 31.996757 4.765625 33.753906 C 5.1746278 35.538173 6.6557296 36.414049 7.8300781 36.71875 C 8.4189628 36.871544 8.9740994 36.918654 9.3828125 36.927734 C 12.48889 42.342667 18.319345 46 25 46 C 31.681212 46 37.511785 42.343145 40.617188 36.927734 C 41.02557 36.918459 41.580794 36.871101 42.167969 36.71875 C 43.342317 36.414049 44.825372 35.538173 45.234375 33.753906 C 45.637196 31.996316 44.892213 30.514339 44.123047 29.585938 C 43.775257 29.166148 43.41591 28.843346 43.117188 28.601562 C 44.866631 22.15675 43.918569 15.848642 40.462891 11.199219 C 37.012891 6.5572188 31.52 4 25 4 z M 25 12 C 25.551375 12 26.095632 12.027304 26.632812 12.082031 C 26.634733 12.082225 26.636751 12.081837 26.638672 12.082031 C 34.154537 12.850508 40.149492 18.845463 40.917969 26.361328 C 40.973086 26.900388 41 27.446637 41 28 C 41 28.272605 40.990077 28.544211 40.976562 28.814453 A 1.0001 1.0001 0 0 0 40.960938 29.052734 C 40.816216 31.277475 40.210086 33.371768 39.25 35.255859 C 39.2496 35.256645 39.248447 35.257027 39.248047 35.257812 A 1.0001 1.0001 0 0 0 39.042969 35.642578 C 36.332592 40.61824 31.074294 44 25 44 C 18.930706 44 13.673685 40.625109 10.960938 35.65625 A 1.0001 1.0001 0 0 0 10.746094 35.25 C 9.7902135 33.372402 9.1855503 31.286307 9.0390625 29.070312 C 9.0389764 29.06901 9.0391483 29.067708 9.0390625 29.066406 A 1.0001 1.0001 0 0 0 9.0253906 28.849609 C 9.0100683 28.568604 9 28.284419 9 28 C 9 27.448936 9.027876 26.903769 9.0820312 26.367188 C 9.0822285 26.365251 9.0818333 26.363264 9.0820312 26.361328 C 9.8505075 18.845463 15.845463 12.850508 23.361328 12.082031 C 23.899774 12.027492 24.446964 12 25 12 z M 18 19 C 16.083334 19 14.518559 19.754756 13.501953 20.898438 C 12.485347 22.042119 12 23.527778 12 25 C 12 26.472222 12.485347 27.957882 13.501953 29.101562 C 14.518559 30.245244 16.083334 31 18 31 C 21.301865 31 24 28.301863 24 25 C 24 21.698137 21.301865 19 18 19 z M 32 19 C 30.083334 19 28.518559 19.754756 27.501953 20.898438 C 26.485347 22.042119 26 23.527778 26 25 C 26 26.472222 26.485347 27.957882 27.501953 29.101562 C 28.518559 30.245244 30.083334 31 32 31 C 35.301865 31 38 28.301863 38 25 C 38 21.698137 35.301865 19 32 19 z M 18 21 C 19.684436 21 21.110404 22.024982 21.703125 23.488281 C 20.370581 23.115829 19.005224 22.954621 17.6875 22.986328 C 16.474622 23.015511 15.316172 23.209676 14.255859 23.505859 C 14.424127 23.031023 14.672207 22.593133 14.998047 22.226562 C 15.648107 21.495244 16.583334 21 18 21 z M 32 21 C 33.710853 21 35.137701 22.064333 35.712891 23.564453 C 34.643132 23.26354 33.56159 23.109008 32.501953 23.066406 A 2 2 0 0 0 32 23 A 2 2 0 0 0 31.523438 23.060547 C 30.374798 23.094013 29.264974 23.258946 28.248047 23.546875 C 28.416158 23.057016 28.663265 22.603192 28.998047 22.226562 C 29.648107 21.495246 30.583334 21 32 21 z M 19.990234 25.171875 C 20.654825 25.274902 21.304347 25.444659 21.933594 25.669922 C 21.616128 27.565975 19.990972 29 18 29 C 16.583334 29 15.648107 28.504756 14.998047 27.773438 C 14.49014 27.202041 14.173838 26.456331 14.056641 25.667969 C 14.644321 25.46037 15.303221 25.298769 16.011719 25.1875 A 2 2 0 0 0 18 27 A 2 2 0 0 0 19.990234 25.171875 z M 33.986328 25.207031 C 34.622553 25.320999 35.252478 25.479714 35.861328 25.693359 C 35.525029 27.566141 33.974595 29 32 29 C 30.583334 29 29.648107 28.504756 28.998047 27.773438 C 28.513695 27.228541 28.260644 26.511214 28.130859 25.763672 C 28.714612 25.555131 29.343483 25.366971 30.015625 25.228516 A 2 2 0 0 0 32 27 A 2 2 0 0 0 33.986328 25.207031 z M 23.953125 30.242188 A 1.0001 1.0001 0 0 0 23.345703 30.494141 C 23.345703 30.494141 21.767116 31.716285 22.089844 33.615234 C 22.193373 34.22547 22.622329 34.799866 23.126953 35.029297 C 23.631577 35.258728 24.095435 35.229718 24.478516 35.169922 C 25.244676 35.050329 25.847656 34.71875 25.847656 34.71875 A 1.0002021 1.0002021 0 1 0 24.929688 32.941406 C 24.929688 32.941406 24.499261 33.141952 24.169922 33.193359 C 24.114502 33.202059 24.135086 33.199519 24.097656 33.199219 C 24.098061 32.675933 24.654297 32.005859 24.654297 32.005859 A 1.0001 1.0001 0 0 0 23.953125 30.242188 z M 42.728516 31.0625 C 43.181861 31.669002 43.495409 32.389265 43.285156 33.306641 C 43.065159 34.266374 42.439917 34.582404 41.666016 34.783203 C 41.661367 34.784409 41.65699 34.783969 41.652344 34.785156 C 42.136519 33.600037 42.505833 32.357725 42.728516 31.0625 z M 7.2714844 31.074219 C 7.4943756 32.365481 7.8628284 33.603433 8.3457031 34.785156 C 8.3410563 34.783969 8.3366803 34.784409 8.3320312 34.783203 C 7.5581299 34.582404 6.934841 34.266374 6.7148438 33.306641 C 6.504125 32.387231 6.8177205 31.674414 7.2714844 31.074219 z M 25 37 C 22.666667 37 20.552734 38.105469 20.552734 38.105469 A 1.0001163 1.0001163 0 1 0 21.447266 39.894531 C 21.447266 39.894531 23.333333 39 25 39 C 26.666667 39 28.552734 39.894531 28.552734 39.894531 A 1.0001163 1.0001163 0 1 0 29.447266 38.105469 C 29.447266 38.105469 27.333333 37 25 37 z">
                    </path>
                </svg>
                <p>Rick and Morty catalog & stuff</p>
            </div>
            <a href="">
                <div class="footer-comeback">
                    <div>
                        <p>Вернуться</p>
                        <p>наверх</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path
                            d="M7 17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17L7 17ZM8.70711 0.292892C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292892L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 17L9 1L7 1L7 17L9 17Z"
                            fill="black"></path>
                    </svg>
                </div>
            </a>
        </footer>
    </body>
</template>




<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const likedCharacters = ref([]);

        const fetchLikedCharacters = () => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find(
                (u) => u.username === localStorage.getItem('currentUser')
            );

            if (!currentUser) {
                alert('вы не вошли в систему');
                router.push('/');
                return;
            }

            const likedIds = currentUser.likes || [];

            if (likedIds.length > 0) {
                const fetchPromises = likedIds.map((id) =>
                    fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.json())
                );

                Promise.all(fetchPromises)
                    .then((characters) => {
                        likedCharacters.value = characters;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        };

        const deleteCard = (id) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find(
                (u) => u.username === localStorage.getItem('currentUser')
            );

            if (!currentUser) {
                alert('вы не вошли в систему');
                return;
            }

            if (!currentUser.likes) {
                alert('нет сохраненных пользователей.');
                return;
            }

            if (currentUser.likes.includes(id)) {
                currentUser.likes = currentUser.likes.filter((likedId) => likedId !== id);
                alert(`персонаж успешно удален из сохраненных`);
            }

            const updatedUsers = users.map((user) =>
                user.username === currentUser.username ? currentUser : user
            );

            localStorage.setItem('users', JSON.stringify(updatedUsers));
            fetchLikedCharacters();
        };

        const addToFavorites = (id) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find(
                (u) => u.username === localStorage.getItem('currentUser')
            );

            if (!currentUser.favs) {
                currentUser.favs = [];
            }

            if (currentUser.favs = 1) {
                currentUser.favs = [];
            }

            if (!currentUser.favs.includes(id)) {
                currentUser.favs.push(id);
                alert('персонаж успешно стал вашим избранным');
            } else {
                alert('данный персонаж уже ваш избранный');
            }

            const updatedUsers = users.map((user) =>
                user.username === currentUser.username ? currentUser : user
            );

            localStorage.setItem('users', JSON.stringify(updatedUsers));
        };

        onMounted(() => {
            fetchLikedCharacters();
        });

        return {
            likedCharacters,
            deleteCard,
            addToFavorites,
        };
    },
};
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');



.main-saves {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(27, 98, 173);
}

.saves {
    display: flex;
    margin-bottom: 20px;
}

.main-saves .store-title {
    margin: 30px 0;
    color: white;
}


.container {
    font-family: "Oswald", serif;
    width: 1300px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

header {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.header__nav {
    margin-left: 20px;
    width: 1300px;
    height: 70px;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    justify-content: space-between;
    padding-right: 30px;
}

.nav-left {
    display: flex;
    align-items: center;
    width: 700px;
    justify-content: space-between;
}


header ul {
    display: flex;
    list-style: none;
    gap: 35px;
    padding: 0;
}

header a {
    color: rgba(0, 0, 0, 0.733);
    text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.65);
    letter-spacing: .1em;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
}

main {
    display: flex;
}

.main-block {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    margin-bottom: 30px;
    justify-content: center;
}

.store-title {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-direction: row;
}

.card-hero,
.card-series {
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
}


.card-hero {
    height: 300px;
    width: 580px;
    display: flex;
    align-items: start;
    background-color: rgb(23, 60, 85);
}

.card-hero p,
.card-series p {
    color: rgb(255, 255, 255);
    font-size: 23px;
    margin: 0;
}

.card-p {
    letter-spacing: 3px;
    font-weight: 800;
}

.card-p:hover {
    cursor: pointer;
    color: chocolate;
}

.card-img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
}

.card-bottom {
    font-weight: 800;
    height: 300px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: auto;
}

.card-status {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 400
}

.card-stuff {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.card-add {
    background-color: rgb(120, 158, 14);
}

.card-delete {
    background-color: red;
}

.card-add,
.card-delete {
    padding: 12px 10px;
    width: 100px;
    color: white;
    border: none;
    cursor: pointer;
    justify-self: end;
    border-radius: 10px;
    transition: 0.2s;
}

.card-add:hover {
    background-color: #5a721a;
    transform: scale(1.1);
}

.card-delete:hover {
    background-color: rgb(146, 2, 2);
    transform: scale(1.1);
}

footer {
    height: 80px;
    background-color: white;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
}

.footer-info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 20px;

}

.footer-comeback {
    margin-right: 40px;
    display: flex;
    gap: 20px;
    align-items: center;
}

.footer-comeback div {
    text-align: center;
}

.footer-comeback p {
    margin: 0;
    color: #000000;
    text-decoration: none;
}



@media screen and (max-width: 1024px) {
    .container {
        width: 900px;
        margin: auto;
    }


    .nav-left {
        display: flex;
        align-items: center;
        width: 450px;
        justify-content: space-between;
    }

} 


@media screen and (max-width: 768px) {
    .container {
        width: 600px;
        margin: auto;
    }
} 
</style>