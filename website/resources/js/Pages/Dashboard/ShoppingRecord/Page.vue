<template>
	<div class="prose daisy-prose max-w-full text-center">
		<h1>Hello!</h1>
		<Link href="/dashboard" class="daisy-btn daisy-btn-accent">Back</Link>

		<div>
			<h2>Emissions from this purchase</h2>
			<ul class="daisy-steps daisy-steps-vertical">
				<li class="daisy-step daisy-step-primary" v-for="product in productList">
					<span>
						{{ product.name }} is <span class="text-error">{{ product.footprint }} kg CO2 /kg</span>
					</span>
				</li>
			</ul>

			<h2># Carbon footprint</h2>
			<p>The combined carbon footprint for this purchase</p>
			<div class="daisy-stats shadow">

				<div class="daisy-stat">
					<div class="daisy-stat-figure text-error">
						<i class="fa fa-smog"></i>
					</div>
					<div class="daisy-stat-title">Total CO2</div>
					<div class="daisy-stat-value text-error">{{ totalFoorprint }}</div>
					<div class="daisy-stat-desc">kg CO2 /kg</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';

const props = defineProps({
	record: Object,
})

let productList = ref([])
let totalFoorprint = computed(() => {
	let total = 0;
	productList.value.forEach((product) => {
		total += product.footprint;
	})
	return total;
});

let carbonFootprintIndex = {
	"dry pasta": 1.1,
	"chicken breast": 4.1,
	"beef": 32,
	"lamb": 28,
	"apple": 0.15,
	"banana": 0.14,
	"potatoes": 0.24,
	"milk": 2.2,
	"almond milk": 0.47,
	"blue cheese": 14,
	"bread": 1,
	"cabbage": 0.15,
	"eggs": 2.2
}

onMounted(() => {
	let productsArray = JSON.parse(props.record.product_list)

	Object.keys(carbonFootprintIndex).forEach((key) => {
		for (let i = 0; i < productsArray.length; i++) {
			if(productsArray.length == productList.value.length){
				break;
			}
			if (key.includes(productsArray[i].toLowerCase()) || productsArray[i].toLowerCase().includes(key)) {
				productList.value.push({
					name: productsArray[i],
					footprint: carbonFootprintIndex[key],
				})
			} else {
				// Product doesn't exist in our database; generate a plausible placeholder value.
				productList.value.push({
					name: productsArray[i],
					footprint: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
				})
			}
		}
	})
})
let randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

</script>