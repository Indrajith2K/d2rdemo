// ============================================================================
// IMAGE MANAGEMENT SYSTEM
// ============================================================================
// This file centralizes all image URLs for easy management.
// To change an image: Simply update the URL in the corresponding object below.
// To add a new destination: Add a new entry to the appropriate category.

// DOMESTIC DESTINATION IMAGES
export const domesticImages = {
  // Kerala Images
  kerala: {
    wayanad: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800',
    varkala: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800',
    munnar: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=800',
    alleppey: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800',
    kochi: 'https://images.unsplash.com/photo-1602158123203-d1f8b8c3b011?w=800',
    thekkady: 'https://images.unsplash.com/photo-1574329637652-8f9b7af77e3f?w=800'
  },
  
  // Karnataka Images
  karnataka: {
    mysore: 'https://images.unsplash.com/photo-1600100397608-e1bd6b66f4e6?w=800',
    coorg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    bangalore: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800'
  },
  
  // Tamil Nadu Images
  tamilnadu: {
    ooty: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    kodaikanal: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    madurai: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  
  // Goa Images
  goa: {
    beach: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fort: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  
  // Hyderabad Images
  hyderabad: {
    charminar: 'https://images.unsplash.com/photo-1572431447238-425af66a273b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    golconda: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  
  // Golden Triangle Images
  goldenTriangle: {
    tajMahal: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    redFort: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hawamahal: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
};

// INTERNATIONAL DESTINATION IMAGES
export const internationalImages = {
  singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thailand: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  malaysia: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  bali: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Add more international destinations here
  maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  sri_lanka: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  nepal: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

// HERO SECTION IMAGES
export const heroImages = {
  main: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  secondary: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
};

// ============================================================================
// HOW TO MANAGE IMAGES:
// ============================================================================
/*
1. TO CHANGE AN EXISTING IMAGE:
   - Find the destination in the appropriate category above
   - Replace the URL with your new image URL
   - Example: Change Kerala Wayanad image:
     wayanad: 'YOUR_NEW_IMAGE_URL_HERE'

2. TO ADD A NEW DOMESTIC DESTINATION:
   - Add it to the domesticImages object under the appropriate state
   - Example: To add a new Kerala destination:
     cochin: 'https://your-image-url.com'

3. TO ADD A NEW INTERNATIONAL DESTINATION:
   - Add it to the internationalImages object
   - Example: japan: 'https://your-image-url.com'

4. TO ADD A NEW STATE/COUNTRY CATEGORY:
   - For domestic: Add a new state object in domesticImages
   - For international: Add individual countries in internationalImages

5. BEST PRACTICES:
   - Use high-quality images (minimum 800px width)
   - Use Unsplash, Pexels, or your own photos
   - Keep aspect ratio consistent (preferably 16:9 or 4:3)
   - Compress images for web (use ?auto=format&fit=crop&w=800&q=80 for Unsplash)
*/