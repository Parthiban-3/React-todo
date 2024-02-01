import React from 'react'

function Todolist(props) {
  return (
    <li className="task">
        <div class="content">
						<input 
							type="text" 
							class="text" 
							value={props.item} 
							readonly/>
					</div>
        
        <span className='actions'>
        <button class="edit" >🖊</button>

<button class="delete" onClick={e=>{
            props.deleteItem(props.index)
        }}>Delete</button>
        </span>
    </li>
  )
}

export default Todolist
