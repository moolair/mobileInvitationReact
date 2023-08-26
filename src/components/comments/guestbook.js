import React, { useState } from 'react';
import StartFirebase from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import memoryBooth from '../../img/main/memoryBooth.png';

function GuestBook() {

    const db = StartFirebase();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const date = Date().toLocaleString('ko-KR', { timeZone: 'UTC' });

    const Push = () => {
        set(ref(db, 'guests/' + date), {
            name: name,
            message: message,
            date: date,
            password: password
        });
        setName('');
        setMessage('');
        setPassword('');
    }

    return (
        <div>
            <div className="container text-center">
                <img src={memoryBooth} className="d-block w-100" alt="..." />

                <div className="row">
                </div>
                <h3>GUEST BOOK</h3>
                <div className="row">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">이름</span>
                        </div>
                        <input className='form-control'
                            onChange={(n) => setName(n.target.value)}
                            value={name}
                            type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">메세지</span>
                        </div>
                        <input className='form-control'
                            onChange={(n) => setMessage(n.target.value)}
                            value={message}
                            type="text" placeholder="Enter your message" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">암호</span>
                        </div>
                        <input className='form-control'
                            onChange={(n) => setPassword(n.target.value)}
                            value={password}
                            type="password" placeholder="Enter your password" />
                    </div>
                    {/* Aug 26, 2023
                    YJ
                    since the invitation and weddit has been ended, this button is disabled for security. */}
                    {/* <button type="reset" className="btn btn-dark btn-lg btn-block"
                        onClick={Push}
                        disabled={!name + !message + !password}
                    >축하메세지 남기기</button> */}
                    {/* END Aug 26, 2023 */}
                </div>
            </div>

            {/* <RealtimeData /> */}
        </div >
    );
}

export default GuestBook;