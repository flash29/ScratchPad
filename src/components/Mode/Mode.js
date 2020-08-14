import React from 'react';

 import './Mode.css';

const Mode =({onModeChange})=> {

        return (
          <div >
            <div className="Modes">
                <button id="text" onClick={()=>onModeChange('write')} className="text bradius">Text</button>
                <button id="draw" onClick={()=>onModeChange('draw')} className="draw bradius">Draw</button>
            </div>

         </div>
        );

}

export default Mode;
