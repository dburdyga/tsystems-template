/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';
import Checkbox from './Checkbox';
import ActionsPane from './ActionsPane';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Checkbox', module).add('Basic Usage', () => ({
  components: { Checkbox },
  props: {
    isChecked: { type: Boolean, default: boolean('checked', true) },
    color: { type: String, default: text('color', '#e64a19') },
    className: { type: String, default: text('class', '') },
  },
  template: `<check-box :class="className" :checked="isChecked" :color="color"></check-box>`,
  // template: '<checkbox @click="action" />',
  methods: { action: action('clicked') },
}));


storiesOf('ActionsPane', module).add('to Storybook', () => ({
  components: { ActionsPane },
  template: '<actions-pane :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));
