import React, {useState, useRef} from 'react'
import axios from 'axios'
import validate from './validator'

function Form() {
    let form = useRef(null);

    const [status, setStatus] = useState({
      submitted: false,
      submitting: false,
      info: {error: false, msg: null}
    })
  
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    const [loading, setLoading] = useState(false)

    const handleServerResponse = (ok, msg) => {
      if (ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: msg },
        });
        setInputs({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          info: { error: true, msg: msg },
        });
      }
    };
    const handleChange = (e) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      if (isValidForm) {
        axios({
          method: 'POST',
          url: `${process.env.REACT_APP_FORMSPREE_URL}`,
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you, your message has been submitted.',
            );
            setLoading(true)
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
      }
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    };

    const isValidName = validate.name(inputs.name)
    const isValidEmail = validate.email(inputs.email)
    const isValidSubject = validate.subject(inputs.subject)
    const isValidMessage = validate.message(inputs.message)
    
    const isValidForm =  isValidName && isValidEmail && isValidSubject && isValidMessage;

    return (
      <>
        <div className="md:w-1/3 w-5/6 md:max-w-md h-42 bg-gray-800 md:-mt-24 mt-36">
            <p className="text-3xl font-inter-extrabold text-purple-200 mx-4 mt-4">Get in touch!</p>
            <p className="text-l text-white mt-0 mx-4">Feel free to drop a message here.</p>
            <form ref={el=>{el = form}} name="contact" onSubmit={handleSubmit} autoComplete="off"
          className="flex flex-col text-white m-4 relative">
              <fieldset disabled={status.submitting} className={`${status.submitting ? 'animate-pulse' : ''}`}>
                  <div>
                    <label htmlFor="name" id="name" className="text-white font-inter-semibold uppercase text-xs">name</label>
                    <div className={`${inputs.name.length > 1 && !isValidName ? 'opacity-90 mt-8' : 'opacity-0 mt-0'} tooltip pointer-events-none block w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-100 ring-red-300 ring-4 p-2`}>Please enter a valid name</div>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleChange}
                    value={inputs.name}
                    className={`${inputs.name.length > 1 && !isValidName ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-black placeholder-gray-800 placeholder-opacity-70 p-1 pl-2 my-2 focus:outline-none`}
                    placeholder="your name..."/>
                  </div>
                  <div>
                    <label htmlFor="email" id="email" className="text-white font-inter-semibold uppercase text-xs">mail</label>
                    <div className={`${inputs.email.length > 2 && !isValidEmail ? 'opacity-90 mt-8' : 'opacity-0 mt-0'} tooltip pointer-events-none block w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-100 ring-red-300 ring-4 p-2`}>Please enter a valid email</div>
                    <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    onChange={handleChange}
                    value={inputs.email}
                    className={`${inputs.email.length > 2 && !isValidEmail ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-black placeholder-gray-800 placeholder-opacity-70 p-1 pl-2 my-2 focus:outline-none`}
                    placeholder="email address..."/>
                  </div>
                  <div>
                    <label htmlFor="subject" id="subject" className="text-white font-inter-semibold uppercase text-xs">subject</label>
                    <div className={`${inputs.subject.length > 2 && !isValidSubject ? 'opacity-90 mt-8' : 'opacity-0 mt-0'} tooltip pointer-events-none block w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-100 ring-red-300 ring-4 p-2`}>Please make a clear subject line</div>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    onChange={handleChange}
                    value={inputs.subject}
                    className={`${inputs.subject.length > 2 && !isValidSubject ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-gray-800 placeholder-gray-800 placeholder-opacity-70 p-1 pl-2 my-2 rounded-sm focus:outline-none`}
                    placeholder="the subject of your message..."/>
                  </div>
                  <div>
                    <label htmlFor="message" id="message" className="text-white font-inter-semibold uppercase text-xs">message</label>
                    <div className="text-xs flex justify-end -mt-4">
                      <p className={`${inputs.message.length > 0 && !isValidMessage ? 'text-red-300' : 'text-white'} font-inter-semibold`}>{inputs.message.length}</p>
                      <p className="text-white">/ 150</p>
                    </div>
                    <div className={`${inputs.message.length > 0 && !isValidMessage ? 'opacity-90 mt-48' : 'opacity-0 mt-40'} tooltip pointer-events-none block w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-100 ring-red-300 ring-4 p-2`}>Please fully describe your inquery in 150 characters or more</div>
                    <textarea
                    id="message"
                    name="message"
                    required
                    onChange={handleChange}
                    value={inputs.message}
                    className={`${inputs.message.length > 0 && !isValidMessage ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-gray-800 placeholder-gray-800 placeholder-opacity-70 resize-none mb-4 my-2 h-48 p-1 pl-2 focus:outline-none`}
                    placeholder="your message..."/>
                  </div>
                  <button
                  type="submit"
                  className="w-full h-12 bg-purple-200 text-gray-800 font-inter-black uppercase disabled:opacity-50 transition-all duration-300"
                  disabled={status.submitting || !isValidForm}>
                  Send
                  </button>
                </fieldset>
            </form>
        </div>
        {status.info.error && (
          <div className="tooltip mt-8 block opacity-90 w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-100 ring-red-300 ring-4 p-2">Error: {status.info.msg}</div>
        )}
        <div className={`${loading ? 'opacity-90' : 'opacity-0'} flex pointer-events-none transition-all duration-200 absolute justify-center items-center mx-auto my-0 h-20 p-8 bg-white ring-green-300 ring-4`}>
          <p className="font-inter-semibold">{status.info.msg}</p>
        </div>
      </>
    )
}

export default Form