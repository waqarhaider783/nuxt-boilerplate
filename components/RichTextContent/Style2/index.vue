<template>
  <div class="richTextContent2" v-html="content"></div>
</template>

<script>
export default {
  name: 'RichTextContentStyle2',
  props: {
    content: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style lang="scss" src="./index.scss"></style>
