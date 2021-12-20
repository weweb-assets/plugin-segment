<template>
    <div class="segment-settings-edit">
        <wwEditorFormRow required label="API key">
            <template #append-label>
                <a
                    class="segment-settings-edit__link"
                    href="https://segment.com/docs/connections/find-writekey"
                    target="_blank"
                >
                    Find it here
                </a>
            </template>
            <wwEditorInputText
                type="text"
                name="api-key"
                placeholder="Enter the API key"
                :model-value="settings.publicData.apiKey"
                large
                @update:modelValue="changeApiKey"
            />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    methods: {
        changeApiKey(apiKey) {
            this.$emit('update:settings', { ...this.settings, publicData: { apiKey } });
        },
    },
};
</script>

<style lang="scss" scoped>
.segment-settings-edit {
    display: flex;
    flex-direction: column;
    &__link {
        color: var(--ww-color-blue-500);
        margin-left: var(--ww-spacing-02);
    }
    &__row {
        display: flex;
        align-items: center;
    }
    &__radio-label {
        margin-left: var(--ww-spacing-02);
    }
}
</style>
