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
    class="checkbox"
    :class="{'is-disabled': disabled}"
    @click="toggleCheck">
    <input
      :name="name"
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      @click.stop.prevent>
    <span
      class="checkbox-icon"
      :class="{'is-checked': checkedValue}"/>
    <span class="checkbox-label">
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
