<template>
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :class="className"
  >
    <path fill="currentColor" :d="d" />
  </svg>
</template>

<script>
import { svg } from '@/config/svg'
import {
  PROP_TYPE_STRING,
  PROP_TYPE_BOOLEAN,
  PROP_TYPE_NUMBER_STRING,
} from '@/constants/props'
import { makeProp } from '@/utils/props'
import { arrayIncludes } from '@/utils/array'

export default {
  props: {
    name: makeProp(PROP_TYPE_STRING, undefined, true),
    size: makeProp(PROP_TYPE_NUMBER_STRING, undefined, value =>
      arrayIncludes(['lg', 'md', 'xs', 'sm', '16', '20', 24, 32], value)
    ),
    spin: makeProp(PROP_TYPE_BOOLEAN, false),
    fw: makeProp(PROP_TYPE_BOOLEAN, false),
  },
  computed: {
    d() {
      return svg[this.name]
    },
    className() {
      return [
        this.$style.wrapper,
        `f-svg-${this.name}`,
        this.$style.w_16,
        this.$style[`s_${this.size}`],
        {
          [this.$style.spin]: this.spin,
          [this.$style.fw]: this.fw,
        },
      ]
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  display: inline-block;
  min-width: 1em;
  height: 1em;
  overflow: visible;
  font-size: inherit;
  vertical-align: -0.125em;
}

.w_16 {
  width: 16 * 0.0625em;
}

.s_lg {
  font-size: 1.5em;
  line-height: 0.75em;
  vertical-align: -35%;
}

.s_md {
  font-size: 1.25em;
}

.s_xs {
  font-size: 0.75em;
}

.s_sm {
  font-size: 0.875em;
}

.s_16 {
  font-size: px-to-rem(16px);
}

.s_20 {
  font-size: px-to-rem(20px);
}

.s_24 {
  font-size: px-to-rem(24px);
}

.s_32 {
  font-size: px-to-rem(32px);
}

.spin {
  animation: f-svg-spin 2s infinite linear;
}

.fw {
  width: 2.5rem;
  min-width: 2.5rem;
}

@keyframes f-svg-spin {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
