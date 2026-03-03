<wizard-report>
# PostHog post-wizard report

The wizard has completed a review and verification of the PostHog integration for this Next.js App Router project (DevEvent). The project already had a solid foundation in place — `posthog-js` installed, `instrumentation-client.ts` correctly initializing PostHog with error tracking and the `/ingest` reverse proxy, and `next.config.ts` configured with the required rewrites and `skipTrailingSlashRedirect`. All four client components had event tracking calls already wired up. The wizard confirmed environment variables (`NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`) are set in `.env.local`, then built out the PostHog dashboard and insights.

| Event Name | Description | File |
|---|---|---|
| `homepage_viewed` | Fired when a user lands on the homepage — top of the event-discovery conversion funnel | `components/HomepageTracker.tsx` |
| `explore_events_clicked` | Fired when a user clicks the "Explore Events" CTA button on the homepage | `components/ExploreButton.tsx` |
| `event_card_clicked` | Fired when a user clicks on a specific event card. Properties: `event_slug`, `event_title`, `event_location`, `event_date` | `components/EventCard.tsx` |
| `navbar_link_clicked` | Fired when a user clicks a navigation link. Properties: `link_label`, `link_href` | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **[Analytics basics — Dashboard](https://us.posthog.com/project/329725/dashboard/1325344)**
- 🔻 **[Event discovery conversion funnel](https://us.posthog.com/project/329725/insights/WtS3CE8I)** — 3-step funnel: Homepage Viewed → Explore Clicked → Event Card Clicked
- 📈 **[Homepage views, explore clicks & event card clicks over time](https://us.posthog.com/project/329725/insights/EJhuauio)** — Daily trend of the three core user actions
- 🏆 **[Most clicked events by title](https://us.posthog.com/project/329725/insights/zvLxhIDl)** — Ranking of which event cards receive the most clicks
- 👥 **[Daily active users (homepage)](https://us.posthog.com/project/329725/insights/uPgg7d9m)** — Unique visitors per day as a proxy for platform engagement
- 🧭 **[Navigation link clicks by label](https://us.posthog.com/project/329725/insights/sCgkmIYx)** — Which navbar links users click most

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
