# Developer's Technical Reference

## 🔧 System Architecture

### Project Structure

```
exam-management-system/
├── index.html                 # Landing page
├── admin.html                # Admin dashboard
├── student.html              # Student dashboard
├── firebase.js               # Firebase module
├── styles.css                # Global styles
├── CONFIG.js                 # Configuration guide
├── README.md                 # Main documentation
├── QUICK_START.md            # Quick setup guide
├── FIREBASE_SETUP.md         # Firebase configuration
├── BEST_PRACTICES.md         # Usage guidelines
├── TROUBLESHOOTING.md        # Troubleshooting guide
├── UPDATE_NOTES.md           # Version 2.0 updates
└── TECHNICAL_REFERENCE.md    # This file
```

## 📦 Module Documentation

### Firebase Module (firebase.js)

#### Core Functions

**Authentication**

```javascript
// Admin login
adminLogin(username, password)
→ Promise<{ success: boolean }>
→ Sets: localStorage.adminLoggedIn = "true"

// Student login
studentLogin(userId, password)
→ Promise<{ success, data, isFirstLogin }>
→ Sets: studentLoggedIn, studentId, studentData

// Logout functions
adminLogout() → Redirects to admin.html
studentLogout() → Redirects to student.html

// Status checks
isAdminLoggedIn() → Boolean
isStudentLoggedIn() → Boolean
```

**Student Management**

```javascript
// Upload multiple students
uploadStudents(students: Array<{userId, password}>)
→ Promise (batch add to Firestore)

// Retrieve all students
getStudents()
→ Promise<QuerySnapshot>
→ Returns: { id, userId, password, name, ... }

// Update student
updateStudent(studentId, data)
→ Promise (updates single student)

// Delete student
deleteStudent(studentId)
→ Promise (removes from Firestore)

// Complete profile
completeStudentProfile(studentId, profileData)
→ Promise (sets profileCompleted: true)

// Get single student
getStudentById(studentId)
→ Promise<StudentData>
```

**Materials Management**

```javascript
// Add material
addMaterial(materialData: {title, description, pdfUrl})
→ Promise<DocumentReference>

// Get all materials
getMaterials()
→ Promise<QuerySnapshot>

// Delete material
deleteMaterial(materialId)
→ Promise
```

**Exams Management**

```javascript
// Add exam
addExam(examData: {title, description, examUrl, openingTime, closingTime})
→ Promise<DocumentReference>

// Get exams
getExams()
→ Promise<QuerySnapshot>

// Update exam
updateExam(examId, data)
→ Promise

// Delete exam
deleteExam(examId)
→ Promise

// Check if exam is active
isExamActive(startTime, endTime) → Boolean
```

**Results Management**

```javascript
// Add result
addResult(resultData: {title, date, fileUrl})
→ Promise<DocumentReference>

// Get results
getResults()
→ Promise<QuerySnapshot>

// Delete result
deleteResult(resultId)
→ Promise
```

**Notifications**

```javascript
// Add notification
addNotification(notificationData: {text, startTime, endTime})
→ Promise<DocumentReference>

// Get all notifications
getNotifications()
→ Promise<QuerySnapshot>

// Get active notifications
getActiveNotifications()
→ Promise<QuerySnapshot>

// Delete notification
deleteNotification(notificationId)
→ Promise
```

**File Management**

```javascript
// Upload file to Storage
uploadFile(file: File, path: string)
→ Promise<string> (returns downloadURL)

// Delete file from Storage
deleteFile(fileUrl: string)
→ Promise
```

**Validation Functions**

```javascript
// Email validation
validateEmail(email: string) → Boolean
// Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation
validatePhone(phone: string) → Boolean
// Accepts: 10 digits or international format

// Password validation
validatePassword(password: string) → Boolean
// Minimum 6 characters
```

**Search Functions**

```javascript
// Search students
searchStudents(query: string)
→ Promise<Array<StudentData>>
→ Searches: userId, name, rollNo, email
→ Case-insensitive partial matching
```

**Utility Functions**

```javascript
// Show toast notification
showToast(message: string, type: "info"|"success"|"error")
→ Creates notification toast
→ Auto-dismisses after 3 seconds

// Format timestamp
formatDate(timestamp)
→ string (formatted date and time)

// Parse Excel/CSV
parseExcelToJSON(file: File)
→ Promise<Array<{userId, password}>>
→ Validates format and data
```

---

## 🔌 API Integration

### Firebase Configuration

```javascript
const firebaseConfig = {
  apiKey: string, // Public API key
  authDomain: string, // Auth domain
  projectId: string, // Project ID
  storageBucket: string, // Storage bucket
  messagingSenderId: string, // Messaging ID
  appId: string, // App ID
  measurementId: string, // Analytics ID
};
```

### Firestore Collections Schema

**students**

```javascript
{
  userId: string,           // Unique student ID
  password: string,         // Plaintext (consider hashing in production)
  name: string,            // Student name
  rollNo: string,          // Roll number
  branch: string,          // Branch/Department
  section: string,         // Section
  college: string,         // College name
  email: string,           // Email address
  phone: string,           // Phone number
  profileCompleted: boolean, // Profile completion status
  createdAt: timestamp,    // Creation timestamp
  updatedAt: timestamp     // Last update timestamp
}
```

**materials**

```javascript
{
  title: string,           // Material title
  description: string,     // Material description
  pdfUrl: string,          // URL to PDF file
  createdAt: timestamp     // Creation timestamp
}
```

**exams**

```javascript
{
  title: string,           // Exam title
  description: string,     // Exam description
  examUrl: string,         // URL to exam page
  openingTime: timestamp,  // When exam opens
  closingTime: timestamp,  // When exam closes
  createdAt: timestamp     // Creation timestamp
}
```

**results**

```javascript
{
  title: string,           // Result title
  date: date,              // Result date
  fileUrl: string,         // URL to result file
  createdAt: timestamp     // Creation timestamp
}
```

**notifications**

```javascript
{
  text: string,            // Notification text
  startTime: timestamp,    // Display start time
  endTime: timestamp,      // Display end time
  createdAt: timestamp     // Creation timestamp
}
```

---

## 🎨 UI Components

### HTML Structure

#### Admin Dashboard Components

```html
<!-- Login Form -->
<form id="loginForm">
  <input id="username" required />
  <input id="password" type="password" required />
  <button type="submit">Login</button>
</form>

<!-- Tab Content Area -->
<div id="studentsTab" class="tab-content">
  <!-- Content -->
</div>

<!-- Registration Modal -->
<div id="editModal">
  <form id="editForm">
    <!-- Fields -->
  </form>
</div>
```

#### Student Dashboard Components

```html
<!-- Profile Form -->
<form id="profileForm">
  <input id="profileName" required />
  <input id="profileEmail" required />
  <!-- Other fields -->
</form>

<!-- Materials Grid -->
<div id="materialsList" class="grid"></div>

<!-- Exams Grid -->
<div id="examsList" class="grid"></div>

<!-- Modal Viewers -->
<div id="materialModal">
  <iframe id="pdfViewer"></iframe>
</div>
```

---

## 🎯 JavaScript Event Handlers

### Global Functions (window scope)

**Navigation**

```javascript
switchTab(tab: string)
// Switches between admin dashboard tabs
// Tabs: 'students', 'materials', 'exams', 'results', 'notifications'
```

**Student Management**

```javascript
openEditModal(id, userId, name, roll, email);
// Opens edit modal with student data

closeEditModal();
// Closes edit modal

deleteStudentBtn(studentId);
// Deletes student with confirmation

refreshStudents();
// Reloads students from database

clearAllStudents();
// Deletes ALL students with confirmation
```

**Materials**

```javascript
deleteMaterialBtn(materialId);
// Deletes material
```

**Exams**

```javascript
deleteExamBtn(examId);
// Deletes exam
```

**Results**

```javascript
deleteResultBtn(resultId);
// Deletes result
```

**Notifications**

```javascript
deleteNotifBtn(notificationId);
// Deletes notification
```

**Logout**

```javascript
adminLogoutBtn();
// Logs out admin after confirmation

studentLogoutBtn();
// Logs out student after confirmation
```

**Viewers**

```javascript
openMaterialViewer(pdfUrl, title);
// Opens PDF in modal

closeMaterialModal();
// Closes PDF modal

openExamViewer(examUrl, title);
// Opens exam in modal

closeExamModal();
// Closes exam modal

openResultViewer(fileUrl, title);
// Opens result in modal

closeResultModal();
// Closes result modal
```

---

## 🔄 Data Flow

### Admin Login Flow

```
1. User enters credentials
   ↓
2. adminLogin() checks
   ↓
3. If valid → localStorage set → Dashboard shown
   ↓
4. If invalid → Toast error shown
```

### Student Upload Flow

```
1. User selects CSV file
   ↓
2. File validation
   ↓
3. parseExcelToJSON() parses file
   ↓
4. uploadStudents() adds to Firestore
   ↓
5. Success toast shown
   ↓
6. loadStudents() refreshes display
```

### Exam Taking Flow

```
1. Student views exams list
   ↓
2. System checks if exam is active
   ↓
3. If active → Start button enabled
   ↓
4. On click → Opens exam in iframe
   ↓
5. Exam runs in iframe
```

---

## 🔐 Security Implementation

### Current Security

1. **Authentication**
   - Admin: Hardcoded (can be improved)
   - Students: Firestore document lookup

2. **Data Protection**
   - localStorage for session persistence
   - No sensitive data in URLs
   - Timestamps for audit trails

3. **File Security**
   - PDF viewer in iframe (prevents downloads)
   - Right-click disabled
   - Download buttons hidden

### Security Improvements (Recommended)

```javascript
// 1. Hash passwords in production
import bcryptjs from 'bcryptjs';
const hashedPassword = await bcryptjs.hash(password, 10);

// 2. Use Firebase Authentication
import { createUserWithEmailAndPassword } from 'firebase/auth';

// 3. Implement proper security rules
// In Firestore Rules:
match /students/{uid} {
  allow read, write: if request.auth.uid == uid;
}

// 4. Add rate limiting
const rateLimitMap = {};
function checkRateLimit(userId) {
  // Implement throttling logic
}

// 5. Add input sanitization
function sanitizeInput(input) {
  return DOMPurify.sanitize(input);
}
```

---

## 📊 Performance Optimization

### Current Optimizations

- Event delegation
- Lazy data loading
- Efficient DOM queries
- CSS transitions (GPU accelerated)

### Further Optimizations

```javascript
// 1. Use Pagination
const pageSize = 20;
let currentPage = 0;

async function loadStudentsPage(page) {
  const start = page * pageSize;
  // Implement offset-based pagination
}

// 2. Implement Caching
const cache = {};
function getCachedData(key) {
  if (cache[key] && cache[key].timestamp > Date.now() - 5000) {
    return cache[key].data;
  }
  return null;
}

// 3. Use Debouncing for Search
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// 4. Lazy Load Images
const images = document.querySelectorAll("[data-src]");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      imageObserver.unobserve(entry.target);
    }
  });
});
```

---

## 🧪 Testing Guidelines

### Unit Testing

```javascript
// Test validation functions
test("validateEmail", () => {
  expect(validateEmail("user@example.com")).toBe(true);
  expect(validateEmail("invalid")).toBe(false);
});

// Test search functionality
test("searchStudents", async () => {
  const results = await searchStudents("john");
  expect(results.length).toBeGreaterThan(0);
});
```

### Integration Testing

```html
<!-- Test admin login flow -->
1. Fill credentials 2. Submit 3. Verify dashboard shown

<!-- Test student upload -->
1. Upload CSV 2. Verify in table 3. Edit record 4. Verify changes saved
```

---

## 📚 Adding New Features

### Adding New Admin Panel Section

```html
<!-- 1. Add sidebar button -->
<button onclick="switchTab('newSection')">
  <i class="fas fa-icon"></i> New Section
</button>

<!-- 2. Create tab content -->
<div id="newSectionTab" class="tab-content hidden">
  <!-- Content here -->
</div>

<!-- 3. Add JavaScript handler -->
<script>
  window.switchTab = function (tab) {
    // Hide all, show selected
    if (tab === "newSection") {
      // Load your data
      loadNewSectionData();
    }
  };

  async function loadNewSectionData() {
    // Your logic
  }
</script>
```

### Adding New Firestore Collection

```javascript
// In firebase.js
export function addNewItem(data) {
  return addDoc(collection(db, "newCollection"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export function getNewItems() {
  return getDocs(collection(db, "newCollection"));
}
```

---

## 🚀 Deployment Checklist

### Before Going Live

- [ ] Change admin password
- [ ] Update Firebase security rules
- [ ] Configure CORS for URLs
- [ ] Test on mobile device
- [ ] Run in different browsers
- [ ] Check console for errors
- [ ] Verify all features working
- [ ] Set up backups
- [ ] Enable Firebase monitoring
- [ ] Configure error tracking

### Production Security

- [ ] Enable HTTPS only
- [ ] Set security headers
- [ ] Configure CSP
- [ ] Enable 2FA for admin
- [ ] Use environment variables
- [ ] Regular security audits
- [ ] Keep dependencies updated
- [ ] Monitor error logs

---

## 📞 Developer Resources

### Official Documentation

- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Tailwind CSS](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Vanilla JS Tips](https://plainjs.com)

### Tools & Services

- Firebase Console: https://console.firebase.google.com
- Tailwind Play: https://play.tailwindcss.com
- DevTools: Built into all modern browsers

---

**Happy coding!** 🚀

Remember: Always test changes thoroughly before deploying to production.
