import React,{Component} from "react";
import {List} from './list';
import Cardlist from './cardlist';
import SearchBox from './searchbox';

class App extends Component{
constructor(){
    super()
    this.state={
        list:List,
        searchfield:''
    }

}
onSearchChange =(event)=>{
     this.setState({searchfield: event.target.value}) 
}
    render(){
        const filterRobo=this.state.list.filter(item=>{
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc"> 
                <SearchBox  searchText={this.onSearchChange} />
                <Cardlist list={filterRobo} />

            </div>
        )
    }

}

export default App;