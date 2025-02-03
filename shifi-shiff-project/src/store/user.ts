
export type User = {
    id :number|null,
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
        case 'CREATE':{
            const {id,firstName,lastName,password,email,addres,phone}= action.data as Partial<User>
            
            return {
                id:id??null,
                firstName : firstName || '',
                lastName: lastName||'',
                password: password || '',
                email:email||'',
                addres:addres||'',
                phone:phone||''
                
            }}

        case 'UPDATE':
            
            return {
                ...state,
                id: action.data.id !== undefined ? action.data.id : state.id,
                firstName:state.firstName,
                lastName: action.data.lastName || state.lastName,
                password :state.password,
                email: action.data.email || state.email,
                addres: action.data.addres || state.addres,
                phone: action.data.phone || state.phone,
               
            }
        default:
            return state

    }

}


