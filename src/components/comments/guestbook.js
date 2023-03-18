import { useEffect, useState } from 'react';
import { useFirebase } from '../firebase';
// import { RealtimeData } from './realtimeData';
import { getDatabase, ref, set } from "firebase/database";
import memoryBooth from '../../img/main/memoryBooth.png';

function GuestBook() {

    const firebase = useFirebase(); //const db
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const date = Date().toLocaleString('ko-KR', { timeZone: 'UTC' });
    // console.log('Firebase', firebase);

    const Push = () => {
        const db = getDatabase();
        set(ref(db, 'guests/' + date), {
            name: name,
            message: message,
            date: date
        });
        setName('');
        setMessage('');
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
                    <button type="reset" className="btn btn-dark btn-lg btn-block"
                        onClick={Push}
                    >축하메세지 남기기</button>
                </div>
            </div>

            {/* <RealtimeData /> */}
        </div >
    );
}

export default GuestBook;