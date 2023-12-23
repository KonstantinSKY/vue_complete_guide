const app = Vue.createApp({
    setup() {
        const ref = Vue.ref,
            inputValue = ref(""),
            enterInputValue = ref("");

        const showAlert = () => {
            console.log("Button clicked");
            alert("Alert Message");
        };
        const updateInputValue = (event) => {
            inputValue.value = event.target.value;
        };

        const updateOnEnter = (event) => {
                enterInputValue.value = event.target.value;
        };

        return { showAlert, inputValue, enterInputValue, updateInputValue, updateOnEnter };
    }
});
console.log("Mounting");
app.mount("#assignment");