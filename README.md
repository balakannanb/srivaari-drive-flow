# Srivaari Flow

Build SRIVAARI AUTOMOBILES — Bike Showroom & Finance Management System

Build a complete, production-quality web application UI/UX prototype for a modern bike showroom and bike-finance management system called:

SRIVAARI AUTOMOBILES

The application is used by a bike showroom that sells bikes through both:

Full cash purchases

NBFC / finance purchases

Re-finance / finance-related workflows

The main purpose of this software is to:

Eliminate paper-based work.

Avoid entering the same customer information repeatedly.

Make the complete customer journey digital.

Automatically carry customer and transaction information from one stage to another.

Eliminate duplicate daily/monthly accounting entry.

Give showroom staff a single place to manage customers, enquiries, bookings, vehicles, finance, insurance, registration and delivery.

Give owners/managers a clear operational dashboard.

1. VERY IMPORTANT — DESIGN DIRECTION

The application must feel like a premium modern SaaS/business application, not a traditional ERP and not a generic admin dashboard.

The visual identity should be:

Light themed

Rich and elegant

Premium

Smooth

Liquid

Glassy

Modern

Professional

Spacious

Sophisticated

Highly usable

Visually consistent across every page

The design should feel like a combination of:

Premium automotive showroom

Modern fintech application

High-end SaaS dashboard

Avoid making it look like:

A boring corporate ERP

A generic Bootstrap admin panel

A dark dashboard

A spreadsheet

A dense accounting application

An old-fashioned dealership management system

The UI should feel expensive, polished and trustworthy.

2. COLOUR & VISUAL SYSTEM

Use a predominantly light background.

Preferred overall palette:

Warm white / off-white main background

Very light cool grey secondary surfaces

Deep navy / midnight blue for primary text

Rich royal blue / indigo as a primary brand colour

Elegant violet / purple gradient accents

Subtle cyan/blue highlights

Small amounts of emerald green for success states

Amber/gold for pending states

Red only for errors/danger

Use rich gradients carefully.

Examples of gradient direction:

Deep indigo → royal blue

Royal blue → violet

Blue → subtle cyan

Violet → blue

Do NOT make the entire interface colourful.

Use gradients primarily for:

Hero/dashboard cards

Primary buttons

Active navigation

Selected states

Important KPI cards

Progress indicators

Subtle background glows

3. GLASS / LIQUID DESIGN LANGUAGE

Use a sophisticated glassmorphism style.

Cards should have:

Semi-transparent white backgrounds

Very subtle backdrop blur

Soft borders

Large but controlled border radius

Very subtle shadows

Layered depth

Example visual feeling:

Background
   ↓
Soft gradient glow
   ↓
Glass card
   ↓
Content


Do NOT overdo glassmorphism.

The interface should remain highly readable and practical.

Use:

backdrop-blur

translucent white surfaces

subtle borders

soft shadows

smooth gradients

subtle ambient background blobs

The overall appearance should feel liquid and smooth, but still suitable for a real business application.

4. TYPOGRAPHY

Use a modern clean sans-serif font.

Recommended:

Inter

Manrope

Plus Jakarta Sans

Prefer Inter or Manrope.

Typography should have:

Strong page titles

Medium-weight section headings

Comfortable body text

Small muted metadata

Clear numerical KPI values

Use generous spacing.

Do not overcrowd screens.

5. BORDER RADIUS

Use a consistent rounded visual language.

Suggested:

Cards: 16–22px

Inputs: 10–14px

Buttons: 10–12px

Large dashboard cards: 20–24px

Modals: 20–24px

Avoid extremely rounded "pill everything" designs.

Use pills primarily for:

Status

Filters

Tags

Small metadata

6. SHADOWS

Use extremely subtle shadows.

The interface should look layered but not heavy.

Prefer:

Soft diffuse shadows

Low opacity

Very subtle elevation

Avoid dark black shadows.

7. ANIMATIONS

The application should feel smooth.

Use subtle animations for:

Page transitions

Card hover

Button hover

Dropdown opening

Modal opening

Sidebar transitions

Status changes

Progress steps

Toast notifications

Table row interactions

Use approximately 150–300ms transitions.

Animations must NEVER slow down the user.

Avoid excessive animation.

8. RESPONSIVE DESIGN

The application must be responsive.

Desktop is the primary target because showroom staff will primarily use desktop/laptop systems.

Support:

Large desktop

Standard desktop

Laptop

Tablet

Mobile

On mobile:

Sidebar becomes a drawer

Tables become cards or horizontally scrollable

Forms become single-column

Dashboard cards stack appropriately

9. APPLICATION SHELL

Create a common application layout used across all authenticated pages.

Structure:

┌───────────────────────────────────────────────────────────────┐
│ SRIVAARI AUTOMOBILES       Search       🔔       User Avatar │
├───────────────┬───────────────────────────────────────────────┤
│               │                                               │
│ Dashboard     │                                               │
│ Customers     │                                               │
│ Enquiries     │                                               │
│ Proforma      │                                               │
│ Bookings      │              PAGE CONTENT                     │
│ Inventory     │                                               │
│ Finance       │                                               │
│ Insurance     │                                               │
│ Registration  │                                               │
│ Deliveries    │                                               │
│ Accounts      │                                               │
│ Reports       │                                               │
│               │                                               │
│ Settings      │                                               │
│               │                                               │
└───────────────┴───────────────────────────────────────────────┘


The sidebar should have:

SRIVAARI AUTOMOBILES logo/wordmark

Small subtitle such as "Automobiles & Finance"

Navigation icons

Active navigation state

Collapsible behaviour

User profile at bottom

The sidebar should have a subtle glass background.

10. GLOBAL SEARCH

Create a powerful global search in the top navigation.

Placeholder:

Search customer, phone, booking, chassis, engine...

The search should visually support searching by:

Customer name

Phone number

Customer ID

Booking number

Proforma number

Chassis number

Engine number

Registration number

Finance application number

When a user searches a phone number, show grouped results:

CUSTOMER
Ravi Kumar
9876543210

BOOKING
BK-2026-00125

VEHICLE
Jupiter ZX
Chassis: ME4XXXX

FINANCE
NBFC ABC
Approved

INSURANCE
Policy: XXXXX

REGISTRATION
TN XX XX XXXX


This is a major feature of the product.

11. MAIN NAVIGATION

Create these navigation items:

Dashboard

Customers

Enquiries

Proforma Invoices

Bookings

Vehicle Inventory

Finance

Insurance

Registration

Deliveries

Accounts

Reports

Settings

Use appropriate Lucide icons.

12. DASHBOARD

Create a premium operational dashboard.

The dashboard should answer:

"What is happening in the showroom today?"

Top section:

Good morning, [User Name]

Here's what's happening at SRIVAARI AUTOMOBILES today.


KPI cards:

Today's Bookings

Example:
12

Pending Finance

Example:
5

Available Vehicles

Example:
38

Insurance Pending

Example:
7

Registration Pending

Example:
9

Deliveries Today

Example:
4

Each card should have:

Icon

Large number

Label

Small trend/status indicator

Subtle gradient

Glass surface

Dashboard Pipeline

Create a horizontal customer pipeline:

Enquiry → Proforma → Booking → Payment → Finance → Insurance → Registration → Delivery


Display counts at each stage.

Make this interactive.

Clicking a stage should navigate to the corresponding filtered page.

Today's Actions

Show a prioritized action list.

Example:

3 Finance applications awaiting action
5 Insurance policies pending
4 Registrations pending
4 Deliveries scheduled today
7 Customer follow-ups due today


Use appropriate status colours.

Recent Activity

Show:

New enquiry

Booking created

Payment received

Finance approved

Insurance completed

Registration completed

Vehicle delivered

Each activity should display:

Time

User

Activity

Customer

Related transaction

13. CUSTOMERS

Create a complete customer management module.

Customer List

Header:

Customers

Manage customer information and history.

[ + New Customer ]


Search:

Search name, phone, customer ID...


Filters:

All

Active

Enquiry

Booking

Delivered

Table:

Customer
Customer ID
Phone
Location
Current Stage
Last Activity
Actions


Use attractive status badges.

14. CUSTOMER CREATION

Create a clean multi-section form.

Sections:

Personal Information

Full Name

Phone Number

Alternate Phone

Date of Birth

Email

Address

Address

City

State

Pincode

Identification

ID Type

ID Number

Document upload

Do not make this form visually overwhelming.

Use cards/sections.

Provide:

Cancel
Save Customer


15. CUSTOMER PROFILE

This is one of the most important pages.

Header:

RAVI KUMAR
Customer ID: CUS-00125
9876543210

[ Edit ] [ New Enquiry ] [ New Booking ]


Show a customer journey timeline:

Enquiry
✓

Proforma
✓

Booking
✓

Finance
✓

Insurance
✓

Registration
●

Delivery
○


Use a beautiful horizontal or vertical stepper.

Customer Information Card

Show:

Name

Phone

Email

Address

DOB

ID details

Customer Activity

Show:

Enquiries

Proformas

Bookings

Payments

Finance applications

Insurance

Registration

Deliveries

Use tabs.

16. ENQUIRIES

Create an enquiry management page.

Top:

Enquiries

[ + New Enquiry ]


Filters:

Today

This week

Follow-up due

Converted

Lost

Open

Table:

Customer
Phone
Interested Vehicle
Enquiry Date
Next Follow-up
Salesperson
Status


17. NEW ENQUIRY FORM

Make the phone number the first and most important field.

New Enquiry

Search Customer

[ 9876543210                    🔍 ]

✓ Existing customer found

Ravi Kumar
9876543210
Chennai

[ Use Customer ]


If customer exists:

Automatically populate customer details.

If not:

Show:

No customer found. Create new customer.

Then vehicle interest:

Model

Variant

Colour

Expected price

Finance required

Preferred finance partner

Enquiry source

Remarks

Next follow-up date

Primary CTA:

Save Enquiry

18. PROFORMA INVOICE

Create a professional invoice-like UI.

Header:

Proforma Invoice

PI-2026-00125
12 September 2026


Customer card.

Vehicle card.

Pricing:

Vehicle
Insurance
Registration
Accessories
Discount
Other charges
────────────────
Total


Payment preference:

○ Full Cash
○ Finance


Buttons:

Save Draft
Preview
Generate PDF


19. BOOKINGS

Create booking list.

Filters:

All

Today

Pending Payment

Finance

Cash

Insurance Pending

Registration Pending

Ready for Delivery

Delivered

Table columns:

Booking No.
Customer
Vehicle
Booking Date
Amount
Payment Type
Current Stage
Status


20. BOOKING DETAIL PAGE

This should be one of the most polished pages.

Header:

Booking #BK-2026-00125

Ravi Kumar
Jupiter ZX — Black

[ Print ] [ Download ] [ More ]


Create a visual progress tracker:

CUSTOMER
   ✓
VEHICLE
   ✓
BOOKING
   ✓
PAYMENT
   ✓
FINANCE
   ✓
INSURANCE
   ✓
REGISTRATION
   ●
DELIVERY
   ○


Below it, create cards:

Customer

Vehicle

Payment

Finance

Insurance

Registration

Delivery

Documents

The page should always show:

CURRENT STAGE

and:

NEXT ACTION

Example:

Current Stage
Registration

Next Action
Upload registration confirmation

[ Update Registration ]


21. VEHICLE INVENTORY

Create a polished inventory management page.

Header:

Vehicle Inventory

38 vehicles available

[ + Add Vehicle ] [ Import ]


Filters:

Model

Variant

Colour

Status

Chassis number

Status:

Available

Reserved

Booked

Delivered

In Transit

Display vehicle records in a beautiful table.

Allow switching between:

Table view

Card view

22. VEHICLE DETAIL

Show:

JUPITER ZX
Black

Vehicle ID
Chassis Number
Engine Number
Model
Variant
Colour
Purchase Price
Selling Price
Status


Show:

Vehicle History

with:

Stock received

Reserved

Booked

Delivered

23. FINANCE MODULE

Create finance dashboard.

Top KPIs:

Applications

Pending

Approved

Rejected

Disbursed

Finance application table:

Application No.
Customer
Vehicle
NBFC
Loan Amount
Application Date
Status


Status:

Draft

Documents Pending

Submitted

Under Review

Approved

Rejected

Disbursed

24. FINANCE APPLICATION DETAIL

Show:

Customer

Vehicle

Loan Details

Vehicle amount

Down payment

Loan amount

Tenure

EMI if available

NBFC

Finance partner

Application number

Contact

Documents

Show uploaded documents with status.

Application Timeline

Application Created
        ↓
Documents Submitted
        ↓
Application Submitted
        ↓
Approved
        ↓
Disbursed


Use a visual timeline.

25. REFINANCE

The system must support a separate refinance workflow.

Create a Refinance section under Finance.

Allow:

Customer
Existing Vehicle
Existing Finance
Existing NBFC
Outstanding Amount
New Finance Partner
Requested Amount
Status


Statuses:

Enquiry

Documents Pending

Submitted

Under Review

Approved

Rejected

Disbursed

Closed

Make the UI consistent with normal finance.

26. INSURANCE

Create:

Insurance Dashboard

KPIs:

Pending

Requested

Policy Issued

Expiring Soon

Table:

Customer
Vehicle
Provider
Policy No.
Premium
Status


Insurance detail page should contain:

Customer

Vehicle

Provider

Policy number

Premium

Policy date

Expiry date

Documents

27. REGISTRATION

Create registration management.

Statuses:

Pending

Application Submitted

Processing

Registration Number Received

Completed

Table:

Customer
Vehicle
RTO
Application No.
Registration No.
Status


Detail page:

Customer

Vehicle

RTO

Application number

Registration number

Dates

Documents

Timeline

28. DELIVERY

Create a delivery management page.

Show:

Today's Deliveries

4 scheduled


Delivery cards:

Ravi Kumar
Jupiter ZX
Booking #BK-00125

✓ Payment
✓ Finance
✓ Insurance
✓ Registration

READY FOR DELIVERY

[ Complete Delivery ]


If any prerequisite is incomplete, clearly show it.

Example:

⚠ Registration pending
Delivery cannot be completed.


29. DELIVERY COMPLETION

Create a checklist:

Delivery Checklist

☐ Payment completed
☐ Finance completed
☐ Insurance completed
☐ Registration completed
☐ Vehicle inspection
☐ Accessories fitted
☐ Documents handed over
☐ Customer acknowledgement


Final CTA:

Complete Delivery

Show a confirmation dialog before completion.

30. ACCOUNTS MODULE

This module is specifically designed to eliminate the current:

Daily Sheet → Daily Note → Monthly Note

duplicate work.

Create:

Accounts

Today's Summary

Income       ₹1,85,000
Expenses       ₹23,450
Net          ₹1,61,550

[ + Income ] [ + Expense ]


Transaction table:

Time
Type
Category
Description
Payment Mode
Amount
User


Types:

Income

Expense

Payment modes:

Cash

UPI

Bank

Card

Other

31. ADD EXPENSE

Form:

Add Expense

Date
Category
Description
Amount
Payment Mode
Reference
Notes

[ Save Expense ]


Categories could include:

Office

Tea / Food

Transport

Electricity

Salary

Maintenance

Stationery

Registration

Miscellaneous

The list should be configurable later.

32. AUTOMATIC DAILY / MONTHLY REPORTS

Never make the user enter the same information twice.

The UI should communicate this concept.

Example:

Today's Transactions
        ↓
Automatic Daily Summary
        ↓
Automatic Monthly Summary


Monthly screen:

September 2026

Total Income       ₹XX,XX,XXX
Total Expenses       ₹X,XX,XXX
Net                  ₹XX,XX,XXX


Include charts:

Income vs Expense

Daily trend

Expense categories

Sales

Finance

Cash vs digital payments

33. REPORTS

Create a dedicated Reports module.

Report categories:

Sales

Daily sales

Monthly sales

Model-wise sales

Cash vs finance

Finance

Applications

Approved

Rejected

Disbursed

NBFC-wise

Inventory

Available

Booked

Sold

Model-wise stock

Accounts

Income

Expenses

Daily summary

Monthly summary

Operations

Pending insurance

Pending registration

Pending delivery

Follow-ups

Allow:

Date Range
Filters
Export PDF
Export Excel
Print


34. SETTINGS

Create settings pages for:

Showroom information

Users

Roles & permissions

Vehicle models

Variants

Colours

NBFC partners

Insurance providers

Expense categories

Income categories

Payment modes

Notification settings

35. USER MANAGEMENT

Create:

Users

[ + Add User ]

Name
Role
Phone
Email
Status
Last Login


Roles:

Owner/Admin

Manager

Sales

Accounts

Finance

Insurance

Registration

Delivery

36. NOTIFICATION SYSTEM

Create a notification dropdown in the top navigation.

Examples:

🔴 Finance application requires action

🟡 Registration pending for Ravi Kumar

🟢 Insurance policy issued

🟡 Customer follow-up due today


Clicking a notification should navigate directly to the relevant record.

37. GLOBAL UI COMPONENTS

Create reusable components and keep them visually consistent.

Required components:

AppShell

Sidebar

Header

GlobalSearch

PageHeader

Breadcrumb

KPI Card

Glass Card

Data Table

Search Input

Filter Bar

Status Badge

Stepper

Timeline

Tabs

Modal

Drawer

Confirmation Dialog

Toast

Empty State

Loading State

Skeleton Loader

File Upload

Date Picker

Currency Input

Phone Input

Customer Search

Vehicle Search

Document List

Activity Timeline

Do not recreate visually different versions of the same component on different pages.

38. FORMS

All forms should follow the same design system.

Use:

Clear labels

Helpful placeholders

Inline validation

Required-field indicators

Helpful error messages

Logical grouping

Two-column layout on desktop

One-column layout on mobile

Example:

┌─────────────────────────────────────────┐
│ Customer Information                    │
│                                         │
│ Full Name             Phone             │
│ [____________]        [____________]    │
│                                         │
│ Email                 Date of Birth     │
│ [____________]        [____________]    │
│                                         │
│ Address                                 │
│ [___________________________________]   │
└─────────────────────────────────────────┘


39. TABLE UX

Tables must not feel old-fashioned.

Use:

Sticky header

Row hover

Rounded container

Subtle separators

Status badges

Avatar/initials where appropriate

Action menu

Pagination

Search

Filters

Sort

Empty state

Avoid excessive borders.

40. LOADING / EMPTY / ERROR STATES

Every page must have proper states.

Loading

Use elegant skeleton loaders.

Empty

Example:

No enquiries yet

Start by creating your first customer enquiry.

[ + New Enquiry ]


Error

Example:

Something went wrong.

We couldn't load the customer details.

[ Try Again ]


Never leave a blank screen.

41. TOASTS

Use elegant toast notifications.

Examples:

✓ Customer created successfully

✓ Booking created successfully

✓ Payment recorded

✓ Finance application submitted

✓ Insurance updated

✓ Delivery completed


42. MOCK DATA

For this first implementation, use realistic mock data.

Do NOT use generic placeholder names everywhere.

Use realistic Indian showroom data.

Examples:

Customers:

Ravi Kumar

Suresh Babu

Arun Prakash

Karthik Raj

Vignesh Kumar

Vehicles:

TVS Jupiter

Honda Activa

TVS Apache

Honda Shine

Yamaha FZ

Suzuki Access

Use realistic:

Indian phone numbers

₹ currency

Indian addresses

Tamil Nadu locations

RTO references

NBFC names

Dates

The application should feel like a real showroom application.

43. IMPORTANT — NO BACKEND YET

For this stage, focus primarily on the UI/UX implementation.

Use mock/local data where necessary.

Create realistic interactions:

Search

Filter

Sort

Pagination

Add/edit forms

Modal dialogs

Status changes

Navigation

Customer selection

Vehicle selection

Booking flow

Finance workflow

Insurance workflow

Registration workflow

Delivery workflow

The UI should behave like a real application even though backend APIs are not connected yet.

Keep the code structured so APIs can be connected later.

44. DATA ARCHITECTURE PREPARATION

Do not hard-code data directly inside individual components.

Create a clean mock data/service layer so that later we can replace:

Mock Service
     ↓
API Service


without rebuilding the UI.

Use reusable models/interfaces for:

Customer

Enquiry

FollowUp

Proforma

Booking

Vehicle

Payment

FinanceApplication

RefinanceApplication

Insurance

Registration

Delivery

Income

Expense

Document

User

Notification

45. ROUTING

Create routes approximately like:

/dashboard

/customers
/customers/:id
/customers/new

/enquiries
/enquiries/new
/enquiries/:id

/proforma
/proforma/new
/proforma/:id

/bookings
/bookings/new
/bookings/:id

/inventory
/inventory/new
/inventory/:id

/finance
/finance/applications
/finance/applications/:id
/finance/refinance

/insurance
/insurance
/insurance/:id

/registration
/registration
/registration/:id

/deliveries
/deliveries/:id

/accounts
/accounts/daily
/accounts/monthly

/reports

/settings
/settings/users
/settings/roles
/settings/master-data


46. CUSTOMER JOURNEY — CRITICAL UX REQUIREMENT

The entire application should revolve around this journey:

ENQUIRY
   ↓
PROFORMA INVOICE
   ↓
FOLLOW-UP
   ↓
BOOKING
   ↓
       ┌──────────────┐
       │              │
      CASH          FINANCE
       │              │
       └──────┬───────┘
              ↓
          INSURANCE
              ↓
         REGISTRATION
              ↓
           DELIVERY


At every stage:

Reuse existing information.

Never ask the user to re-enter:

Name

Phone

Address

Vehicle

Booking information

unless there is a legitimate reason to change it.

47. MICRO-INTERACTION EXAMPLE

When creating a booking from an existing enquiry:

Select Customer
       ↓
Customer information appears
       ↓
Select existing enquiry
       ↓
Vehicle automatically appears
       ↓
Proforma automatically appears
       ↓
Booking amount calculated
       ↓
Select Cash / Finance
       ↓
Create Booking


The experience should feel fast and intelligent.

48. OVERALL VISUAL QUALITY BAR

The final UI should feel like a product that could be shown to a paying customer.

Aim for:

Premium SaaS

Automotive elegance

Fintech precision

Modern Indian business software

Minimal clutter

Strong visual hierarchy

Smooth transitions

Beautiful empty states

Excellent typography

Consistent spacing

Excellent form UX

Do not compromise usability for visual effects.

49. IMPORTANT IMPLEMENTATION RULE

Build the application incrementally but establish the design system first.

Recommended implementation order:

STEP 1

Application shell

Sidebar

Header

Search

User menu

Notifications

STEP 2

Design system

Colours

Typography

Buttons

Inputs

Cards

Tables

Badges

Modals

Forms

STEP 3

Dashboard

STEP 4

Customers

STEP 5

Enquiries

STEP 6

Proforma

STEP 7

Bookings

STEP 8

Inventory

STEP 9

Finance

STEP 10

Insurance

STEP 11

Registration

STEP 12

Delivery

STEP 13

Accounts

STEP 14

Reports

STEP 15

Settings

50. FINAL QUALITY CHECK

Before considering the UI complete, verify:

Every page follows the same design system.

Every page has the same sidebar/header.

Forms look consistent.

Tables look consistent.

Status colours are consistent.

Buttons are consistent.

Customer information is reusable.

Phone-number search works across the UI.

Booking workflow is clearly visible.

Finance workflow is clearly visible.

Insurance workflow is clearly visible.

Registration workflow is clearly visible.

Delivery workflow is clearly visible.

Accounts automatically aggregate transactions.

Daily and monthly reporting do not require duplicate data entry.

Responsive layouts work.

Loading states exist.

Empty states exist.

Error states exist.

Toast notifications exist.

Navigation works.

No dead-end screens exist.

MOST IMPORTANT DESIGN PRINCIPLE

This is NOT simply a digital version of the showroom's paper forms.

Design the product to eliminate the paper workflow.

The fundamental principle is:

ENTER INFORMATION ONCE
          ↓
REUSE EVERYWHERE
          ↓
AUTOMATICALLY CALCULATE
          ↓
AUTOMATICALLY REPORT
          ↓
MINIMUM MANUAL WORK


The application should make showroom employees feel:

"I enter the customer's information once, and the system takes care of the rest."

Build the UI around that principle.

Create a polished, cohesive, premium and production-quality SRIVAARI AUTOMOBILES application with all the above screens, workflows, mock data, interactions and reusable components.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b0acb212-afe0-4fd5-92d9-f4bc9b9f250f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
