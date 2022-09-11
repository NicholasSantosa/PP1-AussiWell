<template>
	<div class="prose daisy-prose text-center m-auto">
		<h1># Sign up</h1>
		
		<form action="/" @submit.prevent>
			<input type="text" placeholder="Your name" class="daisy-input daisy-input-bordered w-full max-w-xs" />
			<input type="email" placeholder="Email" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" />
			<input type="password" placeholder="Password" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" />
			<input type="password" placeholder="Confirm password" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" />
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