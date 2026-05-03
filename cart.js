const Stop = () => {
       setTimeout(() => {
              const stoptime = document.getElementsByClassName('arrow').value;
              // Example logic: update the first arrow's content or style after 2 seconds
              if (stoptime.length > 0) {
                     stoptime[0].style.opacity = '0'; // Example: fade arrow
              }
       }, 2000); // 2000ms = 2 seconds
}

const sidebar = () => {
       // Get the sidebar by id
       const sidebar = document.getElementById('sidebar');
       if (sidebar) {
              sidebar.style.opacity = '1';
       }
}

// Example: Attach sidebar function to menu button click
document.addEventListener('DOMContentLoaded', () => {
       const menuButtons = document.getElementsByClassName('menu');
       Array.from(menuButtons).forEach(btn => {
              btn.addEventListener('click', sidebar);
       });
});