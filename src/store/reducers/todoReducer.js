const initialState = {
    todos: [
      {
        id: 1,
        title: "Contoh Data 1",
        completed: false
      },
      {
        id: 2,
        title: "Contoh Data 2",
        completed: false
      }
    ]
  }
  const todoReducer = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type){
      case "ADD":
        return {
          ...state,
          todos: [...state.todos,payload]
        }
      case "DEL":
        console.log(payload.id);
        return{
          ...state,
          todos: state.todos.filter(todo => todo.id !== payload)
        }
      default:
        return {
          ...state
        }
    }
  }

  export default todoReducer