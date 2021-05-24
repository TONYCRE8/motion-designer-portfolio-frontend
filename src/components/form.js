import React from 'react'

function Form() {
    return (
        <>
            <p className="text-2xl text-gray-800 m-4 mb-2">Get in touch!</p>
            <p className="text-l text-gray-800 m-4 mt-0 mb-8">Feel free to drop a message here.</p>
            <form className="flex flex-col text-white m-4">
                <input type="text" id="name" name="name" className="text-black placeholder-purple-500 placeholder-opacity-30 mb-2 p-1" placeholder="your name..."/>
                <input type="text" id="email" name="email" className="text-black placeholder-purple-500 placeholder-opacity-30 mb-2 p-1" placeholder="email address..."/>
                <input type="text" id="subject" name="subject" className="text-black placeholder-purple-500 placeholder-opacity-30 mb-2 p-1" placeholder="the subject of your message..."/>
                <textarea id="message" name="message" className="text-black placeholder-purple-500 placeholder-opacity-30 resize-none h-48 mb-4 p-1" placeholder="your message..."/>
                <button className="w-full h-12 bg-gray-800 text-white uppercase">Send</button>
            </form>
        </>
    )
}

export default Form
