<template>
    <div class="segment-settings-summary">
        <wwEditorIcon large name="key" class="segment-settings-summary__icon" />
        <span class="caption-m">{{ apiKey }}</span>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    computed: {
        apiKey() {
            return this.settings.publicData.apiKey || '';
        },
    },
};
</script>

<style lang="scss" scoped>
.segment-settings-summary {
    display: flex;
    align-items: center;
    &__icon {
        margin-right: var(--ww-spacing-02);
    }
}
</style>
