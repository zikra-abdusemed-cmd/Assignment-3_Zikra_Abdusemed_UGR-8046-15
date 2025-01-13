
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('display');
    const button = Array.from(document.getElementsByClassName('btn'));
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let string="";
    let array=Array.from(button);
    array.forEach(button=>{
        button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=== '='){
                string=eval(string);
                input.value=string;
            }
        else if (e.target.innerHTML=== 'C'){
            string=''
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    });
});
})