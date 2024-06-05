import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}




// import { List } from '@mui/material';
// import ListItem from '@mui/material/ListItem';
// import TextField from '@mui/material/TextField';
// import Create from '@mui/icons-material/Create'
// import IconButton from '@mui/material/IconButton';
// // import OutlinedInput from '@mui/material/OutlinedInput';
// // import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';import { useState } from 'react';

// export default function ToDoForm({addtodo}){
//     const [text,settext] = useState("")

//     function handletext(e){
//         settext(e.target.value)
//     }
//     function handlesubmit(e){
//         e.preventDefault()
//         addtodo(text)
//         settext("")
//     }

//     return(
//         <ListItem>
//             <form onSubmit={handlesubmit}>
//                 <TextField id="outlined-basic" placeholder='ADD TO LIST' label="To-Do" onChange={handletext} value={text} variant="outlined"
//                 InputProps={{
//                     endAdornment:<InputAdornment position="end">
//                     <IconButton
//                         aria-label="create_todo"
//                         // onClick={handleClickShowPassword}
//                         // onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                         type='submit'
//                     >
//                         {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
//                         <Create />
//                     </IconButton>
//                     </InputAdornment>
//                 }}
//                 />
//             </form>
//         </ListItem>
//     )
// }