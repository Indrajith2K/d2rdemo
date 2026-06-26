# 📋 DARE2ROAM HOLIDAYS - PACKAGE & IMAGE MANAGEMENT GUIDE

## 🎯 OVERVIEW
This guide will teach you how to easily manage images and add new travel packages to your website without touching complex code.

---

## 📁 FILE STRUCTURE
```
src/
├── data/
│   ├── images.ts          ← MANAGE ALL IMAGES HERE
│   └── packages.ts        ← MANAGE ALL PACKAGES HERE
```

---

## 🖼️ HOW TO CHANGE IMAGES

### Method 1: Change Existing Images
1. Open `src/data/images.ts`
2. Find the destination you want to change
3. Replace the URL with your new image

**Example: Change Kerala Wayanad Image**
```javascript
kerala: {
  wayanad: 'YOUR_NEW_IMAGE_URL_HERE',  ← Change this
  varkala: '...',
  munnar: '...'
}
```

### Method 2: Add New Images for Existing Destinations
```javascript
kerala: {
  wayanad: '...',
  varkala: '...',
  munnar: '...',
  kochi: 'https://your-new-image-url.com'  ← Add new image
}
```

---

## 📦 HOW TO ADD NEW PACKAGES

### 1. ADD DOMESTIC PACKAGE

**Step 1:** Add image to `src/data/images.ts`
```javascript
domesticImages = {
  // Add new state or add to existing state
  rajasthan: {
    jaipur: 'https://image-url-for-jaipur.com',
    udaipur: 'https://image-url-for-udaipur.com'
  }
}
```

**Step 2:** Add package to `src/data/packages.ts`
```javascript
export const domesticPackages = {
  // Add new state section
  rajasthan: [
    {
      id: 'rajasthan-jaipur',
      name: 'Pink City Jaipur',
      duration: '3 Days / 2 Nights',
      price: '₹18,000',
      image: domesticImages.rajasthan.jaipur,  ← Use your image
      itinerary: [
        'Hawa Mahal', 'City Palace', 'Amber Fort',
        'Jantar Mantar', 'Local Bazaars'
      ],
      rating: 4.5,
      category: 'domestic'
    }
  ]
}
```

### 2. ADD INTERNATIONAL PACKAGE

**Step 1:** Add image to `src/data/images.ts`
```javascript
export const internationalImages = {
  japan: 'https://image-url-for-japan.com',
  maldives: 'https://image-url-for-maldives.com'
}
```

**Step 2:** Add package to `src/data/packages.ts`
```javascript
export const internationalPackages = [
  {
    id: 'japan',
    name: 'Japan Cherry Blossom',
    duration: '7 Days / 6 Nights',
    price: '₹1,20,000',
    image: internationalImages.japan,  ← Use your image
    highlights: [
      'Tokyo City Tour', 'Mount Fuji', 'Kyoto Temples',
      'Osaka Castle', 'Cherry Blossom Viewing'
    ],
    rating: 4.9,
    category: 'international'
  }
]
```

---

## 🌐 WHERE TO GET IMAGES

### Recommended Sources:
1. **Unsplash** (Free): https://unsplash.com/
2. **Pexels** (Free): https://pexels.com/
3. **Your own photos**

### Image Requirements:
- **Size**: Minimum 800px width
- **Format**: JPG or PNG
- **Quality**: High resolution
- **Aspect Ratio**: 16:9 or 4:3 preferred

### Unsplash URL Format:
```
https://images.unsplash.com/photo-XXXXXXXXX?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80
```

---

## 🎨 COMPLETE EXAMPLES

### Example 1: Add Himachal Pradesh Package
```javascript
// 1. In images.ts
domesticImages = {
  himachal: {
    shimla: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    manali: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
}

// 2. In packages.ts
himachal: [
  {
    id: 'himachal-shimla-manali',
    name: 'Shimla Manali Adventure',
    duration: '6 Days / 5 Nights',
    price: '₹25,000',
    image: domesticImages.himachal.shimla,
    itinerary: [
      'Mall Road Shimla', 'Kufri', 'Solang Valley',
      'Rohtang Pass', 'Hadimba Temple', 'Vashisht Hot Springs'
    ],
    rating: 4.7,
    category: 'domestic'
  }
]
```

### Example 2: Add Switzerland Package
```javascript
// 1. In images.ts
internationalImages = {
  switzerland: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}

// 2. In packages.ts
{
  id: 'switzerland',
  name: 'Swiss Alps Experience',
  duration: '8 Days / 7 Nights',
  price: '₹1,50,000',
  image: internationalImages.switzerland,
  highlights: [
    'Jungfraujoch', 'Rhine Falls', 'Lake Geneva',
    'Matterhorn', 'Lucerne', 'Zurich City Tour'
  ],
  rating: 4.9,
  category: 'international'
}
```

---

## 🔧 PACKAGE PROPERTIES EXPLAINED

```javascript
{
  id: 'unique-package-identifier',        // Must be unique
  name: 'Display Name',                   // Shown on website
  duration: 'X Days / Y Nights',          // Trip duration
  price: '₹XX,XXX',                      // Package price
  image: domesticImages.state.city,       // Image reference
  itinerary: [                           // For domestic packages
    'Place 1', 'Place 2', 'Place 3'
  ],
  highlights: [                          // For international packages
    'Activity 1', 'Activity 2'
  ],
  rating: 4.5,                          // Rating out of 5
  category: 'domestic'                   // 'domestic', 'international', or 'honeymoon'
}
```

---

## ⚠️ IMPORTANT RULES

1. **Always add images first** in `images.ts` before using them in `packages.ts`
2. **Use unique IDs** for each package
3. **Keep consistent formatting** (follow existing examples)
4. **Test after changes** to ensure everything works
5. **Use high-quality images** for better user experience

---

## 🚀 QUICK CHECKLIST

### To Change an Image:
- [ ] Open `src/data/images.ts`
- [ ] Find the destination
- [ ] Replace the URL
- [ ] Save the file

### To Add a New Package:
- [ ] Add image to `src/data/images.ts`
- [ ] Add package details to `src/data/packages.ts`
- [ ] Use the correct image reference
- [ ] Include all required properties
- [ ] Save both files

---

## 🆘 NEED HELP?

If you get stuck:
1. Check existing examples in the files
2. Ensure image URLs are working
3. Verify all required properties are included
4. Make sure package IDs are unique

---

**🎉 That's it! You can now easily manage all your travel packages and images!**