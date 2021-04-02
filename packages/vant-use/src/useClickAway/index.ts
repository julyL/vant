import { Ref, unref } from 'vue';
import { inBrowser } from '../utils';
import { useEventListener } from '../useEventListener';

export type UseClickAwayOptions = {
  eventName?: string;
};

export function useClickAway(
  target: Element | Ref<Element | undefined>,
  listener: EventListener,
  options: UseClickAwayOptions = {}
) {
  if (!inBrowser) {
    return;
  }

  const { eventName = 'click' } = options;

  const onClick = (event: Event) => {
    const element = unref(target);
    // 触发事件的target不包含在element中,则触发事件
    if (element && !element.contains(event.target as Node)) {
      listener(event);
    }
  };

  useEventListener(eventName, onClick, { target: document });
}
