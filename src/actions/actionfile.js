
export function wishlist(){
    return{
        type:'WISHLIST',
        payload:''
    }
}

export function wishlist_add(obj){
    //console.log(output,'inside action file')
    return{
        type:'WISHLIST_ADD',
        payload:obj
    }
}

export function wishlist_delete(wishlist){
    
    return{
        type:'WISHLIST_DELETE',
        payload:wishlist
    }
}
