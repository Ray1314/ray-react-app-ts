const defaultstate = {
    number: 1
}
function counter(state: any = defaultstate, action: any) {
    if (action.type === 'JIA') {
        state.number++
      return { ...state }
    } else if (action.type === 'JIAN') {
        state.number--
      return { ...state }
    } else {
      return state // In case an action is passed in we don't understand
    }
  }

  export default counter