<template>
	<div class="prose daisy-prose w-full max-w-xl m-auto">

		<div class="relative">
			<Transition name="router-view" mode="out-in">
				<div v-if="productList == null">
					<h4><i class="text-primary fa fa-cog fa-spin"></i>&nbsp;&nbsp;Loading your cart</h4>
				</div>
				<div v-else>
					<h4>Products in your cart</h4>
					<div v-for="product in productList">{{ product }}</div>
				</div>
			</Transition>
		</div>
		<a href="/logout" class="daisy-btn mt-10">Logout</a>
	</div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

let productList = ref(null);

onMounted(() => {
	chrome.runtime.sendMessage("faikcccoaifenipeoglkklceopfnnhoj", 'getLocalStorage', (response) => {
		setTimeout(() => {
			productList.value = response;
		}, 2500)
	});
})

</script>