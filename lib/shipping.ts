/**
 * Single source of truth for the delivery and payment policy.
 *
 * Every surface that talks about free delivery, Cash on Delivery, the order
 * limit, or the delivery window reads from here so the numbers can never drift
 * apart between the cart, checkout, and the policy page.
 */

/** Cart subtotal (PKR) at or above which standard delivery is waived. */
export const FREE_SHIPPING_THRESHOLD = 10000;

/**
 * Cash on Delivery is offered up to this order value (PKR). Above it we ask
 * for a partial advance before confirming the order.
 */
export const COD_ORDER_LIMIT = 10000;

/** Delivery window promised to the customer, in business days. */
export const DELIVERY_WINDOW_DAYS = "2–5";

/** The only payment method currently offered. */
export const PAYMENT_METHOD = "Cash on Delivery";

/**
 * Placeholder flat rate used by the cart and checkout summaries until real
 * per-city rates are supplied. The policy copy deliberately does not name an
 * amount, since the charge depends on the delivery city.
 */
export const DELIVERY_FEE = 250;

export const COD_INTRO =
  "Cash on Delivery is available on every order, in every city we deliver to. See it, check it, then pay for it — no card, no advance, no risk.";

export interface CodStep {
  number: string;
  title: string;
  description: string;
}

export const COD_STEPS: CodStep[] = [
  {
    number: "01",
    title: "Place your order",
    description:
      "Add items to your cart and choose Cash on Delivery at checkout. That's it — no payment is taken now.",
  },
  {
    number: "02",
    title: "We confirm it",
    description:
      "Our team calls or messages you within a few hours to verify the order before it's packed.",
  },
  {
    number: "03",
    title: "It's delivered",
    description: `Your rider arrives within ${DELIVERY_WINDOW_DAYS} business days depending on your city.`,
  },
  {
    number: "04",
    title: "You pay in cash",
    description:
      "Receive your order, then pay the exact amount to the rider. Nothing changes hands before that.",
  },
];

export interface PolicyNote {
  title: string;
  description: string;
}

export const COD_NOTES: PolicyNote[] = [
  {
    title: "Order limit",
    description: `Cash on Delivery is available on orders up to Rs. ${COD_ORDER_LIMIT.toLocaleString("en-PK")}. Above that, we ask for a partial advance to confirm the order.`,
  },
  {
    title: "Exact change helps",
    description:
      "Having the right amount ready makes handover quicker for you and our rider.",
  },
  {
    title: "We may call to confirm",
    description:
      "A quick verification call or message is standard before an order ships.",
  },
  {
    title: "Refused orders are tracked",
    description:
      "Orders declined at the door without a valid reason may limit Cash on Delivery on future orders.",
  },
  {
    title: "Some items ship prepaid",
    description:
      "A few categories or conditions require advance payment regardless of order size.",
  },
];

export const FREE_DELIVERY_INTRO =
  "Spend Rs. 10,000 or more on a single order and we cover the delivery charges automatically, no code needed.";

export interface DeliveryTier {
  label: string;
  description: string;
  highlighted: boolean;
}

/** Side-by-side comparison of the two delivery tiers. */
export const DELIVERY_TIERS: DeliveryTier[] = [
  {
    label: `Under Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")}`,
    description:
      "A standard delivery charge applies at checkout, based on your city.",
    highlighted: false,
  },
  {
    label: `Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")} and above`,
    description:
      "Delivery charge drops to Rs. 0 automatically once your cart total crosses the line.",
    highlighted: true,
  },
];

export const FREE_DELIVERY_NOTES: PolicyNote[] = [
  {
    title: "Applied automatically",
    description: `The discount appears at checkout once your cart total reaches Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")}.`,
  },
  {
    title: "Based on cart value",
    description:
      "The threshold is calculated on your product total before any taxes.",
  },
  {
    title: "One order, one cart",
    description:
      "Orders can't be split or combined afterward to qualify.",
  },
  {
    title: "Nationwide",
    description:
      "The free delivery threshold applies in every city we currently deliver to.",
  },
  {
    title: "Cash on Delivery orders qualify too",
    description: `Crossing Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")} waives delivery charges on Cash on Delivery orders too.`,
  },
];

export const DELIVERY_FAQ_PROMPT =
  "Our team is reachable if anything about your order isn't clear.";

/** True when the cart value qualifies for waived delivery charges. */
export function qualifiesForFreeDelivery(subtotal: number): boolean {
  return subtotal >= FREE_SHIPPING_THRESHOLD;
}

/**
 * True when the order value sits above the Cash on Delivery limit, in which
 * case a partial advance is needed before we can confirm it.
 */
export function requiresPartialAdvance(subtotal: number): boolean {
  return subtotal > COD_ORDER_LIMIT;
}