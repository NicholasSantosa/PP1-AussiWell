<template>
	<component :is="'style'">{{ css }}</component>

	<div class="prose daisy-prose w-full max-w-xl m-auto">
		<h1>Welcome to Envirommint!</h1>

		<h2># Who are we?</h2>
		<p>Environment assists you year-round in cutting your carbon emissions and reducing your carbon footprint on the planet. A simple chrome extension that provides you with real-time data on your online shopping behavior and alerts you on each product’s carbon emission allowing you to make smarter shopping choices.
Score points while you save the world and receive exciting rewards.  Add Environment today to your chrome extension. 
We work with COLES to provide you with a better shopping experience every day.</p>

		<Link href="/login" class="daisy-btn">Get started</Link>
	</div>
</template>

<script setup>

import css from './app.scss?inline';
// import { onMounted } from 'vue';

</script>