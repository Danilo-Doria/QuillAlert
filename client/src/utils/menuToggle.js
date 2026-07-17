export function menuToggle() {

    document.addEventListener('click', (e) => {
      const currentView = window.location.pathname;
      const menuBtn = e.target.closest('.menu-btn');
    
      if (currentView === '/') {
        const mobileNav = document.getElementById('mobile-nav');

        if (!mobileNav) return;

        if (menuBtn) {
          mobileNav.classList.toggle('hidden');
          mobileNav.classList.toggle('block');
        } 

        else if (e.target.closest('#mobile-nav a')) {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('block');
        }
      
        else if (!e.target.closest('#mobile-nav')) {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('block');
        }

      } else {
      
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        if (!sidebar || !overlay) return;

        if (e.target.closest('.menu-btn')) {
          sidebar.classList.toggle('-translate-x-full');
          overlay.classList.toggle('hidden');
        }

        if (e.target === overlay) {
          sidebar.classList.add('-translate-x-full');
          overlay.classList.add('hidden');
        }
      }
    });
}