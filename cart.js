

const Stop = () => {
       setTimeout(() => {
              const stoptime = document.getElementsByClassName('arrow');
              // Example logic: update the first arrow's content or style after 2 seconds
              if (stoptime.length > 0) {
                     stoptime[0].style.opacity = '0'; // Example: fade arrow
              }
       }, 2000); // 2000ms = 2 seconds
}