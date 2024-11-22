const menuBtn = document.querySelector('.nav-btn');

if (!menuBtn) throw new Error('menu toggle button is not in DOM');

menuBtn.addEventListener('click', () => {
  const state = menuBtn.getAttribute('data-state');

  const sheetContainer = document.querySelector('.sheet-container');
  const sheetOverlay = document.querySelector('.sheet-overlay');
  const sheet = document.querySelector('.sheet');

  const closeMobileNav = () => {
    sheetContainer.classList.add('hide');
    menuBtn.dataset.state = 'close';
  };

  if (state === 'close') {
    sheetContainer.classList.remove('hide');
    menuBtn.dataset.state = 'open';

    sheet.addEventListener(
      'click',
      (event) => {
        if (event.target instanceof HTMLAnchorElement) {
          closeMobileNav();
        }
      },
      true
    );

    sheetOverlay.addEventListener(
      'click',
      (event) => {
        const target = event.target;

        if (target === sheetOverlay) {
          closeMobileNav();
        }
      },
      true
    );

    const menuClose = document.querySelector('.mobile-nav-close');

    menuClose.addEventListener('click', closeMobileNav, true);
  }
});
