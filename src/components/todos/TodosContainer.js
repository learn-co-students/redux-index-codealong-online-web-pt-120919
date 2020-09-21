import React, { Component } from 'react'; // immporting component from react library
import { connect } from 'react-redux' //importing connect from deux lib
import Todo from './Todo' //importing presentational component in charge of presenting data
 
class TodosContainer extends Component {
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  render() {
    return(
      <div>
          {this.renderTodos()}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
   
  export default connect(mapStateToProps)(TodosContainer);
  