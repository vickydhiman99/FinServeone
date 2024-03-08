import React from 'react'
import './GettingLoan.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const data = [
    { siNo: 1, title: 'Apply Online', paragraph: 'Lorem ipsum dolor sit amet consectetur.' },
    { siNo: 2, title: 'Upload Document', paragraph: 'Lorem ipsum dolor sit amet consectetur.' },
    { siNo: 3, title: 'Document Veryfied', paragraph: 'Lorem ipsum dolor sit amet consectetur.' },
    { siNo: 4, title: 'BG Check', paragraph: 'Lorem ipsum dolor sit amet consectetur.' },
    { siNo: 5, title: 'Legal Terms', paragraph: 'Lorem ipsum dolor sit amet consectetur.' },
    { siNo: 6, title: 'Loan Procesing', paragraph: 'Lorem ipsum dolor sit amet consectetur.' }

]


const GettingLoan = () => {
    return (
        <div id='getting-loan' className='mt-5'>
            <div className="container">
                <div className='loan-title'>
                    <h1>Benefits of Getting Loan From Us</h1>
                </div>
                <div className="content my-5">
                    <div className='inner-content'>
                        <span ><CheckCircleOutlineIcon className='icon' /></span>
                        <span className='icon'>Competitive Rates</span>
                    </div>
                    <div className='inner-content'>
                        <span><CheckCircleOutlineIcon className='icon' /></span>
                        <span className='icon'>Fast and Easy Process</span>
                    </div>
                    <div className='inner-content'>
                        <span><CheckCircleOutlineIcon className='icon' /></span>
                        <span className='icon'>Hassel Free</span>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'aliceblue', padding:'7vh 5vw 7vh 7vw' }} className="container my-5">
                <div className="card-title">
                    <h1>How Does Our Work Process Work</h1>
                </div>
                <div className="row m-0 card-content-box">
                    {
                        data.map((res, index) => (
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className='main-content'>
                                    <div className='sino'>{res.siNo}</div>
                                    <div>
                                        <h4>{res.title}</h4>
                                        <p>{res.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GettingLoan