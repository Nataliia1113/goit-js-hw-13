// Отримуємо всі елементи слайдера
const reviewersItems = document.querySelectorAll('.reviewers-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Функція для оновлення ширини вьюпорта
function updateViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

window.addEventListener('resize', () => {
  if (updateViewportWidth() >= 1280)
  reviewersItems.forEach((item, i) => (item.style.display = 'list-item'));
});

document.addEventListener('DOMContentLoaded', function () {
  // Початковий індекс активного елемента
  let currentIndex = 0;

  // Функція для зміни відображення елементів
  function toggleMobileDisplay(index) {
    reviewersItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Функція для зміни відображення елементів
  function toggleTabletDisplay(index) {
    reviewersItems.forEach((item, i) => {
      if (i === index || (i > 0 && i === index + 1)) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Обробник подій для кнопки "prev"
  prevButton.addEventListener('click', function () {
    currentIndex =
      (currentIndex - 1 + reviewersItems.length) % reviewersItems.length;
    const viewportWidth = updateViewportWidth();
    if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
    if (viewportWidth >= 768 && viewportWidth < 1280) {
      toggleTabletDisplay(currentIndex);
    }
  });

  // Обробник подій для кнопки "next"
  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % reviewersItems.length;
    const viewportWidth = updateViewportWidth();
    if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
    if (viewportWidth >= 768 && viewportWidth < 1280) {
      toggleTabletDisplay(currentIndex);
    }
  });

  // Обробник події зміни розміру вікна
  window.addEventListener('resize', function () {
    const viewportWidth = updateViewportWidth();
    // Оновити відображення при зміні розміру вікна
    if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
    if (viewportWidth >= 768 && viewportWidth < 1280) {
      toggleTabletDisplay(currentIndex);
    }
  });

  // Встановлення початкового стану
  const viewportWidth = updateViewportWidth();
  if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
  if (viewportWidth >= 768 && viewportWidth < 1280) {
    toggleTabletDisplay(currentIndex);
  }
});

// burger menu event
// const burgerMenu = document.querySelector('.burger-button');
// const closeMenuBtn = document.querySelector('.close-button');
// const backdrop = document.querySelector('.backdrop');
// const modalMenu = document.querySelector('.modal-menu');

// burgerMenu.addEventListener('click', showMenu);
// closeMenuBtn.addEventListener('click', hideMenu);
// modalMenu.addEventListener('click', hideMenu);

// function showMenu() {
//   backdrop.classList.add('is-open');
// }

// function hideMenu() {
//   backdrop.classList.remove('is-open');
// }