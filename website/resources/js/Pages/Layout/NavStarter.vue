<template>
	<component :is="'style'">{{ tailwindCSS }}</component>
	<navbar></navbar>
	
	<div class="min-h-[calc(100vh-64px)]">
		<Transition name="router-view" mode="out-in">
			<div v-if="contentTrigger">
				<main class="p-6">
					<slot />
				</main>
			</div>
		</Transition>
	</div>

	<footer class="daisy-footer p-10 bg-neutral text-neutral-content">
		<div>
		<img :src="'/images/xxhdpi.png/?v=gHAyT'" class="w-12 h-12" />
		<p>Environmint Ltd.<br></p>
		</div>
		<div>
			<span class="daisy-footer-title">Services</span>
			<a class="daisy-link daisy-link-hover">Branding</a>
			<a class="daisy-link daisy-link-hover">Design</a>
			<a class="daisy-link daisy-link-hover">Marketing</a>
			<a class="daisy-link daisy-link-hover">Advertisement</a>
		</div>
		<div>
			<span class="daisy-footer-title">Company</span>
			<a class="daisy-link daisy-link-hover">About us</a>
			<a class="daisy-link daisy-link-hover">Contact</a>
			<a class="daisy-link daisy-link-hover">Jobs</a>
			<a class="daisy-link daisy-link-hover">Press kit</a>
		</div>
		<div>
			<span class="daisy-footer-title">Legal</span>
			<a class="daisy-link daisy-link-hover">Terms of use</a>
			<a class="daisy-link daisy-link-hover">Privacy policy</a>
			<a class="daisy-link daisy-link-hover">Cookie policy</a>
		</div>
	</footer>
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