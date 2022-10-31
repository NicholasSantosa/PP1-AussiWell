<template>
	<div class="daisy-alert daisy-alert-info shadow-lg mt-4 max-w-sm mx-auto">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			<span>Make sure your extension ID is up-to-date.</span>
		</div>
	</div>
	<p class="text-base-content text-sm mt-2">Current ID: <span class="opacity-70">{{ mainStore.extensionID}}</span></p>
	<p class="text-center text-xs"><a class="daisy-link daisy-link-primary">Edit</a></p>

	<label for="my-modal-4" class="daisy-btn">open modal</label>

	<!-- <input type="checkbox" id="my-modal-4" class="daisy-modal-toggle" /> -->

	<!-- <label for="my-modal-4" class="daisy-modal cursor-pointer">
		<label class="daisy-modal-box relative" for="">
			<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
			<p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
		</label>
	</label> -->
</template>

<script setup>
import { useMainStore } from '@/store/MainStore';
import { ref } from 'vue';

const mainStore = useMainStore();

let modelOpen = ref(true);

</script>