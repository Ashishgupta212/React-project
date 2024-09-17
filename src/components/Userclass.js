import React from "react";


class  Userclass extends  React.Component{
     constructor(props){
          super(props);

          this.state =  {
               count : 0,
          };
          
               
          
     };


render(){

     return(
     <div>
         <h1>Name: {name} </h1>
         <h1>Count:{this.state.count}</h1>
         <button onClick={() =>{
          this.setState({count : this.state.count +1 

          });

         }}
         >count</button>
          
     </div>
     );
}
}

export default Userclass;