import React,{Component} from "react";
import Cardlist from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scrollable from '../components/scrollable';
import ErrorBoundary from '../components/errorboundary';


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
        const{list,searchfield}=this.state;
        const filterRobo=list.filter(item=>{
            return item.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log('render')
        return !list.length?
                (<h1 className="tc green pa3">loading</h1>)
        :

             (
                <div className="tc"> 
                    <SearchBox  searchText={this.onSearchChange} />
                    <Scrollable>
                        <ErrorBoundary>

                    <Cardlist list={filterRobo} />
                        </ErrorBoundary>
                    </Scrollable>
    
                </div>
            )
        

        
    }

}

export default App;