<template>
	<div class="prose daisy-prose text-center m-auto">
		<h1 class="text-primary"># Sign up</h1>
		<p class="">Create an account to continue</p>
		
		<form action="/sign-up" @submit.prevent="form.post('/sign-up')">
			<input type="text" v-model="form.name" placeholder="Your name" class="daisy-input daisy-input-bordered w-full max-w-xs" required />
			<input type="email" v-model="form.email" placeholder="Email" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" required />
			<input type="password" v-model="form.password" placeholder="Password" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" required />
			<input type="password" placeholder="Confirm password" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" required />
			<br />
			<br />
			<button type="submit" class="daisy-btn block w-full max-w-xs m-auto">Create account</button>
			<div class="mt-5">
				<span>Already have an account?</span>&nbsp;
				<Link href="/login" class="daisy-link daisy-link-primary">Log in</Link>
			</div>
		</form>
	</div>
</template>

<script setup>

import { onMounted } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3'

const form = useForm({
	name: null,
	email: null,
	password: null,
})

</script>