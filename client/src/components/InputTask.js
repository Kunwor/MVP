
import React from 'react';
import img from '../image.png';
import axios from 'axios';
import './style.css';

class InputTask extends React.Component
{
state ={
    task : ''
}
handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(e.target.value);
}
handleSubmit = (e)=>{
    e.preventDefault();
    if(this.state.task!='')
    {
        axios.post('http://localhost:4000/task',{name: this.state.task})
            .then(res=>{
                console.log(res);
                this.setState({task:''});
            });
            window.location = '/';
        }
    }
    render()
{
    return(
<div className="row text-center">
                <div className="col-md-4">           
    <form onSubmit={(e)=>this.handleSubmit(e)}>
    <input className="form-control mt-5 ml-5" placeholder="Things to do" name ="task"onChange={(e)=>this.handleChange(e)} value={this.state.task}  style={{width:"400px"}}/>
    <button type="submit" className="btn btn-success mt-3" style={{width:"300px",padding:"5px",}}>ADD TASK</button>
 
 </form>
</div>
<div className="col-md-8">
<img src={img} style={{width:"500px",height:"500px",marginLeft:"80px"}}/>

</div>


</div>

    );
}
}




export default InputTask;
