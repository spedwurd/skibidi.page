cursorMove = 0;

async function cursorMoved(event) { // aligns custom cursors
  cursorMove += 1;
  let x = event.pageX;
  let y = event.pageY;
  if (cursorMove%2==0) { // every second time cursor moves it adds trail to lessen the clutter
    let trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x}px`
    trail.style.top = `${y}px`
    document.body.appendChild(trail);
    trail.addEventListener('animationend', () => {
      trail.remove();
    })
  }

  const cursorInfo = document.getElementById('cursor');
  cursorInfo.style.top = y-6 + 'px';
  cursorInfo.style.left = x-4 + 'px';

  const cursorOutlineInfo = document.getElementById('cursor_outline');
  cursorOutlineInfo.style.top = y-15 + 'px';
  cursorOutlineInfo.style.left = x-11.5 + 'px'
}