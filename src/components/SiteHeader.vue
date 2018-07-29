<template lang='html'>
  <header>
     <nav>
        <h1 class="logo">
           <router-link :to="{ name: 'Home'}">18s2</router-link>
        </h1>
        <ul class="nav">
           <li v-for="link in links" :key="link.title">
             <router-link :to="{ name: link.component }">
                {{ link.title }}
             </router-link>
           </li>
        </ul>
     </nav>
  </header>
</template>

<script>
export default {
   data() {
      return {
         links: [
            {
               title: 'COMP1511',
               link: 'comp1511',
               component: 'Class'
            },
            {
               title: 'Notes',
               link: 'notes',
               component: 'Notes'
            }
         ]
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';

header {
  display: flex;
  flex-direction: row;
  background-color: @primary-color-dark;
  color: @base-text;
}

nav {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: @primary-color;
  margin-top: 8px;
  height: 70px;
}

a {
   text-decoration: none;
   color: @base-text;
}

.logo {
   padding: 0px 20px;
   width: 20%;
}

.nav {
   width: 80%;
   display: flex;
   justify-content: flex-end;
}

ul {
   font-weight: 600;
   list-style-type: none;
}

li {
   padding: 10px;
   margin: 0 5px;
   display: inline-block;
}

a:hover {
   color: @border;
}

</style>
