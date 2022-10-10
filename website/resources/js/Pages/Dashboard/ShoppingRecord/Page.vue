<template>
	<div class="prose daisy-prose max-w-full text-center">
		<h1>Hello!</h1>
		<Link href="/dashboard" class="daisy-btn daisy-btn-accent">Back</Link>

		<div>
			<h2># Products from this purchase</h2>
			<ul class="daisy-steps daisy-steps-vertical">
				<li class="daisy-step daisy-step-primary" v-for="product in productList">
					{{ product }}
				</li>
			</ul>

			<h2># Carbon footprint</h2>
			<div class="daisy-stats shadow">

				<div class="daisy-stat">
					<div class="daisy-stat-figure text-primary">
						<i class="fa fa-smog"></i>
					</div>
					<div class="daisy-stat-title">Total CO2</div>
					<div class="daisy-stat-value text-primary">25.6Kg</div>
					<div class="daisy-stat-desc">21% more than last month</div>
				</div>

				<div class="daisy-stat">
					<div class="daisy-stat-figure text-secondary">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
							</path>
						</svg>
					</div>
					<div class="daisy-stat-title">Whales dead</div>
					<div class="daisy-stat-value text-secondary">2.6M</div>
					<div class="daisy-stat-desc">6% less than last month</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const props = defineProps({
	record: Object,
})

let productList = ref([])
onMounted(() => {
	productList.value = JSON.parse(props.record.product_list)
})


</script>