import { html, css, LitElement } from 'lit-element';

export class HeympButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      button {
        background: lightblue;
        color: black;
        border: none;
      }
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button><slot></slot></button>
    `;
  }
}
