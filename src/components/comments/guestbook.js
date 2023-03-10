import { useState } from 'react';
import { useFirebase } from '../firebase';
import { RealtimeData } from './realtimeData';

function GuestBook() {

    const firebase = useFirebase(); //const db
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    console.log('Firebase', firebase);

    return (
        <div>
            <div className="container text-center">
                <div className="row">
                </div>
                <h3>GUEST BOOK</h3>
                <div className="row">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">이름</span>
                        </div>
                        <input className='form-control'
                            onChange={(n) => setName(n.target.value)}
                            value={name}
                            type="text" placeholder="Enter your name" />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">메세지</span>
                        </div>
                        <input className='form-control'
                            onChange={(n) => setMessage(n.target.value)}
                            value={message}
                            type="text" placeholder="Enter your message" />
                    </div>
                    <button type="reset" className="btn btn-dark btn-lg btn-block" onClick={() => {

                        firebase.putData('guests/' + name, { message });
                    }}>축하메세지 남기기</button>
                </div>
            </div>
            {/* <div className="container">
                <div className='row'>
                    
                </div>
            </div> */}
            <RealtimeData />
        </div>
    );
}

export default GuestBook;