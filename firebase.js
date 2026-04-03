// Firebase v9 Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsNayVHofbx8Kva20AJp43MfgwosbYKZ4",
  authDomain: "satya-fd501.firebaseapp.com",
  projectId: "satya-fd501",
  storageBucket: "satya-fd501.firebasestorage.app",
  messagingSenderId: "156477081471",
  appId: "1:156477081471:web:826c30982849159b763c4a",
  measurementId: "G-41WZL9R2W2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// =============== AUTHENTICATION ===============

export function adminLogin(username, password) {
  // Hardcoded admin credentials
  const ADMIN_USERNAME = "Mycareer";
  const ADMIN_PASSWORD = "Mycareer@123";

  return new Promise((resolve, reject) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true");
      resolve({ success: true });
    } else {
      reject({ message: "Invalid credentials" });
    }
  });
}

export function studentLogin(userId, password, collegeName) {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(
        collection(db, "students"),
        where("userId", "==", userId),
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        reject({ message: "Student not found" });
        return;
      }

      const student = querySnapshot.docs[0];
      const studentData = student.data();

      // If college was passed and student has a college, ensure they match (case-insensitive)
      if (collegeName && studentData.college && studentData.college.toLowerCase() !== collegeName.toLowerCase()) {
        reject({ message: "Invalid College Name" });
        return;
      }

      if (studentData.password === password) {
        // Temporarily store the passed college so profile completion can use it
        if (!studentData.college && collegeName) {
          studentData.college = collegeName;
        }
        localStorage.setItem("studentLoggedIn", "true");
        localStorage.setItem("studentId", student.id);
        localStorage.setItem("studentData", JSON.stringify(studentData));
        resolve({
          success: true,
          data: studentData,
          isFirstLogin: !studentData.name,
        });
      } else {
        reject({ message: "Invalid password" });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function adminLogout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "admin.html?logout=true";
}

export function studentLogout() {
  localStorage.removeItem("studentLoggedIn");
  localStorage.removeItem("studentId");
  localStorage.removeItem("studentData");
  window.location.href = "student.html";
}

export function isAdminLoggedIn() {
  return localStorage.getItem("adminLoggedIn") === "true";
}

export function isStudentLoggedIn() {
  return localStorage.getItem("studentLoggedIn") === "true";
}

// =============== STUDENT MANAGEMENT ===============

export async function uploadStudents(students) {
  const results = [];
  const currentStudents = await getDocs(collection(db, "students"));
  let currentCount = currentStudents.size;
  const LIMIT = 2000;

  for (const student of students) {
    if (currentCount >= LIMIT) {
      throw new Error(`Login limit reached! Maximum ${LIMIT} students allowed.`);
    }

    // Check for duplicate userId
    const q = query(collection(db, "students"), where("userId", "==", student.userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const docRef = await addDoc(collection(db, "students"), {
        userId: student.userId,
        password: student.password,
        college: student.collegeName || student.college || "",
        createdAt: serverTimestamp(),
        profileCompleted: false,
      });
      currentCount++;
      results.push({ id: docRef.id, status: 'added' });
    } else {
      results.push({ userId: student.userId, status: 'skipped (duplicate)' });
    }
  }
  return results;
}

export function getStudents() {
  return getDocs(collection(db, "students"));
}

export function updateStudent(studentId, data) {
  return updateDoc(doc(db, "students", studentId), data);
}

export function deleteStudent(studentId) {
  return deleteDoc(doc(db, "students", studentId));
}

export function completeStudentProfile(studentId, profileData) {
  return updateDoc(doc(db, "students", studentId), {
    ...profileData,
    profileCompleted: true,
    updatedAt: serverTimestamp(),
  });
}

export async function getStudentById(studentId) {
  const docSnap = await getDoc(doc(db, "students", studentId));
  return docSnap.data();
}

// =============== MATERIALS ===============

export function addMaterial(materialData) {
  return addDoc(collection(db, "materials"), {
    ...materialData,
    createdAt: serverTimestamp(),
  });
}

export function getMaterials() {
  return getDocs(collection(db, "materials"));
}

export function deleteMaterial(materialId) {
  return deleteDoc(doc(db, "materials", materialId));
}

// =============== EXAMS ===============

export function addExam(examData) {
  return addDoc(collection(db, "exams"), {
    ...examData,
    createdAt: serverTimestamp(),
  });
}

export function getExams() {
  return getDocs(collection(db, "exams"));
}

export function updateExam(examId, data) {
  return updateDoc(doc(db, "exams", examId), data);
}

export function deleteExam(examId) {
  return deleteDoc(doc(db, "exams", examId));
}

// =============== RESULTS ===============

export function addResult(resultData) {
  return addDoc(collection(db, "results"), {
    ...resultData,
    createdAt: serverTimestamp(),
  });
}

export function getResults() {
  return getDocs(collection(db, "results"));
}

export function deleteResult(resultId) {
  return deleteDoc(doc(db, "results", resultId));
}

// =============== NOTIFICATIONS ===============

export function addNotification(notificationData) {
  return addDoc(collection(db, "notifications"), {
    ...notificationData,
    createdAt: serverTimestamp(),
  });
}

export function getNotifications() {
  return getDocs(collection(db, "notifications"));
}

export function getActiveNotifications() {
  const now = new Date();
  return getDocs(collection(db, "notifications"));
}

export function deleteNotification(notificationId) {
  return deleteDoc(doc(db, "notifications", notificationId));
}

// =============== FIREBASE STORAGE ===============

export async function uploadFile(file, path) {
  try {
    const fileRef = ref(storage, `${path}/${file.name}`);
    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}

export async function deleteFile(fileUrl) {
  try {
    const fileRef = ref(storage, fileUrl);
    await deleteObject(fileRef);
  } catch (error) {
    console.error("Delete error:", error);
  }
}

// =============== UTILITY FUNCTIONS ===============

export function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-medium z-50 animate-in fade-in slide-in-from-bottom-4 ${type === "success"
    ? "bg-green-500"
    : type === "error"
      ? "bg-red-500"
      : "bg-blue-500"
    }`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("animate-out", "fade-out", "slide-out-to-bottom-4");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

export function formatDate(timestamp) {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

export function isExamActive(startTime, endTime) {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);
  return now >= start && now <= end;
}

export function parseExcelToJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csv = e.target.result;
        const lines = csv.split("\n");

        if (lines.length < 2) {
          throw new Error("CSV file is empty or has no data rows.");
        }

        // Parse header row
        const headerLine = lines[0];
        const headers = headerLine.split(",").map((s) => s.trim());

        // Parse data rows
        const data = lines
          .slice(1)
          .filter((line) => line.trim())
          .map((line) => {
            const values = line.split(",").map((s) => s.trim());
            const row = {};

            headers.forEach((header, index) => {
              row[header] = values[index] || "";
            });

            return row;
          });

        if (data.length === 0) {
          throw new Error("CSV file has no valid data rows.");
        }

        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
}

// =============== VALIDATION ===============

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone) {
  return /^\d{10}$|^\+\d{1,15}$/.test(phone.replace(/\D/g, ""));
}

export function validatePassword(password) {
  return password && password.length >= 6;
}

// =============== SEARCH & FILTER ===============

export async function searchStudents(query) {
  try {
    const allStudents = await getDocs(collection(db, "students"));
    const results = [];
    allStudents.forEach((doc) => {
      const data = doc.data();
      const queryLower = query.toLowerCase();
      if (
        data.userId.toLowerCase().includes(queryLower) ||
        (data.name && data.name.toLowerCase().includes(queryLower)) ||
        (data.rollNo && data.rollNo.toLowerCase().includes(queryLower)) ||
        (data.email && data.email.toLowerCase().includes(queryLower))
      ) {
        results.push({ id: doc.id, ...data });
      }
    });
    return results;
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
}

// =============== EXAM MARKS ===============

export async function addMarks(marksData) {
  // Check for duplicate: same User ID and same Exam Name
  const q = query(
    collection(db, "marks"),
    where("userId", "==", marksData.userId),
    where("examName", "==", marksData.examName)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    throw new Error(`Duplicate entry: Results for User ID ${marksData.userId} in "${marksData.examName}" already exist.`);
  }

  return addDoc(collection(db, "marks"), {
    ...marksData,
    createdAt: serverTimestamp(),
  });
}

export function getMarks() {
  return getDocs(collection(db, "marks"));
}

export function getMarksByExam(examId) {
  return getDocs(query(collection(db, "marks"), where("examId", "==", examId)));
}

export function deleteMark(markId) {
  return deleteDoc(doc(db, "marks", markId));
}
