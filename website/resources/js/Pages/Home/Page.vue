<template>
	<component :is="'style'">{{ css }}</component>

	<div class="prose daisy-prose w-full max-w-xl m-auto">
		<h1>Welcome to Envirommint!</h1>

		<h2># Who are we?</h2>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et hic consequuntur quia, quis quidem ratione dolorem magni voluptatibus fugit ipsum deserunt, laboriosam autem, praesentium nesciunt beatae sit eius nam eaque?</p>

		<Link href="/login" class="daisy-btn">Get started</Link>
	</div>
</template>

<script setup>

import css from './app.scss?inline';
// import { onMounted } from 'vue';

</script>