const pages = [
  {
    title: 'The First Flutter',
    copy: 'A small act of faith opens wide like wings catching morning light.',
  },
  {
    title: 'Hidden Colors',
    copy: 'Every page carries a pattern, even before the reader can see it.',
  },
  {
    title: 'Brave Lift',
    copy: 'The wings close for a breath, then reopen with courage for the next step.',
  },
  {
    title: 'Garden Path',
    copy: 'Each turn lands softly on another bloom of story, wonder, and purpose.',
  },
];

const book = document.querySelector('#butterflyBook');
const flapButton = document.querySelector('#flapButton');
const pageNumber = document.querySelector('#pageNumber');
const pageTitle = document.querySelector('#pageTitle');
const pageCopy = document.querySelector('#pageCopy');
const status = document.querySelector('#status');

let currentPage = 0;
let isFlapping = false;

function renderPage() {
  const page = pages[currentPage];
  pageNumber.textContent = `Page ${currentPage + 1}`;
  pageTitle.textContent = page.title;
  pageCopy.textContent = page.copy;
  status.textContent = `Opened ${pageNumber.textContent}: ${page.title}.`;
}

function flapToNextPage() {
  if (isFlapping) return;

  isFlapping = true;
  status.textContent = 'Wings closing...';
  book.classList.add('flapping');

  window.setTimeout(() => {
    currentPage = (currentPage + 1) % pages.length;
    renderPage();
    status.textContent = 'New page revealed as the wings reopen.';
    book.classList.remove('flapping');
  }, 720);

  window.setTimeout(() => {
    isFlapping = false;
  }, 1450);
}

book.addEventListener('click', flapToNextPage);
flapButton.addEventListener('click', flapToNextPage);
renderPage();
