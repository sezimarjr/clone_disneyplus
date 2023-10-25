document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (ev) {
      const abaAlvo = ev.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodosAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo();
      ev.target.classList.add("shows__tabs__button--is-active");
    });
  }
});

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodosAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
