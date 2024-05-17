//https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx

import { LegacyRef, MutableRefObject, RefCallback } from 'react'

/**
 * "Мержит" рефы если используем свой реф + реф созданный и переданный родителем
 */
export function mergeRefs<T = any>(
  refs: Array<LegacyRef<T> | MutableRefObject<T> | null | undefined>
): RefCallback<T> {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    })
  }
}
