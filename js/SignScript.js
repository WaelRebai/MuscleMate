window.onload = function() {
    const balls = document.querySelectorAll('.ball');
    
    balls.forEach((ball) => {
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 5; 
      const randomDuration = Math.random() * 5 + 5;
      
      ball.style.animationDelay = `${randomDelay}s`;
      ball.style.animationDuration = `${randomDuration}s`;
      ball.style.left = `${randomLeft}vw`;
      ball.style.top = `-60%`;
    });
  };
  