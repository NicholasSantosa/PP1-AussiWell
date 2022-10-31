import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", {
	state: () => {
		return {
			url: '/',
			extensionID: 'ppinjifijakogakgaofdjpccafcdhlkm',
		}
	},

	actions: {
		updateUrl(newUrl){
			this.url = newUrl;
		},
		updateExtensionID(newID){
			this.extensionID = newID;
		}
	},
	persist: true,
})