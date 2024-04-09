<template>
  <!-- Parte de pesquisar -->
  <div v-if="editBln == false"> 
    <v-text-field
      clearable
      label="Search by title"
      prepend-icon="mdi-magnify"
      variant="underlined"
      v-model="search">
    </v-text-field>
  </div>
  <div v-else>
    <v-text-field
      clearable
      prepend-icon="mdi-magnify"
      variant="underlined"
      v-model="edit"
      append-icon="mdi-text-box-edit"
      @click:append="editTask()">
    </v-text-field>
  </div>
  <!-- Fim da parte de pesquisar -->

    <v-card>
        <v-list
          lines="two">
          <v-list-item
            v-for="(item, index) in filteredList"
            :key="index">
            <strong>
              {{ item.title }}
            </strong></br>
            {{ item.text }}
            <v-icon
              icon="mdi-text-box-edit"
              end
              @click="showTask(index)">
            </v-icon>
            <v-icon
              icon="mdi-trash-can"
              end
              @click="deleteTask(index)">
            </v-icon>
          </v-list-item>
        </v-list>
    </v-card>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  
  const search = ref('')
  const edit = ref('')

  const idEdit = ref()
  const editBln = ref(false)


  const filteredList = computed(() => {
    return store.getUsers.filter(item => item.title
      .normalize('NFD').replace(/[\u0300-\u036f]|-/g, "").toLowerCase()
    .startsWith(search.value
      .normalize('NFD').replace(/[\u0300-\u036f]|-/g, "").toLowerCase()))
  });

  const showTask = (index) => {
    editBln.value = !editBln.value;

    edit.value = store.getUsers[index].text;
    idEdit.value = index;
  }

  const editTask = () => {
    store.setText(idEdit.value, edit.value);

    idEdit.value = null;
    editBln.value = !editBln.value;
  }

  const deleteTask = (index) => {
    store.delete(index);
    console.log(store.getUsers.value);

    idEdit.value = null;
    editBln.value = false;
  }
</script>