<template>
    <div v-if="user" class="user__info container">
        <div class="user__info_module">
            <div class="user__info_module_img">
                <img :src="user.avatar_url" alt="avatar_url">
                <a target="_blank" :href="user.html_url">ПОСЕТИТЬ</a>
            </div>
            
            <div class="user__info_module_desc">
                <p>{{ user.login }}</p>
                <p>Репозиториев: <span>{{ user.public_repos }}</span></p>
                <p>Создан: <span>{{ getDate }}</span></p>
                <p>Подписщиков: <span>{{ mathRoung(user.followers) }}</span></p>
                <p>Подписок: <span>{{ mathRoung(user.following) }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        data() {
            return {
                
            }
        },

        computed: {
            ...mapState(['user']),

            getDate() {
                let date = this.user.created_at.split('T')
                return date[0] 
            },
        },

        methods: {
            mathRoung(num) {
                if (num >= 1_000_000) {
                    return `${Math.round(num / 1_000_000)}M`;
                } else if (num >= 1_000) {
                    return `${Math.round(num / 1_000)}k`;
                } else {
                    return num.toString();
                }
            }
        },

    }    
</script>
