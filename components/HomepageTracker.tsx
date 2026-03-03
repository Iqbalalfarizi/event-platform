"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

const HomepageTracker = () => {
  useEffect(() => {
    // homepage_viewed is an exception to the "no pageviews" rule —
    // it represents the top of the event-discovery conversion funnel.
    posthog.capture("homepage_viewed");
  }, []);

  return null;
};

export default HomepageTracker;
