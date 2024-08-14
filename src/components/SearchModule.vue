<template>
    <div class="container">
        <form  @submit.prevent="getUser(name)"  class="search__module">
            <input v-model="name" type="text" placeholder="Введите имя пользователя">
            <button>НАЙТИ</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                name: '',
            }
        },

        methods: {
            ...mapActions(['getUser']),
            async handleSubmit() {
            await this.getUser(this.name);
            }
        },

        computed: {
            name: {
                get() {
                    return this.$store.getters.name;
                },

                set(value) {
                    this.$store.commit('setName', value);
                }
            }
        },
    }
</script>