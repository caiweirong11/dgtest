
    <div id="app">
        <input type="button" value="v-on指令" v-on:click="doIt">
        <input type="button" value="v-on简写" @click="doIt">
        <input type="button" value="双击事件" @dblclick="doIt">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            methods: {
                doIt: function () {
                    alert("Do It");
                }
            },
        })
