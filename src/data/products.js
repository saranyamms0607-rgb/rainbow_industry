import imlContainer from '../assets/iml_container.png';
import foodContainer from '../assets/food_container.png';
import sanitaryBrush from '../assets/sanitary_brush_set.png';

export const productsData = [
    {
        id: 1,
        name: 'IML Container',
        description: 'High-quality In-Mold Labeling technology for vibrant, durable branding. Perfect for food industries.',
        longDescription: 'Our IML (In-Mold Labeling) containers represent the pinnacle of packaging technology. The label is fused with the container during the molding process, resulting in a hygienic, durable, and visually stunning product. Ideal for ice cream, yogurt, spreads, and other food products requiring high-shelf impact. Features include microwave safety, dishwasher compatibility, and 100% recyclability.',
        image: imlContainer,
        category: 'Industrial',
        features: ['Heat Resistant', 'Dishwasher Safe', 'Customizable', 'Eco-friendly'],
        specs: {
            material: 'Polypropylene (PP)',
            capacity: '500ml - 5L',
            colors: 'Unlimited Customization'
        }
    },
    {
        id: 2,
        name: 'Food Container',
        description: 'Airtight, BPA-free food storage solutions designed for freshness and longevity.',
        longDescription: 'Keep your food fresh for longer with our premium airtight food containers. Manufactured using BPA-free, high-grade plastics, these containers are safe for the whole family. The innovative locking mechanism ensures a leak-proof seal, making them perfect for meal prep, leftovers, and pantry organization. Stackable design saves space in your kitchen.',
        image: foodContainer,
        category: 'Household',
        features: ['Air-tight Seal', 'BPA Free', 'Stackable', 'Microwave Safe'],
        specs: {
            material: 'BPA-Free Plastic',
            sets: '3pc, 5pc, 10pc',
            durability: 'High Impact Resistant'
        }
    },
    {
        id: 3,
        name: 'Sanitary Brush',
        description: 'Ergonomic and hygienic designs for modern bathrooms. Durable bristles and sleek holder.',
        longDescription: 'Upgrade your bathroom essentials with our modern Sanitary Brush set. Designed with ergonomics in mind, the handle provides a comfortable grip while the high-density bristles ensure thorough cleaning. The sleek, minimalist holder discreetly conceals the brush while allowing for proper ventilation and drying. mold and bacteria resistant.',
        image: sanitaryBrush,
        category: 'Sanitary',
        features: ['Ergonomic Grip', 'Anti-bacterial', 'Sleek Design', 'Durable Bristles'],
        specs: {
            material: 'High-Gloss ABS',
            dimensions: '15cm x 40cm',
            finish: 'Matte / Glossy'
        }
    }
];
