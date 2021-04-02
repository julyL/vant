import { computed, PropType, defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { useParent } from '@vant/use';
import { ROW_KEY, RowProvide } from '../row/Row';

const [name, bem] = createNamespace('col');

export default defineComponent({
  name,

  props: {
    offset: [Number, String],
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    span: {
      type: [Number, String],
      default: 0,
    },
  },

  setup(props, { slots }) {
    // 通过inject引入 (在Row通过provide注入的数据）
    const { parent, index } = useParent<RowProvide>(ROW_KEY);

    const style = computed(() => {
      if (!parent) {
        return;
      }
      // spaces由Row组件计算得到
      const { spaces } = parent;

      if (spaces && spaces.value && spaces.value[index.value]) {
        const { left, right } = spaces.value[index.value];
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null,
        };
      }
    });

    return () => {
      const { tag, span, offset } = props;

      return (
        <tag
          style={style.value}
          class={bem({ [span]: span, [`offset-${offset}`]: offset })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
