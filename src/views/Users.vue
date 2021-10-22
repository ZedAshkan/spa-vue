<template>

    <h1 class="mb-3 mx-5">users :</h1>
<div class="container" v-if="show">
    <div class="daf">
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
</div>
  <div v-else class="container">
    <div class="row g-3">
      <div v-for="user in users" :key="user.id" class="col-md-4">
        <user-card :user="user" />
      </div>
    </div>

    <p class="my-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam neque
      saepe distinctio aspernatur! Porro velit necessitatibus possimus excepturi
      voluptas optio fugiat culpa quidem hic quas magnam, et repellat? Minus?
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import UserCard from "@/components/UserCard.vue";
export default {
  name: "VUsers",
  components: {
    UserCard,
  },
  setup() {
    const users = ref([]);
    const show = ref(true);

    function GetUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          show.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    GetUsers();

    return { users, show };
  },
};
</script>

<style>
.daf{
  text-align: center;
  margin-top: 300px; ;
}
</style>