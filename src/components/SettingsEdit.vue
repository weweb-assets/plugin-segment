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

    <div class="p-2 ww-border-radius-02 border-primary">
        <wwEditorFormRow label="Custom CDN Proxy URL">
            <wwEditorInputText
                type="text"
                name="proxy-url"
                placeholder="Enter CDN Proxy URL"
                :model-value="settings.publicData.proxyUrl"
                large
                @update:modelValue="changeProxyUrl"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Custom API Proxy URL">
            <wwEditorInputText
                type="text"
                name="api-proxy-url"
                placeholder="Enter API Proxy URL"
                :model-value="settings.publicData.apiProxyUrl"
                large
                @update:modelValue="changeApiProxyUrl"
        /></wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    watch: {
        settings: {
            handler({ publicData }) {
                console.log('settings changed', publicData);
                this.plugin.loadAnalytics(
                    {
                        writeKey: publicData.writeKey,
                        cdnUrl: publicData.proxyUrl,
                    },
                    {
                        integrations: {
                            'Segment.io': {
                                apiHost: publicData.apiProxyUrl,
                            },
                        },
                    }
                );
            },
            deep: true,
        },
    },
    methods: {
        changeWriteKey(writeKey) {
            this.$emit('update:settings', { ...this.settings, publicData: { ...this.settings.publicData, writeKey } });
        },
        changeProxyUrl(proxyUrl) {
            this.$emit('update:settings', { ...this.settings, publicData: { ...this.settings.publicData, proxyUrl } });
        },
        changeApiProxyUrl(apiProxyUrl) {
            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, apiProxyUrl },
            });
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
