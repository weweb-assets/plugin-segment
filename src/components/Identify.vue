<template>
    <wwEditorInputRow
        label="User ID"
        required
        type="query"
        :model-value="userId"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setUserId"
    />
    <wwEditorInputRow
        label="Traits"
        type="array"
        :model-value="traits"
        bindable
        @update:modelValue="setTraits"
        @add-item="setTraits([...traits, {}])"
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
        userId() {
            return this.args[0];
        },
        traits() {
            return this.args[1] || [];
        },
    },
    methods: {
        setUserId(userId) {
            this.$emit('update:args', [userId, this.traits]);
        },
        setTraits(traits) {
            this.$emit('update:args', [this.userId, traits]);
        },
    },
};
</script>
