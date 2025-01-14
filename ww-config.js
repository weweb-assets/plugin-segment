export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.publicData.writeKey;
            },
        },
    },
    actions: [
        {
            name: 'Identify',
            code: 'identify',
            /* wwEditor:start */
            edit: () => import('./src/components/Identify.vue'),
            copilot: {
                description: 'Identify a user with specific traits',
                returns: 'void',
                schema: {
                    userId: {
                        type: 'string',
                        description: 'Unique identifier for the user',
                        bindable: true
                    },
                    traits: {
                        type: 'array',
                        description: 'Array of key-value pairs describing user traits',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
        {
            name: 'Track',
            code: 'track',
            /* wwEditor:start */
            edit: () => import('./src/components/Track.vue'),
            getIsValid({ event }) {
                return !!event;
            },
            copilot: {
                description: 'Track a specific event with properties',
                returns: 'void',
                schema: {
                    event: {
                        type: 'string',
                        description: 'Name of the event to track',
                        bindable: true
                    },
                    properties: {
                        type: 'array',
                        description: 'Array of key-value pairs for event properties',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
        {
            name: 'Page',
            code: 'page',
            /* wwEditor:start */
            edit: () => import('./src/components/Page.vue'),
            copilot: {
                description: 'Track a page view with optional category and properties',
                returns: 'void',
                schema: {
                    category: {
                        type: 'string',
                        description: 'Category of the page',
                        bindable: true
                    },
                    name: {
                        type: 'string',
                        description: 'Name of the page',
                        bindable: true
                    },
                    properties: {
                        type: 'array',
                        description: 'Array of key-value pairs for page properties',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
        {
            name: 'Screen',
            code: 'screen',
            /* wwEditor:start */
            edit: () => import('./src/components/Screen.vue'),
            copilot: {
                description: 'Track a screen view in a mobile app',
                returns: 'void',
                schema: {
                    name: {
                        type: 'string',
                        description: 'Name of the screen',
                        bindable: true
                    },
                    properties: {
                        type: 'array',
                        description: 'Array of key-value pairs for screen properties',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
        {
            name: 'Group',
            code: 'group',
            /* wwEditor:start */
            edit: () => import('./src/components/Group.vue'),
            getIsValid({ groupId }) {
                return !!groupId;
            },
            copilot: {
                description: 'Associate a user with a group',
                returns: 'void',
                schema: {
                    groupId: {
                        type: 'string',
                        description: 'Unique identifier for the group',
                        bindable: true
                    },
                    traits: {
                        type: 'array',
                        description: 'Array of key-value pairs describing group traits',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
        {
            name: 'Alias',
            code: 'alias',
            /* wwEditor:start */
            edit: () => import('./src/components/Alias.vue'),
            getIsValid({ previousId }) {
                return !!previousId;
            },
            copilot: {
                description: 'Associate one user ID with another',
                returns: 'void',
                schema: {
                    previousId: {
                        type: 'string',
                        description: 'Previous identifier for the user',
                        bindable: true
                    },
                    userId: {
                        type: 'string',
                        description: 'New identifier for the user',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
    ],
};