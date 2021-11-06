import {useState} from 'react'
import './App.scss';
import CreateTask from './CreateTask';
import RenderTaskList from './RenderTaskList';

function App() {

  interface ObjectTask {
     id: string;
     title: string;
     status: boolean;
  }

  let [TaskList, render_f] = useState(():ObjectTask[] => {
    var values: any[] = [],
        keys : string[] = Object.keys(localStorage);

      keys.map((elem, key)=>{
        return values.push( JSON.parse( localStorage.getItem(keys[key]) || "{}" ) );
      });

    return values;
  });

  let [Filter, setFilter] = useState("def");

  function add_task_to_list (props:any){
    localStorage.setItem(props.id, JSON.stringify({id: props.id, title: props.title, status: false}));
    render_f([...TaskList, {id: props.id, title: props.title, status: false}]);
  }

  function setDoingTask (props:any){
    TaskList[props[0]].status = !TaskList[props[0]].status;
    localStorage.setItem(props[1], JSON.stringify({id: TaskList[props[0]].id, title: TaskList[props[0]].title, status: TaskList[props[0]].status}));
    render_f([...TaskList]);
  }

  function DeleteTask (props:any){
    TaskList.splice(props[0], 1);
    localStorage.removeItem(props[1]);
    render_f([...TaskList]);
  }

  function filter (props:any){
    setFilter(props);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <CreateTask add_task={add_task_to_list} filter={filter} />
      <RenderTaskList list={TaskList} filter={Filter} DoTask={setDoingTask} DeleteTask={DeleteTask}/>
    </div>
  );
}

export default App;
