const isInvalid = (key,val) => {
    if(!val){
        return 'Поле не может оставаться пустым'
    }
    switch(key){
        case "name":
            if(val.length > 20){
                return 'Ваше имя не может быть длинее 20 символов'
            }
            return null;
        case "phone":
                const onlyNum = val.replace(/\D/g, '');    
                if (onlyNum.length !== 12) {
                    return 'Неверный формат телефона: +xx(xхх) ххх хх хх'
                }
            return null;
        default:
            return null;    
    }

}

export default isInvalid;