<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" exact to="/" active-class="active">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/cars" active-class="active">
              <a class="nav-link">Cars</a>
            </router-link>

            <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
              <a class="nav-link">Cars 3</a>
            </router-link>

            <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
              <a class="nav-link">Cars 4</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>