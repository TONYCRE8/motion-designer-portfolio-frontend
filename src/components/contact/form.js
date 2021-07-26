import React, {useState, useRef} from 'react'
import validate from './validator'

function Form() {
    let form = React.createRef();

    const [success, setSuccess] = useState(false)
  
    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
      }
  
    const [pretendState, setFormValues] = useState({
      mail: "",
      name: "",
      subject: "",
      message: "",
    })
    const [loading, setLoading] = useState(false)
   
    function handleChange({ target: { value, name } }) {
      setFormValues(previousValues => ({ ...previousValues, [name]: value }))
      console.log(pretendState)
    }
   
    async function handleSubmit(event) {
      event.preventDefault();
      const netlifyForm = form.current;
      if(isValidForm) {
        setLoading(true);
     
        await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
              "form-name": netlifyForm.getAttribute("name"),
              ...pretendState
            }),
          // body: new URLSearchParams({name: name, mail: mail, subject: subject, message: message}).toString()
        });
    
        setSuccess(true)
    
        setTimeout(() => {
          setLoading(false);
          setSuccess(false)
          netlifyForm.reset()
        }, 5000)
      }
    }

    const isValidMail = validate.mail(pretendState.mail)
    const isValidName = validate.name(pretendState.name)
    const isValidSubject = validate.subject(pretendState.subject)
    const isValidMessage = validate.message(pretendState.message)
    
    const isValidForm = isValidMail && isValidName && isValidSubject && isValidMessage;

    return (
        <>
            <p className="text-3xl font-inter-extrabold text-purple-200 mx-4 mt-4">Get in touch!</p>
            <p className="text-l text-white mt-0 mx-4">Feel free to drop a message here.</p>
            <form ref={form} name="contact" onSubmit={handleSubmit} method="POST" autoComplete="off"
          className="flex flex-col text-white m-4 relative">
              <fieldset disabled={loading}>
                  <div>
                    <label htmlFor="name" id="name" className="text-white font-inter-semibold uppercase text-xs">name</label>
                    <div className={`${pretendState.name.length > 1 && !isValidName ? '' : 'hidden'} tooltip mt-8 block opacity-90 w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-300 p-2`}>Please enter a valid name</div>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleChange}
                    className={`${pretendState.name.length > 1 && !isValidName ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-black placeholder-gray-800 placeholder-opacity-70 p-1 pl-2 my-2 focus:outline-none`}
                    placeholder="your name..."/>
                  </div>
                  <div>
                    <label htmlFor="mail" id="mail" className="text-white font-inter-semibold uppercase text-xs">mail</label>
                    <div className={`${pretendState.mail.length > 2 && !isValidMail ? '' : 'hidden'} tooltip mt-8 block opacity-90 w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-300 float-right p-2`}>Please enter a valid email</div>
                    <input
                    type="text"
                    id="mail"
                    name="mail"
                    required
                    onChange={handleChange}
                    className={`${pretendState.mail.length > 2 && !isValidMail ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-black placeholder-gray-800 placeholder-opacity-70 p-1 pl-2 my-2 focus:outline-none`}
                    placeholder="email address..."/>
                  </div>
                  <div>
                    <label htmlFor="subject" id="subject" className="text-white font-inter-semibold uppercase text-xs">subject</label>
                    <div className={`${pretendState.subject.length > 2 && !isValidSubject ? '' : 'hidden'} tooltip mt-8 block opacity-90 w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-300 float-right p-2`}>Please fully describe your inquery in 150 characters or more</div>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    onChange={handleChange}
                    className={`${pretendState.subject.length > 2 && !isValidSubject ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-gray-800 placeholder-gray-800 placeholder-opacity-70 p-1 pl-2 my-2 rounded-sm focus:outline-none`}
                    placeholder="the subject of your message..."/>
                  </div>
                  <div>
                    <label htmlFor="message" id="message" className="text-white font-inter-semibold uppercase text-xs">message</label>
                    <div className="text-xs flex justify-end -mt-4">
                      <p className="text-white font-inter-semibold">{pretendState.message.length}</p>
                      <p className="text-white">/ 150</p>
                    </div>
                    <div className={`${pretendState.message.length > 0 && !isValidMessage ? '' : 'hidden'} tooltip mt-48 block opacity-90 w-full transition-all duration-300 font-inter-semibold text-gray-800 text-center bg-red-300 float-right p-2`}>Please fully describe your inquery in 150 characters or more</div>
                    <textarea
                    id="message"
                    name="message"
                    required
                    onChange={handleChange}
                    className={`${pretendState.message.length > 0 && !isValidMessage ? 'ring-red-300 ring-2' : ''} transition-shadow duration-150 font-inter-medium w-full text-gray-800 placeholder-gray-800 placeholder-opacity-70 resize-none mb-4 my-2 h-48 p-1 pl-2 focus:outline-none`}
                    placeholder="your message..."/>
                  </div>
                  <button
                  type="submit"
                  className="w-full h-12 bg-purple-200 text-gray-800 font-inter-black uppercase disabled:opacity-50 transition-all duration-300"
                  disabled={!isValidForm}>
                  Send
                  </button>
                </fieldset>
            </form>
            {/* <div className=
            {`${pretendState.name.length > 2 && !isValidName ||
            pretendState.mail.length > 2 && !isValidMail ||
            pretendState.subject.length > 2 && !isValidSubject ||
            pretendState.message.length > 0 && !isValidMessage ? '' : 'opacity-0'} transition-all duration-300 font-inter-semibold text-center bg-red-300 p-4`}>
                {
                pretendState.name.length > 2 && !isValidName
                ? "Please enter a valid name"
                : pretendState.mail.length > 2 && !isValidMail
                ? "Please enter a valid email"
                : pretendState.subject.length > 2 && !isValidSubject
                ? "Please enter a descriptive subject"
                : pretendState.message.length > 0 && !isValidMessage
                ? "Please fully describe your inquery in 150 characters or more"
                : ""
                }
            </div> */}
        </>
    )
}

export default Form