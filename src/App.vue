<template>
  <div id="app" class="bg-gray-200 dark_bg-gray-900 p-4 min-h-screen">
    <mj-card class="my-4 p-4 sticky top-[20px] z-10 ml-auto flex items-center justify-between gap-4">
      <nav class="flex-1 flex items-center gap-4">
        <mj-text tag="router-link" :to="{ name: 'Forms' }" class="text-xs font-bold">Formulaires</mj-text>
        <mj-text tag="router-link" :to="{ name: 'Utilities' }" class="text-xs font-bold">Utilitaires</mj-text>
        <mj-text tag="router-link" :to="{ name: 'Programmatic' }" class="text-xs font-bold">Programmatic</mj-text>
        <mj-text tag="router-link" :to="{ name: 'Cards' }" class="text-xs font-bold">Boites MJ-FLEET</mj-text>
        <mj-user-avatar class="w-11 h-11" />
      </nav>
    </mj-card>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDark: false
    };
  },
  mounted() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDark = false;
      document.documentElement.classList.remove('dark');
    }
  },
  methods: {
    setTheme(theme) {
      localStorage.theme = theme;
      if (theme === 'dark') {
        this.isDark = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDark = false;
        document.documentElement.classList.remove('dark');
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:300,400,500,600,700,800&display=swap');
@import './styles/style.css';
</style>
