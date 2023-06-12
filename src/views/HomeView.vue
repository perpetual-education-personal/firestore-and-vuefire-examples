<script setup>
import SignUpForm from '@/components/SignUpForm.vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<template>
	<section>
		<h1>Home</h1>

		<SignUpForm v-if="!user.email" />
	</section>
</template>

<style></style>
