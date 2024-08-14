<template>
    <div class="repos container">
        <div class="repos__box">
            <div v-for="(repo, i) in sortedRepositories" :key="repo.id" class="repos__box_item">
                <div class="repos__box_item-desc">
                    <h2>{{ repo.name }}</h2>
                    <p>Кол-во звёзд: {{ repo.stargazers_count }}</p>
                    <p>Дата добавления: {{ getDate()[i] }}</p>
                </div>
                <a :href="repo.html_url" target="_blank" class="repos__box_item-btn">ПОСЕТИТЬ</a>
            </div>

            <h2 class="repos__box_null" v-if="!repositories.length">Пока нет доступных репозиториев</h2>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['repositories']),
        
        sortedRepositories() {
            if (this.repositories) {
                return [...this.repositories].sort((a, b) => {
                    // Сортировка по количеству звёзд
                    return b.stargazers_count - a.stargazers_count;
                });
            }
            return [];
        },
    },

    methods: {
        getDate() {
            return this.repositories.map(item => {
                let date = item.created_at.split('T');
                return date[0];
            });
        }
    }
}
</script>

<style lang="scss" scoped>
/* Ваши стили */
</style>
