const app = Vue.createApp({
    setup() {
        console.log("Vue is running");
        const ref = Vue.ref,
            name = ref("Konstantin"),
            age = ref(45),
            rnd = ref(Math.random()),
            url = ref("https://v3.ru.vuejs.org/logo.png");
        return {
            name, age, rnd, url
        };
    }
});

app.mount("#assignment");
