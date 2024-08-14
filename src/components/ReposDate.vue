<template>
    <div class="repos container">
        <div class="repos__box">
            <div v-for="repo in sortedRepositories" :key="repo.id" class="repos__box_item">
                <div class="repos__box_item-desc">
                    <h2>{{ repo.name }}</h2>
                    <p>Кол-во звёзд: {{ repo.stargazers_count }}</p>
                    <p>Дата добавления: {{ repo.formattedDate }}</p>
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
                return [...this.repositories].map(repo => {
                    let date = repo.created_at.split('T')[0];
                    return { ...repo, formattedDate: date };
                }).sort((a, b) => {
                    const dateA = new Date(a.formattedDate);
                    const dateB = new Date(b.formattedDate);
                    return dateB - dateA;
                });
            }
            return [];
        },
    }
}
</script>
