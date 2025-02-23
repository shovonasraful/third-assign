function bestfriends(friend1,friend2){
    
        if(friend1.bestfriend===friend2.roll && friend2.bestfriend===friend1.roll){
                return true;
        }
        else{
            return false;
        }

}

        const farhad = {   
            name:'farhad',
            roll:20,
            bestfriend:22,

        }
        const shovon ={
            name:'shovon',
            roll:22,
            bestfriend:20,
        }



const result= bestfriends(shovon,farhad);
console.log('are they bestfriends?',result);