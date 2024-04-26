import { useFluent_unstable } from '@fluentui/react-shared-contexts';
import { makeResetStyles } from '@griffel/react';
import { useCallback, useRef } from 'react';

// this style must be applied to the html element to disable scrolling
const useHTMLNoScrollStyles = makeResetStyles({
  overflowY: ['hidden', 'clip'],
});

/**
 * hook that disables body scrolling through `overflowY: hidden` CSS property
 */
export function useDisableBodyScroll(): {
  disableBodyScroll: () => void;
  enableBodyScroll: () => void;
} {
  const htmlNoScrollStyle = useHTMLNoScrollStyles();
  const { targetDocument } = useFluent_unstable();
  const originalPaddingRight = useRef<string>('');

  const disableBodyScroll = useCallback(() => {
    if (!targetDocument) {
      return;
    }

    targetDocument.documentElement.classList.add(htmlNoScrollStyle);

    const window = targetDocument.defaultView;
    const { clientWidth } = targetDocument.documentElement;
    const innerWidth = window?.innerWidth ?? 0;

    const verticalScrollbarGutter = `${innerWidth - clientWidth}px`;
    originalPaddingRight.current = getComputedStyle(targetDocument.body).paddingRight;
    targetDocument.body.style.paddingRight = `calc(${originalPaddingRight.current} + ${verticalScrollbarGutter})`;
    return;
  }, [targetDocument, htmlNoScrollStyle]);

  const enableBodyScroll = useCallback(() => {
    if (!targetDocument) {
      return;
    }

    targetDocument.documentElement.classList.remove(htmlNoScrollStyle);

    targetDocument.body.style.paddingRight = originalPaddingRight.current;
  }, [targetDocument, htmlNoScrollStyle]);

  return {
    disableBodyScroll,
    enableBodyScroll,
  };
}
