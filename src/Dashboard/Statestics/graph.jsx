import React from 'react';
import Form from 'react-bootstrap/Form';
import Location from './locatiion';

const Graph = () => {
    return (
        <div className='graph'>
            <div className='form' style={{ width: '50%',marginLeft:'25%'}}>
                <h1 style={{textAlign: 'center'}}><b>Donation Center</b></h1>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Latitute"
                    />
                    <label htmlFor="floatingInputCustom">Latitude</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        placeholder='Longitute'
                    />
                    <label htmlFor="floatingPasswordCustom">Longitude</label>
                </Form.Floating>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Graph;
