# SwipeCell

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways。

```js
import { createApp } from 'vue';
import { SwipeCell } from 'vant';

const app = createApp();
app.use(SwipeCell);
```

## Usage

### Basic Usage

```html
<van-swipe-cell>
  <template #left>
    <van-button square type="primary" text="Select" />
  </template>
  <van-cell :border="false" title="Cell" value="Cell Content" />
  <template #right>
    <van-button square type="danger" text="Delete" />
    <van-button square type="primary" text="Collect" />
  </template>
</van-swipe-cell>
```

### Custom Content

```html
<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="Description"
    title="Title"
    class="goods-card"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="Delete" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>

<style>
  .goods-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
</style>
```

### Before Close

```html
<van-swipe-cell :before-close="beforeClose">
  <template #left>
    <van-button square type="primary" text="Select" />
  </template>
  <van-cell :border="false" title="Cell" value="Cell Content" />
  <template #right>
    <van-button square type="danger" text="Delete" />
  </template>
</van-swipe-cell>
```

```js
import { Dialog } from 'vant';

export default {
  setup() {
    const beforeClose = ({ position }) => {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          return true;
        case 'right':
          return new Promise((resolve) => {
            Dialog.confirm({
              title: 'Are you sure to delete?',
            }).then(resolve);
          });
      }
    };

    return { beforeClose };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier of SwipeCell | _number \| string_ | - |
| left-width | Width of the left swipe area | _number \| string_ | `auto` |
| right-width | Width of the right swipe area | _number \| string_ | `auto` |
| before-close | Callback function before close | _(args) => boolean \| Promise_ | - |
| disabled | Whether to disabled swipe | _boolean_ | `false` |
| stop-propagation | Whether to stop touchmove event propagation | _boolean_ | `false` |

### Slots

| Name    | Description                     |
| ------- | ------------------------------- |
| default | custom content                  |
| left    | content of left scrollable area |
| right   | content of right scrollabe area |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when SwipeCell is clicked | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |
| open | Emitted when SwipeCell is opened | _{ name: string \| number, position: 'left' \| 'right' }_ |
| close | Emitted when SwipeCell is closed | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose Params

| Attribute | Description   | Type                                       |
| --------- | ------------- | ------------------------------------------ |
| name      | Name          | _string \| number_                         |
| position  | Click positon | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get SwipeCell instance and call instance methods.

| Name  | Description     | Attribute                 | Return value |
| ----- | --------------- | ------------------------- | ------------ |
| open  | open SwipeCell  | position: `left \| right` | -            |
| close | close SwipeCell | -                         | -            |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @switch-cell-padding-top | `@cell-vertical-padding - 1px` | - |
| @switch-cell-padding-bottom | `@cell-vertical-padding - 1px` | - |
| @switch-cell-large-padding-top | `@cell-large-vertical-padding - 1px` | - |
| @switch-cell-large-padding-bottom | `@cell-large-vertical-padding - 1px` | - |
