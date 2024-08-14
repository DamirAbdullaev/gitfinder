<template>
  <div>
    <nav-bar />
    <search-module />
    <user-info-module v-if="user" />
    <sort-repos v-if="user" />
    <repos-name v-if="user && activeButton == 'name'" />
    <repos-stars v-if="user && activeButton == 'stars'" />
    <repos-date v-if="user && activeButton == 'date'" />

    <div v-else-if="name && !user" class="loader__box">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ReposName from './components/ReposName.vue'
import SearchModule from './components/SearchModule.vue'
import SortRepos from './components/SortRepos.vue'
import UserInfoModule from './components/UserInfoModule.vue'
import ReposStars from './components/ReposStars.vue'
import ReposDate from './components/ReposDate.vue'

import { mapState } from 'vuex'


  export default {
    components: { NavBar, SearchModule, UserInfoModule, SortRepos, ReposName, ReposStars, ReposDate },

    computed: {
      ...mapState(['user']),
      ...mapState(['name']),
      ...mapState(['activeButton']),
    }
  }
</script>

