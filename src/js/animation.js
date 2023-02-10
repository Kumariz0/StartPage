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
