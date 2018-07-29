<template lang="html">
   <section class="labs">
      <section-header name='Notes'/>
      <article v-html="marked(note)" v-if='notes.length' v-for="note in notes">
      </article>
   </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { getJSON, getFile } from '@/helpers'
import marked from 'marked'

export default {
   name: 'Notes',
   components: { SectionHeader },
   data() {
      return {
         notes: []
      }
   },

   created() {
      const baseURL = 'comp1511/notes'
      getJSON(`${baseURL}/index.json`)
      .then(({ files }) => Promise.all(
         files.map(file => getFile(`${baseURL}/${file.name}`)))
      )
      .then(files => {
         this.notes = files
      })
   },

   methods: {
      marked
   }
}
</script>

<style lang="css" scoped>

article {
   text-align: left;
}

</style>
