/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
import './components/Identify.vue';
import './components/Track.vue';
import './components/Page.vue';
import './components/Screen.vue';
import './components/Group.vue';
import './components/Alias.vue';
/* wwEditor:end */

export default {
    analytics: null,
    onLoad(settings) {
        this.loadAnalytics(settings.writeKey);
        this.analytics = wwLib.getFrontWindow().analytics;
    },
    /*=============================================m_ÔÔ_m=============================================\
        Segment API
    \================================================================================================*/
    async loadAnalytics(writeKey) {
        await new Promise((resolve, reject) => {
            !(function () {
                wwLib.getFrontWindow().analytics = wwLib.getFrontWindow().analytics || [];
                if (!analytics.initialize)
                    if (analytics.invoked)
                        wwLib.getFrontWindow().console &&
                            console.error &&
                            console.error('Segment snippet included twice.');
                    else {
                        analytics.invoked = !0;
                        analytics.methods = [
                            'trackSubmit',
                            'trackClick',
                            'trackLink',
                            'trackForm',
                            'pageview',
                            'identify',
                            'reset',
                            'group',
                            'track',
                            'ready',
                            'alias',
                            'debug',
                            'page',
                            'once',
                            'off',
                            'on',
                            'addSourceMiddleware',
                            'addIntegrationMiddleware',
                            'setAnonymousId',
                            'addDestinationMiddleware',
                        ];
                        analytics.factory = function (e) {
                            return function () {
                                if (wwLib.getFrontWindow().analytics.initialized)
                                    return wwLib
                                        .getFrontWindow()
                                        .analytics[e].apply(wwLib.getFrontWindow().analytics, arguments);
                                var i = Array.prototype.slice.call(arguments);
                                i.unshift(e);
                                analytics.push(i);
                                return analytics;
                            };
                        };
                        for (var i = 0; i < analytics.methods.length; i++) {
                            var key = analytics.methods[i];
                            analytics[key] = analytics.factory(key);
                        }
                        analytics.load = function (key, i) {
                            var t = document.createElement('script');
                            t.type = 'text/javascript';
                            t.onload = () => resolve();
                            t.onerror = () => reject();
                            t.async = !0;
                            t.src = 'https://cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';
                            var n = document.getElementsByTagName('script')[0];
                            n.parentNode.insertBefore(t, n);
                            analytics._loadOptions = i;
                        };
                        analytics._writeKey = 'AHFngqEXGuoAuDxtEOIYJ56vuW13uS6y';
                        analytics.SNIPPET_VERSION = '4.16.1';
                        analytics.load(writeKey);
                        analytics.page();
                    }
            })();
        });
    },
    identify({ userId, traits = {} }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:end */
        if (!this.analytics) return;
        traits = Array.isArray(traits)
            ? traits.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : traits;
        this.analytics.identify(userId, traits);
    },
    track({ event, properties = {} }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:end */
        if (!this.analytics) return;
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        this.analytics.track(event, properties);
    },
    page({ category, name, properties }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:end */
        if (!this.analytics) return;
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        this.analytics.page(category, name, properties);
    },
    screen({ name, properties }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:end */
        if (!this.analytics) return;
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        this.analytics.screen(name, properties);
    },
    group({ groupId, traits }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:end */
        if (!this.analytics) return;
        traits = Array.isArray(traits)
            ? traits.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : traits;
        this.analytics.group(groupId, traits);
    },
    alias({ previousId, userId }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:end */
        if (!this.analytics) return;
        this.analytics.alias(previousId, userId);
    },
};
