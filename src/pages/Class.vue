<template lang="html">
   <section class="labs">
      <section-header name="Tutorials"/>
      <h3>{{ this.meta.description }}</h3>
      <section class="lab-cards">
         <card v-for="(lab, index) in labs"
         :link="lab.path"
         :meta="lab.meta"
         :number="index"
         :key="lab.path"/>
      </section>
   </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { getJSON } from '@/helpers'

export default {
   components: { SectionHeader, Card },

   data() {
      return {
         labs: [],
         meta: {}
      }
   },

   beforeMount() {
      getJSON(`comp1511/index.json`)
         .then(({ weeks, meta }) => {
            this.labs = weeks.map(week => ({ path: week, meta: {} }))
            this.meta = meta
         })
         .then(() => {
            this.labs.forEach(lab => {
               getJSON(`comp1511/${lab.path}/index.json`)
                  .then((labJSON) => {
                     lab.meta = labJSON.meta
                  })
            })
         })
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';

.lab-cards {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}

</style>
