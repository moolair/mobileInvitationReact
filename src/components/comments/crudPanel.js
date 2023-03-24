// import StartFirebase from '../firebase'
import StartFirebase from '../firebase';
import { ref, set, remove, child, get } from 'firebase/database';
import React, { useCallback, useState, useRef } from 'react';
// import { InputGroup } from 'reactstrap';
// import InputPanel from './inputPanel';
import { uid } from "uid";

const db = StartFirebase();

function CrudPanel({ keyName, record }) {

    console.log('CrudPanel key: ' + keyName);

    const [input, setInput] = useState("");
    const [name, setName] = useState("");

    // //snapshot.foreach to find child name
    // const childName = ref(db, 'guests/');
    // get(childName, (snapshot) => {
    //     const data = snapshot.child("name");
    //     console.log(data);
    // })
    // //when found, assign it to address
    // //then call deleteData

    //update date orderby in firebase rules

    const deleteData = () => {
        // const dbRef = ref(db);
        // const record = this.getAllData().id;
        console.log('name: ' + name);
        const address = 'guests/' + name;
        console.log('address: ' + address);
        // remove(ref(db, address));
        const isPasswordCorrect = (password) => {
            console.log('Password: ' + password);
            console.log('inputPw: ' + input);
            if (input === password) {
                return true;
            } else
                return false;
        }
        get(ref(db, address)).then(snapshot => {
            var pw = snapshot.child("password")._node.value_;
            console.log(snapshot.child("password")._node.value_);
            if (snapshot.exists() && isPasswordCorrect(pw)) {
                // console.log(this.state.modKeydate);
                remove(ref(db, address));
            }
            else {
                alert('이름 또는 암호가 잘못되었습니다.');
            }
            // this.inputPassword = '';
        })
    }

    return (
        <div>
            <button id='close' type="button" className="close" data-toggle="modal" data-target="#exampleModal"
                onClick={() => {
                    console.log('랜더테스트 CrudPanel');
                    console.warn('Keyname: ' + keyName);
                }}
            >
                <span aria-hidden="true">&times;</span>
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
            // show={this.state.isOpen}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">메세지를 지우시겠습니까?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                    console.log('랜더테스트 - input');
                                    console.warn('record name: ' + keyName);
                                    setName(e.target.value);
                                }}
                                // onChange={() => this.setState({ inputPassword: this.state.inputPassword })}
                                // onChange={onChange}
                                type="text" placeholder="이름을 입력하세요." />
                            <input className='form-control'
                                value={input}
                                // ref={input}
                                onChange={e => {
                                    console.log('랜더테스트 - input');
                                    console.warn('record password: ' + record.date);
                                    setInput(e.target.value);
                                }}
                                // onChange={() => this.setState({ inputPassword: this.state.inputPassword })}
                                // onChange={onChange}
                                type="password" placeholder="암호를 입력하세요." />
                            {/* <InputPanel password={this.state.record.password} key={this.state.record.keydate} /> */}
                        </div>
                        <div className="modal-footer">
                            <button id="delete" type="button" className="btn btn-secondary" data-dismiss="modal"
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

export default React.memo(CrudPanel);

// const InputPanel = ({ password, key }) => {
//     // const firebase = useFirebase(); //const db
//     const [input, setInput] = useState("");

//     console.log('Current Password: ' + password);
//     console.log('key: ' + key);


//     const isPasswordCorrect = () => {
//         console.log('Password: ' + password);
//         console.log('inputPw: ' + input);
//         if (input === password) {
//             deleteData(key);
//             return true;
//         } else
//             return false;
//     }

//     const deleteData = (key) => {
//         const dbRef = ref(db);
//         // const record = this.getAllData().id;
//         console.log('key: ' + key);
//         const address = 'guests/' + key;
//         console.log('address: ' + address);
//         get(child(dbRef, address)).then(snapshot => {
//             if (snapshot.exists()) {
//                 // console.log(this.state.modKeydate);
//                 remove(ref(db, address));
//             }
//             else {
//                 alert('cannot delete, user does not exist');
//             }
//             // this.inputPassword = '';
//         })
//     }


//     return (
//         <>
//             <input className='form-control'
//                 onChange={(n) => setInput(n.target.value)}
//                 // onChange={e => this.enterpw(e)}
//                 // value={this.setState({ inputPassword: input })}
//                 value={input}
//                 // ref={this.state.inputPassword}
//                 type="password" placeholder="암호를 입력하시고 지우세요." />
//             <div className="modal-footer">
//                 <button id="delete" type="button" className="btn btn-secondary" data-dismiss="modal"
//                     onClick={isPasswordCorrect}
//                 // disabled={!this.isPasswordCorrect()}
//                 >지우기</button>
//             </div>
//         </>
//     )
// }

// export default React.memo(InputPanel);

// export class CrudPanel extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false,
//             record: {
//                 keydate: props.keydate,
//                 name: props.record.name,
//                 message: props.record.message,
//                 password: props.record.password,
//                 date: props.record.date
//             },
//             modKeydate: '',
//             modName: '',
//             modMessage: '',
//             modDate: '',
//             inputPassword: ''
//         }
//         this.interface = this.interface.bind(this);
//     }

//     // componentDidMount() {
//     //     console.log(this.state.record);
//     // }
//     shouldComponentUpdate(nextProps, nextState) {
//         // console.warn(prevProps);
//         // return true;
//         if (this.state.record !== nextState.record) {
//             console.log('SCU is true');
//             return true;
//         }
//         console.log('SCU is false');
//         return false;
//     }

//     render() {
//         console.log('랜더테스트');
//         return (
//             <div>
//                 <button id='close' type="button" className="close" data-toggle="modal" data-target="#exampleModal"
//                     onClick={() => {
//                         this.openModal('delete');
//                         console.log('modKeydate: ' + this.modKeydate);
//                     }}
//                 >
//                     <span aria-hidden="true">&times;</span>
//                 </button>

//                 {/* Modal */}
//                 <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
//                 // show={this.state.isOpen}
//                 >
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">메세지를 지우시겠습니까?</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 {/* <p className='text-left'>{this.state.record.name}</p>
//                                 <p className='text-left'>{this.state.record.message}</p>
//                                 <p className='text-left'>{this.state.record.date}</p> */}
//                                 <p show={this.state.record.name} className='text-left'></p>
//                                 <p show={this.state.record.message} className='text-left'></p>
//                                 <p show={this.state.record.date} className='text-left'></p>
//                                 {/* <input className='form-control'
//                                     value={this.state.inputPassword}
//                                     onChange={e => {
//                                         this.setState({ inputPassword: e.target.value })
//                                     }}
//                                     // onChange={() => this.setState({ inputPassword: this.state.inputPassword })}
//                                     type="password" placeholder="암호를 입력하시고 지우세요." /> */}
//                                 <InputPanel password={this.state.record.password} key={this.state.record.keydate} />
//                             </div>
//                             {/* <div className="modal-footer">
//                                 <button id="delete" type="button" className="btn btn-secondary" data-dismiss="modal"
//                                     onClick={() => { this.interface('delete') }}
//                                 // disabled={!this.isPasswordCorrect()}
//                                 >지우기</button>
//                             </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     getAllData() {
//         return {
//             id: this.state.modKeydate,
//             data: {
//                 name: this.state.modName,
//                 message: this.state.modMessage,
//                 date: this.state.modDate
//             }
//         }
//     }

//     // [input, setInput] = useState("");
//     // onChangeInput = useCallback(
//     //     (e) => {
//     //         setInput(e.target.value);
//     //     },
//     //     [input]
//     // );

//     interface = (option) => {
//         if (option == 'delete')
//             this.isPasswordCorrect();

//         this.closeModal();
//     }

//     deleteData() {
//         const dbRef = ref(db);
//         // const record = this.getAllData().id;
//         const address = 'guests/' + this.state.record.keydate;
//         console.log('address: ' + address);
//         console.log('modKeydate: ' + this.modKeydate);
//         get(child(dbRef, address)).then(snapshot => {
//             if (snapshot.exists()) {
//                 // console.log(this.state.modKeydate);
//                 remove(ref(db, address));
//             }
//             else {
//                 alert('cannot delete, user does not exist');
//             }
//             // this.inputPassword = '';
//         })
//     }

//     isPasswordCorrect() {
//         console.log('Password: ' + this.state.record.password);
//         console.log('inputPw: ' + this.state.inputPassword);
//         if (this.state.inputPassword === this.state.record.password) {
//             this.deleteData();
//             return true;
//         } else
//             return false;
//     }

//     openModal = (option) => {
//         // option.preventDefault();
//         if (option == 'delete') {
//             let rec = this.state.record;

//             this.setState({
//                 isOpen: true,
//                 modKeydate: rec.keydate,
//                 modName: rec.name,
//                 modMessage: rec.message,
//                 modDate: rec.date
//             });
//             console.log('rec: ' + this.state.modKeydate);
//             console.log('isOpen: ' + this.state.isOpen);
//         }
//     }

//     closeModal() {
//         this.setState({
//             isOpen: false,
//             inputPassword: ''
//         })
//     }
// }