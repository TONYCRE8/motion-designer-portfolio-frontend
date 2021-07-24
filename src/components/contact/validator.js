function validateName(maybeName) {
    return maybeName && maybeName.length > 1
  }
  
  function validateMail(maybeMail) {
    return (
      maybeMail &&
      maybeMail.length > 5 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        maybeMail
      )
    )
  }
  
  function validateSubject(maybeSubject) {
    return maybeSubject && maybeSubject.length > 5
  }
  
  function validateMessage(maybeMessage) {
    return maybeMessage && maybeMessage.length > 149
  }
  
  export default {
    mail: validateMail,
    name: validateName,
    subject: validateSubject,
    message: validateMessage,
  }
  
