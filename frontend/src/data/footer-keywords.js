// SEO Keywords for Footer - Extracted from user's website

export const footerKeywords = {
  plots: [
    'Plot is available for sale Greater Noida',
    'Sale Authority Land in Greater Noida',
    'Residential Land in Greater Noida',
    'Sale Authority Land in Noida',
    'Land available for sale Greater Noida',
    'Sale Residential Plot in Greater Noida',
    'Sale Residential Land in Greater Noida',
    'Buy Residential Land in Greater Noida',
    'Buy Residential Plots in Greater Noida',
    'Authority land for Sale Greater Noida',
    'Sale Authority Plots in Greater Noida',
    'Buy Authority Land in Greater Noida',
    'Buy Authority Plots in Greater Noida',
    'Prime Location Plots for Sale Near Jewar Airport & Film City',
    'Prime Location Plots for Sale Gr. Noida Film City',
    'Buy Residential Plots Gr. Noida Film City',
    'Plots available for Near Jewar Airport',
    'Land available for sale Near Jewar Airport',
    'Sale Residential Plots Near Jewar Airport',
    'Sale Residential Land Near Jewar Airport',
    'Buy Residential Land Near Jewar Airport',
    'Buy Residential Plots Near Jewar Airport',
    'Residential Plots Near Jewar Airport',
    'Residential Land Near Jewar Airport',
    'Sale Authority Land Near Jewar Airport',
    'Sale Authority Plots Near Jewar Airport',
    'Buy Authority Land Near Jewar Airport',
    'Buy Authority Plots Near Jewar Airport',
    'Authority Land Near Jewar Airport',
    'Authority Plots Near Jewar Airport'
  ],
  
  farmhouse: [
    'Buy Eco-friendly Farmhouse Near Delhi',
    'Buy Ready to Move Farmhouse Near Jewar Airport',
    'Buy Eco-friendly Farmhouse 1 Track Yamuna Expressway',
    'Buy Ready to Move Farmhouse at Yamuna Expressway',
    'Buy Eco-friendly Farmhouse 1 Track Near Jewar Airport',
    'Buy Ready to Move Farmhouse in Greater Noida',
    'Buy Eco-friendly Farmhouse 1 Track Greater Noida',
    'Buy Ready to Move Farmhouse in Noida',
    'Buy Eco-friendly Farmhouse Near Formula 1 Track Noida',
    'Buy Ready to Move Farmhouse Near Delhi',
    'Buy Farmhouse Near Formula 1 Track Yamuna Expressway',
    'Buy Affordable Farmhouse at Yamuna Expressway',
    'Buy Farmhouse Near Formula 1 Track Near Jewar Airport',
    'Buy Affordable Farmhouse Near Jewar Airport',
    'Buy Farmhouse Near Formula 1 Track Greater Noida',
    'Buy Affordable Farmhouse in Noida',
    'Buy Farmhouse Near Formula 1 Track Noida',
    'Buy Affordable Farmhouse Near Delhi',
    'Farmhouse Investment Property Near Jewar Airport',
    'Farmhouse Investment Property at Yamuna Expressway',
    'Farmhouse Investment Property in Greater Noida',
    'Farmhouse Investment Property in Noida',
    'Buy Spacious Farmhouse with Greenery Near Jewar Airport',
    'Buy Spacious Farmhouse with Greenery at Yamuna Expressway',
    'Buy Spacious Farmhouse with Greenery in Greater Noida',
    'Buy Spacious Farmhouse with Greenery in Noida',
    'Buy Farmhouse with Modern Amenities Near Jewar Airport',
    'Buy Farmhouse with Modern Amenities at Yamuna Expressway',
    'Buy Farmhouse with Modern Amenities in Greater Noida',
    'Buy Farmhouse with Modern Amenities in Noida',
    'Farmhouse sale near Jewar Airport',
    'Farmhouse sale in Greater Noida',
    'Farmhouse sale in Noida',
    'Farmhouse sale near Yamuna Expressway',
    'Buy Gated Community Farmhouse Near Jewar Airport',
    'Buy Gated Community Farmhouse at Yamuna Expressway',
    'Buy Gated Community Farmhouse in Greater Noida',
    'Buy Gated Community Farmhouse in Noida',
    'Luxury farm house Near Jewar Airport',
    'Luxury farm house at Yamuna Expressway'
  ]
};

// Organize keywords by category for footer display
export const footerSEOSections = [
  {
    title: 'Plots & Land in Greater Noida',
    keywords: footerKeywords.plots.filter(k => k.includes('Greater Noida')).slice(0, 15)
  },
  {
    title: 'Plots Near Jewar Airport',
    keywords: footerKeywords.plots.filter(k => k.includes('Jewar Airport'))
  },
  {
    title: 'Farmhouses - Eco-friendly & Ready to Move',
    keywords: footerKeywords.farmhouse.filter(k => k.includes('Eco-friendly') || k.includes('Ready to Move')).slice(0, 15)
  },
  {
    title: 'Luxury Farmhouses',
    keywords: footerKeywords.farmhouse.filter(k => k.includes('Luxury') || k.includes('Modern Amenities') || k.includes('Gated Community'))
  }
];
