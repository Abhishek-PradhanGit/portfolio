const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Form values
    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const subject = contactForm.elements["subject"].value;
    const message = contactForm.elements["message"].value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);


    // Send data to backend
    fetch("http://localhost:5000/api/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })

    })

    .then(response => response.json())

    .then(data => {

        console.log("Server Response:", data);

        if (data.success) {

            alert("Thank you " + name + "! Your message has been sent.");

            contactForm.reset();
        }

    })

    .catch(error => {

        console.error("Error:", error);

        alert("Unable to send message.");

    });

});