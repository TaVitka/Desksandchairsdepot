const tabsContainer = document.querySelector('.tabs');
const tabsList = tabsContainer?.querySelector('.tabs__nav');
const tabButtons = tabsList?.querySelectorAll('.tabs__btn');
const tabPanels = tabsContainer?.querySelectorAll('.tabs__pane > div');

tabButtons?.forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  if (index === 0) {
    tab.classList.add('selected');
  } else {
    for (tabPanel of tabPanels) {
      if (tabPanel.dataset.id !== document.querySelector('.selected').dataset.btn) {
        tabPanel.setAttribute('hidden', '');
      }
    }
  }
});

tabsList?.addEventListener('click', e => {
  const clickedTab = e.target.closest('.tabs__btn');
  const allTabs = tabsList.querySelectorAll('.tabs__btn');

  tabsContainer.scrollIntoView({
    behavior: 'smooth',
  });

  if (!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);

  allTabs.forEach(tab => {
    tab.classList.remove('selected');
  });

  clickedTab.classList.add('selected');
});

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute('data-btn');
  const activePanel = tabsContainer.querySelectorAll(`[data-id="${activePanelId}"]`);

  tabPanels?.forEach(panel => {
    panel.setAttribute('hidden', true);
  });

  activePanel.forEach(active => {
    active.removeAttribute('hidden', false);
  })
}
