import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import RootLayout from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootLayout,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
          Error Evan
      </div>
    );
  },
  domElementGetter
});
function domElementGetter() {
  let el = document.getElementById("menuPanel");
  if (!el) {
    el = document.createElement('div');
    el.id = 'menuPanel';
    document.body.appendChild(el);
  }
  return el;
}

export const { bootstrap, mount, unmount } = lifecycles;
