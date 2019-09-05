export default {
  name: 'tabs',

  props: {
    value: {
      type: String,
      required: true
    }
  },

  template: `
     <section :style="tabs-wrap">
      <div :style="tabs">
        <slot/>
      </div>
    </section>
  `,

  mounted() {
    this.$children.forEach(child => {
      child.$on('tabClick', (value) => this.setTab(value));
    });
  },
  methods: {
    setTab(value) {
      if (this.value !== value) {
        this.$emit('input', value); // to allow v-model
        this.$emit('change', value); // to detect @change on Tabs component
      }
    }
  },
}
