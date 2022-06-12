import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef("");
    const nameRef = useRef("");

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{backgroundColor:'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('onMouseOver')}>Child {name}</p>
            <button onClick={() => console.log('Pressed button 1')}>
                Button 1 
            </button>
            <button onClick={pressButton}>
                Button 2 
            </button>
            <button onClick={() => pressButtonParams('text')}>
                Button 2 
            </button>
            <input 
                placeholder='Insert a text' 
                onFocus={() => console.log('Input focus')}
                onChange={(e) => console.log("Input changed: ",e.target.value)}    
                onCopy={() => console.log('Copied text from input')}
                ref ={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message to father
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder="New Name"/>
                    <button type="submit">Update Name</button>
                </form>
            </div>

            
        </div>
        
    )
}

export default Child;