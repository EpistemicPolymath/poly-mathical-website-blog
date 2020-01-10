// Integrated Vuex store to collect blog posts.
// State
export const state = () => ({
  writings: []
})

// Mutations
export const mutations = {
  setWritings(state, list) {
    state.writings = list
  }
}

// Actions
export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      '~/assets/content/writings/',
      false,
      /\.md$/
    )
    const writings = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -3)
      return res
    })
    await commit('setWritings', writings)
  }
}
