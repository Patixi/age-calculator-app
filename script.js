
const form = document.querySelector(".form__conteiner");
const day = document.getElementById("input__day");
const month = document.getElementById("input__month");
const year = document.getElementById("input__year");

//constants for set today´s date:
const today = new Date();
const actualYear = today.getFullYear();
const actualMonth = today.getMonth()+1;
const actualDay = today.getDate();



function validateFields(e){
    e.preventDefault();     
if(day.value < 1 || day.value > 31 || month.value <1 || month.value > 12|| 
    year.value <1900 || year.value >2023) 
    {  
        document.querySelector(".text-alert").innerText="Please, enter a valid date.";     
} 
else if ( day.value >30 && (month.value == 2 ||month.value == 4|| month.value == 6|| month.value == 8|| 
    month.value == 9|| month.value == 11)){  
    
    document.querySelector(".text-alert").innerText="This date doesn´t exist";     
}
else if (actualDay < parseInt(day.value)){
    document.getElementById("result__day-number").innerHTML =  parseInt(day.value)-actualDay;
    document.getElementById("result__month-number").innerHTML = actualMonth - parseInt(month.value)-1;
    document.getElementById("result__year-number").innerHTML = actualYear - parseInt(year.value);
    form.reset(); 
    document.querySelector(".text-alert").innerText=""; 
}
else {
   document.getElementById("result__day-number").innerHTML = actualDay - parseInt(day.value);
   document.getElementById("result__month-number").innerHTML = actualMonth - parseInt(month.value);
   document.getElementById("result__year-number").innerHTML = actualYear - parseInt(year.value);
   form.reset(); 
   document.querySelector(".text-alert").innerText=""; 
    }
};


form.addEventListener("submit",(validateFields));


