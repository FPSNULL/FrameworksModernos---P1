import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    users : [],
  }),
  getters: {
    getUsers() {
      return this.users;
    }
  },
  actions: {
    addUser(user){
      this.users.push(user);
    },
    setText(index, text) {
      this.users[index].text = text;
    },
    delete(index) {
      this.users.splice(index, 1);
    }
  },
})
