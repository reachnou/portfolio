import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            emailjs.sendForm('service_3pe4pa9', 'template_l2o4srf', e.target, 'QC8Vmk_AzpUzJcEFm')
                .then((result) => {
                    if (result.text === 'OK') {
                        setSuccess(true);
                        setLoading(false);
                    }
                }, (error) => {
                    console.log(error.text);
                });
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    return (
        <div className='pe-3 ps-3'>
            <p className='fw-bold fs-5 text-center'>Send Email</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name <span className='text-danger'>*</span></label>
                    <input type="text" className="form-control" name="from_name" placeholder="" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address <span className='text-danger'>*</span></label>
                    <input type="email" className="form-control" name="email" placeholder="" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Subject <span className='text-danger'>*</span></label>
                    <input type="text" className="form-control" name="message-subject" placeholder="" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone <span className='text-secondary' style={{ fontSize: '12px' }}>(Optional)</span></label>
                    <input type="text" className="form-control" name="phone" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message <span className='text-danger'>*</span></label>
                    <textarea className="form-control" name="message" placeholder="" required rows="3"></textarea>
                </div>
                <button type="submit" className='btn btn-success float-end'>
                    {loading ? <div>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Loading...
                    </div> : 'Submit'}
                </button>
                {success && <p className='text-success fw-bold'>Email sent successfully!</p>}
            </form>
        </div>
    );
};

export default ContactForm;
