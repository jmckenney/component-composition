import { LitElement, html } from "lit-element";

class ChildComponent extends LitElement {
  render() {
    return html`
      <h1>Hello world josh!</h1>
      <slot></slot>
    `;
  }
}

customElements.define("child-component", ChildComponent);

class ChildComponentTwo extends LitElement {
  render() {
    return html`
      <p>I'm a simple child component</p>
    `;
  }
}

customElements.define("child-component-two", ChildComponentTwo);

class GrandChildComponent extends LitElement {
  render() {
    return html`
      <p>I'm a grand child, deep in the shadow root(s)</p>
      <slot>

      </slot>
    `;
  }
}

customElements.define("grand-child-component", GrandChildComponent);

class MyComponent extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("my-component", MyComponent);
