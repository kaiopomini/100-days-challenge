// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const result = document.querySelector('.result')
  let deg = 0;

  function getResult(deg) {
    const result = {
      0: "Frog",
      1: "Slug",
      2: "Dolphin",
      3: "Ladybug",
      4: "Koala",
      5: "Unicorn",
      6: "Dragon",
      7: "Snowman"
    }

    return result[Math.floor(deg / 45)]
  }

  startButton.addEventListener('click', () => {
    result.classList.add('hidden')
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 10s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
    
  })

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur')
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`
    result.innerHTML = `<h1>${getResult(actualDeg)}</h1>`
    result.classList.remove('hidden')

  })
})();
