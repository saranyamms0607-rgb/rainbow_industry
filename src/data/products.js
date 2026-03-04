import imlContainer from '../assets/iml_container.png';
import foodContainer from '../assets/food_container.png';
import sanitaryBrush from '../assets/sanitary_brush_set.png';

// IML Variant Imports
import iml120 from '../assets/IML Container Product/120 ML ROUND.webp';
import iml250r from '../assets/IML Container Product/250ML ROUND.webp';
import iml250 from '../assets/IML Container Product/250ML.webp';
import iml300 from '../assets/IML Container Product/300 ML ROUND.webp';
import iml500r from '../assets/IML Container Product/500ml round.webp';
import iml500_450 from '../assets/IML Container Product/500gms450ml container.webp';
import iml500c from '../assets/IML Container Product/500ml container.webp';
import iml750r from '../assets/IML Container Product/750ml round container.webp';
import iml1000r from '../assets/IML Container Product/1000 ml round.webp';
import iml500rect from '../assets/IML Container Product/500ml rectangular.webp';
import iml650rect from '../assets/IML Container Product/650ml_rectangle.jpg';
import iml750rect from '../assets/IML Container Product/750ml rectangular container .webp';
import iml250sweet from '../assets/IML Container Product/250 GMS SWEET.webp';
import iml500sweet from '../assets/IML Container Product/500 GMS SWEET .webp';
import iml1kgsweet from '../assets/IML Container Product/1000gms sweet box.webp';
import iml250te from '../assets/IML Container Product/250GMS_SWEET_TE.webp';
import iml500te from '../assets/IML Container Product/500GMS_SWEET_TE.webp';

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
        },
        variants: [
            { id: 'v1', name: '120ml Round Container', image: iml120 },
            { id: 'v2', name: '250ml Round Container', image: iml250r },
            { id: 'v3', name: '250ml Glass Round', image: iml250 },
            { id: 'v4', name: '300ml Round Container', image: iml300 },
            { id: 'v5', name: '500ml Round Container', image: iml500r },
            { id: 'v6', name: '500gms / 450ml Container', image: iml500_450 },
            { id: 'v7', name: '500ml Container', image: iml500c },
            { id: 'v8', name: '750ml Round Container', image: iml750r },
            { id: 'v9', name: '1000ml Round Container', image: iml1000r },
            { id: 'v10', name: '500ml Rectangular Container', image: iml500rect },
            { id: 'v11', name: '650ml Rectangular Container', image: iml650rect },
            { id: 'v12', name: '750ml Rectangular Container', image: iml750rect },
            { id: 'v13', name: '250gms Sweet Box', image: iml250sweet },
            { id: 'v14', name: '500gms Sweet Box', image: iml500sweet },
            { id: 'v15', name: '1Kg Sweet Box', image: iml1kgsweet },
            { id: 'v16', name: 'TE 250 G Sweet Box', image: iml250te },
            { id: 'v17', name: 'TE 500 G Sweet Box', image: iml500te },
        ]
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
