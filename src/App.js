import * as React from "react";
import ReactDOM from "react-dom";
import retargetEvents from "react-shadow-dom-retarget-events";
import CollapsibleReact from "./Collapsible";


export default class CollapsiblePanel extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }

  mountPoint;
  title;
  component;

  connectedCallback() {
    this.mountPoint = document.createElement("span");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.mountPoint);

    const title = this.getAttribute("title");
    this.component = ReactDOM.render(
      React.createElement(CollapsibleReact, {}, React.createElement("slot")),
      this.mountPoint
    );
    this.component.setState({ title });
    retargetEvents(shadowRoot);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.component && name === "title") {
      this.component.setState({ title: newValue });
    }
  }


}

window.customElements.define("collapsible-panel", CollapsiblePanel);
