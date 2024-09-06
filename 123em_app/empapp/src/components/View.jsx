import { Button, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
const View = () => {
    var [emp, setEmp] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((res) => {
                console.log(res);
                setEmp(res.data);
            })
            .catch((err) => console.log(err));
    })
        
        
    const delValue = (id) => {
        axios.delete("http://localhost:3004/remove/" +id)
            .then((res) => {
                alert(res.data.message);
        })
    }

  return (
      <div>
          <TableContainer>
              <TableHead>
                  <TableRow>
                      <TableCell>NAME</TableCell>
                      <TableCell>AGE</TableCell>
                      <TableCell>DEPT</TableCell>
                      <TableCell>SALARY</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {emp.map((val) => {
                      return (
                          <TableRow>
                              <TableCell>{val.Name}</TableCell>
                              <TableCell>{val.Age}</TableCell>
                              <TableCell>{val.Dept}</TableCell>
                              <TableCell>{val.Sal}</TableCell>
                              <TableCell>
                                  <Button size='small' variant='contained'>update</Button>
                                  <Button size='small' variant="contained" onClick={()=>{
                                      delValue(val._id)
                                  }}>delete</Button>
                              </TableCell>

                          </TableRow>
                      )
                  })}
                
              </TableBody>
          </TableContainer>
    </div>
  )
}

export default View