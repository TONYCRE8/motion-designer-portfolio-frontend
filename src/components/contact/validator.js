function validateName(maybeName) {
    return maybeName && maybeName.length > 1
  }

  function validateEmail(maybeEmail) {
    return (
      maybeEmail &&
      maybeEmail.length > 5 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        maybeEmail
      )
    )
  }

  function validateSubject(maybeSubject) {
    return maybeSubject && maybeSubject.length > 5
  }

  function validateMessage(maybeMessage) {
    return maybeMessage && maybeMessage.length > 149
  }

  const validated = {
    name: validateName,
    email: validateEmail,
    subject: validateSubject,
    message: validateMessage
  }

  export default validated