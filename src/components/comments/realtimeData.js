import React, { useState } from 'react';
import StartFirebase from '../firebase';
import { ref, onValue } from 'firebase/database';
import { render } from '@testing-library/react';

export const db = StartFirebase();

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
                        {this.state.data.reverse().map((row, index) => {
                            return (
                                <div className="card col-12 mb-4">
                                    <div className="card-body">

                                        <h5 className="card-title">
                                            {/* {index} */}
                                            {/* {row.key} */}
                                            {row.data.name}

                                        </h5>
                                        <p className="card-text">{row.data.message}</p>
                                        <p className="card-text">{row.key}</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}