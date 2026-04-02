# Quick Start Guide

Get up and running with the Exam Management System in minutes!

## 🚀 5-Minute Setup

### 1. Download Files

- Download all project files to a folder

### 2. Update Firebase Config

1. Get Firebase credentials from [Firebase Console](https://console.firebase.google.com)
2. Update `firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 3. Open in Browser

- Double-click `index.html` or open in your web server
- You're ready to go!

## 📖 File Overview

| File                | Purpose                      |
| ------------------- | ---------------------------- |
| `index.html`        | Landing page with navigation |
| `admin.html`        | Admin panel interface        |
| `student.html`      | Student dashboard            |
| `firebase.js`       | Firebase configuration & API |
| `styles.css`        | Global styles and animations |
| `README.md`         | Full documentation           |
| `FIREBASE_SETUP.md` | Detailed Firebase setup      |
| `QUICK_START.md`    | This file                    |

## 🔐 Default Credentials

**Admin Panel:**

- Username: `admin`
- Password: `Admin@123`

**Student Panel:**

- Use student ID and password from uploaded CSV

## 🎯 Common Tasks

### Upload Students Excel

1. Login to Admin Panel
2. Go to "Student Management"
3. Upload CSV with format:
   ```
   userId,password
   student1,pass123
   ```

### Create an Exam

1. Admin Panel → Exam Links
2. Fill exam details
3. Set opening and closing times
4. Submit

### View as Student

1. Student Portal
2. Login with credentials
3. Complete profile (first time)
4. Access materials, exams, results

## 🛠 Development Tips

### Understanding the Code Structure

#### firebase.js

- Authentication functions
- Database operations (CRUD)
- Storage file management
- Utility helpers

#### admin.html

- Sidebar navigation
- Tab-based interface
- Forms for data entry
- Data tables with search

#### student.html

- Dashboard layout
- Card-based UI
- Modal viewers (PDF, Exam, Results)
- Marquee notifications

### Modifying Colors

Edit in HTML files:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace hex colors:

- `#667eea` - Primary purple
- `#764ba2` - Secondary purple
- `#ef4444` - Danger red
- `#10b981` - Success green

### Adding New Sections

In admin.html:

1. Add sidebar button
2. Create tab content div
3. Add switchTab() handler
4. Add load/submit functions

Example:

```html
<!-- Sidebar -->
<button onclick="switchTab('new')" class="sidebar-item">
  <i class="fas fa-icon mr-3"></i> New Item
</button>

<!-- Content -->
<div id="newTab" class="tab-content hidden">
  <!-- Your content here -->
</div>

<!-- JavaScript -->
<script>
  window.switchTab = function (tab) {
    // Show/hide tabs
  };
</script>
```

## 🐛 Troubleshooting

### Issue: "Firebase is not defined"

**Solution:** Ensure `firebase.js` is imported correctly

```html
<script type="module">
  import { adminLogin } from "./firebase.js";
</script>
```

### Issue: Login not working

**Solution:**

1. Check Firebase credentials
2. Verify collection names in Firestore
3. Check browser console for errors

### Issue: PDF not displaying

**Solution:**

1. Check PDF URL is accessible
2. Verify CORS settings
3. Try direct PDF link

### Issue: Files not uploading

**Solution:**

1. Check Firebase Storage bucket exists
2. Verify storage rules allow uploads
3. Check file size limits

## 📱 Testing Checklist

- [ ] Admin login works
- [ ] Can upload students via CSV
- [ ] Student login works
- [ ] Student profile completion works
- [ ] Materials display correctly
- [ ] Exams show with timing
- [ ] PDF viewer modal works
- [ ] Can view results
- [ ] Notifications display
- [ ] Mobile responsive (try on mobile device)
- [ ] Logout works properly

## 🚚 Deployment

### Firebase Hosting (Recommended)

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Other Hosting

- Any static hosting service works (Netlify, Vercel, GitHub Pages)
- Just upload HTML, CSS, JS files

## 📊 Sample Test Data

### Student CSV

```csv
userId,password
john123,pass123
jane456,pass456
alex789,pass789
```

### Notification

```
Text: "Welcome to our Exam portal! Check materials regularly."
Start: Today at 8:00 AM
End: Today at 6:00 PM
```

## 🎓 Learning Path

1. **Understand Structure** → Read `README.md`
2. **Setup Firebase** → Follow `FIREBASE_SETUP.md`
3. **Test Locally** → Use default credentials
4. **Customize** → Modify colors and content
5. **Deploy** → Use Firebase Hosting

## 💡 Pro Tips

1. **Use browser Dev Tools** (F12) to debug JavaScript
2. **Check Firestore** console to verify data
3. **Test on real mobile** for responsive design
4. **Use Chrome DevTools** mobile emulation
5. **Monitor Performance** with Lighthouse

## 🔗 Useful Links

- [Firebase Console](https://console.firebase.google.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [FontAwesome Icons](https://fontawesome.com/icons)

## 📞 Support

Having issues? Try:

1. Check console errors (Developer Tools → Console)
2. Verify Firebase setup
3. Review `README.md` and `FIREBASE_SETUP.md`
4. Check Firebase documentation
5. Review the code comments in HTML files

## 🎉 Next Steps

Congratulations! You're ready to use the Exam Management System.

Start with:

1. Opening `index.html`
2. Exploring Admin Panel
3. Creating test data
4. Testing Student Portal

Happy learning! 🎓

---

**Need more help?** Check out the detailed documentation:

- [Full Documentation](README.md)
- [Firebase Setup Guide](FIREBASE_SETUP.md)
- Code comments in HTML files
