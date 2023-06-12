<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<template>
	<section>
		<h1>Account</h1>

		<div>
			{{ user.email }}
		</div>

		<div>
			{{ user.firstName }}
		</div>
	</section>
</template>

<style></style>
