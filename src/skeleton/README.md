# Skeleton

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways。

```js
import { createApp } from 'vue';
import { Skeleton } from 'vant';

const app = createApp();
app.use(Skeleton);
```

## Usage

### Basic Usage

```html
<van-skeleton title :row="3" />
```

### Show Avatar

```html
<van-skeleton title avatar :row="3" />
```

### Show Children

```html
<van-skeleton title avatar :row="3" :loading="loading">
  <div>Content</div>
</van-skeleton>
```

```js
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const loading = ref(true);

    onMounted(() => {
      loading.value = false;
    });

    return {
      loading,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| row | Row count | _number \| string_ | `0` |
| row-width | Row width, can be array | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | Whether to show title placeholder | _boolean_ | `false` |
| avatar | Whether to show avatar placeholder | _boolean_ | `false` |
| loading | Whether to show skeleton，pass `false` to show child component | _boolean_ | `true` |
| animate | Whether to enable animation | _boolean_ | `true` |
| round | Whether to show round title and row | _boolean_ | `false` |
| title-width | Title width | _number \| string_ | `40%` |
| avatar-size | Size of avatar placeholder | _number \| string_ | `32px` |
| avatar-shape | Shape of avatar placeholder，can be set to `square` | _string_ | `round` |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                              | Default Value   | Description |
| --------------------------------- | --------------- | ----------- |
| @skeleton-row-height              | `16px`          | -           |
| @skeleton-row-background-color    | `@active-color` | -           |
| @skeleton-row-margin-top          | `@padding-sm`   | -           |
| @skeleton-title-width             | `40%`           | -           |
| @skeleton-avatar-size             | `32px`          | -           |
| @skeleton-avatar-background-color | `@active-color` | -           |
| @skeleton-animation-duration      | `1.2s`          | -           |
