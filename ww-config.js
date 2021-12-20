export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.publicData.apiKey;
            },
        },
    },
    functions: [
        {
            name: 'Identify',
            code: 'identify',
            parameters: [
                { name: 'userId', type: 'string', optional: true },
                { name: 'traits', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Identify.vue'),
            /* wwEditor:end */
        },
        {
            name: 'Track',
            code: 'track',
            parameters: [
                { name: 'event', type: 'string' },
                { name: 'properties', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Track.vue'),
            getIsValid([event]) {
                return !!event;
            },
            /* wwEditor:end */
        },
        {
            name: 'Page',
            code: 'page',
            parameters: [
                { name: 'category', type: 'string', optional: true },
                { name: 'name', type: 'string', optional: true },
                { name: 'properties', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Page.vue'),
            /* wwEditor:end */
        },
        {
            name: 'Screen',
            code: 'screen',
            parameters: [
                { name: 'name', type: 'string', optional: true },
                { name: 'properties', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Screen.vue'),
            /* wwEditor:end */
        },
        {
            name: 'Group',
            code: 'group',
            parameters: [
                { name: 'groupId', type: 'string' },
                { name: 'traits', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Group.vue'),
            getIsValid([groupId]) {
                return !!groupId;
            },
            /* wwEditor:end */
        },
        {
            name: 'Alias',
            code: 'alias',
            parameters: [
                { name: 'previousId', type: 'string' },
                { name: 'userId', type: 'string', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Alias.vue'),
            getIsValid([previousId]) {
                return !!previousId;
            },
            /* wwEditor:end */
        },
    ],
};
