import React from "react";
import Card from './card';

const Cardlist=({list})=>{

    return (
        <div>

{list.map((user,index)=>{
    return <Card key={index} id={user.id} name={user.name} email={user.email}  />
})
}

        </div>
    )
}


export default Cardlist;