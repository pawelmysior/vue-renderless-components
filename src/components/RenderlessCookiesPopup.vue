<script>
  import Cookies from 'tiny-cookie';

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
        return !Cookies.get(this.name);
      },
      show() {
        this.hidden = false;
      },
      hide() {
        Cookies.set(this.name, 'accepted', {expires: '1Y'});

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
