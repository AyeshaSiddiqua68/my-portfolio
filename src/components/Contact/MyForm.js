import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const MyForm = () => {
    const [formMsg, setFormMsg] = useState(true);
    const handleFormSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_gnc60ta', event.target, 'user_lpiJjIn7nmr4M7lMgvwoe'
        ).then(result => {
            console.log('contact us result', result);

            if (result.status === 200) {
                setFormMsg(false)
                let timerInterval
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thank you!',
                    text: 'Thanks! We will get back to you as soon as possible.',
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }

        }).catch(error => {
            console.log('error', error);
        })
        event.target.reset();
    }

    return (
        <div className="text-white pb-5">


            <form onSubmit={handleFormSubmit}>
                <div className="form-floating mb-3 form-group">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name " required />
                    <label className="text-dark">Your name</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <input type="text" name="email" id="user_email" className="form-control" placeholder="Your email address " required />
                    <label className="text-dark">Your email address</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <textarea type="text" name="message" className="form-control" id="your-message" cols="30" rows="10" placeholder="Your message" required></textarea>
                    <label className="text-dark">Write your message here</label>
                </div>
                <button className="btn btn-danger rounded-pill" type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} /> Send
                </button>
            </form>

            {
                !formMsg &&

                <p className="mt-3 text-secondary fw-bold">Thank's for your message!</p>
            }

        </div>

    );
};

export default MyForm;