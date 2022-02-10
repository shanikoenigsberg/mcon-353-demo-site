import logo from './logo.svg';
import './App.css';
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { CssBaseline } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import React, {useState} from 'react';

function App() {

  return (
    <div className="App">
        <h1>Welcome to Shani's page!!</h1>
        <p>In the mornings, I teach fourth grade. Despite its challenges, I really love my students and look forward to teaching!!
              Right now, I have 27 students in my class, one of the biggest classes in the entire school, so it can be a real party!
        </p>
        <p>Some things I've learnt about teaching:</p>
        <table>
          <tr>
            <td>
              <Card raised='true'>
              <CardMedia
                component="img"
                height="194"
                width="30%"
                image="organization.jpg"
                alt="Organization"
      />
                <CardContent>
               
              Organization is key. An organized teacher will help the students be much more organized.
              They will (hopefully!) be prepared for class and always have what they need.
                </CardContent>
              </Card>
              
            </td>
            <td>
              <Card raised = 'true'>
               
                <CardMedia
                component="img"
                height="194"
                width="30%"
                image="pencils.jpg"
                alt="Pencils"
      />
       <CardContent>
              There is always something new to learn. People are different and you can never say I know all there is to know about teaching.
                </CardContent>
              </Card>
              
            </td>
            <td>
              <Card raised = 'true'>
              <CardMedia
                component="img"
                height="194"
                width="30%"
                image="abc.jpg"
                alt="Organization"
      />
                <CardContent>
              There are always exceptions to every rule. Even though most people might act a certain way, there will probably be one student who acts differently.
              
                </CardContent>
              </Card>
             
            </td>
          </tr>
        </table>
    </div>
  );
}

export default App;
