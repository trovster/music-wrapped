export default class MusicWrapped extends HTMLElement {
  static observedAttributes = ['seconds', 'genre'];

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const lists = this.querySelectorAll('ol[title]');
    const container = document.createElement('div');

    const style = document.createElement('style');
    style.textContent = this.style();

    this.shadow.appendChild(style);
    this.shadow.appendChild(container);

    lists.forEach(ol => {
      const wrapper = document.createElement('div');
      const heading = document.createElement('h3');
      heading.textContent = ol.getAttribute('title');

      container.appendChild(wrapper);
      wrapper.appendChild(heading);
      wrapper.appendChild(ol);
    });

    container.insertAdjacentHTML('beforeend', this.minutes());
    container.insertAdjacentHTML('beforeend', this.genre());
  }

  disconnectedCallback() {}

  // Conversions.
  number = number => Number(number).toLocaleString();

  style() {
    return `
      :host {
        container: music-wrapped / inline-size;
        display: block;
      }

      :host > div {
        display: grid;
        gap: 1.5rem;
      }

      div > h3 {
        font-size: 1.333rem;
        margin: 0 0 0.25rem;
        font-weight: normal;
      }

      ol {
        list-style-position: outside;
        margin: 0;
        padding: 0 0 0 1.25rem;
        font-weight: bold;
      }

      p {
        margin: 0 0 1rem;
        font-size: 2rem;
        line-height: 0.75;
        font-weight: bold;
      }

      @container (min-width: 30rem) {
        :host > div {
          grid-template-columns: repeat(auto-fill, minmax(calc(50% - 1.5rem), 1fr));
        }
        p {
          font-size: 2.75rem;
        }
      }
    `;
  }

  minutes() {
    return this.getAttribute('seconds')
      ? `
    <div>
      <h3>Minutes Listened</h3>
      <p>${this.number(this.getAttribute('seconds') / 60)}</p>
    </div>
    `
      : '';
  }

  genre() {
    return this.getAttribute('genre')
      ? `
    <div>
      <h3>Top Genre</h3>
      <p>${this.getAttribute('genre')}</p>
    </div>
    `
      : '';
  }
}

if ('customElements' in window) {
  window.customElements.define('music-wrapped', MusicWrapped);
}
