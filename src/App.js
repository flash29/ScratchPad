import React,{Component} from 'react';

import Header from './components/Header/Header.js';
import Mode from './components/Mode/Mode.js';
import Write from './components/Write/Write.js';
import Draw from './components/Draw/Draw.js';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            status:'write',
        }
    }
    onModeChange=(mode)=>{
        console.log(mode);
        this.setState({status:mode});

    }
    render(){
        return (
          <div className="App">
                <Header />
                <Mode  onModeChange={this.onModeChange}/>
                    {
                     this.state.status==="write"
                     ?
                         <div>
                             <Write />
                         </div>
                     :
                         <div>
                            <Draw />
                         </div>
                    }
         </div>
        );
    }

}

export default App;

//header with the name scratchpad
//middle part
   //mode seletion - write draw
   //sidebar this goes into the respective modes will not be in main page
   //page
//footer with TIS mark
//Header /> // done
// <mode />
//     {
//      status="write"
//      ?
//          <div>
//              <write />
//          </div>
//      :
//          <div>
//              <draw />
//          </div>
//     }
// <footer />
