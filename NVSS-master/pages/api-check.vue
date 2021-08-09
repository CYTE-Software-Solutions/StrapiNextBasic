<template>
  <v-row>
    <v-col class="text-center">
      <div>
        <p>
          API Request:
          <span :class="{ success: status, error: !status }">{{ status }}</span>
        </p>
      </div>
      <div v-if="status">
        API Response:<br />
        <code>{{ $store.state.webApp }}</code>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      status: false,
    }
  },
  mounted() {
    this.status = this.$store.state.req === 200
  },
}
</script>
