import { html, css, LitElement } from 'lit-element';
import "heymp-button/heymp-button.js";

export class HeympBanner extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        color: var(--heymp-banner-text-color, #000);
      }

      #banner {
        display: flex;
        flex-direction: column;
        height: 40vw;
        max-height: 400px;
        background: purple;
        width: 100%;
        align-items: center;
        justify-content: center;
        color: white;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
  }

  render() {
    return html`
      <div id="banner">
        <h1>${this.title}</h1>
        <div id="slot">
          <slot></slot>
        </div>
        <div id="button"><heymp-button>Click Here</heymp-button></div>
      </div>
    `;
  }
}
