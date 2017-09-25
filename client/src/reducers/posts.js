const posts = ( state = [], action ) => {
  switch(action.type) {
    // case 'POSTS':
    //   return action.posts;
    // case 'ADD_POST':
    //   return [ action.post, ...state ]
    // case 'UPDATE_POST':
    //   return state.map( post => {
    //     if(post.id === action.post.id)
    //       return action.post
    //     return post
    //   })
    // case 'DELETE_POST':
    //   return state.filter( post => post.id !== action.id)
    default:
      return state;
  }
}

export default posts;
