<template>
  <header style="padding: 20px; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between;">
    <div>LinguaLearn</div>
    <nav style="display: flex; gap: 15px;">
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-link to="/contact"><button>Get Started</button></router-link>
  </header>
</template>