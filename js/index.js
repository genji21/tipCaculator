let percentItem = document.querySelectorAll('.bill-tip_item');
let  tipResult = document.querySelector('.box-result_tip .tip');
let personResult = document.querySelector('.box-result_tip .total')
let numberPeople = document.querySelector('.bill-people_input input')
let billValue = document.querySelector('.bill-user_type');
let inputCustom = document.querySelector('.bill-custom');
let btnReset = document.querySelector('.box-reuslt_button')
percentItem = Array.from(percentItem)
percentItem.forEach((item,index)=>{
    item.addEventListener('click',function(){
    if(document.querySelector('.bill-tip_item.active') !== null) {
 document.querySelector('.bill-tip_item.active').classList.remove('active')
    
    }
    inputCustom.style.background = "none"
       this.classList.add('active')
       displayResult()
    }
    )
})
function displayResult(){
    let percentTip = document.querySelector('.bill-tip_item.active').getAttribute('data-percent')
    let numberPeople = document.querySelector('.bill-people_input input')
    let billValue = document.querySelector('.bill-user_type');
    numberPeople= Number(numberPeople.value)
    billValue = Number(billValue.value)
    percentTip = Number(percentTip)
    if(numberPeople === 0 ) {
    }
    else if (numberPeople !== 0) {
        let result = (billValue * percentTip / 100)
        tipResult.innerHTML = result.toFixed()
        personResult.innerHTML = (result / numberPeople)
        btnReset.childNodes[1].disabled = false
        console.log(btnReset.childNodes[1])
    }
};
numberPeople.addEventListener('input',function(){
     displayResult()
 })
 billValue.addEventListener('input',function(){
     displayResult()  
 })
 inputCustom.addEventListener('input',function(){
    this.parentNode.setAttribute('data-percent',this.value)
    this.style.background = "hsl(172, 67%, 45%)"

    displayResult()
 })
 inputCustom.addEventListener('blur',function(){
  inputCustom.value = inputCustom.value
 })
 btnReset.addEventListener('click',function(e){
    e.preventDefault();

    if(document.querySelector('.bill-tip_item.active') !== null) {
        document.querySelector('.bill-tip_item.active').classList.remove('active')
    }
    inputCustom.value = 'Custom'
    inputCustom.style.background='none'
    tipResult.innerHTML = '0'
    personResult.innerHTML = '0'
    billValue.value= '0'
    numberPeople.value = '0'
 })
