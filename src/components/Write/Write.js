import React,{Component} from 'react';

 import './Write.css';

class Write extends Component {
    constructor(){
        super();
        this.state={
            type:'dots',
        }
    }
    onChangeType=(el)=>{
        console.log(el);
        this.setState({type:el})
    }
    render(){
        return (
          <div >

            <div className="writeStyle">
                <p className="dots" onClick={()=>this.onChangeType('dots')}>Dotted list </p>
                <p className="numbers" onClick={()=>this.onChangeType('numbers')}>Numbered list</p>
            </div>

            <div className="content" >

                {
                    this.state.type==='dots'
                    ?
                    <div>
                        <ul contentEditable="true" suppressContentEditableWarning={true}>
                            <li > </li>

                        </ul>
                    </div>

                    :
                    <div>
                        <ol contentEditable="true" suppressContentEditableWarning={true}>
                            <li></li>
                        </ol>
                    </div>

                }
            </div>

         </div>
        );
    }


}

export default Write;
