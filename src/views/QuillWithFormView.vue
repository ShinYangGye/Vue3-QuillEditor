<template>
<div>
	<h1>With Form</h1>
	<QuillEditor v-model:content="inputValue" content-type="html" theme="snow" />
</div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
export default defineComponent({
  components: {
    QuillEditor,
  },
  setup() {
    const inputValue = ref('<h1>This is header</h1><p>This is paragraph</p>')
    return { inputValue }
  },
})
</script>