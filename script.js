const boxes =document.querySelectorAll(".box");
    const resetbtn=document.querySelector("#resetbtn");
   let turnO=true;//player X, player O
   const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   ];
   boxes.forEach((btn)=>
  {
    btn.addEventListener("click",()=>
  {
    console.log("box is clicked");
    if(turnO){
      btn.innerText="O";
      turnO=false;
    }
    else{
      btn.innerText="X";
      turnO=true;
    }
    btn.disabled=true;
    checkpattern();

  });
  });
  const checkpattern=()=>{
       for(let i=0;i<winpattern.length;i++){
        const [a,b,c]=winpattern[i];
        const A=boxes[a].innerText;
         const B =boxes[b].innerText;
          const C=boxes[c].innerText;

          if (A!=="" && B !=="" && C!=="" && A===B && B===C )
          {
            alert(`congrats winner is ${A}`);
            gameActive=false;
          }
       }
  };
  let gameActive=true;
  boxes.forEach((btn,index)=>
{
  btn.addEventListener("click",()=>
{
  
  if(!gameActive) return;
});
});
resetbtn.addEventListener('click',()=>
{
  location.reload();
});
