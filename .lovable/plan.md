# SRIVAARI AUTOMOBILES UI/UX Prototype

## Goal
Build a production-quality, responsive showroom and finance management prototype driven by realistic Tamil Nadu mock data. The experience will center on “enter once, reuse everywhere,” with connected customer, vehicle, booking, finance, insurance, registration, delivery, and accounting flows.

## Visual system
- Establish a light, premium automotive-fintech design system in `src/styles.css`: warm white canvas, cool translucent surfaces, midnight text, royal-blue/indigo brand, restrained violet/cyan accents, and semantic success/warning/danger colors.
- Use Manrope throughout, controlled glass surfaces, 16–22px card radii, subtle diffuse shadows, generous spacing, and 150–300ms motion with reduced-motion support.
- Extend the shared button, badge, input, table, dialog, toast, chart, sidebar, and card primitives rather than styling each screen independently.

## Application shell
- Build one responsive authenticated shell with collapsible desktop sidebar, mobile drawer, persistent header, breadcrumbs, user menu, notification dropdown, and contextual page titles.
- Add the full navigation set: Dashboard, Customers, Enquiries, Proforma Invoices, Bookings, Vehicle Inventory, Finance, Insurance, Registration, Deliveries, Accounts, Reports, and Settings.
- Implement global search as a command palette with grouped customer, booking, vehicle, finance, insurance, and registration matches, including phone-number lookup and direct navigation.

## Shared product architecture
- Define reusable TypeScript models for every requested business entity and status.
- Create a central mock repository/service layer with realistic customers, Tamil Nadu addresses, vehicles, NBFCs, RTO data, transactions, notifications, and activity history.
- Keep page code data-agnostic so mock services can later be replaced with APIs.
- Build shared operational components: page headers, KPI cards, filter bars, modern data tables, status badges, steppers, timelines, form sections, customer/vehicle selectors, document lists, file upload, currency/phone inputs, empty/error/loading states, confirmation dialogs, and toast feedback.

## Routes and screens
- `/` redirects to `/dashboard`.
- Dashboard: six operational KPIs, clickable customer pipeline, prioritized actions, and recent activity.
- Customers: searchable/filterable list, new/edit form, and rich customer profile with journey stepper and activity tabs.
- Enquiries: list, phone-first customer lookup, auto-filled customer/vehicle workflow, follow-up states, and detail page.
- Proforma: list plus polished create/detail invoice views with pricing totals, cash/finance choice, preview, and PDF-style action.
- Bookings: filtered list, intelligent create flow reusing enquiry/proforma data, and polished detail view with stage, next action, progress tracker, documents, and related records.
- Inventory: table/card toggle, filters, create form, and vehicle detail/history.
- Finance: KPI dashboard, applications list/detail, document/timeline states, and separate refinance workflow.
- Insurance and Registration: dashboards/lists, status filters, detail timelines, dates, providers/RTOs, and documents.
- Deliveries: readiness cards, blocked prerequisites, detail checklist, and confirmation flow.
- Accounts: today’s summary, transaction list, income/expense dialogs, automatic daily view, and monthly charts without duplicate entry.
- Reports: categorized sales, finance, inventory, accounts, and operations reports with date/filter controls and export/print interactions.
- Settings: showroom information, users, roles, master data, and notification settings.

## Realistic interactions
- Search, filter, sort, pagination, tabs, table/card switching, dropdowns, dialogs, drawers, and form validation will work locally.
- Creating or updating records will update the in-memory mock service for the current session and show toasts.
- Existing customer/enquiry/proforma selections will automatically populate downstream forms and calculations.
- Pipeline stages, notifications, table rows, and next-action buttons will navigate to relevant filtered lists or detail screens.
- Delivery completion will enforce prerequisites before confirmation.

## Verification
- Check every route for unique metadata, functional navigation, nonblank loading/empty/error states, and no dead ends.
- Validate representative end-to-end flows: global phone search, customer-to-enquiry, enquiry-to-booking, finance progression, delivery blocking/completion, and accounts aggregation.
- Test desktop and mobile layouts with rendered screenshots, including sidebar/drawer behavior, tables, forms, and long labels.
