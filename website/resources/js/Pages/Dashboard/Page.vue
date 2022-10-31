<template>
	<div class="w-full max-w-2xl m-auto text-center">

		<div class="prose daisy-prose max-w-full">
			<h2 class="!m-0">Hi, {{ props.user.name }}</h2>
		</div>

		<edit-extension-id></edit-extension-id>

		<add-new-record @refreshPastShoppingRecords="refreshRecords"></add-new-record>
		
		<div class="prose daisy-prose mt-14 text-center max-w-full">
			<h1><i class="text-primary fa fa-clock-rotate-left"></i> Your Shopping history</h1>
			<button class="daisy-btn daisy-btn-secondary gap-2" @click="refreshRecords" :disabled="pastShoppingRecords == null">
				<i class="fa fa-yin-yang"></i>
				Refresh
			</button>
		</div>

		<div class="mt-8 w-full">

			<Transition name="router-view" mode="out-in">
				<div v-if="pastShoppingRecords == null" class="text-center prose daisy-prose max-w-full mt-8">
					<h1><i class="text-secondary fa fa-yin-yang fa-spin"></i></h1>
				</div>

				<div v-else-if="pastShoppingRecords.length == 0" class="prose daisy-prose max-w-full mt-14">
					<img :src="'/images/alien-taken.svg'" class="w-full max-w-[200px] block mx-auto" alt="Empty cart" />
					<h4 class="text-center text-neutral mt-8">Looks empty in here</h4>
				</div>

				<div class="flex flex-wrap justify-center" v-else>
					<past-record v-for="pastShoppingRecord in pastShoppingRecords" :record="pastShoppingRecord"></past-record>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import EditExtensionId from './EditExtensionId.vue';
import AddNewRecord from './AddNewRecord.vue';
import PastRecord from './PastRecord.vue';

import $ from 'jquery';

const props = defineProps({
	user: Object,
	isAuthenticated: String,
})

let pastShoppingRecords = ref(null);

onMounted(() => {
	refreshRecords();
})

let refreshRecords = () => {
	$.ajax({
		url: '/api/get-all-shopping-records',
		method: 'GET',
		beforeSend: () => {
			pastShoppingRecords.value = null;
		},
		success: (response) => {
			setTimeout(() => {
				pastShoppingRecords.value = response;
			}, 1000)
		},
		error: () => {
			alert('Something went wrong 🤐');
		},
	})
}

</script>