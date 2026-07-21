import { loading } from "../components/loading";

// This function is used to set the loading state of the application. It is called when the user submits a form, and it displays a loading spinner while the request is being processed. The loading spinner is displayed in the "loading" div 
export const setIsLoading = () => {
    const isLoading = document.querySelector(".loading");        
    isLoading.innerHTML = loading()    
}