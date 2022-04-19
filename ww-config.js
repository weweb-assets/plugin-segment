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
    actions: [
        {
            name: 'Identify',
            code: 'identify',
            /* wwEditor:start */
            edit: () => import('./src/components/Identify.vue'),
            /* wwEditor:end */
        },
        {
            name: 'Track',
            code: 'track',
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
            /* wwEditor:start */
            edit: () => import('./src/components/Page.vue'),
            /* wwEditor:end */
        },
        {
            name: 'Screen',
            code: 'screen',
            /* wwEditor:start */
            edit: () => import('./src/components/Screen.vue'),
            /* wwEditor:end */
        },
        {
            name: 'Group',
            code: 'group',
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
            /* wwEditor:start */
            edit: () => import('./src/components/Alias.vue'),
            getIsValid([previousId]) {
                return !!previousId;
            },
            /* wwEditor:end */
        },
    ],
};
