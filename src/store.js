import { createStore } from 'redux'

const initialState = {
  agree: false,
  homes: []
}

export const AGREE = 'AGREE'
export const ADD_HOME = 'ADD_HOME'

function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_HOME: {
      const newHomes = [...state.homes, action.payload]
      const newState = {
        ...state,
        homes: newHomes
      }
      return newState
    }
    case AGREE: {
      const newState = {
        ...state,
        agree: true
      }
      return newState
    }
    default: {
      return state
    }
  }
}

export const store = createStore(
  reducer,
  initialState
)