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
        args: { type: Object, required: true },
    },
    emits: ['update:args'],
    computed: {
        previousId() {
            return this.args.previousId;
        },
        userId() {
            return this.args.userId;
        },
    },
    methods: {
        setPreviousId(previousId) {
            this.$emit('update:args', { ...this.args, previousId });
        },
        setUserId(userId) {
            this.$emit('update:args', { ...this.args, userId });
        },
    },
};
</script>
