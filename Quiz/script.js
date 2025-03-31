// const original_answer =["Sachin Tendulkar","West Indies","Sachin Tendulkar"]

const original_answer ={
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar"}

const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    
    event.preventDefault()

    const data = new FormData(form)

    let result =0
    for(let[key,value]of data.entries()){
        if(value===original_answer[key])
            result++;
    }

    // const answer = Array.from(data.values());

    // let result =0;
    // for(let i=0; i<answer.length; i++){
    //     if (answer[i]===original_answer[i])
    //         result++;
    // }
    
    const out = document.getElementById('out');
    out.innerText=`${result} Out Of 3 is Correct`;

    // document.getElementById('container').append(out);
})