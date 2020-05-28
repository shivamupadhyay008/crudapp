import React,{ Component } from 'react';
import TodoInput from  './component/Todoinput.js';
import TodoList from  './component/TodoList.js';
import EditItem from  './component/editItem.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v1 as uuid} from 'uuid';
   

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    itemArray:[],
    id:uuid(),
    item:'',  
    eItem:false
    // this.handleChange = this.handleChange.bind(this)
  }
  }

  
  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit=(e) => {
    
    e.preventDefault()

    let {item,itemArray} = this.state
    // means let item = this.state.item
    // if i want to chagne the name of local var let kok   = this.state.itemsArray
    itemArray.push({title: item,id: itemArray.length + 1})
    this.setState({ itemArray:itemArray,item:'',id:uuid(),editItem:false
    })
  }

  clearList=()=>{
    this.setState({
     
     itemArray:[ ]
    })
    
  }

deleteitem=(id)=>{
  console.log('yessss')
const deletedItem=this.state.itemArray.filter(item=>item.id!==id)
this.setState({
  itemArray:deletedItem
})
}
  editItemf= (id,value) => {
      console.log('id or value',id,value)
       let items  = this.state.itemArray
       console.log(value)
        items.map(item => {
          if(item.id == id){
            item.title = value
          }
         
        })

        this.setState({itemArray: items})
        console.log(items)
        console.log('asdasdasd',this.state.itemArray,items)
     
      }

  render() {
    let {itemArray}=this.state
     return  (
      
      <div className='container'>
      
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
        <h3 className='text-capitalize text-center'>
        todo input
        </h3>
        <TodoInput
        item={this.state.item} 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
  <TodoList
itemArray={this.state.itemArray} 
clearList={this.clearList}
editItemf={this.editItemf}
deleteitem={this.deleteitem}
//sendId={this.state.id}       
  />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
