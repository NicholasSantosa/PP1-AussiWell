<template>
	<!-- <label for="modle-add-new-record" class="daisy-btn daisy-modal-button">Open modal</label> -->
	<input type="checkbox" id="modle-add-new-record" class="daisy-modal-toggle" v-model="modelOpen" />

	<div class="daisy-modal daisy-modal-bottom sm:daisy-modal-middle">
		<div class="daisy-modal-box border-[1px] border-base-300">
			
			<div class="min-h-[200px] overflow-y-scroll h-[200px] border-[1px] p-4 border-base-300 rounded-l-box">
				<Transition name="router-view" mode="out-in">
					<div v-if="productList == null" class="text-center">
						<h4><i class="text-primary fa fa-cog fa-spin"></i>&nbsp;&nbsp;Loading your cart</h4>
					</div>

					<div class="prose daisy-prose" v-else>
						<h2 class="!m-0">Products found in your cart</h2>
						<ul class="daisy-steps daisy-steps-vertical">
							<li class="daisy-step daisy-step-primary" v-for="product in productList">
								{{ product }}
							</li>
						</ul>
					</div>
				</Transition>
			</div>
			
			<div class="daisy-modal-action flex justify-between">
				<label for="modle-add-new-record" class="daisy-btn w-1/2">Discard</label>
				<button class="daisy-btn w-1/2 daisy-btn-success" :disabled="productList == null" @click="saveProducts">Save record</button>
			</div>
		</div>
	</div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import $ from 'jquery';
import { useMainStore } from '@/store/MainStore';

const mainStore = useMainStore();
let productList = ref(null);
let modelOpen = ref(false);
const emit = defineEmits(['refreshPastShoppingRecords'])

onMounted(() => {
	checkForExtensionData();
})

let saveProducts = () => {
	$.ajax({
		url: '/api/add-shopping-record',
		method: 'POST',
		data: {
			productList: productList.value
		},
		success: () => {
			productList.value = null;
			modelOpen.value = false;
			emit('refreshPastShoppingRecords')
		},

		error: (response) => {
			alert("Something went wrong 🤐");
		}
	});
}

let checkForExtensionData = () => {
	setTimeout(() => {
		chrome.runtime.sendMessage(mainStore.extensionID, 'getLocalStorage', (response) => {
			if (typeof response != 'undefined' && response.length > 0) {
				modelOpen.value = true;
				setTimeout(() => {
					productList.value = response;
				}, 2000)
			}
			if(chrome.runtime.lastError) {	// No products returned or extension unreachable
				console.log("No products found in extension DB");
			}
		});

		// Testing purposes
		// if(Math.floor(Math.random() * 11) % 2 == 0){
		// 	modelOpen.value = true;
		// 	setTimeout(() => {
		// 		productList.value = ["Toothpaste", "Deodrant", "Water"]
		// 	}, 2000)
		// }
	}, 1200);
}
defineExpose({
	checkForExtensionData,
})
</script>