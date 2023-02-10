//animation ✏️

document
    .querySelectorAll("*")
    .forEach((el) => (el.style.opacity = 0));

// anime.js animation function
function playAnimation() {
    var tl = anime.timeline({
        easing: "easeInOutExpo",
        duration: 2200,
    });

    tl.add({
        targets: ".gif",
        opacity: [0, 1],
        translateY: [200, 0],
    })
        .add(
            {
                targets: ".gif",
                width: ["100%", "60%"],
            },
            "-=1400"
        )
        .add(
            {
                targets: "main *",
                opacity: [0, 1],
                translateY: [10, 0],
                delay: anime.stagger(20),
            },
            "-=1800"
        )
        .add(
            {
                targets: ".toggle-svg",
                opacity: [0, 1],
                translateY: [-50, 0],
                delay: anime.stagger(20),
            },
            "-=1800"
        );
}

function changesvg(elementIn, elementOut) {
    if (elementIn == ".work-svg") {
        anime({
            targets: elementIn,
            translateX: ["0px", "58px"],
            easing: 'easeInOutExpo',
        });
        anime({
            targets: elementOut,
            translateY: ["58px", "0px"],
            easing: 'easeInOutExpo',
        });
    }
    if (elementIn == ".home-svg") {
        anime({
            targets: elementIn,
            translateY: ["0px", "58px"],
            easing: 'easeInOutExpo',
        });
        anime({
            targets: elementOut,
            translateX: ["58px", "0px"],
            easing: 'easeInOutExpo',
        });
    }
}

function startAnimation(elementIn) {
    if (elementIn == ".work-svg") {
        anime({
            targets: elementIn,
            translateX: ["0px", "58px"],
            easing: 'easeInOutExpo',
        });
    } else {
        anime({
            targets: elementIn,
            translateY: ["0px", "58px"],
            easing: 'easeInOutExpo',
        });
    }
}

function removelinkanimation() {
    anime({
        targets: "main ul",
        opacity: {
            value: 0,
            duration: 10,
            easing: 'linear'
        },
    });

}
function restorelinkanimation() {
    anime({
        targets: "main ul, h3",
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(20),
    });
}