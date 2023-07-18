import type { VariantFunction } from '@unocss/core'

export interface UnoPrefixVariantOptions {
  prefixCls?: string
}

export const unoPrefixVariant = (opt?: UnoPrefixVariantOptions): VariantFunction<any> => {
  return (matcher) => {
    return {
      matcher,
      selector: (selector) => {
        if (opt?.prefixCls)
          return `${opt.prefixCls} ${selector}`
        return selector
      },
    }
  }
}
