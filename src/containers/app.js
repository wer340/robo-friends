import React,{Component} from "react";
import Cardlist from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scrollable from '../components/scrollable';


class App extends Component{
constructor(){
    super()
    this.state={
        list:[],
        searchfield:''
    }
console.log('constructor')
}
onSearchChange =(event)=>{
     this.setState({searchfield: event.target.value}) 
}
componentDidMount(){
    //this.setState({list:List})
    fetch('https://jsonplaceholder.cypress.io/users').then(results=>results.json()).then(users=> this.setState({list:users}))
    
    console.log('this.componentDidMount')
}

    render(){
        
        const filterRobo=this.state.list.filter(item=>{
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log('render')
        if(this.state.list.length===0){
                return(<h1 className="tc green pa3">loading</h1>)
        }else{

            return (
                <div className="tc"> 
                    <SearchBox  searchText={this.onSearchChange} />
                    <Scrollable>
                    <Cardlist list={filterRobo} />
                    </Scrollable>
    
                </div>
            )
        }

        
    }

}

export default App;