import { useState } from "react";
import { FormTodo } from "./FormTodo";
import { TaskList } from "./TaskList";

export const Container = ()=>{

  const [ list, setList ] = useState([]);

  const handleAddItem = (addItem) =>{
    setList([...list, addItem]);
  };

  return(
    <div>
      <h1>TODOS: <small>{list.length}</small></h1>
      <FormTodo handleAddItem={ handleAddItem } />
      <TaskList list={ list } setList={ setList } />
    </div>
  );
}