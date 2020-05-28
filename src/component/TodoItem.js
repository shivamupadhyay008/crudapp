import React,{ Component } from 'react';
export default class TodoItem extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      isEdit: false,
      val: ''
    }
  }

  handleEdit = () => {
    this.setState({isEdit: true})
    //
    console.log('rammu k papa',this.id)
  }

  handleChange = (e) => {
    this.setState({val: e.target.value})
  }


  cancelEdit = () => {
    this.setState({isEdit: false})
  }

  updateItem = () => {
    this.props.editItemf(this.props.id,this.state.val)
    this.setState({isEdit: false})
  }

  render() {
  	const {title,id,editItemf  ,deleteItem}=this.props;
    const {isEdit} = this.state

  return ( 
  	<li className='list-group-item text-capitalize d-flex justify-content-between my-2' key={id}>
     {isEdit ?  
      <div> 
        <p> <input type="text" defaultValue={title} onChange={this.handleChange} /> </p> 
          <button className='btn btn-primary' type='submit'  onClick={()=> this.updateItem()}
            >update</button>
      <button className='btn btn-danger'  onClick={() => this.cancelEdit()}> Cancel </button>
    </div>
       :
      <div className='todo-icon'>
        <h6>{title}</h6>
          <button className='btn btn-primary'  onClick={() => this.handleEdit()}> Edit </button>
        <button className='btn btn-danger'onClick={()=>this.props.deleteitem(id)}>Delete</button>
      </div>
    } 
  	</li>
    )
  }
}

