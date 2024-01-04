const app = Vue.createApp({
    setup() {
        const ref = Vue.ref,
            result = ref(0),
            resultText = ref("");

        const addValue = (value) => {
            result.value += value;
        };

        Vue.watch(result, (newValue) => {
            if (newValue < 37) {
                resultText.value = "Not there yet";
            }else if (newValue > 37) {
                resultText.value = "Too much";
            }else {
                resultText.value = "";
            }
            setTimeout(() => result.value = 0, 5000);
        });

        return { result, resultText, addValue};
    }
});
app.mount("#assignment");