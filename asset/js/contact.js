function submitData (event) {
    event.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if(name == "") {
        return alert("name harus di isi")
    } else if(email == "") {
        return alert("email harus di isi")
    } else if(phoneNumber == "") {
        return alert("phoneNumber harus di isi")
    } else if(subject == "") {
        return alert("subject harus di isi")
    } else if(message == "") {
        return alert("message harus di isi")
    }
    
    console.log(name)
    console.log(email)
    console.log(phoneNumber)
    console.log(subject)
    console.log(message)
    
    let a = document.createElement('a')
    a.href = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${message}&bcc=${email}`
    a.click()
} 
