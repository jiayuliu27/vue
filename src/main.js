import Vue from 'vue'
import Navbar from './components/Navbar'
import router from './router'
/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <Navbar />
    <section class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    Navbar
  }
}).$mount('#app')
