<template>
  <v-app id="inspire" :dark="false">
    <v-app-bar
      class="px-3"
      density="compact"
      flat
    >
      <v-spacer></v-spacer>
      <v-tabs centered>
        <v-tab
          v-for="link in links"
          :key="link"
          :text="link.name"
          :to="link.to"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container
        fluid
      >
        <v-row
          style="min-height: 69vh;"
        >
          <v-col
            cols="12" 
            md="8"
            class="mx-auto"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  <Footer></Footer>
</v-app>
</template>

<script setup>
  import Footer from '@/components/footer.vue'

  const links = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Search',
      to: '/search'
    },
    {
      name: 'Register',
      to: '/register'
    }
  ]
  
</script>
