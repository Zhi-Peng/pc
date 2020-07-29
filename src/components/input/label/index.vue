<template>
  <div>
    <div
      :class="[
              labelTitle === undefined ? style.labelBase : style.labelTitle,
              rules === undefined || style.rules
      ]"
      :style="{width: `${width}px`, color}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import style from './index.module.css'

export default {
  data () {
    return  {
      style
    }
  },
  props: {
    width: String,
    color: String,
    rules: String,
    labelTitle: String,
  },
}
</script>





