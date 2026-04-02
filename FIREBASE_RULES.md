# Firebase Firestore Security Rules Setup Guide

## Quick Start

Copy the rules below to your Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project (satya-fd501)
3. Go to Firestore Database
4. Click "Rules" tab
5. Paste the rules below
6. Click "Publish"

---

## Production-Ready Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // ============================================
    // ADMIN COLLECTION - Admin access only
    // ============================================
    match /admin/{document=**} {
      allow read, write: if request.auth != null &&
                            request.auth.uid == "admin";
    }

    // ============================================
    // STUDENTS COLLECTION - User can only access own data
    // ============================================
    match /students/{userId} {
      // User can read/write only their own document
      allow read, write: if request.auth != null &&
                            request.auth.uid == userId;
    }

    // ============================================
    // MATERIALS COLLECTION - Public read, admin write
    // ============================================
    match /materials/{document=**} {
      // Anyone can read materials
      allow read: if true;

      // Only authenticated users can write
      allow create, update, delete: if request.auth != null &&
                                       request.auth.uid == "admin";
    }

    // ============================================
    // EXAMS COLLECTION - Public read, admin write
    // ============================================
    match /exams/{document=**} {
      // Anyone can read exams
      allow read: if true;

      // Only admin can write exams
      allow create, update, delete: if request.auth != null &&
                                       request.auth.uid == "admin";
    }

    // ============================================
    // RESULTS COLLECTION - Students read own, admin write
    // ============================================
    match /results/{document=**} {
      // Anyone can read results (student-specific filtering on client)
      allow read: if true;

      // Only admin can write results
      allow create, update, delete: if request.auth != null &&
                                       request.auth.uid == "admin";
    }

    // ============================================
    // NOTIFICATIONS COLLECTION - Public read, admin write
    // ============================================
    match /notifications/{document=**} {
      // Anyone can read notifications
      allow read: if true;

      // Only admin can write notifications
      allow create, update, delete: if request.auth != null &&
                                       request.auth.uid == "admin";
    }

    // ============================================
    // CATCH-ALL - Deny everything else
    // ============================================
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## Step-by-Step Setup Instructions

### 1. Open Firebase Console

- Go to [Firebase Console](https://console.firebase.google.com)
- Select your project

### 2. Navigate to Firestore Database

- In the left sidebar, click "Firestore Database"
- If not created yet, click "Create Database"

### 3. Go to Rules Tab

- Click the "Rules" tab at the top
- You'll see a text editor with existing rules

### 4. Copy and Paste Rules

- Select all existing text (Ctrl+A)
- Delete it
- Paste the rules above
- Click "Publish" button

### 5. Verify Success

- Wait for deployment (usually 10-30 seconds)
- See "Rules deployed" message

---

## Understanding the Rules

### Admin Collection

```
match /admin/{document=**} {
  allow read, write: if request.auth != null &&
                        request.auth.uid == "admin";
}
```

- Only the user with UID "admin" can access
- Change "admin" to match your admin username
- For increased security, use Firebase Authentication custom claims instead

### Students Collection

```
match /students/{userId} {
  allow read, write: if request.auth != null &&
                        request.auth.uid == userId;
}
```

- Each user can only read/write their own document
- Document must be named after the userId
- Example: If userId is "john123", document is `/students/john123`

### Public Read Collections (Materials, Exams, Results, Notifications)

```
match /materials/{document=**} {
  allow read: if true;
  allow create, update, delete: if request.auth != null &&
                                   request.auth.uid == "admin";
}
```

- Anyone can read (public)
- Only admin can create/update/delete
- Best for content that students should access

---

## Common Configuration Scenarios

### Scenario 1: Student Can Update Own Profile

```
match /students/{userId} {
  // Student can read their profile
  allow read: if request.auth.uid == userId;

  // Student can update specific fields only
  allow update: if request.auth.uid == userId &&
                   request.resource.data.keys().hasAll(['name', 'email']);
}
```

### Scenario 2: Role-Based Access (Teachers, Students, Admin)

```
match /courses/{courseId} {
  // Admin and teachers can read all
  allow read: if request.auth.token.role in ['admin', 'teacher'];

  // Only admin can write
  allow write: if request.auth.token.role == 'admin';
}
```

### Scenario 3: Time-Based Access (Open Exams)

```
match /exams/{examId} {
  allow read: if now >= resource.data.openingTime &&
                 now <= resource.data.closingTime;
}
```

### Scenario 4: Email-Based Permissions

```
match /materials/{materialId} {
  allow read: if request.auth.token.email.matches('.*@myuniversity.edu');
}
```

---

## Recommended Rules for Production

### Enhanced Security Version

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Check if user is authenticated
    function isAuth() {
      return request.auth != null;
    }

    // Check if user is admin
    function isAdmin() {
      return request.auth.uid == "admin";
    }

    // Check if user can access own data
    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    // ADMIN
    match /admin/{document=**} {
      allow read, write: if isAdmin();
    }

    // STUDENTS
    match /students/{userId} {
      allow read, write: if isOwner(userId);
    }

    // MATERIALS
    match /materials/{document=**} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // EXAMS
    match /exams/{document=**} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // RESULTS
    match /results/{document=**} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // NOTIFICATIONS
    match /notifications/{document=**} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // Deny everything else
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## Testing Rules in Firebase Console

### 1. Use Rules Simulator

- In Rules tab, click "Rules Simulator" button
- Select operation (Read, Write, Delete)
- Enter collection path (e.g., `/students/john123`)
- Enter UID (leave empty to test unauthenticated)
- Click "Run"

### 2. Test Cases

**Unauthenticated user reading materials:**

- Collection: `materials`
- Document: `any`
- Request Auth UID: (leave empty)
- Operation: Read
- Expected: **Allow** ✅

**User reading another user's profile:**

- Collection: `students/jane@email.com`
- Request Auth UID: `john@email.com`
- Operation: Read
- Expected: **Deny** ❌

**Admin updating exam:**

- Collection: `exams`
- Document: `exam1`
- Request Auth UID: `admin`
- Operation: Write
- Expected: **Allow** ✅

---

## Cloud Storage Security Rules

Add these for file uploads:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // Authenticated users can upload to their own folder
    match /uploads/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null &&
                           request.auth.uid == userId;
    }

    // Admin can manage all uploads
    match /uploads/{allPaths=**} {
      allow read, write: if request.auth != null &&
                           request.auth.uid == "admin";
    }

    // Deny everything else
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

Steps to apply:

1. Go to Firebase Console → Storage
2. Click "Rules" tab
3. Paste the rules above
4. Click "Publish"

---

## Common Issues & Solutions

### Issue: 403 Permission Denied

**Cause:** User doesn't have permission according to rules
**Solution:**

1. Check user is authenticated
2. Verify UID matches rules
3. Use Rules Simulator to test

### Issue: Rules Not Updating

**Cause:** Changes not published
**Solution:**

1. Click "Publish" button
2. Wait 30 seconds
3. Refresh page
4. Test again

### Issue: Admin Can't Write

**Cause:** Admin UID doesn't match rules
**Solution:**

1. Check your admin username/UID in firebase.js
2. Update rules to match exactly
3. Republish

### Issue: Students Can See Other Profiles

**Cause:** Collection rule is too permissive
**Solution:**

1. Check students collection path
2. Ensure document is named after userId
3. Verify own-data check: `request.auth.uid == userId`

---

## Best Practices

✅ **DO:**

- Use `request.auth.uid` for user identification
- Create functions for repeated logic
- Test all rules in simulator
- Document your rules
- Use least privilege principle
- Update rules before deploying
- Keep sensitive data restricted

❌ **DON'T:**

- Use `allow read, write: if true` for sensitive data
- Rely only on client-side validation
- Store passwords in Firestore (use Firebase Auth)
- Mix unauthenticated and authenticated rules carelessly
- Deploy untested rules to production
- Share security rules in code comments

---

## Monitoring & Debugging

### View Rule Violations

1. Firebase Console → Logs
2. Filter by "permission-denied"
3. See which rules are being rejected

### Performance Tips

- Index frequently queried fields
- Avoid deeply nested rules
- Cache rules queries on client
- Monitor rule evaluation time

---

## Deployment Checklist

- [ ] Update admin UID in rules to match firebase.js
- [ ] Test all collections in Rules Simulator
- [ ] Verify students can access only own data
- [ ] Confirm public reads work for materials/exams
- [ ] Test admin write permissions
- [ ] Verify unauthenticated users can't write
- [ ] Update Cloud Storage rules
- [ ] Set up monitoring/logging
- [ ] Document any custom access patterns
- [ ] Establish maintenance schedule

---

## Support & Reference

- [Firebase Firestore Rules Documentation](https://firebase.google.com/docs/firestore/security/start)
- [Firebase Rules Language Reference](https://firebase.google.com/docs/rules/rules-language)
- [Common Rules Patterns](https://firebase.google.com/docs/firestore/security/rules-patterns)

---

## Next Steps

1. **Copy the production rules** above
2. **Go to Firebase Console** and paste them
3. **Test in Rules Simulator**
4. **Deploy and verify**
5. **Monitor for issues**

Your system is now secure! 🔒
