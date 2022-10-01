<template>
	<div class="prose daisy-prose w-full max-w-xl m-auto">
		<h1>Dashboard</h1>

		<a href="/logout" class="daisy-btn">Logout</a>
	</div>
</template>

<script setup>

import {onMounted} from 'vue';

onMounted(() => {
	chrome.runtime.sendMessage("faikcccoaifenipeoglkklceopfnnhoj", 'getLocalStorage');
})

</script>