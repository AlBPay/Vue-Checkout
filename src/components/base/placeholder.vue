<template>
  <div>
    <label v-if="maskedValue" class="f-placeholder" :for="id" :style="style">
      {{ placeholderText }}
    </label>
    <span ref="hidden" class="f-placeholder f-hidden">{{ maskedValue }}</span>
  </div>
</template>

<script>
import { mask } from '@/utils/mask'
import { PROP_TYPE_NUMBER_STRING, PROP_TYPE_STRING } from '@/constants/props'
import { makeProp } from '@/utils/props'

export default {
  inheritAttrs: false,
  props: {
    id: makeProp(PROP_TYPE_STRING, undefined, true),
    value: makeProp(PROP_TYPE_NUMBER_STRING),
    placeholder: makeProp(PROP_TYPE_STRING),
    mask: makeProp(PROP_TYPE_STRING),
  },
  data() {
    return {
      left: 0,
    }
  },
  computed: {
    maskedValue() {
      return mask(this.value, this.mask, true)
    },
    placeholderText() {
      return this.placeholder
        .slice(this.maskedValue.length)
        .replace(/ /g, '\xa0')
    },
    style() {
      return {
        left: `${this.left}px`,
      }
    },
  },
  watch: {
    maskedValue: 'setLeft',
  },
  mounted() {
    this.setLeft()
  },
  methods: {
    setLeft() {
      this.$nextTick().then(() => {
        this.left = this.$refs.hidden?.offsetWidth
      })
    },
  },
}
</script>
