<template>
  <v-footer
    class="flex-column text-center"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon.icon"
        :href="icon.to"
        target="_blank"
        class="mx-5 mb-2"
      ></v-btn>
    </div>
    <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut explicabo illo quidem repudiandae soluta magni voluptate pariatur nesciunt sapiente alias inventore corporis nostrum, voluptatibus ullam a mollitia architecto. Sint, tempora.
    </div>
    <div>
        {{ new Date().getFullYear() }} - <strong>UNEMAT</strong>
    </div>
  </v-footer>
</template>

<script setup>
const icons = [
  {
    icon: 'mdi-facebook',
    to: 'https://www.facebook.com/'
  },
  {
    icon: 'mdi-twitter',
    to: 'https://www.twitter.com/'
  },
  {
    icon: 'mdi-linkedin',
    to: 'https://www.linkedin.com/'
  },
  {
    icon: 'mdi-instagram',
    to: 'https://www.instagram.com/'
  }
]
</script>