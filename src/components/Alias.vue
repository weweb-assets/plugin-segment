<template>
    <wwEditorInputRow
        label="Previous ID"
        required
        type="query"
        :model-value="previousId"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setPreviousId"
    />
    <wwEditorInputRow
        label="User ID"
        type="query"
        :model-value="userId"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setUserId"
    />
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        args: { type: Array, default: () => [null, null] },
    },
    emits: ['update:args'],
    computed: {
        previousId() {
            return this.args[0];
        },
        userId() {
            return this.args[1];
        },
    },
    methods: {
        setPreviousId(previousId) {
            this.$emit('update:args', [previousId, this.userId]);
        },
        setUserId(userId) {
            this.$emit('update:args', [this.previousId, userId]);
        },
    },
};
</script>
