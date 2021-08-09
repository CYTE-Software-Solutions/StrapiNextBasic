import axios from 'axios'

export default function (context) {
  return axios
    .get(context.env.apiUrl)
    .then((response) => {
      // eslint-disable-next-line no-console
      context.store.commit('SET_STATE', response.data)
      context.store.commit('SET_REQ', response.status)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('API Error: ' + error)
    })
}
