<template>
  <div class="container">
    <div class="sort">
      <h2>Сортировка</h2>

      <div class="sort__repos">
        <button
          :class="{ active: activeButton === 'name' }"
          @click="setActiveButton('name')"
        >
          ИМЯ
        </button>
        <button
          :class="{ active: activeButton === 'stars' }"
          @click="setActiveButton('stars')"
        >
          ЗВЕЗДЫ
        </button>
        <button
          :class="{ active: activeButton === 'date' }"
          @click="setActiveButton('date')"
        >
          ДАТА
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['activeButton']), // Подключаем activeButton из Vuex
  },
  methods: {
    ...mapMutations(['setActiveButton']), // Подключаем мутацию setActiveButton

    setActiveButton(button) {
      this.$store.commit('setActiveButton', button); // Используем мутацию для изменения значения
    }
  }
}
</script>
