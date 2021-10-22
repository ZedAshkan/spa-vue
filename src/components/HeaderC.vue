<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <h1>
            <i class="bi bi-telegram"></i>
          </h1>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/"
                ><i class="bi bi-house-fill"></i> Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users"
                ><i class="bi bi-person-bounding-box"></i> Users</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts"
                ><i class="bi bi-stickies"></i> Posts</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">
                <i class="bi bi-question-circle-fill"></i> About</router-link
              >
            </li>
          </ul>

          <div></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderC",
};
</script>

<style>
</style>