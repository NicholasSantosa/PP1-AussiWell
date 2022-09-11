<template>
	<div class="prose daisy-prose text-center m-auto">
		<h1># Login</h1>
		
		<form action="/" @submit.prevent>
			<input type="email" placeholder="Email" class="daisy-input daisy-input-bordered w-full max-w-xs" />
			<input type="password" placeholder="Password" class="daisy-input daisy-input-bordered w-full max-w-xs mt-2" />
			
			<br />
			<br />
			<button type="submit" class="daisy-btn block w-full max-w-xs m-auto">Login</button>
			<div class="mt-5">
				<span>Don't have an account?</span>&nbsp;
				<Link href="/sign-up" class="daisy-link daisy-link-primary">Sign up</Link>
			</div>
		</form>
	</div>
</template>