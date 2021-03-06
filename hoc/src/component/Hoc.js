import React,{Component} from 'react';

function Hoc(HocComponent,data){
    return class extends Component{
        constructor(props){
            super(props)

            this.state={
                data:data
            }
        }

        render(){
            return(
                <HocComponent hocData={this.state.data}/>
            )
        }
    }
}

export default Hoc