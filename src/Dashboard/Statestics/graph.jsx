import React from 'react';
import Form from 'react-bootstrap/Form';
import Location from './Location';
import SearchBar from './SearchBar';
import './graph.css';
import { FaSearch } from 'react-icons/fa';

const Graph = () => {
    return (
        <div className='graph'>
            <div className='form' style={{ width: '50%', marginLeft: '25%' }}>
                <h1 style={{ textAlign: 'center' }}><b>Donation Center</b></h1>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Latitute"
                        color='#88979e'
                    />
                    <label htmlFor="floatingInputCustom">Latitude</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Latitute"
                        color='#88979e'
                    />
                    <label htmlFor="floatingInputCustom">Longitude</label>
                </Form.Floating>
            </div>
            <div className='search-bar-container' style={{ width: '50%', marginLeft: '25%' }}>
                    <div className='search-Bar'>
                        <FaSearch id='search-icon'/>
                        <input placeholder='Type to search...' />
                    </div>
            </div>
            <br />
            <br />

        </div>
    );
}

export default Graph;
