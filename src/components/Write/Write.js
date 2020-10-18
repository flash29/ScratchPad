import React from 'react';
 import './Write.css';

function Write() {

    //    var input = document.getElementById('text1');
        var ul = document.querySelector('ul');
    //    var li = document.getElementsByTagName('li');

        // function onContentChange(e){
        //     content.push(e.target.value)
        // }
        buttonListElement();

        function checkInputlength(){
        	return document.getElementById('text1').value.length;
        }


        function createListElement(){

        		var li = document.createElement("li");
        		var button = document.createElement('button');
        		li.appendChild(document.createTextNode(document.getElementById('text1').value));
        		document.querySelector('ul').appendChild(li);
        		li.appendChild(button)
        		button.innerHTML = "delete";
        		document.getElementById('text1').value = "";

        		buttonListElement();
        }


        //for enter button
        function onAddButton(){

        	if(checkInputlength() > 0){
        		createListElement();
        	}

        }



        function buttonListElement(){
        	var button = document.querySelectorAll('li button');
        	for(let i=0; i<button.length; i++){
        	button[i].addEventListener('click', clearElement)
        	}
        }

        function clearElement(){
        		this.parentNode.remove()
        }


        return (
          <div className='content'>
                <textarea id='text1' />
                <p className='addButton' onClick={()=>onAddButton()}>Add</p>
                <ul></ul>


         </div>
        );



}

export default Write;
