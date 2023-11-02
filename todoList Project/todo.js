let todoList =[
    {item:'Satish ',
    duedate:'9/10/2023 '}
];
displayItem();

function addTodo(){
    let inputElement =document.querySelector('#todo-input');
    let dateElement =document.querySelector('#todo-date');
    let todoItem =inputElement.value;
    let tododate =dateElement.value;
   todoList.push({item:todoItem,duedate:tododate});
   inputElement.value ='';
   dateElement.value= '';

   
   displayItem();
}

function displayItem(){
    let containerElement =document.querySelector('.todo-container');
    let newhtml='';
    for(let i=0;i<todoList.length;i++){
    //    let Item =todoList[i].item;
    //    let dueDate =todoList[i].duedate;
       let {item, duedate} = todoList[i];
        newhtml += `
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1); displayItem();">Delete</button>
        `;    
        
    }
    containerElement.innerHTML =newhtml;
}