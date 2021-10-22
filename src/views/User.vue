<template>
  <div class="container">

    <div v-show="err">
      مشکلی در اتصال پیش آمده لطفا بعدا تلاش کنید
    </div>

    <div class="daf" v-if="show">
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="row mt-4">
    <h1 class="mb-3">
      <i class="bi bi-person-square"></i> {{ users[id].name }}
    </h1>
      <div class="col">
        <div class="card">
          <div class="card-header">
            <i class="bi bi-person-circle"></i> UserName :
            {{ users[id].username }} --
            <i class="bi bi-calendar"></i> UserCounter :
            {{ users[id].id }}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="bi bi-envelope-open-fill"></i> {{ users[id].email }}
            </li>
            <li class="list-group-item">
              <i class="bi bi-geo-alt"></i> {{ users[id].address.street }},
              {{ users[id].address.suite }}, {{ users[id].address.city }},
              {{ users[id].address.zipcode }}
            </li>
            <li class="list-group-item">
              <i class="bi bi-phone"></i> {{ users[id].phone }}
            </li>
            <li class="list-group-item">
              <i class="bi bi-globe"></i> {{ users[id].website }}
            </li>
            <li class="list-group-item">
              <i class="bi bi-building"></i> {{ users[id].company.name }},
              {{ users[id].company.catchPhrase }},
              {{ users[id].company.bs }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-link class="btn btn-danger mt-5 ms-5" to="/users"
      >back to users</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const id = route.params.id - 1;

    const users = ref([]);

    const show = ref(true)

    const err = ref(false)

    function GetUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          show.value = false
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          err.value = true;
        })
        .then(function () {
          // always executed
        });
    }
    GetUsers();
    return { users, id ,show ,err};
  },
};
</script>

<style>
.daf{
  text-align: center;
  margin-top: 250px; ;
}
</style>