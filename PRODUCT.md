# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- People organizing weddings, quinceañeras, birthdays, and business events.
- Professional event organizers.
- Invitation recipients who need to view event details and respond to an invitation.
- Prospective users evaluating the product through the public landing site.

The primary organizer may have little or no technical experience. Their job is to create and customize an invitation, manage an event and its guests, share the invitation, and review responses and other useful event information.

## Product Purpose

InviRtual is a SaaS platform for customizable digital invitations. It aims to make creating and managing invitations simpler by bringing invitation creation, event and guest management, sharing, and attendance responses together in one platform.

## Positioning

The confirmed value proposition is simplifying the creation and administration of customizable digital invitations. No distinct competitive mechanism or comparative advantage has been verified; do not claim one without evidence.

## Operating Context

The monorepo contains three main web applications that serve one product:

- **Landing** presents the product, its features, examples, and plans to prospective users.
- **Panel** is the private workspace for creating invitations, administering events, managing guests and responses, sharing invitations, and consulting event information.
- **Invitations** serves public invitation pages to recipients, where they can view event details and respond.

The product context is shared across these applications, while design decisions remain app-specific. The current visual work is for the new Panel. A design task for one application must stay within that application's scope.

## Capabilities and Constraints

**Desired product experience, as confirmed by the product owner:**

- Organizers can create and personalize invitations, manage events and guests, share invitations easily, and consult useful event information.
- Recipients can view event details and confirm attendance with little effort.
- Visitors can understand the product and decide whether to use it.
- The experience should be intuitive for people without technical knowledge.

**What the repository currently demonstrates:**

- Landing includes product, feature, pricing, and testimonial content. Marketing statements and testimonials in the code are not verified evidence.
- Panel contains invitation-list, invitation-builder, guest-management, and statistics screens. Several use mock or hard-coded data; the builder currently keeps its form state locally and routes its publish action to a confirmation page. These screens do not by themselves prove that the complete workflows are backed by production services.
- Invitations fetches invitation data from an API and selects a page template from the returned data. The current template manifest lists two templates. The inspected code does not confirm that every desired recipient response flow is complete.

Keep implemented functionality distinct from planned or desired capabilities. Do not invent statistics, testimonials, customers, or demonstrated competitive advantages.

## Brand Commitments

- The product name is **InviRtual**.
- The product should be associated with celebrations, creativity, and personalization, and feel modern, attractive, and easy to use.
- Each application has its own visual identity; do not impose one theme or visual system across all three.
- The intended identity varies by application: Landing is friendlier, more colorful, and rounder; Panel is modern and somewhat more restrained, with less rounded forms while avoiding a generic look; Invitations varies by template and event type.

## Evidence on Hand

- Product and feature copy: `apps/landing/app/components/home/constants.ts`.
- Panel routes and screens: `apps/panel/app/pages/panel/`, `apps/panel/app/pages/invitation-builder/`, and `apps/panel/app/pages/panel/guests.vue`.
- Mock invitation and guest data: `apps/panel/app/utils/constants/invitations_constants.ts` and `apps/panel/app/utils/constants/guests_constants.ts`.
- Public invitation route and available template list: `apps/invitations/app/pages/[uuid].vue` and `apps/invitations/app/templates/manifest.json`.
- Testimonials and claims such as “miles de eventos” are present as sample marketing content and have no verified supporting evidence.

## Product Principles

- Make the core invitation and event tasks understandable to people without technical experience.
- Support different event types through invitation personalization.
- Bring invitation creation, sharing, guest management, and responses into one product journey.
- Give each application room for its own visual identity while keeping product context consistent.
- Only present claims and capabilities that can be supported by real product behavior or evidence.
