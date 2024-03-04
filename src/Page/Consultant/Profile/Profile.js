import React from 'react'
// -----------------------mui import----------------//
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// ---------------------mui end import---------------//
import './Profile.css'
import image from '../../../Assets/Image/consultantimg-1.jpg'
const Profile = () => {
  return (
    <section id="profile" style={{ marginTop: '16vh' }}>
      <div className="container">
        <h1 className='pro-title'>Profile</h1>
        <div className="row m-0">
          <div className="col-lg-8">
            <div className="row" style={{ display: 'flex', gap: '20px' }}>
              <div className="col-lg-12" >
                <div className="row p-4 first-section">
                  <div className="col-lg-4">
                    <img style={{ height: '30vh' }} src={image} alt="" />
                  </div>
                  <div className="col-lg-6">
                    <h3>Tony Stark</h3>
                    <p>Financial consultant specialist</p>
                    <p>Experience: 5+ years</p>
                    <p>Khandagiri, Bhubaneshwar</p>
                  </div>
                  <div className="col-lg-2">
                    <div>
                      <p style={{ whiteSpace: 'nowrap' }}>Consutation Fee</p>
                      <p className='rupay'>Rs.300</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-4 second-section">
                <div className="profile-review">
                  <button className='profile-btn'>Profile</button>
                  <button className='review-btn'>reviews</button>
                </div>
                <div className="content">
                  <h3>Education:</h3>
                  <p>MBA In Financial management</p>
                  <h3>Specialization:</h3>
                  <p>MBA In Financial management</p>
                  <h3>Services Offered:</h3>
                  <p>MBA In Financial management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="third">
              <div>
                <FormControl>
                  <FormLabel className='title-label' id="demo-radio-buttons-group-label">Select Mode of Consultation</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="person" control={<Radio />} label="In-Person" />
                    <FormControlLabel value="virtual" control={<Radio />} label="Virtual Appointment" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='date'>
                <label>Choose Date</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>select</option>
                  <option value="1">05-06-2024</option>
                  <option value="2">05-07-2024</option>
                  <option value="3">05-08-2024</option>
                </select>
              </div>
              <div className='time'>
                <label>Choose Time</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>select</option>
                  <option value="1">05-06-2024</option>
                  <option value="2">05-06-2024</option>
                  <option value="3">05-06-2024</option>
                </select>
              </div>
              <div className='consultation-btn'>
                <button>Book appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile