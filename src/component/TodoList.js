import React,{ Component } from 'react';
import TodoItem  from './TodoItem'; 

export default class TodoList extends Component {
  
  constructor(props){
  	super(props)
  	this.state = {

  	}
  }

  

  returnSmallJsx = () => {
  	const {itemArray,clearList,deleteitem}=this.props
  	let some = []
    //console.log("props",this.props)
  	itemArray.map(item=>{
  		some.push(<TodoItem key={item.id} id={item.id} title={item.title} deleteitem={this.props.deleteitem} editItemf={this.props.editItemf}/>)
  	})    
  	  	return some
  }


  render() {
  	const {itemArray,clearList}=this.props

  return (
  	<ul className='list-group my-5'>
  	<h3 className='text-capitalize text-center'>TodoList</h3>
  	 <h1>{this.props.itemArray.id}</h1>
  	 {this.returnSmallJsx() }

	<button type='button' 
	className='btn btn-danger btn-block text-capitalize mt-5'
	onClick={clearList}
	>
  	clear list

  	</button>
  	</ul>
  )
}
}

