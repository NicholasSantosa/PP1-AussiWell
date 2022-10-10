<template>
	<div class="prose daisy-prose daisy-image-full daisy-card w-full max-w-md md:w-[calc(50%-100px)] min-w-[300px] hover:bg-white transition-all duration-300 bg-white/60 border-primary px-0 border-[1px] mb-8 md:ml-6">
		<figure><img class="w-full max-w-[100px]" :src="'https://avatars.dicebear.com/api/open-peeps/' + record.id + '.svg'" alt="identicon" /></figure>
		<div class="daisy-card-body text-base-300">
			<h2 class="m-0 daisy-card-title flex-col items-start">
				{{ productList.length }} items
			</h2>
			<p class="text-base-content text-xs">{{ record.created_at }}</p>

			<div class="daisy-card-actions w-full">
				<Link :href="'/dashboard/shopping-record/' + record.id" class="daisy-btn daisy-btn-primary w-full daisy-btn-md">View stats</Link>
			</div>
		</div>
	</div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const props = defineProps({
	record: Object,
})

let productList = ref({});

onMounted(() => {
	productList.value = JSON.parse(props.record.product_list);
});



</script>