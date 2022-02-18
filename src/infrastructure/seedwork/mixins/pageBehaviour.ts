import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    data: () => ({
        records: [] as any
    }),
    computed: {
        hasRecords(): boolean {
            return this.records.length > 0;
        },
    },
    methods: {
        setLoading() {
            this.$swal.showLoading()
        },
        setCompleted() {
            this.$swal.close()
        },
        showError(error: any, title = null) {
            title = title ? title : this.$messages.errorDefaultTitle();
            if (error.content == "E008004") return this.showComingSoonPopup();
            const errorMessage = this.$messages[error.content]() ? this.$messages[error.content]() : this.$messages.ErrorDefaultMessage();
            this.$swal(title, errorMessage, "error");
        },
        goBack() {
            if (this.$route.fullPath == '/mining/order') {
                return this.$router.push({ name: 'DashboardPage' })
            }
            this.$router.go(-1);
        },
        showComingSoonPopup() {
            this.$swal.fire({
                title: this.$messages.labelComingSoon(),
                text: this.$messages.labelComingSoonDescription(),
                preConfirm: () => {
                    this.$router.push({ name: "DashboardPage" });
                }
            });
        },
    }
})