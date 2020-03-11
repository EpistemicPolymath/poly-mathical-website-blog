<template>
  <article>
    <h1>{{ writing.slug }}</h1>
    <div>{{ writing.default }}</div>
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
