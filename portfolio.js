for (const explorer of document.querySelectorAll('[data-explorer]')) {
  const buttons = [...explorer.querySelectorAll('button[data-panel]')];
  for (const button of buttons) {
    button.addEventListener('click', () => {
      for (const candidate of buttons) {
        const selected = candidate === button;
        candidate.setAttribute('aria-pressed', String(selected));
        document.getElementById(candidate.dataset.panel).hidden = !selected;
      }
    });
  }
}
