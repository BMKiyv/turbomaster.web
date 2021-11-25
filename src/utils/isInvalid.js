const isInvalid = (key,val) => {
    if(!val){
        return 'Поле не може лишатися пустим'
    }
    switch(key){
        case "name":
            if(val.length > 20){
                return 'Ваше ім`я не може бути довше 20 символів'
            }
            return null;
        case "phone":
                const onlyNum = val.replace(/\D/g, '');    
                if (onlyNum.length !== 12) {
                    return 'Невірний формат телефона: +xx(xхх) ххх хх хх'
                }
            return null;
        default:
            return null;    
    }

}

export default isInvalid;