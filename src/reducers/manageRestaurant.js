import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const rest = {text: action.text, id: cuid()}
      return {...state, restaurants: [...state.restaurants, rest]}
    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id)}
    default:
      return state
  }
}
