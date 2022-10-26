import React ,{Component} from "react";

class Hello extends Component{
    render(){
        return (<div><h1 className= "f-headline  tc">hello this is test</h1><h4 className= "tc f1">{this.props.greething} ❤</h4> </div>)
    }
}
export default Hello;