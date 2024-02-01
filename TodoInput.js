import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
      
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="head1">

        <form id="new-task-form">
      <input
        type="text"
        className="input-box-todo"
        id="new-task-input"
        placeholder="Task name" 
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />

      <input
              type="submit"
              onClick={(e)=>{ e.preventDefault(); if(inputText=='')
              {
                alert("Task field is empty");
              }
                props.addList(inputText)
                setInputText("") 
              }}
              id="new-task-submit"
              value="Add" />
            </form>
    </div>
  );
}

export default TodoInput;
