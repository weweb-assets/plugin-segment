<template>
    <wwEditorInputRow
        label="Group ID"
        required
        type="query"
        :model-value="groupId"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setGroupId"
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
        args: { type: Object, default: () => ({ groupId: null, traits: [] }) },
    },
    emits: ['update:args'],
    computed: {
        groupId() {
            return this.args.groupId;
        },
        traits() {
            return this.args.traits || [];
        },
    },
    methods: {
        setGroupId(groupId) {
            this.$emit('update:args', { ...this.args, groupId });
        },
        setTraits(traits) {
            this.$emit('update:args', { ...this.args, traits });
        },
    },
};
</script>
