# Sweet Kitchen - Website

A responsive, mobile-first website for Sweet Kitchen cloud kitchen in Chhatrapati Sambhaji Nagar. Built with plain HTML, Tailwind CSS, and Vanilla JavaScript.

## 📁 Project Structure

```
sweet-kitchen/
├── index.html           # Homepage
├── menu.html            # Menu page with search & filters
├── about.html           # About us
├── offers.html          # Offers & combos
├── contact.html         # Contact & delivery areas
├── sitemap.xml          # SEO sitemap
├── robots.txt           # SEO robots config
├── css/
│   └── styles.css       # Custom styles & brand colors
├── js/
│   ├── main.js          # Shared functionality (nav, WhatsApp, analytics)
│   ├── menu.js          # Menu page functionality (filters, cart, checkout)
│   └── menu-data.js     # Menu items data (21 items across 5 categories)
└── images/              # (For future image assets)
```

## 🚀 Quick Start

1. **Open in Browser:**
   - Simply open `index.html` in a web browser
   - No server or build tools required
   - Works offline (except WhatsApp links)

2. **Deploy:**
   - Upload all files to your web hosting
   - Update domain in sitemap.xml (change `sweetkitchen.local` to your actual domain)
   - Set up HTTPS for security

## 🎨 Design System

**Brand Colors:**
- Saffron: #FF6B35 (primary)
- Pink: #FF4B91 (secondary)
- Cream: #FFF9F5 (background)
- Dark: #1A1A2E (text)
- Green: #22C55E (success/veg)

**Fonts:**
- Headings: Poppins (Google Fonts)
- Body: Nunito (Google Fonts)

**Mobile-First Responsive:**
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1440px+

## 📱 Features

### Pages

1. **Homepage (index.html)**
   - Hero section with CTAs
   - Popular items carousel
   - Why Choose Us section
   - Today's Specials
   - Testimonials
   - Delivery areas badges
   - Newsletter signup section

2. **Menu (menu.html)** ⭐ Most Important
   - 21 menu items across 5 categories
   - Search functionality
   - Filter by: Veg/Non-Veg, Price, Popularity
   - Cart sidebar with quantity management
   - WhatsApp checkout with pre-filled order text
   - Persistent cart (localStorage)

3. **About (about.html)**
   - Kitchen story
   - Values & certifications
   - FSSAI badge
   - Why choose us section

4. **Offers (offers.html)**
   - 10-15% direct order savings
   - 4 combo deals with discounts
   - How to order guide
   - FAQ

5. **Contact (contact.html)**
   - Phone & WhatsApp links
   - Operating hours
   - 8+ delivery areas (Hitech City, Gachibowli, etc.)
   - Contact form (submits via WhatsApp)
   - Delivery & payment info

### Core Features

✅ **WhatsApp Integration**
- Click-to-order links on every item
- Pre-filled order messages
- Floating WhatsApp button on all pages
- Cart checkout via WhatsApp

✅ **Mobile Responsive**
- Fully responsive design (tested 320px - 1440px)
- Touch-friendly buttons & menus
- Optimized performance

✅ **SEO Optimized**
- Meta tags on all pages
- Open Graph / Twitter Card support
- Schema.org structured data (FoodEstablishment)
- sitemap.xml & robots.txt
- Optimized for "Sweet Kitchen Chhatrapati Sambhaji Nagar", "sweets delivery", etc.

✅ **Analytics Ready**
- Google Analytics 4 integration
- Custom event tracking:
  - whatsapp_click
  - menu_filter
  - cart_open / checkout_started
  - page_view
- Replace `GA_MEASUREMENT_ID` in main.js with your actual ID

✅ **Shopping Cart**
- Add/remove items
- Persistent storage (localStorage)
- Cart count badge
- One-click WhatsApp checkout

## ⚙️ Configuration

### Google Analytics Setup
1. Get your GA4 Measurement ID from Google Analytics
2. Open `js/main.js`
3. Find: `const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';`
4. Replace with your actual ID: `const GA_MEASUREMENT_ID = 'G-YOUR-ID-HERE';`

### Menu Items
- Edit `js/menu-data.js` to add/update items
- Each item needs:
  ```javascript
  {
    id: number,
    category: 'Sweets|Meals|Snacks|Combos|Beverages',
    name: 'Item Name',
    description: 'Short description',
    price: 150,
    veg: true/false,
    popular: true/false,
    image: 'image-url'
  }
  ```

### WhatsApp Number
- Phone number: +919405769103
- Edit in: `js/main.js` (WHATSAPP_PHONE constant)
- Or search & replace across all HTML files

### Domain Configuration
- Change all instances of `sweetkitchen.local` in:
  - sitemap.xml
  - Schema.org JSON-LD tags in index.html
  - Any hardcoded URLs

## 📊 Analytics Events Tracked

```javascript
// Automatic events:
- page_view (all pages)
- outbound_click (external links)

// Custom events:
- whatsapp_click (item orders)
- category_filter (menu filters)
- menu_filter (search/sort)
- item_added_to_cart
- item_removed_from_cart
- cart_opened / cart_cleared
- checkout_started
- contact_form_submitted
- platform_click (Zomato/Swiggy/Dunzo)
```

## 🔍 SEO Optimization

### On-Page:
- ✅ Unique meta descriptions on each page
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ Open Graph tags for social sharing
- ✅ Schema.org LocalBusiness markup
- ✅ Image alt text on all images
- ✅ Mobile-responsive design

### Technical:
- ✅ sitemap.xml (submit to Google Search Console)
- ✅ robots.txt (allow all crawlers)
- ✅ Fast loading (no images on homepage)
- ✅ SSL/HTTPS ready
- ✅ Clean URL structure

### Off-Page:
- Get backlinks from food bloggers, local directories
- Submit to Google My Business
- Encourage customer reviews
- Social media links (Instagram, Facebook)

## 🚀 Deployment

### Option 1: Free Hosting (Netlify/Vercel)
```bash
# Upload all files to Netlify/Vercel via UI
# Or use CLI:
netlify deploy --prod --dir .
```

### Option 2: Traditional Web Hosting
1. FTP upload all files
2. Ensure .htaccess or web.config for URL routing (if needed)
3. Set correct MIME types for CSS/JS

### Option 3: Docker (for production)
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

## 📝 Performance Tips

- Images are optimized with Unsplash CDN
- Tailwind CSS is loaded from CDN (small initial load)
- Minimal custom CSS
- No heavy JavaScript libraries
- Cart data stored in localStorage (no server calls)

## 🔐 Security Notes

- No backend/database, so no SQL injection risk
- Validate contact form input before sending to WhatsApp
- Use HTTPS in production
- No payment processing (handled via WhatsApp)
- Don't store sensitive data in localStorage

## 🎯 Launch Checklist

- [ ] Replace GA_MEASUREMENT_ID in js/main.js
- [ ] Update phone number if needed (WHATSAPP_PHONE in main.js)
- [ ] Update sitemap.xml with correct domain
- [ ] Update all hardcoded URLs (sweetkitchen.local → your-domain.com)
- [ ] Test all pages on mobile (use Chrome DevTools)
- [ ] Test WhatsApp ordering on multiple devices
- [ ] Set up Google Analytics & track initial traffic
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Create Google My Business listing
- [ ] Set up Instagram & social media accounts
- [ ] Add tracking pixels (if needed)
- [ ] Test contact form on WhatsApp
- [ ] Verify responsive design (375px - 1440px)
- [ ] Test on 3G connection (performance)
- [ ] Deploy to production hosting

## 📞 Contact & Support

For any questions or issues:
- Phone: +91 9405769103
- WhatsApp: wa.me/919405769103
- Email: (add email if available)

## 📄 License

This website is proprietary to Sweet Kitchen. 

## 🔄 Future Enhancements

- Add payment gateway integration (Razorpay/PhonePe)
- Add customer reviews section
- Add loyalty program
- Integration with delivery partners
- Admin dashboard for menu updates
- Email notifications for orders
- Push notifications (PWA)
- Multi-language support (Hindi/Telugu)
- Live chat support
- Order history & reorder feature
- Subscription meal plans

---

**Built with ❤️ for Sweet Kitchen - Chhatrapati Sambhaji Nagar's favorite cloud kitchen**
