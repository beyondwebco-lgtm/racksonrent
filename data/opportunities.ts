export interface OpportunityExample {
  id: string;
  title: string;
  location: string;
  spaceType: string;
  suitableFor: string;
  approxSize: string;
  arrangement: string;
  badgeText: string;
  description: string;
  bgGradient: string;
}

export const SAMPLE_OPPORTUNITIES: OpportunityExample[] = [
  {
    id: "premium-nutrition-corner",
    title: "Premium Gym Nutrition Corner",
    location: "Hyderabad (Banjara Hills / Jubilee Hills area)",
    spaceType: "Six-foot display rack space near main workout area",
    suitableFor: "Supplements, protein powders, BCAA & energy drinks",
    approxSize: "6 ft x 2 ft vertical display area",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Example Opportunity",
    description: "Ideal vertical rack space inside a high-footfall premium gym catering to 400+ daily fitness enthusiasts.",
    bgGradient: "from-blue-900/90 to-indigo-950/90"
  },
  {
    id: "reception-counter-display",
    title: "Reception Counter Display",
    location: "Vijayawada (MG Road area)",
    spaceType: "Compact reception-side display shelf & counter space",
    suitableFor: "Healthy snacks, protein bars, wellness products & shaker bottles",
    approxSize: "3 ft counter top shelf",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Example Opportunity",
    description: "High visibility check-in counter spot capturing every member upon arrival and departure.",
    bgGradient: "from-slate-900/90 to-blue-950/90"
  },
  {
    id: "healthy-food-kiosk",
    title: "Healthy Food Kiosk Zone",
    location: "Bengaluru (Indiranagar / HSR Layout area)",
    spaceType: "Small staffed or semi-staffed mini kiosk corner",
    suitableFor: "Fruit bowls, fresh sprouts, salads & meal plan Subscriptions",
    approxSize: "6 ft x 4 ft floor space",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Example Opportunity",
    description: "Dedicated fresh food station for gym members looking for instant post-workout nutrition.",
    bgGradient: "from-emerald-950/90 to-teal-950/90"
  },
  {
    id: "chilled-drink-refrigerator",
    title: "Chilled Drink Refrigerator Space",
    location: "Visakhapatnam (Beach Road area)",
    spaceType: "Dedicated spot for branding refrigerator unit",
    suitableFor: "Electrolyte drinks, cold protein shakes, isotonic water",
    approxSize: "3 ft x 3 ft floor footprint",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Example Opportunity",
    description: "High-demand refreshment placement directly adjacent to cardio & crossfit workout zones.",
    bgGradient: "from-cyan-950/90 to-blue-950/90"
  },
  {
    id: "consultation-desk-corner",
    title: "Consultation & Diet Guidance Corner",
    location: "Chennai (Velachery area)",
    spaceType: "Quiet consultation desk area with seating",
    suitableFor: "Nutritionists, dietitians & wellness consultants",
    approxSize: "5 ft x 5 ft private desk area",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Example Opportunity",
    description: "Professional setting inside a fitness hub for diet counseling and body composition tracking.",
    bgGradient: "from-amber-950/90 to-orange-950/90"
  },
  {
    id: "weekend-sampling-booth",
    title: "Weekend Product Sampling Area",
    location: "Guntur (Lakshmipuram area)",
    spaceType: "Promotional sampling booth & standee area",
    suitableFor: "New brand launches, tasting booths, wellness products",
    approxSize: "6 ft x 6 ft promotional floor",
    arrangement: "Flexible Promotional Sublet",
    badgeText: "Example Opportunity",
    description: "High-impact weekend activation spot for introducing new health products to active gym goers.",
    bgGradient: "from-purple-950/90 to-indigo-950/90"
  }
];
