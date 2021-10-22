<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="'/users/' + user.id">{{ user.name }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <i class="bi bi-envelope-fill"></i> {{ user.email }}
      </li>
      <li class="list-group-item">
        <i class="bi bi-telephone-fill"></i> {{ user.phone }}
      </li>
      <li class="list-group-item">
        <i class="bi bi-building"></i> {{ user.company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
</style>