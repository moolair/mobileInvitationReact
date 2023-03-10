import React, { useState } from 'react';
import StartFirebase from '../firebase';
import { ref, onValue } from 'firebase/database';
import { render } from '@testing-library/react';

const db = StartFirebase();

export class RealtimeData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'guests');

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

    render() {
        return (
            <div>
                <div className="container">
                    <div className='row'>
                        {this.state.data.map((row, index) => {
                            return (
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{index} {row.key}</h5>
                                            <p class="card-text">{row.data.message}</p>

                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}