import Vue from "vue";
import OverLay from "./OverLay.vue";
import { getPositionLeft, getPositionTop } from "./utils";

export const overlay = (options) => {
  const OverLayConstruc = Vue.extend(OverLay);
  const instance = new OverLayConstruc();

  if (typeof options.from === "string") {
    options.from = document.querySelector(options.from);
  } else if (options.from) {
    options.from = options.from.$el || options.from;
  } else {
    options.from = document.body;
  }
  if (typeof options.to === "string") {
    options.to = document.querySelector(options.to);
  } else if (options.to) {
    options.to = options.to.$el || options.to;
  } else {
    options.to = document.body;
  }
  const clientTo = options.to.getBoundingClientRect();
  const clientFrom = options.from.getBoundingClientRect();
  const positionST = getPositionTop(clientFrom);
  const positionET = getPositionTop(clientTo);
  const positionSL = getPositionLeft(clientFrom);
  const positionEL = getPositionLeft(clientTo);
  instance.$data.positionSTop = positionST;
  instance.$data.positionSLeft = positionSL;
  instance.$data.positionETop = positionET;
  instance.$data.positionELeft = positionEL;
  instance.$data.duration = options.duration || 1000;
  instance.$data.endScale = options.endScale || 0;
  instance.$data.endOpacity = options.endOpacity || 0;
  instance.$data.startScale = options.startScale || 1;
  instance.$data.startOpacity = options.startOpacity || 1;
  instance.$slots.default = options.render || null;

  const el = instance.$mount().$el;
  options.to.appendChild(el);
  setTimeout(() => {
    options.to.removeChild(el);
    instance.$destroy();
    if (typeof options.done === "function") {
      options.done();
    }
  }, options.duration || 1000);
};

export default (Vue) => {
  Vue.prototype.$overlay = overlay;
};
