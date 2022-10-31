<template>
	<div class="daisy-alert daisy-alert-info shadow-lg max-w-sm mx-auto">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			<span>Make sure your extension ID is up-to-date.</span>
		</div>
	</div>
	<p class="text-base-content text-sm mt-2">Current ID: <span class="opacity-70">{{ mainStore.extensionID}}</span></p>
	<p class="text-center text-xs"><a class="daisy-link daisy-link-primary" @click="modelOpen = true">Edit</a></p>

	<input type="checkbox" id="my-modal-4" class="daisy-modal-toggle" v-model='modelOpen' />

	<label for="my-modal-4" class="daisy-modal daisy-modal-bottom sm:daisy-modal-middle cursor-pointer">
		<label class="daisy-modal-box relative" for="">
			<label for="my-modal-3" class="daisy-btn daisy-btn-sm daisy-btn-circle absolute right-2 top-2" @click="modelOpen = false">✕</label>
			<div class="prose daisy-prose w-full max-w-xs mx-auto">
				<h3 class="text-lg font-bold text-left">Enter new ID</h3>
				<p class="text-left">Visit <span class="mx-2 daisy-badge daisy-badge-secondary">chrome://extensions/</span> to find yours.</p>
				<p class="text-xs text-left">Current ID: <span class="opacity-70">{{ mainStore.extensionID }}</span></p>
				<form @submit.prevent="updateID">
					<input type="text" placeholder="Extension ID" class="daisy-input daisy-input-bordered w-full mt-2" v-model="newID" required />
					<button type="submit" class="daisy-btn daisy-btn-primary daisy-btn-md w-full block mt-4">Update</button>
				</form>
			</div>
		</label>
	</label>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useMainStore } from '@/store/MainStore';
import $ from 'jquery';
const emit = defineEmits(['checkForExtensionDataAgain'])

const mainStore = useMainStore();

let modelOpen = ref(false);
let newID = ref("");

$(document).on('keydown', (event) => {
	if (event.keyCode == 27 && modelOpen.value) {
		modelOpen.value = false;
	}
});

let updateID = () => {
	mainStore.updateExtensionID(newID.value);
	newID.value = "";
	modelOpen.value = false;
	emit('checkForExtensionDataAgain');
}

</script>