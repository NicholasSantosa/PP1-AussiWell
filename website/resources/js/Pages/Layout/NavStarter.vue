<template>
	<component :is="'style'">{{ tailwindCSS }}</component>
	<Transition name="router-view" mode="out-in">
		<div>
			<navbar></navbar>
			<main v-if="contentTrigger" class="p-7">
				<slot />
			</main>
		</div>
	</Transition>
</template>

<script setup>
import tailwindCSS from "@/../scss/tailwind.scss?inline";
import Navbar from './Navbar.vue';
import { nextTick, ref, onBeforeUpdate, onMounted} from 'vue';

let contentTrigger = ref(true);

onMounted(() => {
})

onBeforeUpdate(() => {
	pageFadeIn();
});

async function pageFadeIn(){
	contentTrigger.value = false;
	await nextTick();
	setTimeout(() => {
		contentTrigger.value = true;
	}, 300)
} 

</script>