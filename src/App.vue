<template>
  <div id="app">
    <Layouts><router-view/></Layouts>
  </div>
</template>

<script>
import Layouts from '@/components/layouts'

export default {
  name: 'App',
  components: {
    Layouts
  }
}
</script>
