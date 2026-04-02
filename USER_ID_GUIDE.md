# User ID Usage Guide

## Overview

User IDs are unique identifiers for students and admin in the system. They're used for login, tracking, and result management.

---

## Admin User ID

### Admin Credentials

| Field        | Value                       |
| ------------ | --------------------------- |
| **Username** | `admin`                     |
| **Password** | `Admin@123`                 |
| **Type**     | Hardcoded (not in database) |

### Login Location

- **File:** `admin.html`
- **Form:** Login form at top of page
- **Access:** Admin Dashboard with all management features

### Usage

```
Admin can:
✅ Upload students
✅ Manage materials
✅ Create exams
✅ Upload results
✅ Manage notifications
✅ View all data
```

---

## Student User IDs

### What is a Student User ID?

A **User ID** is a unique identifier assigned to each student. Examples:

- `STU001`
- `student123`
- `john.doe`
- `E12345678`
- `2024CS001`

### Where Student IDs Come From

**Source 1: Upload CSV**
Admin uploads student list with User IDs:

```
userId,password
STU001,Pass@123
STU002,Pass@456
STU003,Pass@789
```

**Source 2: Manual Entry**
Admin adds students one by one in admin panel

**Source 3: Bulk Import**
Admin uses Excel template to create all students at once

### How Student IDs Are Used

#### 1. **Login to Student Portal**

- Go to `student.html`
- Enter **User ID** (e.g., `STU001`)
- Enter **Password**
- Click "Login"

#### 2. **Access Personal Data**

- View materials assigned to you
- Check exam schedule
- Download results for your exams
- See notifications

#### 3. **In Results**

Results are linked to User ID:

```
User ID: STU001
Name: John Doe
Email: john@college.com
Marks: 85/100
```

#### 4. **In Reports & Analytics**

All student reports filtered by User ID:

- Performance tracking
- Attendance records
- Grade history
- Achievement badges

---

## Student ID Format Best Practices

### ✅ Good Formats

```
STU001          (Standard format)
student001      (Lowercase works)
2024CS0101      (Year+Branch+Number)
E20241001       (Exam roll format)
CSE001          (Department+Number)
```

### ❌ Bad Formats

```
Student 1       (Space causes issues)
STU-001         (Hyphen can cause problems)
STU_001         (Underscore may not work)
123! STU & 001  (Special characters)
```

### Guidelines

✅ Use only alphanumeric characters (letters + numbers)
✅ Keep format consistent across all students
✅ No spaces, hyphens, or special characters
✅ Unique for each student (no duplicates)
✅ Case-sensitive (STU001 ≠ stu001)
✅ 3-20 characters recommended

---

## Uploading Students with User IDs

### Method 1: CSV File Upload

**Filename:** `students.csv`

```
userId,password
STU001,Pass@123
STU002,Pass@456
STU003,Pass@789
STU004,Pass@111
STU005,Pass@222
```

**Steps:**

1. Open admin.html
2. Login: `admin` / `Admin@123`
3. Go to "Student Management" tab
4. Click upload area
5. Select CSV file
6. Click "Upload"

### Method 2: Excel File

**Filename:** `students.xlsx`

| userId | password |
| ------ | -------- |
| STU001 | Pass@123 |
| STU002 | Pass@456 |
| STU003 | Pass@789 |

Convert to CSV before uploading:

1. Open in Excel
2. File → Save As
3. Select "CSV (.csv)"
4. Save and upload

### Method 3: Batch with Extra Info

**Enhanced Format:**

| userId | password | firstName | lastName | email            | rollNo |
| ------ | -------- | --------- | -------- | ---------------- | ------ |
| STU001 | Pass@123 | John      | Doe      | john@college.com | 001    |
| STU002 | Pass@456 | Jane      | Smith    | jane@college.com | 002    |
| STU003 | Pass@789 | Alex      | Johnson  | alex@college.com | 003    |

---

## Student Login Flow

### Step 1: Access Student Portal

→ Open `student.html`

### Step 2: Enter Credentials

```
User ID: STU001
Password: Pass@123
```

### Step 3: System Validates

- ✅ Finds student by User ID
- ✅ Checks password
- ✅ Loads student profile
- ✅ Grants access to dashboard

### Step 4: Dashboard Access

Student can now:

- View study materials
- Check exam schedule
- View results
- See notifications

---

## User ID Examples by Institution

### University System

```
Year | Branch | Number
2024 | CSE    | 001
Result: 2024CSE001
```

### College System

```
College Code | Roll Number
Prefix: 24, Suffix: 1001
Result: 24CS1001
```

### Exam System

```
Exam + Roll
Prefix: E, Suffix: 20241001
Result: E20241001
```

---

## Managing User IDs

### View All Student IDs

1. Admin Panel
2. "Student Management" tab
3. See list of all students with their IDs

### Edit Student ID

⚠️ **WARNING:** Cannot change User ID after upload

- Best practice: Plan IDs carefully before uploading
- If wrong ID: Delete and re-upload
- Keep backup of all IDs

### Delete Student ID

1. Go to Student Management
2. Find student
3. Click delete button
4. Confirm deletion

---

## User ID in Different Sections

### Materials Section

```
All materials visible to:
✅ Any logged-in student (by ID)
✅ Any logged-in admin
```

### Exams Section

```
Exam access filtered by:
✅ Exam schedule (time-based)
✅ Student login (via User ID)
```

### Results Section

```
Results shown to student:
✅ Only their ID's results
✅ All results in database (for admin)
```

### Notifications

```
Notifications shown to:
✅ All users logged in
✅ System-wide messages
```

---

## Security: User ID & Password

### How Passwords Are Stored

```javascript
✅ Stored in Firestore database
❌ NOT encrypted in current version
⚠️ Use strong passwords anyway
```

### Best Practices

1. **Unique passwords** - Different for each student
2. **Strong passwords** - Mix of letters, numbers
3. **Minimum 6 chars** - At least this length
4. **No personal info** - Don't use name/birthday
5. **Change after first login** - Students should update

### Example Strong Passwords

```
✅ Pass@2024#STU
✅ Exam2026Secure
✅ Study123Marks456
✅ College@2024Exam

❌ password123 (too simple)
❌ 12345678 (only numbers)
❌ john1234 (personal info)
```

---

## Reset User ID Access

### If Student Forgets User ID

**Can't retrieve** - Contact admin

- Admin checks Student Management
- Admin provides User ID
- Student logs in

### If Student Forgets Password

**Can't reset** - Admin must:

1. Go to Student Management
2. Delete student
3. Re-upload with new password

### If Student Entered Wrong ID

1. Try again on login page
2. Check spelling (case-sensitive)
3. Contact admin if unsure

---

## User ID Formats in System

### Storage in Database

```
Collection: students
Document ID: (auto-generated)
Field 'userId': STU001 (user-provided)

Example:
{
  userId: "STU001",
  password: "Pass@123",
  name: "John Doe",
  email: "john@college.com",
  createdAt: "2026-04-02"
}
```

### Usage in Code

```javascript
// Login
studentLogin("STU001", "Pass@123");

// Get student data
getStudentByUserId("STU001");

// Filter results
results.filter((r) => r.studentId === "STU001");
```

---

## Bulk Operations with User IDs

### Export All User IDs

1. Admin Panel → Student Management
2. Select all students
3. Export as CSV
4. Contains all User IDs and info

### Batch Upload User IDs

1. Prepare CSV with User IDs
2. Upload via admin panel
3. All students created at once

### Search by User ID

1. Admin Panel → Student Management
2. Use search box
3. Type User ID (e.g., "STU001")
4. system finds student

---

## User ID Validation

### System Checks

- ✅ User ID must be provided
- ✅ Password required
- ✅ User ID must exist in database
- ✅ Password must match

### Error Messages

```
"Student not found"
→ User ID doesn't exist in system
→ Check spelling, case sensitivity

"Invalid password"
→ User ID found but password wrong
→ Try again, check caps lock

"Missing userId"
→ Login form empty
→ Enter both User ID and password
```

---

## Multi-Step Login Process

### Step 1: User Enters Credentials

```
User ID field: STU001
Password field: Pass@123
```

### Step 2: System Searches

```javascript
Query: Find student where userId == "STU001"
```

### Step 3: Verification

```javascript
If found:
  → Compare password with stored password
  → If match: Create session
  → If no match: Show "Invalid password"
If not found:
  → Show "Student not found"
```

### Step 4: Session Created

```javascript
localStorage.setItem("studentId", "STU001");
localStorage.setItem("studentLoggedIn", "true");
Redirect to dashboard
```

---

## User ID Tracking & Analytics

### Tracking Features

- ✅ Which exams each User ID accessed
- ✅ When Student (via User ID) logged in
- ✅ Results linked to User ID
- ✅ Material downloads tracked
- ✅ Test attempts per User ID

### Data Visibility

```
Admin sees: All User IDs and their activities
Student sees: Only their own User ID's data
Public sees: Nothing (not visible externally)
```

---

## Troubleshooting User ID Issues

### Issue: Can't login with User ID

**Check:**

1. User ID is spelled correctly (case-sensitive)
2. User ID exists in database
3. Password is correct
4. Not extra spaces before/after

**Solution:**

- Ask admin for correct User ID
- Verify in Student Management
- Re-upload if user not found

### Issue: Multiple students same User ID

**Cause:** Duplicate uploads

**Fix:**

- Delete duplicates
- Keep only one
- Re-upload clean list

### Issue: Special characters in User ID

**Cause:** Invalid characters used

**Supported:**

- ✅ Letters: A-Z, a-z
- ✅ Numbers: 0-9

**Not supported:**

- ❌ Spaces
- ❌ Special chars: @, #, $, %, &
- ❌ Hyphens, underscores

---

## Quick Reference

| Item                  | Value                   |
| --------------------- | ----------------------- |
| Admin User            | `admin`                 |
| Admin Pass            | `Admin@123`             |
| Student Login         | User ID + Password      |
| User ID Format        | Alphanumeric, no spaces |
| User ID Length        | 3-20 chars              |
| Password Min Length   | 6 chars                 |
| Case Sensitive        | Yes                     |
| Unique Required       | Yes                     |
| Can Edit After Upload | No                      |
| Can Reset Password    | Only delete & re-upload |

---

## Example Complete Setup

### Scenario: College with 5 Students

**Step 1: Create CSV file**

```
userId,password
CSE2024001,Secure@Pass1
CSE2024002,Secure@Pass2
CSE2024003,Secure@Pass3
CSE2024004,Secure@Pass4
CSE2024005,Secure@Pass5
```

**Step 2: Upload to system**

- Admin Panel → Students → Upload

**Step 3: Students login**

- User ID: `CSE2024001`
- Password: `Secure@Pass1`
- Access: Student dashboard

**Step 4: Admin manages**

- Can see all User IDs
- Can upload results by User ID
- Can track each student

---

## Next Steps

1. **Plan your User IDs** - Decide format
2. **Create CSV file** - List all students with IDs
3. **Upload via admin** - Import into system
4. **Share credentials** - Give User ID + password to students
5. **Students login** - Use User ID to access portal

---

**User IDs are the backbone of the system!** 🔑

For help:

- [ERROR_RESOLUTION.md](ERROR_RESOLUTION.md) - Troubleshooting
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues
- Admin Dashboard - Manage users
