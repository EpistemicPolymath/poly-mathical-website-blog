<template>
  <article>
    <h1>{{ blogPost.title }}</h1>
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { writing: payload }
    else
      return {
        writing: await require(`~/assets/content/writings/${params.writing}.json`)
      }
  }
}
</script>

<style></style>
