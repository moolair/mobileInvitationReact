import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { render } from '@testing-library/react';
import App from '../../App';
// export const db = database;
import { CrudPanel } from './crudPanel';

let UniqueNum = 0;

export class RealtimeData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        // this.interface = this.interface.bind(this);
    }

    componentDidMount() {
        const dbRef = ref(database, 'guests');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let childData = childSnapshot.val();
                records.push({ "key": keyName, "data": childData });
            })
            this.setState({ data: records });
        });
    }

    // modalState(val) {
    //     const index = val;
    //     console.log(index);
    // }

    render() {
        return (
            <div>
                <div className="container">
                    <div className='row'>
                        {this.state.data.reverse().map((row, index) => {
                            return (
                                <div key={UniqueNum++} className="card col-12 mb-4" >
                                    <div className="card-body">
                                        <CrudPanel keyDate={row.key} record={row.data} />
                                        <h5 id='guestName' className="card-title">
                                            {index + 1}
                                            {row.data.name}
                                        </h5>
                                        <p id='guestMessage' className="card-text">{row.data.message}</p>
                                        <p id='guestDate' className="card-text text-right small" >{row.data.date}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        );
    }
}

