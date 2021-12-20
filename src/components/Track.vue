<template>
    <wwEditorInputRow
        label="Event"
        required
        type="query"
        :model-value="event"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setEvent"
    />
    <wwEditorInputRow
        label="Properties"
        type="array"
        :model-value="properties"
        bindable
        @update:modelValue="setProperties"
        @add-item="setProperties([...properties, {}])"
    >
        <template #default="{ item, setItem }">
            <wwEditorInputRow
                type="query"
                :model-value="item.key"
                label="Key"
                placeholder="Enter a value"
                bindable
                small
                @update:modelValue="setItem({ ...item, key: $event })"
            />
            <wwEditorInputRow
                type="query"
                :model-value="item.value"
                label="Value"
                placeholder="Enter a value"
                bindable
                small
                @update:modelValue="setItem({ ...item, value: $event })"
            />
        </template>
    </wwEditorInputRow>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        args: { type: Array, default: () => [null, []] },
    },
    emits: ['update:args'],
    computed: {
        name() {
            return this.args[0];
        },
        properties() {
            return this.args[1] || [];
        },
    },
    methods: {
        setEvent(event) {
            this.$emit('update:args', [event, this.properties]);
        },
        setProperties(properties) {
            this.$emit('update:args', [this.event, properties]);
        },
    },
};
</script>
