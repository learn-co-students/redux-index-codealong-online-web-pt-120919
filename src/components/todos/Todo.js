import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'


const Todo = props => {
  return (
    <li>{props.text}</li>
  );
};
 
export default Todo;