import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    repositories: JSON.parse(localStorage.getItem('repositories')) || null,
    name: localStorage.getItem('name') || '',
    activeButton: localStorage.getItem('activeButton') || 'name',
  },
  getters: {
    name: state => state.name,
    activeButton: state => state.activeButton,
  },
  mutations: {
    getUser(state, payload) {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));  // Сохраняем в localStorage
    },

    getRepositories(state, payload) {
      state.repositories = payload;
      localStorage.setItem('repositories', JSON.stringify(payload));  // Сохраняем в localStorage
    },

    setName(state, payload) {
      state.name = payload;
      localStorage.setItem('name', payload);  // Сохраняем в localStorage
    },

    setActiveButton(state, payload) {
      state.activeButton = payload;
      localStorage.setItem('activeButton', payload);  // Сохраняем в localStorage
    }
  },

  actions: {
    async getUser(context, name) {
      try {
        let response = await axios.get(`https://api.github.com/users/${name}`);

        if (response.data) {
          let response2 = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5`);
          context.commit('getRepositories', response2.data);
        }

        context.commit('getUser', response.data);
        context.commit('setName', name);

      } catch (error) {
        console.error('error');
        alert('Такого пользователя не существует. Попробуйте ввести существующее имя пользователя.');
      }
    }
  }
})
