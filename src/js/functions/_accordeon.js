export default class Accordion {
  constructor(element) {
    this.element = element;
    this.summary = element.querySelector('summary');
    this.content = element.querySelector('summary + div');
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', e => {
      this.onClick(e);
    });
  }

  onClick(e) {
    e.preventDefault();
    this.element.style.overflow = 'hidden';

    if (this.isClosing || !this.element.open) {
      this.open();
    } else if (this.isExpanding || this.element.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.element.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animationElement(startHeight, endHeight);
    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => (this.isClosing = false);
  }

  open() {
    this.shrink();

    this.element.style.height = `${this.element.offsetHeight}px`;

    this.element.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  animationElement(startHeight, endHeight) {
    this.animation = this.element.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease',
      }
    );
  }

  onAnimationFinish(open) {
    this.element.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.element.style.height = this.element.style.overflow = '';
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.element.offsetHeight}px`;
    const endHeight = `${
      this.summary.offsetHeight + this.content.offsetHeight
    }px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animationElement(startHeight, endHeight);
    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => (this.isExpanding = false);
  }
}

[...document.querySelectorAll('details')].forEach(el => {
  new Accordion(el);
});
