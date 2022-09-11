<template>
	<Head>
  		<title>Environmint</title>
	</Head>

	<slot />
</template>

<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import { Inertia } from '@inertiajs/inertia'

import { onMounted, onUnmounted } from 'vue';
import { useMainStore } from '@/store/MainStore';

const mainStore = useMainStore();
let removeIntertiaNavigateEvent;

onMounted(() => {
	removeIntertiaNavigateEvent = Inertia.on('navigate', (event) => {
		mainStore.updateUrl(event.detail.page.url);
	});
});

onUnmounted(() => {
	removeIntertiaNavigateEvent();
});

</script>