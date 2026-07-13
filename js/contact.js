emailjs.init("gBgP6hhJ_cEyz9Li8");

const form = document.querySelector(".contact-form");
const btn = document.querySelector(".btn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    btn.innerHTML = "Sending...";

    btn.disabled = true;

    emailjs.sendForm(

        "service_3h3up7n",

        "template_g4y6q23",

        this

    )

    .then(() => {

        alert("✅ Message Sent Successfully!");

        form.reset();

        btn.innerHTML = "Send Message";

        btn.disabled = false;

    })

    .catch((error) => {

        alert("❌ Failed to Send Message");

        console.log(error);

        btn.innerHTML = "Send Message";

        btn.disabled = false;

    });

});