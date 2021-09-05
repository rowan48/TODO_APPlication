<template>
  <div id="app">
    <todoapp></todoapp>
  </div>
</template>

<script>
  import todoapp from './components/todoapp.vue'
  export default {
    name: 'App',
    components: {
      todoapp
    }  
  }
</script>