const correct= ['B','B','B','B'];
const form= document.querySelector('.quiz-form');
const result=document.querySelector('.result')
form.addEventListener('submit',e =>{
    e.preventDefault();

    let score=0;
    const change=[form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    
    change.forEach((answers,index) =>{
        if(answers==correct[index])
        {
            score +=25;
        }
    });
    //console.log(score);
    scrollTo(0,0)   //it is a window object that scrolls the page up tp the top.
    result.querySelector('span').textContent = ` ${score}%`;
    //result.classList.remove('d-none');

    let output=0;
    const timer= setInterval(()=> {
        result.querySelector('span').textContent = ` ${output}%`;
        if(output==score)
         {clearInterval();
         }
         else{
             output++;
         }

    },10);
});