import React from 'react'
import './form.css'
const Form = () => {
    return (
        <div>
            <div className="container">
                <div className="row form">
                    <div className="col-lg-5 form-classone">
                        <h2>Servicing Hours</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Monday-Friday</th>
                                    <td >Saturday</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >08.00 am - 10.00 pm</td>
                                    <td >08.00 am - 10.00 pm</td>
                                </tr>
                                <tr>
                                    <td >Monday-Friday</td>
                                    <td >Saturday</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-lg-6 form-classtwo">
                        <div className="mb-5">
                            <h2 style={{ textAlign: 'center' }}>Book finserveone</h2>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                        </div>
                        <div className="mb-3">
                            <input type="number" className='form-control' placeholder='Phone' />
                        </div>
                        <div className="mb-3">
                            <input type="date" className='form-control' placeholder='appointment date' />
                        </div>
                        <div className="mb-3">
                            <select class="form-control" aria-label="Default select example">
                                <option selected>Choose service</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <button className='form-control ' style={{ backgroundColor: '#69be00', color: '#fff' }} type='button'>CONFIRM BOOKING</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form