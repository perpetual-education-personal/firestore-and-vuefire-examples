<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const form = reactive({
	email: '',
	password: '',
	firstName: ''
})

function handleForm() {
	user.signUp(form)
}
</script>

<template>
	<form @submit.prevent="handleForm()">
		<h2>Sign Up</h2>

		<div class="field">
			<label for="email">Email</label>
			<input id="email" type="email" v-model="form.email" required />
		</div>

		<div class="field">
			<label for="password">Password</label>
			<input id="password" type="text" v-model="form.password" required />
		</div>

		<div class="field">
			<label for="firstName">First name</label>
			<input id="firstName" type="text" v-model="form.firstName" required />
		</div>

		<button type="submit">Sign up</button>

		<pre>{{ form }}</pre>
	</form>
</template>

<style>
form {
	display: grid;
	gap: 10px;
	border: 1px solid black;
	padding: 20px;
	margin-top: 20px;
}
.field {
	display: grid;
	width: 100%;
	max-width: 300px;
}

form * {
	justify-self: start;
}
</style>
