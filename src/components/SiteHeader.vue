<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<template>
	<ul>
		<li v-if="user.email">{{ user.email }}</li>
		<li>
			<RouterLink to="/">home</RouterLink>
		</li>

		<li v-if="!user.email">
			<RouterLink to="/sign-in">sign in</RouterLink>
		</li>

		<li v-if="user.email">
			<button @click="user.signOut()">Sign out</button>
		</li>

		<li v-if="user.email">
			<RouterLink to="/account">My account</RouterLink>
		</li>
	</ul>
</template>

<style></style>
