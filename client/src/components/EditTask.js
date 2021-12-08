import React from 'react';
import axios from 'axios'
class EditTask extends React.Component
{
    state = {
        task_id: '',
        task_name: this.task_name
    }
    
    render()
{
    return(
<div class="container">
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${this.props.todo_id}`}>Edit</button>

<div id="{`#id${this.props.todo_id}`}" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Task Todo</h4>
      </div>
      <div class="modal-body"><input type='text' className="form-control"/>
      </div>
        
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
</div>
    );
}

}
export default EditTask;
