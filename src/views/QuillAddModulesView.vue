<script setup>
import { ref, defineComponent } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'

const modules = {
	name: 'blotFormatter',
	module: BlotFormatter,
	options: { },
};

const content = ref(null);

</script>

<template>
<div>
	<h1>Add Modules</h1>
	<QuillEditor v-model:content="content" :modules="modules" toolbar="full" style="height: 300px;" />
</div>
<pre>{{ content }}</pre>
</template>

<script>

/*
// import '@vueup/vue-quill/dist/vue-quill.snow.css'; // App.vue 에서 import
import { ref, defineComponent } from 'vue'
import { QuillEditor, Delta } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
export default defineComponent({
  components: {
    QuillEditor,
  },
  setup: () => {
    const modules = {
      name: 'blotFormatter',
      module: BlotFormatter,
      options: {
        
      },
    }
	*/
	/*
    const content = ref<Delta>(
      new Delta([
        { insert: 'Gandalf', attributes: { bold: true } },
        { insert: ' the ' },
        { insert: 'Grey', attributes: { color: '#ccc' } },
      ])
    )
	*/

	/*
	const content = ref([
		{ insert: '', attributes: { bold: null } },
        { insert: '' },
        { insert: '', attributes: { color: '' } },
	]);

    return { content, modules }
  },
})
*/
</script>