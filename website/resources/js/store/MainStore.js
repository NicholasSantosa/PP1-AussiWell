import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", {
	state: () => {
		return {
			url: '/'
		}
	},

	actions: {
		updateUrl(newUrl){
			this.url = newUrl;
		}
	}
})