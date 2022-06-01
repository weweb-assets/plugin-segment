<template>
    <wwEditorFormRow required label="Write key">
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
            :model-value="settings.publicData.writeKey"
            large
            @update:modelValue="changeWriteKey"
        />
    </wwEditorFormRow>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    methods: {
        changeWriteKey(writeKey) {
            this.$emit('update:settings', { ...this.settings, publicData: { writeKey } });
            this.plugin.load(writeKey);
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
}
</style>
