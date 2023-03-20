import StartFirebase from '../firebase'
import { database } from '../firebase';
import { ref, set, remove, child, get } from 'firebase/database';
import React from 'react';
import { InputGroup } from 'reactstrap';

export class CrudPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: {
                keydate: props.keydate,
                name: props.record.name,
                message: props.record.message,
                password: props.record.password,
                date: props.record.date
            },
            modKeyDate: '',
            modName: '',
            modMessage: '',
            modDate: '',
            inputPassword: ''
        }
    }

    componentDidMount() {
        console.log(this.state.record);
    }

    getAllData() {
        return {
            id: this.state.modKeyDate,
            data: {
                name: this.state.modName,
                message: this.state.modMessage,
                date: this.state.modDate
            }
        }
    }

    interface(option) {
        if (option == 'delete')
            this.deleteData();

        this.closeModal();
    }

    deleteData() {
        const dbRef = ref(database);
        const record = this.getAllData();
        const address = 'guests/' + record.id;

        get(child(dbRef, address)).then(snapshot => {
            if (snapshot.exists()) {
                // console.log(this.state.modKeyDate);
                remove(ref(database, address));
            }
            else {
                alert('cannot delete, user does not exist');
            }
            this.inputPassword = '';
        })
    }

    isPasswordCorrect() {
        // console.log(this.state.inputPassword);
        if (this.state.inputPassword === this.state.record.password) {
            return true;
        } else
            return false;
    }

    openModal(option) {
        if (option == 'delete') {
            let rec = this.state.record;

            this.setState({
                isOpen: true,
                modKeyDate: rec.keyDate,
                modName: rec.name,
                modMessage: rec.message,
                modDate: rec.date
            });
        }
    }

    closeModal() {
        this.setState({
            isOpen: false,
            inputPassword: ''
        })
    }

    render() {
        return (
            <div>
                <button id='close' type="button" className="close" data-toggle="modal" data-target="#exampleModal"
                    onClick={() => { this.openModal('delete') }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>

                {/* Modal */}
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                    show={this.state.isOpen}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">메세지를 지우시겠습니까?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-left'>{this.state.record.name}</p>
                                {/* <p className='text-left'>{e=>{this.setState({modName: e.target.value})}}</p> */}
                                <p className='text-left'>{this.state.record.message}</p>
                                <p className='text-left'>{this.state.record.date}</p>
                                <input className='form-control'
                                    onChange={e => { this.setState({ inputPassword: e.target.value }) }}
                                    value={this.state.inputPassword}
                                    type="password" placeholder="암호를 입력하시고 지우세요." />
                            </div>
                            <div className="modal-footer">
                                <button id="delete" type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={() => { this.interface('delete') }}
                                    disabled={!this.isPasswordCorrect()}
                                >지우기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}