import React  from 'react';
import './App.css';
import InputTask from './components/InputTask';
import EditTask from './components/EditTask';
import ListTask from './components/ListTask';
class App extends React.Component{
  render()
  {
    return(
      <div className="body">
      <InputTask/>
      <EditTask/>
      <ListTask/>



      </div>
    )
  }
}

export default App;
