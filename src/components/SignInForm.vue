<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const form = reactive({
	email: '',
	password: ''
})

function handleForm() {
	user.signIn(form)
}
</script>

<template>
	<form @submit.prevent="handleForm()">
		<h2>Sign In</h2>

		<div class="field">
			<label for="email">Email</label>
			<input id="email" type="email" v-model="form.email" required />
		</div>

		<div class="field">
			<label for="password">Password</label>
			<input id="password" type="text" v-model="form.password" required />
		</div>

		<button type="submit">Sign In</button>
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
