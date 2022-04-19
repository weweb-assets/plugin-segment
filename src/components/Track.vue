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
        args: { type: Object, required: true },
    },
    emits: ['update:args'],
    computed: {
        event() {
            return this.args.event;
        },
        properties() {
            return this.args.properties || [];
        },
    },
    methods: {
        setEvent(event) {
            this.$emit('update:args', { ...this.args, event });
        },
        setProperties(properties) {
            this.$emit('update:args', { ...this.args, properties });
        },
    },
};
</script>
