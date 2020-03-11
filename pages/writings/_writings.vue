<template>
  <article>
    <h1>{{ writing.title }}</h1>
    <!-- <div>{{ writing.body }}</div> -->
    <div v-html="$md.render(writing.body)" />
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { writing: payload }
    else
      return {
        writing: await require(`~/assets/content/writings/${params.writings}.md`)
      }
  }
}
</script>

<style></style>
