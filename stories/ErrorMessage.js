const log = () => console.log('Welcome to storybook!');

export default {
  name: 'error-message',

  props: {
    showApp: {

      type: Function,
      default: log,
    },
  },

  data() {
    return {
      section: {
        width: '$error-message-width',
        backgroundColor: '$red',
        padding: '$error-message-padding',
        marginBottom: '$error-message-spacing',
        borderRadius: '$telekom-radius',

        border: '1px solid $red',
      },
    };
  },


  template: `
  <section :style="section">
    <span :style="section">LOL</span>
    <slot/>
  </section>
    `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
};
