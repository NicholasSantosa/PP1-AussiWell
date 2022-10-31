<template>
	<div class="w-full max-w-2xl m-auto text-center">
		<edit-extension-id @checkForExtensionDataAgain="checkForExtensionDataAgain"></edit-extension-id>
		<div class="prose daisy-prose max-w-full mt-16">
			<h1 class="!m-0">Hi, {{ props.user.name }}</h1>
		</div>

		<add-new-record @refreshPastShoppingRecords="refreshRecords" ref="addNewRecordComponent"></add-new-record>
		
		<div class="prose daisy-prose mt-6 text-center max-w-full">
			<h2><i class="fa fa-clock-rotate-left"></i> Your <span class="text-primary">Shopping history</span></h2>
			<button class="daisy-btn daisy-btn-primary gap-2" @click="refreshRecords" :disabled="pastShoppingRecords == null">
					<i class="fa fa-circle-notch fa-spin" v-show="pastShoppingRecords == null"></i>
					<i class="fa fa-rotate" v-show="pastShoppingRecords != null"></i>
				Refresh
			</button>
		</div>

		<div class="mt-8 w-full">

			<Transition name="router-view" mode="out-in">
				<div v-if="pastShoppingRecords == null" class="max-w-full mt-8">
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

// let pastShoppingRecords = ref(null);
let pastShoppingRecords = ref([{"id":6,"user_id":1,"product_list":"[\"Tempters Tuna in Olive Oil 95g\",\"Men Advanced Protection Sport Deodorant 220mL\",\"KitKat Packed With Milo Bar 45g\"]","created_at":"2 weeks ago","updated_at":"2022-10-11T09:08:41.000000Z"},{"id":5,"user_id":1,"product_list":"[\"Toothpaste\",\"Deodrant\",\"Water\"]","created_at":"3 weeks ago","updated_at":"2022-10-10T18:25:30.000000Z"},{"id":4,"user_id":1,"product_list":"[\"Toothpaste\",\"Deodrant\",\"Water\"]","created_at":"3 weeks ago","updated_at":"2022-10-10T18:25:29.000000Z"},{"id":3,"user_id":1,"product_list":"[\"Toothpaste\",\"Deodrant\",\"Water\"]","created_at":"3 weeks ago","updated_at":"2022-10-10T18:24:37.000000Z"},{"id":2,"user_id":1,"product_list":"[\"Toothpaste\",\"Deodrant\",\"Water\"]","created_at":"3 weeks ago","updated_at":"2022-10-10T18:21:05.000000Z"},{"id":1,"user_id":1,"product_list":"[\"Toothpaste\",\"Deodrant\",\"Water\"]","created_at":"3 weeks ago","updated_at":"2022-10-10T18:14:18.000000Z"}]);
let addNewRecordComponent = ref(null);

onMounted(() => {
	// refreshRecords();
})

let checkForExtensionDataAgain = () => {
	addNewRecordComponent.value.checkForExtensionData();
}

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