const plans = document.querySelectorAll('.plan');

window.addEventListener('scroll',checkPlans);

function checkPlans(){
    const triggerBottom = window.innerHeight/20*19;
   plans.forEach((plan)=>{
       const planTop = plan.getBoundingClientRect().top;
       if(planTop<triggerBottom){
           plan.classList.add('show');
       }else{
           plan.classList.remove('show');
       }
   })
}
