// import StartFirebase from '../firebase'
import StartFirebase from '../firebase';
import { ref, set, remove, child, get } from 'firebase/database';
import React, { useCallback, useState, useRef } from 'react';
// import { InputGroup } from 'reactstrap';
// import InputPanel from './inputPanel';
// import { uid } from "uid";

const db = StartFirebase();

function CrudPanel({ keyName, record }) {

    // console.log('CrudPanel key: ' + keyName);

    const [input, setInput] = useState("");
    const [name, setName] = useState("");


    let childKey = '';
    get(ref(db, 'guests/')).then(snapshot => {

        snapshot.forEach(childSnapshot => {

            childSnapshot.forEach(grandchildSnapshot => {
                let item = grandchildSnapshot.val();
                // item.key = grandchildSnapshot.key;
                if (item === name) {
                    childKey = childSnapshot.key;
                    // console.log('childSnapshot: ' + childSnapshot.key);
                }
                // console.log('item: ' + item);
            })
        })
        // this.setState({ data: records });
    })
    // console.log('childKey: ' + childKey);

    const deleteData = () => {

        // console.log('date: ' + childKey);
        const address = 'guests/' + childKey;
        // console.log('address: ' + address);
        const isPasswordCorrect = (password) => {
            // console.log('Password: ' + password);
            // console.log('inputPw: ' + input);
            if (input === password) {
                return true;
            } else
                return false;
        }
        get(ref(db, address)).then(snapshot => {
            var pw = snapshot.child("password")._node.value_;
            // console.log(snapshot.child("password")._node.value_);
            if (snapshot.exists() && isPasswordCorrect(pw)) {
                // console.log(this.state.modKeydate);
                remove(ref(db, address));
                alert('메세지가 지워졌습니다.');
            }
            else {
                alert('이름 또는 암호가 잘못되었습니다.');
            }
            setName('');
            setInput('');
        })
    }

    return (
        <div>
            <button type="button" className="close" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {/* onClick={() => {
                    // console.log('랜더테스트 CrudPanel');
                    // console.warn('Keyname: ' + keyName);
                }}
            > */}
                <span aria-hidden="true">&times;</span>
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* // show={this.state.isOpen}
            > */}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">메세지를 지우시겠습니까?</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className='text-left'>이름과 암호를 입력하고 지우세요.</p>
                            {/* <p className='text-left'>{this.state.record.message}</p>
                                        <p className='text-left'>{this.state.record.date}</p> */}
                            {/* <p show={this.state.record.name} className='text-left'></p>
                            <p show={this.state.record.message} className='text-left'></p>
                            <p show={this.state.record.date} className='text-left'></p> */}
                            <input className='form-control'
                                value={name}
                                // ref={input}
                                onChange={e => {
                                    // console.log('랜더테스트 - input');
                                    // console.warn('record name: ' + keyName);
                                    setName(e.target.value);
                                }}
                                // onChange={() => this.setState({ inputPassword: this.state.inputPassword })}
                                // onChange={onChange}
                                type="text" placeholder="이름을 입력하세요." />
                            <input className='form-control'
                                value={input}
                                // ref={input}
                                onChange={e => {
                                    // console.log('랜더테스트 - input');
                                    // console.warn('record password: ' + record.date);
                                    setInput(e.target.value);
                                }}
                                // onChange={() => this.setState({ inputPassword: this.state.inputPassword })}
                                // onChange={onChange}
                                type="password" placeholder="암호를 입력하세요." />
                            {/* <InputPanel password={this.state.record.password} key={this.state.record.keydate} /> */}
                        </div>
                        <div className="modal-footer">
                            <button id="delete" type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={deleteData}
                            // disabled={!this.isPasswordCorrect()}
                            >지우기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrudPanel;