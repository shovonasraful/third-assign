function validemail(email){

        if(typeof email !=='string'){
            return "invalid";
        }
        

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);

    if(emailPattern.test(email)){
            return true;
    }
    else{
        return 'invaild';
    }
}
const valid =validemail(23232);
console.log(valid);