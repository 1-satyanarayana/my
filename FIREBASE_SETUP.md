# Firebase Setup Guide

This document provides detailed instructions for setting up Firebase for the Exam Management System.

## Prerequisites

- A Google account
- Access to [Firebase Console](https://console.firebase.google.com)
- A Firebase project (you can create one for free)

## Step-by-Step Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter your project name (e.g., "Exam Management System")
4. Click "Continue"
5. Disable Google Analytics (optional)
6. Click "Create project"

### 2. Enable Authentication

#### Email/Password Authentication

1. Go to **Authentication** from the left menu
2. Click **Get Started**
3. Click the **Email/Password** provider
4. Toggle **Enable** on
5. Click **Save**

### 3. Create Firestore Database

1. Go to **Firestore Database** from the left menu
2. Click **Create Database**
3. Choose **Start in test mode** (for development)
4. Select your region
5. Click **Enable**

### 4. Create Firestore Collections

Create the following collections manually:

#### Collection: `students`

- Document example:

```json
{
  "userId": "student1",
  "password": "pass123",
  "name": "John Doe",
  "rollNo": "001",
  "branch": "CSE",
  "section": "A",
  "college": "Sample College",
  "email": "john@example.com",
  "phone": "9876543210",
  "profileCompleted": true
}
```

#### Collection: `materials`

- Document example:

```json
{
  "title": "Chapter 1 - Introduction",
  "description": "Basics of programming",
  "pdfUrl": "https://example.com/pdf1.pdf"
}
```

#### Collection: `exams`

- Document example:

```json
{
  "title": "Midterm Exam",
  "description": "Midterm examination",
  "examUrl": "https://example.com/exam",
  "openingTime": "2024-04-10 09:00:00",
  "closingTime": "2024-04-10 11:00:00"
}
```

#### Collection: `results`

- Document example:

```json
{
  "title": "Midterm Results",
  "date": "2024-04-15",
  "fileUrl": "https://storage.example.com/results.pdf"
}
```

#### Collection: `notifications`

- Document example:

```json
{
  "text": "Midterm exams starting tomorrow",
  "startTime": "2024-04-09 08:00:00",
  "endTime": "2024-04-10 12:00:00"
}
```

### 5. Setup Cloud Storage

1. Go to **Cloud Storage** from the left menu
2. Click **Get Started**
3. Start in test mode
4. Select your region
5. Click **Done**

#### Create Storage Folders

- `materials/`
- `results/`
- `studentFiles/`

### 6. Get Firebase Configuration

1. Go to **Project Settings** (click the gear icon)
2. Scroll to "Your apps" section
3. Click the Web (</>) icon
4. Give your app a name
5. Copy the Firebase configuration
6. Update the config in `firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
```

### 7. Configure Security Rules (Production)

#### Firestore Rules

Go to **Firestore Database** → **Rules** and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admin access
    match /admin/{document=**} {
      allow read, write: if request.auth != null;
    }

    // Student access
    match /students/{uid} {
      allow read: if request.auth.uid == uid;
      allow write: if request.auth.uid == uid;
    }

    // Materials - read-only for students
    match /materials/{document=**} {
      allow read: if true;
      allow write: if false;
    }

    // Exams - read-only for students
    match /exams/{document=**} {
      allow read: if true;
      allow write: if false;
    }

    // Results - read-only for students
    match /results/{document=**} {
      allow read: if true;
      allow write: if false;
    }

    // Notifications - read-only for students
    match /notifications/{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

#### Storage Rules

Go to **Cloud Storage** → **Rules** and replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## Testing Your Setup

### Test Admin Panel

1. Open `admin.html`
2. Login with: Username: `admin`, Password: `Admin@123`
3. Try uploading a CSV file with student data:

```csv
userId,password
testuser1,pass123
testuser2,pass456
```

### Test Student Panel

1. Open `student.html`
2. Login with the credentials you just created
3. Complete your profile on first login

## Connection Debugging

If you face connection issues:

### Check Console Errors

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for Firebase error messages

### Common Issues

**"Firebase is not defined"**

- Make sure `firebase.js` is imported as a module
- Check the script src paths

**"Collection not found"**

- Create the collections in Firestore manually
- Check collection names match exactly (case-sensitive)

**"Permission denied"**

- Check Firestore and Storage rules
- For development, use test mode first
- Update rules for production

**"Upload failed"**

- Check Firebase Storage quota
- Verify storage bucket exists
- Check file size limits

## Environment Setup Variations

### Development Mode

- Use test mode (allow all)
- No authentication required
- For testing only

### Production Mode

- Implement proper security rules
- Enable authentication
- Restrict data access per user
- Enable CORS properly

## Firebase Quotas & Limits

- **Firestore**: First 50,000 read/write operations free per month
- **Storage**: 1GB free per month
- **Database Size**: No size limit (pay per stored data)
- **Concurrent Connections**: Depends on plan

## Monitoring & Analytics

1. Go to **Analytics** dashboard
2. Monitor usage patterns
3. Check for errors in **Firebase Console**
4. Review **Performance** metrics

## Backup & Export

1. Go to **Cloud Storage**
2. Use Firebase CLI for backups: `firebase export`
3. Schedule regular backups

## Next Steps

1. ✅ Complete Firebase setup
2. Create test data
3. Test on multiple devices
4. Deploy to hosting (Firebase Hosting available)
5. Monitor and optimize

## Support & Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Console](https://console.firebase.google.com)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Security Best Practices

1. **Never expose credentials** in client-side code
2. **Use environment variables** for sensitive data
3. **Implement proper backup** strategies
4. **Monitor unauthenticated access** attempts
5. **Regularly update** security rules
6. **Use service accounts** for server-side operations
7. **Enable two-factor authentication** for Firebase account
8. **Audit logs** regularly

---

For additional help, refer to the main [README.md](README.md) file.
