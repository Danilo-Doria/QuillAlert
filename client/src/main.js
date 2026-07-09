import './styles/style.css'
import { handleLocation } from "./router/router";
import { menuToggle } from './utils/menuToggle';

// main entry point of the application, it listens to the popstate event and calls the handleLocation function to render the correct view based on the current URL
window.addEventListener('popstate', handleLocation);

// call the handleLocation function to render the correct view based on the current URL when the page is loaded
handleLocation();

menuToggle(window.location.pathname);