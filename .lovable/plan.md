# SRIVAARI AUTOMOBILES — Branches, Masters & Booking Command Center

Keeps the existing look, navigation and screens intact. Everything below is added or reshaped inside the current design system.

## Approach

The app today runs on an in-app demo data store (no real database yet). This upgrade keeps that same store so every screen stays fast and fully clickable, but restructures it exactly like the real thing: one shared data set where every record carries a branch, and masters (dealers, staff, partners, insurance and finance providers) are proper lists that other screens select from. Moving it onto the real backend later is then a swap of the data layer, not a redesign.

Role is switchable from the user menu (Owner / Manager / Sales / Accounts) so owner-only behaviour can actually be seen and tested.

## 1. Branches and roles

- Company SRIVAARI AUTOMOBILES with 3 demo branches (Chennai Main, Tambaram, Avadi).
- Every operational record (enquiry/followup, proforma, booking, vehicle, finance, insurance, registration, delivery, income, expense) carries a branch.
- Customers stay a single shared master; their branch interactions come from their records.
- Branch selector in the top bar, visible only to Owner, including "All Branches". Non-owners are pinned to their own branch and never see the selector.
- Filtering happens in the data layer, not just visually: lists, dashboard, inventory, accounts and reports all read through the active branch.
- Owner-only areas (Staff, Partners, Insurance Providers, Finance Providers, Branches) are blocked at the route level, not just hidden from the menu.

## 2. Proforma invoice rework

- Multiple vehicle lines with + Add Vehicle: model, variant, colour, quantity, unit price, discount, line amount; rows editable and removable.
- Live totals: vehicle subtotal, discounts, other charges, offers, grand total.
- Offers & Discounts section: Fittings, Helmet, Seat Cover, Bike Cover, Petrol (with value), Other (with remarks); plus monetary discounts with type, amount and reason. Offers and discounts are clearly separated — discounts reduce the payable, offers are items given.
- Exchange vehicles with + Add Exchange Vehicle: type, manufacturer, model, variant, registration number, year, approximate value, expected exchange value, remarks. Zero, one or many.

## 3. Proforma → Followup → Booking

- Enquiries renamed to **Followups**, moved below Proforma Invoices in the sidebar; followups are raised against a proforma.
- The journey shown everywhere becomes Proforma → Followup → Booking → Payment → Finance → Insurance → Registration → Delivery.
- Converting a proforma into a booking carries customer, vehicles, pricing, discounts, offers and exchange vehicles across, marked as "Carried forward from Proforma" and fully editable. Booking can add its own offers and an exchange vehicle if the proforma had none.

## 4. New Booking additions

- Nominee: name, age, phone, relation.
- Special registration number: Yes/No, requested number, remarks, charge.
- Registration by affidavit: Yes/No, remarks, document, charge.
- Vehicle fittings: Yes/No, details, amount, remarks (pre-filled if offered in the proforma).
- Petrol offer: amount and remarks.
- Expected delivery date via date picker, shown on booking detail, deliveries and dashboard.
- Live customer photo: camera preview, capture, retake, with graceful permission handling and an upload fallback; saved against the booking and shown on the customer profile.

## 5. Automatic accounting

- Special number charge and affidavit charge post automatically as Booking Income against the booking.
- Petrol offer posts automatically as a Booking Expense linked to the booking; editing the offer updates it, removing it removes the linked entry.
- Income categories: Vehicle Payment by Customer, Vehicle Payment by Finance, Fittings Payment, Miscellaneous Payment. Expense categories: Booking Commission, Petrol Offer. The category list follows the transaction type — income entries never show expense categories and vice versa.
- Accounts entries link back to their booking; the booking shows a financial summary.

## 6. Booking view page — Command Center

Purpose-built detail page, not a read-only form: header with booking number, customer, vehicle, status and expected delivery; then customer card with photo, booking summary (vehicle amount, discount, offers, advance, balance), customer requirements, exchange vehicle, finance, insurance, registration, delivery and documents. A lifecycle timeline across Proforma → Booking → Payment → Finance → Insurance → Registration → Delivery shows each stage's status, date and a pending action button.

## 7. New master modules

Dealers (owner + manager), and owner-only Staff, Partners, Insurance Providers, Finance Providers, Branches. Each gets a list page, create and edit forms in the existing form style. Vehicle inventory selects a dealer from the master (no free typing) and shows dealer info on the vehicle detail; finance applications select an NBFC from the finance master; insurance selects a provider from the insurance master.

## Technical notes

- New `src/lib/branch-context.tsx` (active branch + current role + permission helpers) mounted in the app shell; `src/lib/masters.ts` for the new master data sets; `src/lib/domain.ts` extended with Branch, Dealer, Staff, Partner, InsuranceProvider, FinanceProvider, ProformaVehicleLine, ProformaOffer, ProformaDiscount, ExchangeVehicle, Nominee, BookingRequirements, CustomerPhoto, LedgerEntry — all branch-scoped records gain `branchId`.
- `mock-service.ts` grows branch-aware selectors plus `createBookingFromProforma`, `syncBookingLedger` (auto income/expense) and master CRUD helpers.
- Repeatable line-item editor component reused by proforma vehicles, offers and exchange vehicles; `CameraCapture` component using `getUserMedia` with upload fallback.
- Route renames: `enquiries.*` → `followups.*`; new routes under `/dealers`, `/masters/staff`, `/masters/partners`, `/masters/insurance-providers`, `/masters/finance-providers`, `/settings/branches`, each with head metadata and an owner guard.
