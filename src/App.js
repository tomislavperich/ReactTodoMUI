import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


class TaskItem extends Component {
	render() {
		return (
			<div tabindex="-1" className="todo-Tasks-Task">
				<dt className="todo-Tasks-TaskName">Hello</dt>
				<dd className="todo-Tasks-TaskDesc">
					<span className="todo-Tasks-TaskDesc-Text">World</span>
					<span className="todo-Tasks-TaskDesc-Time">8:45</span>
				</dd>
			</div>
		);
	}
}


class App extends Component {
  render() {
    return (
      <div className="App">
				<h1 className="App-Title">Todo List</h1>
				<div className="todo-Container">
					<div className="todo-Tasks-Container">
						{/* Tasks container */}
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
							<TaskItem/>
					</div>
					<div className="todo-Controls-Container">
						{/* Interface controls container */}
						<TextField
							id="task-name"
							label="Task"
							placeholder="Enter task name..."
							className="todo-Controls-TaskName"
							margin="normal"
						/>
						<TextField
							id="task-time"
							label="Time"
							type="time"
							defaultValue="08:45"
							className="todo-Controls-TaskTime"
							inputProps={{
								step: 300, // 5min
							}}
						/>
						<TextField
							id="task-desc"
							label="Description"
							placeholder="Enter a description..."
							className="todo-Controls-TaskDesc"
							margin="normal"
						/>
						<div className="todo-Controls-Buttons">
							<Button color="primary" className="todo-Controls-ButtonAdd">
								Add
							</Button>
							<Button color="primary" className="todo-Controls-ButtonEdit">
								Edit
							</Button>
							<Button color="primary" className="todo-Controls-ButtonRemove">
								Remove
							</Button>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
