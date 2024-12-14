
export type User = {
    firstName: string,
    lastName:string,
    email:string,
    password:string,
    addres: string,
    phone:string
}

type Action ={
    type: 'CREATE'|'UPDATE'|'GET'|'REMOVE',
    data: Partial<User>
}


export const userReducer=(state:User, action:Action) :User =>{

    switch(action.type){
        case 'CREATE':
            const {firstName,password}= action.data as Partial<User>
            return {
                firstName : firstName || '',
                lastName: '',
                password: password || '',
                email:'',
                addres:'',
                phone:''
                
            }
        // case 'GET':
        //     return {
        //         // firstName:state.firstName,
        //         // lastName: state.lastName,
        //         // password : state.password,
        //         // email: state.email,
        //         // addres: state.addres,
        //         // phone: state.phone
        //         ...state

        //     }
        case 'UPDATE':
            return {
                firstName:state.firstName,
                lastName: action.data.lastName || state.lastName,
                password :state.password,
                email: action.data.email || state.email,
                addres: action.data.addres || state.addres,
                phone: action.data.phone || state.phone,
                // ...state,
                // ...action.data

            }
        default:
            return state

    }

}


