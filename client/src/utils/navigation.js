import { router } from "../router/router";
import { removeSession } from "../services/auth.service";


// in this function we get the links to navigate through the page without reload it
export const navigation = () => {
    const navigationLinks = document.querySelectorAll('.navigation');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');

            if (link.id == "logout") {
                removeSession();
            }
            router(path)
        })
    })
}