const questionBank = [
    {question : "1. Who Has the most century in international cricker?", 
        Options:["Sachin Tendulkar", "virat Kohli","Ricky Ponting", "Jacques Kallis"] , answer: "Sachin Tendulkar"},

    {
        question: "What is the main function's return type in C?",
        options: ["void", "int", "float", "char"],
        answer: "int"
      },
      {
        question: "Which symbol is used for comments in C?",
        options: ["//", "#", "/* */", "--"],
        answer: "/* */"
      },
      {
        question: "Which header file is required for printf() and scanf()?",
        options: ["stdlib.h", "stdio.h", "conio.h", "string.h"],
        answer: "stdio.h"
      },
      {
        question: "What is the correct format specifier for printing an integer in C?",
        options: ["%d", "%c", "%f", "%s"],
        answer: "%d"
      },
      {
        question: "Which operator is used for address-of in C?",
        options: ["*", "&", "%", "@"],
        answer: "&"
      },
      {
        question: "What is the size of int on a 32-bit system?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        answer: "4 bytes"
      },
      {
        question: "Which keyword is used to define a constant variable in C?",
        options: ["final", "const", "static", "define"],
        answer: "const"
      },
      {
        question: "Which function is used to allocate memory dynamically in C?",
        options: ["alloc()", "malloc()", "memory()", "calloc()"],
        answer: "malloc()"
      },
      {
        question: "Which of the following is NOT a loop structure in C?",
        options: ["for", "while", "do-while", "repeat-until"],
        answer: "repeat-until"
      },
      {
        question: "What is the output of 'printf(\"%d\", 5+2);' in C?",
        options: ["7", "5+2", "52", "Error"],
        answer: "7"
      },
      {
        question: "Which data type is used to store a single character in C?",
        options: ["char", "int", "float", "string"],
        answer: "char"
      },
      {
        question: "Which function is used to read a string input in C?",
        options: ["scanf()", "printf()", "gets()", "puts()"],
        answer: "gets()"
      },
      {
        question: "Which operator is used to access the value of a pointer variable?",
        options: ["*", "&", "->", "@"],
        answer: "*"
      },
      {
        question: "What does the sizeof operator return in C?",
        options: ["Memory address", "Number of elements", "Size in bytes", "Data type"],
        answer: "Size in bytes"
      },
      {
        question: "Which keyword is used to return a value from a function in C?",
        options: ["return", "break", "continue", "exit"],
        answer: "return"
      },
      {
        question: "What is the output of 'printf(\"%c\", 65);' in C?",
        options: ["A", "65", "Error", "a"],
        answer: "A"
      },
      {
        question: "Which loop executes at least once even if the condition is false?",
        options: ["for", "while", "do-while", "None"],
        answer: "do-while"
      },
      {
        question: "Which keyword is used for defining a structure in C?",
        options: ["struct", "class", "union", "typedef"],
        answer: "struct"
      },
      {
        question: "Which format specifier is used for floating-point numbers in C?",
        options: ["%d", "%c", "%f", "%s"],
        answer: "%f"
      },
      {
        question: "What will 'int x = 10/4;' store in x?",
        options: ["2.5", "3", "2", "Error"],
        answer: "2"
      }
];

// function RandomQuestion(){
//     // const data = new Set();

//     // while(data.size!=5){
//     //     const index = Math.floor(Math.random()*20);
//     //     data.add(questionBank[index]);
//     // }

//     // return [...data];
// }

// function RandomQuestion(){
//   questionBank.sort(()=> Math.random()-0.5);

//   return questionBank.slice(0.5);
// }

function RandomQuestion(){
const arr=[];
let length = questionBank.length;

for(let i=0; i<5; i++){
  const index= Math.floor(Math.random()*length);
  arr.push(questionBank[index]);

  [questionBank[index], questionBank[length-1]]= [questionBank[length-1], questionBank[index]]
  length--;
}

console.log[arr.length];
return arr;
}

const from = document.querySelector('form');

const problem = RandomQuestion();

const original_answer ={};


problem.forEach((obj,index)=>{
    const div_element = document.createElement('div');

    div_element.className ='question';
    original_answer[`q${index+1}`]=obj ['answer'];

    const para = document.createElement('p');
    para.textContent = `${index+1}. ${obj['question']}`;
    div_element.className ='question';



    obj['option'].forEach((data)=>{
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index+1}`;
        input.value = data;

        label.appendChild('input');
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));
    })

    form.appendChild(div_element);

})

const button= document.createElement('button');
button.type = 'submit'
button.className="submit-btn";
button.textContent = "submit";

form.appendChild(button);
