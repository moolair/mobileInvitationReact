import { useState } from 'react';
import { useFirebase } from '../firebase';

function GuestBook() {

    const firebase = useFirebase();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    console.log('Firebase', firebase);
    return (
        <div className="guestBook">
            <h1>Guest Book</h1>
            <input
                onChange={(n) => setName(n.target.value)}
                value={name}
                type="text" placeholder="Enter your name" />
            <input
                onChange={(n) => setMessage(n.target.value)}
                value={message}
                type="text" placeholder="Enter your message" />
            <button onClick={() => firebase.putData('guests/' + name, { message })}>Submit</button>
        </div>
    );
}

export default GuestBook;