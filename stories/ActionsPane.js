export default {
  name: 'actions-pane',

  props: {
    showApp: {

    },
  },

  data() {
    return {


    }
  },

  template: `
   <div>Actions-pane</div>
   
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
