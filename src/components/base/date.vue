<template>
  <span>{{ format }}</span>
</template>

<script>
import { makeProp } from '@/utils/props'
import { PROP_TYPE_STRING } from '@/constants/props'
import { parse } from '@/utils/date'
import { formatServer } from '@/config/date'

export default {
  props: {
    value: makeProp(PROP_TYPE_STRING),
  },
  computed: {
    format() {
      let result = this.value
      try {
        result = new Intl.DateTimeFormat().format(
          parse(this.value, formatServer)
        )
        // eslint-disable-next-line no-empty
      } catch (e) {}

      return result
    },
  },
}
</script>
