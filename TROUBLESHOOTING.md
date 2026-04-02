# Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Authentication Issues

#### 1. Admin Login Not Working

**Problem:** Can't login with admin credentials

```
Error: "Invalid credentials"
```

**Causes & Solutions:**

1. Wrong password
   - Default: `admin` / `Admin@123`
   - Check if you changed it
   - Reset if forgotten (edit firebase.js)

2. Browser cache issues
   - Clear cookies and cache
   - Try incognito/private mode
   - Try different browser

3. localStorage issues
   - Clear localStorage manually
   - Open DevTools → Application → Clear Storage
   - Refresh page

**Solution Steps:**

```
1. Verify credentials are correct
2. Check password hasn't been changed
3. Clear browser cache
4. Try incognito mode
5. Check console for errors (F12 → Console)
```

#### 2. Student Login Failing

**Problem:** Student can't login with credentials

```
Error: "Student not found" or "Invalid password"
```

**Causes & Solutions:**

1. Student data not uploaded
   - Check if uploaded CSV
   - Verify records in Firestore
   - Try uploading again

2. Wrong credentials
   - Verify userId and password
   - Check CSV had correct data
   - Credentials are case-sensitive

3. Firebase not connected
   - Check Firebase config
   - Verify credentials in firebase.js
   - Check database rules

**Solution Steps:**

```
1. Verify student exists in Firestore
2. Check CSV was uploaded correctly
3. Try with exact userId and password
4. Check Firebase console for data
5. Review browser console errors
```

#### 3. Session Lost

**Problem:** Logged in but redirected to login page

```
Getting logged out unexpectedly
```

**Causes & Solutions:**

1. localStorage cleared
   - Check if using private browsing
   - Browser extensions clearing data
   - Accidental cache clear

2. Browser compatibility
   - localStorage not supported
   - sessionStorage issues
   - Cookie policy issues

3. Multiple tabs
   - Logout in other tab
   - Cross-tab communication issue
   - Stale session token

**Solution Steps:**

```
1. Check localStorage is enabled
2. Try in regular browsing mode
3. Close other tabs with app
4. Check browser settings allow storage
5. Clear cache and login again
```

---

### Firebase Connection Issues

#### 1. Firebase Not Connecting

**Problem:** App shows loading indefinitely

```
Error: "Firebase initialization failed"
```

**Causes & Solutions:**

1. Wrong Firebase credentials
   - Verify apiKey is correct
   - Check projectId matches
   - Verify authDomain
   - Confirm storage bucket

2. Network issues
   - Check Internet connection
   - Firebase server down
   - Firewall blocking
   - VPN interfering

3. Browser security issues
   - CORS errors
   - Mixed content (http vs https)
   - Browser extensions
   - Privacy settings

**Solution Steps:**

```
1. Check Console tab for error messages
2. Verify Firebase config in firebase.js
3. Check Internet connection
4. Try different browser
5. Disable extensions
6. Check firewall rules
```

#### 2. Firestore Data Not Loading

**Problem:** Collections show empty or loading forever

```
Error: "Permission denied" or "Collection not found"
```

**Causes & Solutions:**

1. Wrong collection names
   - Collection names case-sensitive
   - Verify exact spelling
   - Check Firestore console

2. Security rules blocking
   - Test mode expired
   - Rules too restrictive
   - Authentication required

3. Database not created
   - Collection not created yet
   - Database empty
   - Data not replicated

**Solution Steps:**

```
1. Check Firestore console for collections
2. Verify collection names in code
3. Check security rules
4. Try in test mode temporarily
5. Check database size/quota
```

#### 3. Storage Upload Failing

**Problem:** Can't upload files to Firebase Storage

```
Error: "Upload failed" or "Access denied"
```

**Causes & Solutions:**

1. Storage rules issue
   - Too restrictive
   - Test mode expired
   - Authentication required

2. File size too large
   - Exceeds quota
   - Firebase limit 25MB
   - Browser limit

3. Storage bucket not configured
   - Bucket doesn't exist
   - Wrong bucket name
   - No permissions

**Solution Steps:**

```
1. Check storage bucket exists
2. Review storage rules
3. Check file size
4. Verify quota limits
5. Check browser console errors
```

---

### Upload & CSV Issues

#### 1. CSV Upload Failing

**Problem:** Can't upload student CSV file

```
Error: "File parsing failed" or "Invalid format"
```

**Causes & Solutions:**

1. Wrong file format
   - Not CSV but .xls
   - Wrong encoding
   - Corrupted file

2. Incorrect CSV structure
   - Missing headers
   - Wrong column names
   - Empty rows

3. Invalid data
   - Missing values
   - Special characters
   - Duplicate userIds

**CSV Format Required:**

```
userId,password
student1,pass123
student2,pass456
```

**Solution Steps:**

```
1. Verify file is .csv format
2. Check headers are exact
3. Ensure no empty rows
4. Verify each row has both columns
5. Test with different file
```

#### 2. Data Not Saving

**Problem:** Uploaded data not appearing in Firestore

```
Students count remains the same
```

**Causes & Solutions:**

1. Upload succeeded but data not shown
   - Refresh page to see updates
   - Firebase delay (usually instant)
   - Cache issue

2. Upload actually failed silently
   - Check browser console
   - Look for error messages
   - Verify Firebase connection

3. Database rules preventing writes
   - Check Firestore rules
   - Verify write permissions
   - Check quota

**Solution Steps:**

```
1. Check browser console for errors
2. Refresh page
3. Check Firestore directly
4. Try smaller batch
5. Check Firebase status
```

---

### Display & UI Issues

#### 1. PDF Not Displaying

**Problem:** PDF viewer shows blank or error

```
Nothing visible in modal
```

**Causes & Solutions:**

1. Wrong PDF URL
   - Broken link
   - Typo in URL
   - URL expired

2. CORS issues
   - URL not CORS-enabled
   - Cloudflare blocking
   - Server rejecting requests

3. PDF format issues
   - Not actual PDF
   - Corrupted file
   - Unsupported format

4. Browser issues
   - Old browser
   - PDF plugin missing
   - Security restriction

**Solution Steps:**

```
1. Verify URL is accessible
2. Test URL directly in browser
3. Check CORS settings on server
4. Try different PDF
5. Use updated browser
```

#### 2. Page Layout Broken

**Problem:** Mobile layout not working correctly

```
Elements overlapping or misaligned
```

**Causes & Solutions:**

1. CSS not loading
   - styles.css not found
   - Wrong path
   - Cached old version

2. Tailwind not working
   - CDN issue
   - Wrong script tag
   - Conflicting CSS

3. Browser compatibility
   - Old browser version
   - CSS features not supported
   - JavaScript disabled

**Solution Steps:**

```
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check CSS file loading
4. Try different browser
5. Disable extensions
```

---

### Performance Issues

#### 1. App Loading Slowly

**Problem:** Takes too long to load

```
Blank page for several seconds
```

**Causes & Solutions:**

1. Slow Internet
   - Network latency
   - Low bandwidth
   - High packet loss

2. Firebase queries slow
   - Too much data
   - No indexes
   - Complex queries

3. Browser issues
   - Low system resources
   - Many tabs open
   - Extensions slowing down

**Solution Steps:**

```
1. Check Internet speed
2. Test with smaller dataset
3. Close unnecessary tabs
4. Disable extensions
5. Use different device
```

#### 2. Searching Is Slow

**Problem:** Search takes too long

```
Results take 5+ seconds
```

**Causes & Solutions:**

1. Large dataset
   - Too many records
   - Fetching all before search
   - Slow loop

2. Network issues
   - Slow Firebase connection
   - High latency
   - Bandwidth limit

3. Device issues
   - Old device
   - Low RAM
   - CPU busy

**Solution Steps:**

```
1. Refresh page first
2. Try with fewer records
3. Check Internet speed
4. Try different device
5. Use more specific search
```

---

### Data Issues

#### 1. Duplicate Students

**Problem:** Same student appears multiple times

```
Multiple entries with same userId
```

**Causes & Solutions:**

1. CSV uploaded twice
   - Accidentally uploaded again
   - Network retry

2. Manual addition
   - Added through form too
   - Different admins

3. Firestore issue
   - Duplicate sync
   - Replication issue

**Solution Steps:**

```
1. Check upload history
2. Delete duplicates manually
3. Verify data before uploading
4. Check Firestore console
```

#### 2. Missing Data

**Problem:** Records were there now they're gone

```
Unexpected data loss
```

**Causes & Solutions:**

1. Accidentally deleted
   - Clear All button pressed
   - Bulk delete operation
   - Firebase trigger

2. User error
   - Wrong database
   - Firestore reset
   - Project deleted

3. Backup needed
   - Check backups
   - Firebase doesn't have history
   - May not be recoverable

**Solution Steps:**

```
1. Check Firestore restoration
2. Check backup files
3. Verify project still exists
4. Restore from backup
5. Contact Firebase support
```

---

## 🛠️ Debugging Tools

### Browser Developer Tools

**Opening DevTools:**

- Chrome/Edge: F12 or Ctrl+Shift+I
- Firefox: F12
- Safari: Cmd+Option+I

**Useful Tabs:**

1. **Console Tab**
   - Shows errors and warnings
   - Run JavaScript commands
   - View logs

2. **Network Tab**
   - See API requests
   - Check response times
   - Identify failed requests

3. **Application Tab**
   - View localStorage
   - Check cookies
   - Clear storage

4. **Elements Tab**
   - Inspect HTML
   - Check CSS
   - Debug layout issues

### Common Debug Commands

```javascript
// Check if Firebase is initialized
console.log(firebase);

// Check current user
console.log(localStorage.getItem("adminLoggedIn"));

// Clear localStorage
localStorage.clear();

// Check Firestore connection
console.log(db);
```

---

## 📞 When to Contact Support

### Issues You Can Fix

- First login not completing
- PDF URLs not loading
- CSV incorrect format
- Forgot admin password
- Cache/cookie issues

### Issues Needing Firebase Support

- Firebase service down
- Data corruption
- Quota exceeded
- Critical Firebase errors
- Account issues

### How to Report

1. **Gather Information**
   - Error message (exact text)
   - Steps to reproduce
   - Browser/Device info
   - Screenshots
   - Console errors (F12)

2. **Create Minimal Example**
   - Single action that fails
   - Without other steps
   - Fresh browser session

3. **Provide Context**
   - When it started
   - What changed recently
   - How many users affected
   - Firebase project ID

---

## 🔄 Reset & Recovery

### Hard Reset

```
1. Clear all browser data
   - Cache
   - Cookies
   - localStorage
   - sessionStorage

2. Close all tabs with app
3. Close browser completely
4. Reopen fresh browser window
5. Try again
```

### Faculty Reset (for Admin)

```
1. Go to Firebase console
2. Delete all students
3. Refresh student collection
4. Re-upload students
5. Verify data uploaded
```

### Complete System Reset

```
⚠️ WARNING: This deletes everything!

1. Delete all Firestore data
2. Clear all Files from Storage
3. Reset Firebase project (if required)
4. Reconfigure from scratch
```

---

## 🎯 Prevention Tips

### Avoid Issues

1. Regular backups (weekly)
2. Test on staging first
3. Verify data before upload
4. Monitor system regularly
5. Keep documentation

### Best Practices

1. Version control for code
2. Database backups
3. Regular testing
4. Document changes
5. Plan maintenance windows

---

**Still having issues?** Check the other documentation files or review the error message carefully for hints!

Need Firebase help? Visit [Firebase Docs](https://firebase.google.com/docs)
