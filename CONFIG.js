// Configuration Guide for Exam Management System
// This file contains reference information for configuring the system

/*
===================================
FIREBASE CONFIGURATION
===================================
Location: firebase.js (lines ~30-40)

Update with your Firebase credentials:
*/

const firebaseConfig = {
  apiKey: "AIzaSyAsNayVHofbx8Kva20AJp43MfgwosbYKZ4", // ← UPDATE THIS
  authDomain: "satya-fd501.firebaseapp.com", // ← UPDATE THIS
  projectId: "satya-fd501", // ← UPDATE THIS
  storageBucket: "satya-fd501.firebasestorage.app", // ← UPDATE THIS
  messagingSenderId: "156477081471", // ← UPDATE THIS
  appId: "1:156477081471:web:826c30982849159b763c4a", // ← UPDATE THIS
  measurementId: "G-41WZL9R2W2", // ← UPDATE THIS
};

// ===================================
// ADMIN CREDENTIALS
// ===================================
// Location: firebase.js (lines ~65-67)
// Change admin credentials here

const ADMIN_USERNAME = "admin"; // ← CHANGE THIS
const ADMIN_PASSWORD = "Admin@123"; // ← CHANGE THIS

// ===================================
// CUSTOMIZATION EXAMPLES
// ===================================
//
// 1. CHANGE ADMIN PASSWORD
//    Location: firebase.js
//    Replace: const ADMIN_PASSWORD = "Admin@123";
//    With: const ADMIN_PASSWORD = "YourNewPassword";
//
// 2. CHANGE BRAND COLORS
//    Location: All HTML files
//    Find: background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//    Replace hex codes with your colors
//    Example: background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
//
// 3. CHANGE FONT
//    Location: HTML style tags
//    Find: @import url('https://fonts.googleapis.com/css2?family=Poppins...');
//    Replace with: @import url('YOUR_GOOGLE_FONT_URL');
//
// 4. ADD CUSTOM LOGO
//    Location: Navbar sections in HTML
//    Find: <i class="fas fa-graduation-cap mr-2"></i>
//    Replace with: <img src="path/to/logo.png" alt="Logo" class="w-8 h-8">
//
// 5. CHANGE SITE TITLE
//    Location: admin.html, student.html, index.html
//    Find: <title>Page Title - Exam Management</title>
//    Replace with: <title>Your Site Title</title>

// ===================================
// FILE LOCATIONS FOR COMMON EDITS
// ===================================
//
// admin.html:
//   - Title: line ~7
//   - Login form: line ~60-75
//   - Brand colors: line ~24
//   - Sidebar menu: line ~117+
//
// student.html:
//   - Title: line ~7
//   - Login form: line ~75-85
//   - Dashboard layout: line ~180+
//
// firebase.js:
//   - Firebase config: line ~30-40
//   - Admin credentials: line ~65-67
//   - Functions: start at line ~70+
//
// styles.css:
//   - Root colors: line ~8-16
//   - Animations: line ~60+

// ===================================
// FIRESTORE COLLECTIONS SETUP
// ===================================
//
// Required collections in Firestore Database:
//
// 1. students
//    Fields: userId, password, name, rollNo, branch, section,
//            college, email, phone, profileCompleted, createdAt
//
// 2. materials
//    Fields: title, description, pdfUrl, createdAt
//
// 3. exams
//    Fields: title, description, examUrl, openingTime,
//            closingTime, createdAt
//
// 4. results
//    Fields: title, date, fileUrl, createdAt
//
// 5. notifications
//    Fields: text, startTime, endTime, createdAt

// ===================================
// FIRESTORE SECURITY RULES
// ===================================
//
// Copy these rules to Firestore Console:
//
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /admin/{document=**} {
//       allow read, write: if request.auth != null;
//     }
//     match /students/{uid} {
//       allow read, write: if request.auth.uid == uid;
//     }
//     match /materials/{document=**} {
//       allow read: if true;
//     }
//     match /exams/{document=**} {
//       allow read: if true;
//     }
//     match /results/{document=**} {
//       allow read: if true;
//     }
//     match /notifications/{document=**} {
//       allow read: if true;
//     }
//   }
// }

// ===================================
// TESTING CREDENTIALS
// ===================================
//
// Admin Login:
//   Username: admin
//   Password: Admin@123
//
// Test Student:
//   userId: testuser1
//   Password: pass123

// ===================================
// DEPLOYMENT CHECKLIST
// ===================================
//
// - [ ] Update Firebase credentials in firebase.js
// - [ ] Change admin password in firebase.js
// - [ ] Setup Firestore collections
// - [ ] Configure Firestore security rules
// - [ ] Test admin panel thoroughly
// - [ ] Test student panel thoroughly
// - [ ] Test on mobile devices
// - [ ] Verify PDFs load correctly
// - [ ] Test file uploads
// - [ ] Disable test mode in Firebase
// - [ ] Deploy to hosting

/*
End of CONFIG.js - Reference guide only
*/
