<script>
  import { getCookie, setCookie } from 'tiny-cookie';

  export default {
    data() {
      return {
        hidden: true,
        name: window.location.host.replace(/^www\./, '').replace('.', '') + '-cookies-popup',
      };
    },
    created() {
      if (this.firstVisit()) {
        this.show();
      }
    },
    methods: {
      firstVisit() {
        return !getCookie(this.name);
      },
      show() {
        this.hidden = false;
      },
      hide() {
        setCookie(this.name, 'accepted', {expires: '1Y'});

        this.hidden = true;
      },
    },
    render() {
      return this.$scopedSlots.default({
        hidden: this.hidden,
        hide: this.hide,
      });
    },
  };
</script>
