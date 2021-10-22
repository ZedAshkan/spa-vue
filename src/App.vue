<template>
  <HeaderC />

  <router-view />
</template>

<script>
import HeaderC from "./components/HeaderC.vue";
export default {
  name: "App",
  components: {
    HeaderC,
  },
  setup() {
    return;
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

.router-link-active,
.router-link-exact-active {
  border-bottom: solid;
}
</style>
