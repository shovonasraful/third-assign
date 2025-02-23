function electionresult(votecount){
        let mango=0;
        let banana=0;
        for(let i=0;i<votecount.length;i++){
            
            if(votecount[i]==='mango'){
                mango++;
            }
            else if(votecount[i]==='banana'){
                banana++;
            }
        }
        if(mango>banana){
            return 'mango is the winner';
        }
        else{
            return' banana is the winner';
        }
        
    
}
const result =electionresult(["mango", "banana",'mango','mango']);
console.log(result);