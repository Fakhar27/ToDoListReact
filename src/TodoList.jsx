import List from "@mui/material/List";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { Box, Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };
  return (
    <Box
    data-aos="fade-right"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 6,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List data-aos="ease-in" sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <ToDoItem
            todo={todo}
            key={todo.id}
            remove={removeTodo}
            toggle={() => toggleTodo(todo.id)}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {

//         );
//       })}
//     </List>
//   );
// }


// import List from '@mui/material/List';
// import ToDoItem from './ToDoItem';
// import ToDoForm from './ToDoForm';
// import { useState,useEffect } from 'react';
// import {Box,Typography} from '@mui/material';

// function getInitialData(){
//     const data = JSON.parse(localStorage.getItem("todos"))
//     if(!data){
//         return []
//     }
//     return data
// }

// export default function TodoList(){
//     const [todos,settodos]= useState(getInitialData)

//     useEffect(() => {
//         localStorage.setItem(
//             'todos',
//             JSON.stringify(todos)
//         )
//     },[todos])

//     function removetodo(id){
//         settodos(previoustodo => {
//             return previoustodo.filter((t) => (
//                 t.id !== id
//             ))
//         })
//     }
//     function toggletodo(id){
//         settodos(previoustodo => {
//             return previoustodo.map((todo) => {
//                 if(todo.id === id){
//                     return {...todo, completed:!todo.completed}
//                 }
//                 else{
//                     return todo
//                 }
//             })
//         })
//     }
//     function addtodo(text){
//         settodos(previoustodo => {
//             return [...previoustodo, {id:crypto.randomUUID,text:text,completed:false}]
//         })
//     }

//     return(
//         <div className='layout'>
//             <div>
//                 <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
//                     TO DOS
//                 </Typography>
//                 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                     {todos.map(todo => {
//                         return <ToDoItem todo={todo} key={todo.id}
//                         removetodo={() => removetodo(todo.id)}
//                         toggle={() => toggletodo(todo.id)}
//                         />
//                     })}
//                     <ToDoForm addtodo={addtodo}/>
//                 </List>
//             </div>
//         </div>
//     )
// }

// // return(
// //     <Box sx={{
// //         display:'flex',
// //         justifyContent:'center',
// //         alignItems:'center',
// //         // minHeight:"100vh",
// //         flexDirection:'column'
// //     }}>
// //         <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
// //             TO DOS
// //       </Typography>
// //         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
// //             {todos.map(todo => {
// //                 return <ToDoItem todo={todo} key={todo.id}
// //                 removetodo={() => removetodo(todo.id)}
// //                 toggle={() => toggletodo(todo.id)}
// //                 />
// //             })}
// //             <ToDoForm addtodo={addtodo}/>
// //         </List>
// //     </Box>
// // )