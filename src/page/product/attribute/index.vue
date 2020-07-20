<template>
  <div :class="style.wrap">
    <div class="hh">
      <div class="cc">fafdsa</div>
    </div>
    attribute
  </div>
</template>

<script>
import style from './index.module.css'

export default {
  data () {
    return {
      style
    }
  }
}
</script>
<style>
.hh {
  margin-left: 400px;
  width: 300px;
  height: 300px;
  background: red;
  overflow: scroll;
}
.cc {
  width: 400px;
  height: 700px;
  background: green;
}

</style>


