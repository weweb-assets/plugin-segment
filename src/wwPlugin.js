import { AnalyticsBrowser } from '@segment/analytics-next';
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
        const analytics = AnalyticsBrowser.load({ writeKey: settings.publicData.writeKey });
        this.analytics = [analytics].flat().find(item => item.identify);
    },
    /*=============================================m_ÔÔ_m=============================================\
        Segment API
    \================================================================================================*/
    loadAnalytics(writeKey) {
        this.analytics = AnalyticsBrowser.load({ writeKey });
    },
    identify({ userId, traits }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:start */
        if (!this.analytics) return;
        traits = Array.isArray(traits)
            ? traits.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : traits;
        this.analytics.identify(userId, traits);
    },
    track({ event, properties }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:start */
        if (!this.analytics) return;
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        this.analytics.track(event, properties);
    },
    page({ category, name, properties }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:start */
        if (!this.analytics) return;
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        this.analytics.page(category, name, properties);
    },
    screen({ name, properties }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:start */
        if (!this.analytics) return;
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        this.analytics.screen(name, properties);
    },
    group({ groupId, traits }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:start */
        if (!this.analytics) return;
        traits = Array.isArray(traits)
            ? traits.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : traits;
        this.analytics.group(groupId, traits);
    },
    alias({ previousId, userId }) {
        /* wwEditor:start */
        if (!this.analytics) throw new Error('Invalid Segment write key.');
        /* wwEditor:start */
        if (!this.analytics) return;
        this.analytics.alias(previousId, userId);
    },
};
