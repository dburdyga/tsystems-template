export default {
  name: 'actionspane',

  props: {
    showApp: {

    },
  },

  data() {
    return {


    }
  },

  template: `
   <div>actionspane</div>
   
  `,

  methods: {
    toggleCheck() {
      if (!this.disabled) {
        this.$emit('update:checked', !this.checked);
        this.showApp();
      }
    },
  }
};
