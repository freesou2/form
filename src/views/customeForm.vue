<template lang="html">
  <div class="custome-form">
    <Row>
        <Col span="8">
          <k-components></k-components>
        </Col>
        <Col span="8">
          <k-form></k-form>
        </Col>
    </Row>

  </div>
</template>

<script>
import kComponents from '@/components/components'
import kForm from '@/components/kform'
export default {
  data () {
    return {
      kFormOptions: {
        span: 8
      }
    }
  },
  components: {
    kComponents,
    kForm
  }
}
</script>

<style lang="css">
</style>
