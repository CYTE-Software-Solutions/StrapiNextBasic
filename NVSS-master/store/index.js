export const state = () => ({
  webApp: null,
  req: null,
})

export const mutations = {
  SET_STATE(state, payload) {
    state.webApp = payload
  },
  SET_REQ(state, payload) {
    state.req = payload
  },
}

export const getters = {}

export const actions = {}
