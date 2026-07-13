particlesJS("particles-js", {

    particles: {

        number: {
            value: 60
        },

        color: {
            value: "#EC4899"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.3
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#7C3AED",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        }

    },

    retina_detect: true

});