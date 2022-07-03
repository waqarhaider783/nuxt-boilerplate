import { SET_BRANDS } from '@/store/types'

export default {
  //! EXAMPLE OF MUTATION
  [SET_BRANDS](state, brands) {
    state.brands = brands
  },
}
