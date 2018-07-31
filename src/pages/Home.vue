<template>
  <section class="content">
     <section-header name="COMP1511 tue17-sitar and fri11-oboe"/>
     <article class="content-body">
        <p>Anything I've been over in a tutorial or lab or anything I think might be useful should appear here.</p><br>
        <p>If you've got a question please send me an email, or better yet ask it in class!
           This site is intended to support and complement the resources already provided on <a href="https://webcms3.cse.unsw.edu.au/">WebCMS3</a>.</p>
     </article>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'

export default {
  name: 'Home',
  components: { SectionHeader }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/article.less';

</style>
