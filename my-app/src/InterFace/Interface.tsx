import { count } from "console";
import React, { Component } from "react";


interface InterfaceProps{




}

interface InterfaceState{


name:string
no:number
count:any

}

export default class Interface extends Component<InterfaceProps,InterfaceState>{
constructor(props: any){
    super(props);
    this.state={
        name:"",
        no:1230,
        count:0
    }
}

onChange=()=>{

this.setState({
 count:this.state.count+1,
});


}



render(): React.ReactNode {
    return(


        <><button onClick={this.onChange}>Hello</button><p>{this.state.count}</p></>

    )
}










}