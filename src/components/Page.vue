<template>
    <wwEditorInputRow
        label="Category"
        required
        type="query"
        :model-value="category"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setCategory"
    />
    <wwEditorInputRow
        label="Name"
        required
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
        args: { type: Array, default: () => [null, null, []] },
    },
    emits: ['update:args'],
    computed: {
        category() {
            return this.args[0];
        },
        name() {
            return this.args[1];
        },
        properties() {
            return this.args[2] || [];
        },
    },
    methods: {
        setCategory(category) {
            this.$emit('update:args', [category, this.name, this.properties]);
        },
        setName(name) {
            this.$emit('update:args', [this.category, name, this.properties]);
        },
        setProperties(properties) {
            this.$emit('update:args', [this.category, this.name, properties]);
        },
    },
};
</script>
