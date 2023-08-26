import React, { useState } from 'react';
import StartFirebase from '../firebase';
import { ref, onValue, query, orderByChild } from 'firebase/database';
import { render } from '@testing-library/react';
import App from '../../App';
// export const db = database;
import CrudPanel from './crudPanel';

let UniqueNum = 0;
const db = StartFirebase();
const topUserPostsRef = query(ref(db, 'guests/'));

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

    /*Aug 26, 2023
    YJ
    does not require shouldComponentUpdate
    */
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.warn(prevProps);
    //     // return true;
    //     if (this.state.data !== nextState.data) {
    //         console.log('SCU is true');
    //         return true;
    //     }
    //     console.log('SCU is false');

    //     return false;
    // }
    //END AUG 26, 2023


    render() {
        console.warn('inside render');
        return (
            <div>
                <div className="container">
                    <div className='row'>
                        {this.state.data.reverse().map((row, index) => {
                            return (
                                <div key={UniqueNum++} className="card col-12 mb-4" >
                                    <div className="card-body">
                                        <CrudPanel keyName={row.key} record={row.data} />
                                        <h5 id='guestName' className="card-title">

                                            {row.data.name}
                                        </h5>
                                        <p id='guestMessage' className="card-text">{row.data.message}</p>
                                        <p id='guestDate' className="card-text text-right small" >{row.data.date}</p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* {topUserPostsRef} */}
                    </div>
                </div>
            </div >
        );
    }
}

