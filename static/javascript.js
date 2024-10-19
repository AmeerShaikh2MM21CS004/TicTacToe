let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true; //playerX or playerO
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0==true){ //playerX
            box.innerText="X";
            box.style.color="#382559";
            turn0=false;
        }
        else{            //playerO
            box.innerText="O";
            box.style.color="#6B4ABC";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let iswinner=checkwinner();

        if(count==9 && !iswinner){
            gameDraw();

        }
    })
});

const disableBoxs=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const gameDraw=()=>{
    msg.innerText=`Game was Draw!!`;
    msgContainer.classList.remove("hide");
    disableBoxs();
    resetGame();
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxs();
}
const checkwinner=()=>{
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                count=0;
                return true;
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);