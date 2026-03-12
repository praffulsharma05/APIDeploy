const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Property data
const propertyData = {
    "data": [{
        "property_id": 19,
        "title": "Luxury 3BHK Apartment",
        "description": "Spacious apartment with modern amenities",
        "location": "Mumbai",
        "bhk": 3,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Ready to Move",
        "price": "7500000.00",
        "area_sqft": 1500,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 20,
        "title": "Cozy 2BHK Villa",
        "description": "Beautiful villa with garden",
        "location": "Pune",
        "bhk": 2,
        "property_type": "Villa",
        "construction_type": "Resale",
        "construction_status": "Ready to Move",
        "price": "5500000.00",
        "area_sqft": 1200,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 21,
        "title": "3BHK Under Construction Apartment",
        "description": "New apartment under construction",
        "location": "Bangalore",
        "bhk": 3,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Under Construction",
        "price": "6500000.00",
        "area_sqft": 1400,
        "verified": 0,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 22,
        "title": "4BHK Luxury Villa",
        "description": "Spacious villa with private pool",
        "location": "Hyderabad",
        "bhk": 4,
        "property_type": "Villa",
        "construction_type": "New",
        "construction_status": "Ready to Move",
        "price": "12500000.00",
        "area_sqft": 2500,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 23,
        "title": "1BHK Studio Apartment",
        "description": "Compact studio ideal for singles",
        "location": "Mumbai",
        "bhk": 1,
        "property_type": "Apartment",
        "construction_type": "Resale",
        "construction_status": "Ready to Move",
        "price": "3500000.00",
        "area_sqft": 500,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 24,
        "title": "2BHK Apartment with Balcony",
        "description": "Apartment with spacious balcony",
        "location": "Chennai",
        "bhk": 2,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Ready to Move",
        "price": "4800000.00",
        "area_sqft": 1100,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 25,
        "title": "5BHK Penthouse",
        "description": "Top floor penthouse with city view",
        "location": "Delhi",
        "bhk": 5,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Under Construction",
        "price": "20000000.00",
        "area_sqft": 3200,
        "verified": 0,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 26,
        "title": "3BHK Villa with Garden",
        "description": "Villa with landscaped garden",
        "location": "Pune",
        "bhk": 3,
        "property_type": "Villa",
        "construction_type": "New",
        "construction_status": "Ready to Move",
        "price": "9000000.00",
        "area_sqft": 1800,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 27,
        "title": "2BHK Affordable Apartment",
        "description": "Budget-friendly apartment",
        "location": "Bangalore",
        "bhk": 2,
        "property_type": "Apartment",
        "construction_type": "Resale",
        "construction_status": "Ready to Move",
        "price": "4200000.00",
        "area_sqft": 1000,
        "verified": 1,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 28,
        "title": "4BHK Luxury Apartment",
        "description": "High-end apartment with gym and pool",
        "location": "Mumbai",
        "bhk": 4,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Under Construction",
        "price": "15000000.00",
        "area_sqft": 2200,
        "verified": 0,
        "owner_id": 1,
        "created_at": "2026-03-11T11:49:33.000Z",
        "latitude": null,
        "longitude": null,
        "image": null
    },
    {
        "property_id": 29,
        "title": "qweerr",
        "description": "awsome",
        "location": "jaipur",
        "bhk": 3,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Ready to Move",
        "price": "1234456.00",
        "area_sqft": 1233,
        "verified": 1,
        "owner_id": null,
        "created_at": "2026-03-11T13:18:47.000Z",
        "latitude": "26.8934430",
        "longitude": "75.8357040",
        "image": null
    },
    {
        "property_id": 30,
        "title": "Harish",
        "description": "qwerty",
        "location": "jaipur",
        "bhk": 3,
        "property_type": "Apartment",
        "construction_type": "New",
        "construction_status": "Ready to Move",
        "price": "12234556.00",
        "area_sqft": 234,
        "verified": 1,
        "owner_id": null,
        "created_at": "2026-03-11T13:26:51.000Z",
        "latitude": "24.0000000",
        "longitude": "75.0000000",
        "image": null
    }]
};

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Property API',
        endpoints: {
            all_properties: '/api/properties',
            single_property: '/api/properties/:id',
            filter: '/api/properties/filter?location=Mumbai&bhk=3'
        }
    });
});

// Get all properties
app.get('/api/properties', (req, res) => {
    res.json(propertyData);
});

// Get single property by ID
app.get('/api/properties/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const property = propertyData.data.find(p => p.property_id === id);
    
    if (property) {
        res.json({ data: property });
    } else {
        res.status(404).json({ error: 'Property not found' });
    }
});

// Filter properties
app.get('/api/properties/filter', (req, res) => {
    let filteredProperties = [...propertyData.data];
    const { location, bhk, property_type, min_price, max_price, verified } = req.query;

    if (location) {
        filteredProperties = filteredProperties.filter(p => 
            p.location.toLowerCase().includes(location.toLowerCase())
        );
    }

    if (bhk) {
        filteredProperties = filteredProperties.filter(p => 
            p.bhk === parseInt(bhk)
        );
    }

    if (property_type) {
        filteredProperties = filteredProperties.filter(p => 
            p.property_type.toLowerCase() === property_type.toLowerCase()
        );
    }

    if (min_price) {
        filteredProperties = filteredProperties.filter(p => 
            parseFloat(p.price) >= parseFloat(min_price)
        );
    }

    if (max_price) {
        filteredProperties = filteredProperties.filter(p => 
            parseFloat(p.price) <= parseFloat(max_price)
        );
    }

    if (verified !== undefined) {
        filteredProperties = filteredProperties.filter(p => 
            p.verified === parseInt(verified)
        );
    }

    res.json({ data: filteredProperties });
});

// Get unique locations
app.get('/api/locations', (req, res) => {
    const locations = [...new Set(propertyData.data.map(p => p.location))];
    res.json({ locations });
});

// Get statistics
app.get('/api/stats', (req, res) => {
    const stats = {
        total_properties: propertyData.data.length,
        total_verified: propertyData.data.filter(p => p.verified === 1).length,
        total_unverified: propertyData.data.filter(p => p.verified === 0).length,
        average_price: propertyData.data.reduce((acc, p) => acc + parseFloat(p.price), 0) / propertyData.data.length,
        by_location: {},
        by_type: {}
    };

    // Count by location
    propertyData.data.forEach(p => {
        stats.by_location[p.location] = (stats.by_location[p.location] || 0) + 1;
    });

    // Count by property type
    propertyData.data.forEach(p => {
        stats.by_type[p.property_type] = (stats.by_type[p.property_type] || 0) + 1;
    });

    res.json(stats);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});