export default {
  name: 'tabs',

  props: {
    value: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      tabsWrap: {
        display: flex,
        justifyContent: center,
      },
      tabs: {
        display: inline-flex,
        padding: '$tabs-padding',
        borderBottom: '$tabs-border-size solid $gray-220',
      }

    // &.is-aligned-left {
    //     justify-content: flex-start;
    //   }
    //
    // &.is-aligned-right {
    //     justify-content: flex-end;
    //   }
    //
    // tabs {
    //     display: inline-flex;
    //     padding: $tabs-padding;
    //     border-bottom: $tabs-border-size solid $gray-220;
    //
    //   tab {
    //     @include font-size(6);
    //       padding: $tab-padding;
    //       margin-right: $building-unit-x2;
    //       position: relative;
    //       transition: $transition-default;
    //       cursor: pointer;
    //       color: $gray-117;
    //
    //     &:last-child {
    //         margin-right: 0,
    //       }
    //
    //     &::after {
    //         content: '';
    //         position: absolute;
    //         left: 0;
    //         right: 0;
    //         bottom: -$tabs-border-size;
    //         height: $tab-border-height;
    //         transition: $transition-default;
    //       }
    //
    //     &:hover {
    //         color: $gray-56;
    //
    //       &::after {
    //           background: $gray-237;
    //         }
    //       }
    //
    //     &.is-active {
    //         color: $magenta;
    //         pointer-events: none;
    //
    //       &::after {
    //           background: $magenta;
    //         }
    //       }
    //
    //     &.is-disabled {
    //         opacity: .5;
    //         cursor: default;
    //
    //       &:hover {
    //           color: $gray-117;
    //
    //         &::after {
    //             background: transparent;
    //           }
    //         }
    //       }
    //     }
    //
    //   @include mobile {
    //       padding: 0;
    //
    //     .tab {
    //         margin-right: $building-unit;
    //       }
    //     }
    //   }
    // }


    // buttonStyles: {
      //   border: '1px solid #eee',
      //   borderRadius: 3,
      //   backgroundColor: '#FFFFFF',
      //   cursor: 'pointer',
      //   fontSize: 15,
      //   padding: '3px 10px',
      //   margin: 10,
      // },
    };
  },

  template: `
     <section :style="tabsWrap">
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
