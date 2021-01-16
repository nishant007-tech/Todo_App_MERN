import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/index';
import { deleteTodo, editTodo, completeTodo } from '../actions/index';
import EdiText from 'react-editext'

const Todolist = (props) => {

    useEffect(() => {
        const myfunc = () => {
            props.getTodos();
        }
        myfunc();
    }, [props.myfunc]);

    const handleDelete = (e, id) => {
        let value = prompt("Are you sure you want to delete the Todo?", "Yes");
        if (value !== null) {
            value = value.toLowerCase();
            if (value === "yes") {
                props.deleteTodo(id);
                console.log("Deleted Successfully");
            } else {
                console.log("Denied");
            }
        }
        else {
            console.log("Cancellled!! ");
        }
    }

    const clickContent = (id) => {
        props.completeTodo(id);
    }

    return (
        <div className="myTodo">
            <ul id="myUL" >
                {
                    props.todos.map((element) => {
                        return (
                            <li key={element._id} >
                                <span className="data" onClick={() => clickContent(element._id)}>
                                    <EdiText
                                        type="textarea"
                                        value={element.todoData}
                                        onSave={(data) => props.editTodo(element._id, data)}
                                        className={element.isCompleted ? "checked" : "editContent"}
                                        buttonsAlign='before'
                                        editButtonContent="Edit"
                                    />
                                </span>
                                <span onClick={(e) => handleDelete(e, element._id)} className="close"  >x</span >
                            </li>
                        );
                    })
                }
            </ul>
        </div >
    )
}
const mapStateToProps = (state) => ({
    todos: state.todoData,
});
export default connect(mapStateToProps, { getTodos, deleteTodo, editTodo, completeTodo })(Todolist);
