// This is all you.
window.addEventListener('hashchange', () => {
    let hash = window.location.hash.substring(1);

    const element = document.getElementById(hash);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
});
