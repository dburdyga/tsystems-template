export default {
  name: 'checkbox',

  props: {
    showApp: {
      name: String,
      checked: Boolean,
      disabled: Boolean
    },
  },

  data() {
    return {

    }
  },

  template: `
   <div>checkbox</div>
   <label
    :style="checkbox"
    :class="{'is-disabled': disabled}"
    @click="toggleCheck">
    <input
      :name="name"
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      @click.stop.prevent>
    <span
      :style="checkbox-icon"
      :class="{'is-checked': checkedValue}"/>
    <span :style="checkbox-label">
      <slot/>
    </span>
  </label>
  `,

  computed: {
    checkedValue() {
      return this.checked;
    }
  },
  methods: {
    toggleCheck() {
      if (!this.disabled) {
        this.$emit('update:checked', !this.checked);
        this.showApp();
      }
    },
  }
};
