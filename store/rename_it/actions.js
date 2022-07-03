import brands from '@/apollo/queries/brands.gql'
import { GET_BRANDS, SET_BRANDS } from '@/store/types'
export default {
  //  !EXAMPLE OF AN ACTIONS
  [GET_BRANDS]({ commit, dispatch }, payload) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: brands,
        })
        .then((resp) => {
          commit(SET_BRANDS, resp.data.brands.nodes)
          resolve(resp.data.brands.nodes)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
}
