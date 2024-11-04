const navbar = document.querySelector("nav");

function animation() {
    var controller = new ScrollMagic.Controller();

    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
    t1.fromTo(
        ".home ,.content",
        0.6,
        { x: "-10rem", opacity: 0 },
        { x: 0, opacity: 1 },
        "-=1"
    );
    t1.fromTo(
        ".image",
        0.5,
        { x: "5rem", opacity: 0 },
        { x: 0, opacity: 1 }
    );
    t1.fromTo(".image", 0.5, { scale: 1.5 }, { scale: 1 });

    // about animations

    const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t2.fromTo(
        ".header",
        0.5,
        { x: "-3rem", opacity: 0 },
        { x: 0, opacity: 1 }
    );
    t2.fromTo(".about-img", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
    t2.fromTo(".about-img img", 0.5, { scale: 1.5 }, { scale: 1 });

    new ScrollMagic.Scene({
        triggerElement: "#services",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t2)
        .addTo(controller);

    // card animations

    const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t3.fromTo(
        ".card",
        1,
        { y: "-3rem", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 }
    );

    new ScrollMagic.Scene({
        triggerElement: ".card",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t3)
        .addTo(controller);
}

// const t4=gsap.timeline({defaults:{ease:Expo.InOut}});
// t4.fromTo(
//     ".container"
// )

animation();
