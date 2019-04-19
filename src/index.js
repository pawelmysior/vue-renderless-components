import RenderlessCookiesPopup from './components/RenderlessCookiesPopup';
import RenderlessToggler from './components/RenderlessToggler';

export default {
  install(Vue) {
    Vue.component('renderless-cookies-popup', RenderlessCookiesPopup);
    Vue.component('renderless-toggler', RenderlessToggler);
  },
};

export {
  RenderlessCookiesPopup,
  RenderlessToggler,
};
