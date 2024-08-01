export const taskInitialState = []

// This reducer provides ways to remove tasks from TaskList
export const taskReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case 'REMOVE_TASK' :{
            const { id } = actionPayload
            return state.filter(item => item.id != id)
        }
        case 'CLEAR_TASKS': {
            return taskInitialState
        }
    }
    return state
}
