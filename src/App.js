import { useState } from 'react';
import './App.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ActiveTasks from './Components/ActiveTasks';
import DeletedTasks from './Components/DeletedTaks';
import CompletedTasks from './Components/CompletedTasks';
import React from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  console.log(tasks);

  const deleteHandler = (id) => {
    console.log(id);
    setTasks(
      tasks.filter((item) => {
        if (item.id === id) {
          return (item.del = true);
        }
        return item;

      })
    )
  };

  const completeHandler = (id) => {
    setTasks(
      tasks.filter((item) => {
        if (item.id === id) {
          return (item.completed = true);
        }
        return item;
      })
    );
  };

  return (
    <div className='main'>
      <div className='App'>
        <h1 className='mb-5'>To Do List</h1>
      </div>
      <Container>
        <Form inline className='mb-3' onSubmit={(e) => {
          if (task.length !== 0) {
            e.preventDefault();
            setTasks([
              ...tasks,
              { task: task, id: Date.now(), del: false, completed: false }
            ]);
            setTask('');
          } else {
            alert('Please add a task')
          }

        }}
        >
          <Form.Control className='mb-2 mr-sm-2' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}
            value={task} />
          <Button type='submit' className='mb-2'>
            Add Task
          </Button>
        </Form>
      </Container>
      <Container>
        <Row>
          <Col>
            <ActiveTasks tasks={tasks} completeHandler={completeHandler} deleteHandler={deleteHandler} />
          </Col>
          <Col>
            <CompletedTasks tasks={tasks} />
          </Col>
          <Col>
            <DeletedTasks tasks={tasks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;








