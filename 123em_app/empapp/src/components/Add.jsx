import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
   
  return (
      <div>
          <h1>ADD INFORMATION</h1>
          <TextField label="NAME" variant='outlined'>NAME</TextField><br /><br />
          <TextField label="AGE" variant='outlined'>AGE</TextField><br /><br />
          <TextField label="DEPT" variant='outlined'>DEPT</TextField><br /><br />
          <TextField label="SALARY" variant='outlined'>SALARY</TextField><br /><br />
          <Button variant='contained' type='submit'>SUBMIT</Button>
    </div>
  )
}

export default Add