const form = document.querySelector('form');

// form.addEventListener('click', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('submit', (event)=>{
//     console.log("Form Submit");
// })

form.addEventListener('submit',(event)=>{

    event.preventDefault();

    const data = new FormData(form);
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));


    // for(let key of data.entries())
    //     console.log(key);

    for(let [key,value] of data.entries())
        console.log(key,value);


    // const fname = document.getElementById("fname");
    // console.log(fname.value);

    // const lname = document.getElementById("lname");
    // console.log(lname.value);
    
    // const email = document.getElementById("email");
    // console.log(email.value);

    // const Age = document.getElementById("Age");
    // console.log(Age.value);
    
    // const contact = document.getElementById("contact");
    // console.log(contact.value);


    // const result = document.getElementById('result');
    // result.innerText = `${fname.value} ${lname.value} is a good boy`
    
    // document.body.append(result);
})