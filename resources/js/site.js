// This is all you.
import MobileMenu from "./components/MobileMenu";

window.addEventListener('hashchange', () => {
    let hash = window.location.hash.substring(1);

    const element = document.getElementById(hash);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
});

window.addEventListener('load', () => {
    const element = document.getElementById('mobile-menu');

    if (element) {
        new MobileMenu(element);
    }
});
