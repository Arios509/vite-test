<script lang="ts">
import { imageUrlFormatter } from "@/infrastructure/seedwork/imageUrlFormatter";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	computed: {
		imageUrl: {
			get() {
				return imageUrlFormatter(
					"assets/logo.png"
				);
			},
		},
	},
});
</script>

<template>
	<img alt="Vue logo" :src="imageUrl" />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
