let score=Number(localStorage.getItem('score'))||0;
document.querySelector('.sc').innerHTML = "score: " + score;

    function player(choice){
        let result="";
        computer();
        if(choice===`Rock`){
            if(computermove===`Rock`){
                result=`tie`;
            }
            else if(computermove===`Paper`){
                result=`lose`;
            }
            else if(computermove===`scissors`){
                result=`win`;
            }
        }
        else if(choice===`Paper`){
            if(computermove===`Rock`){
                result=`win`;
            }
            else if(computermove===`Paper`){
                result=`tie`;
            }
            else if(computermove===`scissors`){
                result=`lose`;
            }
        }
        else if(choice===`scissors`){
            if(computermove===`Rock`){
                result=`lose`;
            }
            else if(computermove===`Paper`){
                result=`win`;
            }
            else if(computermove===`scissors`){
                result=`tie`;
            }
        }
         
        if(result===`win`){
            score++;
        }
        localStorage.setItem("score",score);
        
        

        document.querySelector('.player').innerHTML="Your Choice: "+choice;
        document.querySelector('.computer').innerHTML="Computer Choice: "+computermove;
        document.querySelector('.res').innerHTML="Result: you "+result;
        document.querySelector('.sc').innerHTML="score: "+score;
        

    }
   
       
        
    
    let computermove="";
    function computer(){
        const num=Math.random();
        
        if(num>=0 && num<1/3){
            computermove=`Rock`;
        }
        else if(num>=1/3&& num<2/3){
            computermove=`Paper`;
        }
        else if(num>=2/3 && num<1){
            computermove=`scissors`;
        }
        
        
    }
    function reset(){
        score=0;
        localStorage.setItem("score", score);
        computermove="";
        
        document.querySelector('.sc').innerHTML="score:"+score;
         document.querySelector('.player').innerHTML="";
        document.querySelector('.computer').innerHTML="";
        document.querySelector('.res').innerHTML="";
        
    }