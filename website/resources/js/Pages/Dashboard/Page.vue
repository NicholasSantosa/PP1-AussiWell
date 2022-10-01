<template>
	<div class="prose daisy-prose w-full max-w-xl m-auto">

		<h1>Hi, {{ props.user.name }}</h1>
		<img :src="'/images/hand-plant.svg'" class="w-full max-w-[100px]" alt="Hand plant">
		<a href="/logout" class="daisy-btn">Logout</a>
		<div class="relative mt-10">
			<Transition name="router-view" mode="out-in">
				<div v-if="productList == null">
					<h4><i class="text-primary fa fa-cog fa-spin"></i>&nbsp;&nbsp;Loading your cart</h4>
				</div>
				<div v-else>
					<h3>Products in your cart</h3>
					<ul class="daisy-steps daisy-steps-vertical">
						<li class="daisy-step daisy-step-secondary" v-for="product in productList">
							{{ product }}
						</li>
					</ul>
					<!-- <div class="w-full max-w-xs bg-secondary p-4 mt-5 rounded-lg" v-for="product in productList"><i class="fa fa-chess-bishop text-primary"></i>&nbsp;&nbsp;<span class="text-base-100 font-bold">{{ product }}</span></div> -->
				</div>
			</Transition>
		</div>
	</div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const props = defineProps({
	user: Object,
})

let productList = ref(null);

onMounted(() => {
	chrome.runtime.sendMessage("faikcccoaifenipeoglkklceopfnnhoj", 'getLocalStorage', (response) => {
		setTimeout(() => {
			productList.value = response;
		}, 2500)
	});

	// setTimeout(() => {
		// productList.value = ["Condoms", "Toothpaste", "Deodrant"]
	// }, 500)

})

</script>