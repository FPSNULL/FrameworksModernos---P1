<template>
  <v-form @submit.prevent>
    <v-card>
      <v-container>
        <v-text-field
          v-model="title"
          label="Title"
          variant="underlined"
          :rules="rules">
        </v-text-field>

        <v-text-field
          v-model="text"
          label="Text"
          variant="underlined"
          :rules="rules">
        </v-text-field>
      </v-container>

      <v-card-actions>
        <v-btn
          @click="saveTask()"
          color="success"
          :disabled="disable"
          to="/search">
          Add task
          <v-icon
            icon="mdi-chevron-right"
            end>
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
  
<script setup>
  import { ref, computed } from 'vue'
  import { useAppStore } from '@/stores/app'
    
  const title = ref('')
  const text = ref('')
  const store = useAppStore()

  const saveTask = () => {
    store.addUser({
      title: title.value,
      text: text.value,
    });
    title.value = null;
    text.value = null;
  }

  const rules = [
    (v) => (!!v) || 'Input empty',
    (v) => (v.length > 2) || 'Min 3 caracteres'
  ]

  const disable = computed(() => {
    return !title.value || !text.value;
  });
</script>