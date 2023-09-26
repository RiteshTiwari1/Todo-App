import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:'abc',id:1},{task:"def",id:2},{task:"ghi",id:3}],
            currentTask:''
        }
    }

    handleChange=(e)=> {
        this.setState({
            currentTask:e.target.value,
        })
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length+1}],
            currentTask:'',
        })
    }
    handleDelet=(id)=>{
        let narr=this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id;
        })
        this.setState({
            tasks:[...narr]
        })
    }
  render() {
    return (
      <>
        <input type='text' onChange={this.handleChange} value={this.state.currentTask}></input>
        <button onClick={this.handleSubmit}>submit</button>
        {/* <ul>
        {
            this.state.tasks.map((taskObj)=>(
             <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={()=> this.handleDelet(taskObj.id)}>Delete</button>
             </li>  
            ))
        }
        </ul> */}

        <ul>
        {
        this.state.tasks.map(function(taskObj){
            return(
             <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={()=> this.handleDelet(taskObj.id)}>Delete</button>
             </li>  
            )
            }.bind(this))
        }
        </ul>
      </>
    )
  }
}


