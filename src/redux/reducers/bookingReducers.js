

const initialState = {
    bookingCreate:{data:null, isLoading:true, isRejected:false},

}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'CREATE_BOOKING_PEDING':
        return {...state, bookingCreate:{data:null, isLoading:true, isRejected:false}}
        case'CREATE_BOOKING_SUCCESS':
        return{...state, bookingCreate:{data:action.payload, isLoading:false, isRejected:false}}
        case'CREATE_BOOKING_REJECTED':
        return{...state, bookingCreate:{data:action.payload, isLoading:false, isRejected:true}}

       
        default: 
        return state
    }
}