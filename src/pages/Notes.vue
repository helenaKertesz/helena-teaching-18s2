<template lang="html">
   <section class="labs blog">
      <section-header name='Notes'/>
      <article class="blog-content" v-html="marked(note)"
         v-if='notes.length' v-for="note in notes">
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
      .then(Prism.highlightAll)
   },

   methods: {
      marked
   }
}
</script>

<style lang="less" scoped>
@import '../assets/blog.less';

</style>
