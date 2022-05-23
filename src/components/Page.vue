<template>
    <wwEditorInputRow
        label="Category"
        type="query"
        :model-value="category"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setCategory"
    />
    <wwEditorInputRow
        label="Name"
        type="query"
        :model-value="name"
        placeholder="Enter a name"
        bindable
        @update:modelValue="setName"
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
        category() {
            return this.args.category;
        },
        name() {
            return this.args.name;
        },
        properties() {
            return this.args.properties || [];
        },
    },
    methods: {
        setCategory(category) {
            this.$emit('update:args', { ...this.args, category });
        },
        setName(name) {
            this.$emit('update:args', { ...this.args, name });
        },
        setProperties(properties) {
            this.$emit('update:args', { ...this.args, properties });
        },
    },
};
</script>
