type State = { 
    studentId: string,
    password: string,
    lastName: string,
    firstName: string,
    email: string,
    course: string, 
    section: string
}

type Action = {
    type: string;
    payload: string;
};

export const initialState: State = {
    studentId: '',
    password: '',
    lastName: '',
    firstName: '',
    email: '',
    course: '',
    section: '',
};

export const reducer = (state:State, action:Action) => {
    switch(action.type){
        case action.type:
            return {...state, [action.type]: action.payload}
        default: 
            return state;
    }
}