# Exam Management Web Application

A modern, fully responsive exam management system built with **HTML, Tailwind CSS, Vanilla JavaScript, and Firebase**.

## 🎯 Latest Updates (v2.0)

✨ **Enhanced Features:**

- Improved mobile responsiveness with better sidebar handling
- Enhanced error handling and validation
- Better CSV parsing with detailed error messages
- Search functionality for students
- Email and phone validation
- Better loading states
- Improved form validation
- Better accessibility support

## 🎯 Core Features

### Admin Panel

- **Secure Admin Login** - Hardcoded credentials (admin/Admin@123)
- **Student Management** - Upload Excel files, manage student database
- **Special Materials** - Add and manage study materials with PDF uploads
- **Exam Links** - Create exams with timing and scheduling
- **Exam Results** - Upload and manage result files
- **Notifications** - Send announcements to students

### Student Panel

- **Student Login** - Secure authentication with user ID and password
- **Profile Completion** - First-time login form to complete profile
- **Dashboard** - Beautiful card-based UI with quick stats
- **Materials Section** - View and access study materials with PDF viewer
- **Exams** - Take active exams with time tracking
- **Results** - View exam results
- **Notifications** - Auto-scrolling marquee with announcements

## 🛠 Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Backend**: Firebase v9 (Modular SDK)
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Storage**: Firebase Cloud Storage
- **Icons**: FontAwesome 6.4

## 📦 Project Structure

```
exams/
├── admin.html              # Admin panel interface
├── student.html            # Student dashboard
├── index.html              # Home page with navigation
├── firebase.js             # Firebase configuration & utilities
├── styles.css              # Global styles and animations
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A Firebase project (free tier available)
- Modern web browser with ES6 support
- Internet connection

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable the following services:
   - Authentication (Email/Password)
   - Firestore Database
   - Cloud Storage
3. Create collections in Firestore:
   - `students`
   - `materials`
   - `exams`
   - `results`
   - `notifications`
4. Update the Firebase config in `firebase.js` with your credentials

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate to Admin Panel or Student Portal

## 📱 Usage

### Admin Access

1. Click "Admin Panel" on home page
2. Login with: **Username**: admin, **Password**: Admin@123
3. Manage all aspects of the exam system

#### Student Management

- Upload Excel files with userId and password
- Edit student details
- Delete students
- Search functionality

#### Materials Management

- Add study materials with title and PDF URL
- Display materials in card format
- Delete materials
- PDF viewer with iframe (no download)

#### Exam Management

- Create exams with timing
- Specify opening and closing times
- Display active/inactive status
- Delete exams

#### Results Management

- Upload result files to Firebase Storage
- Display result cards
- Download/view results

#### Notifications

- Create announcements
- Set time windows for notifications
- Manage active notifications

### Student Access

1. Click "Student Portal" on home page
2. Login with Student ID and Password
3. On first login, complete profile details
4. Access materials, exams, and results

#### Dashboard Features

- Quick stats cards
- Notifications marquee
- Materials cards with PDF viewer
- Exam cards with timing info
- Results download

## 🔓 Security Features

- PDF Viewer with disabled download (iframe restrictions)
- Exam timing validation
- Role-based access (Admin/Student)
- Firebase security rules (configure in console)
- User authentication

## 📱 Responsive Design

- **Mobile**: Hamburger menu, stacked layout
- **Tablet**: Optimized for touch and mid-size screens
- **Desktop**: Full sidebar dashboard, multi-column layouts
- Touch-friendly buttons and inputs

## 🎨 Design Features

- **Glassmorphism UI** - Modern glass effect with blur
- **Gradient Backgrounds** - Purple to pink gradient theme
- **Smooth Animations** - Transitions and hover effects
- **Card-based Layout** - Clean card components
- **Dark/Light Support** - CSS variables for theming
- **Accessibility** - WCAG compliant with focus states

## 🔧 Firebase Modular SDK

This project uses Firebase v9 modular SDK for better tree-shaking and smaller bundle sizes.

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
```

## 📊 Database Collections

### Students

```
{
  userId: string,
  password: string,
  name: string,
  rollNo: string,
  branch: string,
  section: string,
  college: string,
  email: string,
  phone: string,
  profileCompleted: boolean,
  createdAt: timestamp
}
```

### Materials

```
{
  title: string,
  description: string,
  pdfUrl: string,
  createdAt: timestamp
}
```

### Exams

```
{
  title: string,
  description: string,
  examUrl: string,
  openingTime: timestamp,
  closingTime: timestamp,
  createdAt: timestamp
}
```

### Results

```
{
  title: string,
  date: date,
  fileUrl: string,
  createdAt: timestamp
}
```

### Notifications

```
{
  text: string,
  startTime: timestamp,
  endTime: timestamp,
  createdAt: timestamp
}
```

## 🎯 Excel File Format for Students

Upload a CSV file with the following format:

```
userId,password
student1,pass123
student2,pass456
student3,pass789
```

## ⚙️ Customization

### Change Color Scheme

Edit the gradient in HTML files:

```html
<style>
  body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
</style>
```

### Modify Admin Password

Edit in `firebase.js`:

```javascript
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Admin@123";
```

### Add Custom Branding

Update the logo and title in HTML files

## 🚨 Important Notes

1. **Firebase Credentials**: Keep your Firebase config secure in production
2. **Admin Password**: Change the hardcoded password immediately after deployment
3. **Database Security**: Configure Firestore rules for production
4. **PDF Viewer**: Some PDFs may not render in iframe depending on CORS settings
5. **File Upload Limits**: Firebase Storage has size limits

## 🐛 Troubleshooting

### Login Not Working

- Check Firebase credentials in `firebase.js`
- Verify collection names match exactly
- Check browser console for errors

### PDFs Not Loading

- Verify PDF URLs are accessible
- Check CORS settings
- Try different PDF format

### Files Not Uploading

- Check Firebase Storage bucket configuration
- Verify file size limits
- Check Firebase quota

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is provided as-is for educational purposes.

## 🤝 Support

For issues or questions:

1. Check the Firebase console for errors
2. Review browser developer tools
3. Verify all credentials and configurations
4. Check Firebase documentation

## 🎓 Learning Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Firebase Firestore Guide](https://firebase.google.com/docs/firestore)

---

**Created with ❤️ for modern web education management**
