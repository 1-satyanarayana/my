# UI Component Showcase

## 🎨 Complete Visual Reference

This file contains a complete visual reference of all modern UI components. Copy the HTML shown here directly into your pages.

---

## 1. Button Variations

### Primary Button

**HTML:**

```html
<button class="btn btn-primary"><i class="fas fa-check"></i> Confirm</button>
```

**Use for:** Main actions, important CTAs

### Secondary Button

**HTML:**

```html
<button class="btn btn-secondary"><i class="fas fa-times"></i> Cancel</button>
```

**Use for:** Secondary actions, cancellations

### Success Button (Download)

**HTML:**

```html
<button class="btn btn-success">
  <i class="fas fa-download"></i> Download
</button>
```

**Use for:** Downloads, confirmations

### Danger Button (Delete)

**HTML:**

```html
<button class="btn btn-danger"><i class="fas fa-trash-alt"></i> Delete</button>
```

**Use for:** Destructive actions

### Small Button

**HTML:**

```html
<button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i> Edit</button>
```

**Use for:** Compact spaces, table rows

### Large Button

**HTML:**

```html
<button class="btn btn-primary btn-lg">
  <i class="fas fa-rocket"></i> Get Started
</button>
```

**Use for:** Hero sections, landing pages

### Icon Button

**HTML:**

```html
<button class="btn btn-icon btn-primary rounded-full">
  <i class="fas fa-plus"></i>
</button>
```

**Use for:** Floating action buttons, toolbars

### Glow Button

**HTML:**

```html
<button class="btn btn-primary btn-glow">
  <i class="fas fa-star"></i> Featured
</button>
```

**Use for:** Highlighted actions

### Disabled Button

**HTML:**

```html
<button class="btn btn-primary" disabled>
  <i class="fas fa-lock"></i> Processing...
</button>
```

**Use for:** Disabled states, loading

---

## 2. Card Components

### Basic Glass Card

**HTML:**

```html
<div class="glass-effect rounded-2xl p-6 shadow-lg">
  <h3 class="text-xl font-bold mb-4">Card Title</h3>
  <p class="text-gray-600">Your content goes here</p>
</div>
```

### Card with Hover Lift

**HTML:**

```html
<div class="glass-effect rounded-2xl p-6 hover-lift">
  <h3 class="text-xl font-bold mb-4">Hoverable Card</h3>
  <p class="text-gray-600">Elevates on hover</p>
</div>
```

### Card with Icon

**HTML:**

```html
<div class="glass-effect rounded-2xl p-6 card-with-icon">
  <div
    class="card-with-icon .icon"
    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
  >
    <i class="fas fa-chart-bar text-2xl"></i>
  </div>
  <div>
    <h3 class="text-lg font-semibold">Analytics</h3>
    <p class="text-sm text-gray-600 mt-1">View detailed metrics</p>
  </div>
</div>
```

### Card Hover Effect (Shimmer)

**HTML:**

```html
<div class="glass-effect rounded-2xl p-6 card-hover">
  <h3 class="text-xl font-bold mb-4">Interactive Card</h3>
  <p class="text-gray-600">Hover to see shimmer effect</p>
</div>
```

---

## 3. Badge Components

### Success Badge

**HTML:**

```html
<span class="badge badge-success">
  <i class="fas fa-check-circle"></i> Approved
</span>
```

### Primary Badge

**HTML:**

```html
<span class="badge badge-primary">
  <i class="fas fa-info-circle"></i> New
</span>
```

### Warning Badge

**HTML:**

```html
<span class="badge badge-warning">
  <i class="fas fa-exclamation-circle"></i> Pending
</span>
```

### Danger Badge

**HTML:**

```html
<span class="badge badge-danger">
  <i class="fas fa-times-circle"></i> Rejected
</span>
```

### Animated Badge

**HTML:**

```html
<span
  class="badge-animated"
  style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.5rem 1rem; border-radius: 9999px; position: relative;"
>
  <i class="fas fa-pulse"></i> Active
</span>
```

---

## 4. Form Components

### Input with Icon

**HTML:**

```html
<div class="input-group">
  <div class="input-icon">
    <i class="fas fa-user"></i>
  </div>
  <input
    type="text"
    placeholder="Enter username"
    class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  />
</div>
```

### Email Input

**HTML:**

```html
<div class="input-group">
  <div class="input-icon">
    <i class="fas fa-envelope"></i>
  </div>
  <input
    type="email"
    placeholder="Enter email"
    class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  />
</div>
```

### Password Input

**HTML:**

```html
<div class="input-group">
  <div class="input-icon">
    <i class="fas fa-lock"></i>
  </div>
  <input
    type="password"
    placeholder="Enter password"
    class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  />
</div>
```

### Search Input

**HTML:**

```html
<div class="input-group">
  <div class="input-icon">
    <i class="fas fa-search"></i>
  </div>
  <input
    type="text"
    placeholder="Search..."
    class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  />
</div>
```

### Date Input

**HTML:**

```html
<div class="input-group">
  <div class="input-icon">
    <i class="fas fa-calendar"></i>
  </div>
  <input
    type="date"
    class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  />
</div>
```

### Textarea

**HTML:**

```html
<div class="form-group">
  <label class="form-label">Message</label>
  <textarea
    placeholder="Enter your message"
    class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
    rows="4"
  ></textarea>
</div>
```

### Select Dropdown

**HTML:**

```html
<div class="form-group">
  <label class="form-label">Choose Option</label>
  <select
    class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  >
    <option>Select an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>
```

---

## 5. Form Layouts

### Complete Login Form

**HTML:**

```html
<form class="glass-effect rounded-2xl p-8 max-w-md mx-auto">
  <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center">Login</h2>
  <p class="text-center text-gray-600 mb-6">Access your account</p>

  <div class="form-group">
    <label class="form-label">Email Address</label>
    <div class="input-group">
      <div class="input-icon"><i class="fas fa-envelope"></i></div>
      <input
        type="email"
        placeholder="you@example.com"
        class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <div class="form-group">
    <label class="form-label">Password</label>
    <div class="input-group">
      <div class="input-icon"><i class="fas fa-lock"></i></div>
      <input
        type="password"
        placeholder="••••••••"
        class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <button class="btn btn-primary w-full mt-6">Sign In</button>

  <p class="text-center text-gray-600 mt-4 text-sm">
    Don't have an account?
    <a href="#" class="text-purple-600 font-semibold">Sign up</a>
  </p>
</form>
```

### Complete Registration Form

**HTML:**

```html
<form class="glass-effect rounded-2xl p-8 max-w-lg mx-auto">
  <h2 class="text-2xl font-bold mb-6">Create Account</h2>

  <!-- Grid 2 Columns -->
  <div class="grid grid-cols-2 gap-4">
    <div class="form-group">
      <label class="form-label">First Name</label>
      <input
        type="text"
        placeholder="John"
        class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div class="form-group">
      <label class="form-label">Last Name</label>
      <input
        type="text"
        placeholder="Doe"
        class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <div class="form-group">
    <label class="form-label">Email</label>
    <div class="input-group">
      <div class="input-icon"><i class="fas fa-envelope"></i></div>
      <input
        type="email"
        placeholder="john@example.com"
        class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <div class="form-group">
    <label class="form-label">Phone</label>
    <div class="input-group">
      <div class="input-icon"><i class="fas fa-phone"></i></div>
      <input
        type="tel"
        placeholder="+1 (555) 000-0000"
        class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <div class="form-group">
    <label class="form-label">Password</label>
    <div class="input-group">
      <div class="input-icon"><i class="fas fa-lock"></i></div>
      <input
        type="password"
        placeholder="••••••••"
        class="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <button class="btn btn-primary w-full mt-6">Create Account</button>
</form>
```

---

## 6. Notification Components

### Success Notification

**HTML:**

```html
<div
  class="glass-effect rounded-lg p-4 border-l-4 border-green-500 animate-slide-in"
>
  <div class="flex-between">
    <div class="flex-center gap-3">
      <i class="fas fa-check-circle text-green-500 text-xl"></i>
      <span class="font-semibold">Success!</span>
    </div>
    <button
      onclick="this.parentElement.parentElement.remove()"
      class="text-gray-400 hover:text-gray-600"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <p class="text-sm text-gray-600 mt-2">Your changes have been saved.</p>
</div>
```

### Error Notification

**HTML:**

```html
<div
  class="glass-effect rounded-lg p-4 border-l-4 border-red-500 animate-slide-in"
>
  <div class="flex-between">
    <div class="flex-center gap-3">
      <i class="fas fa-exclamation-circle text-red-500 text-xl"></i>
      <span class="font-semibold">Error!</span>
    </div>
    <button
      onclick="this.parentElement.parentElement.remove()"
      class="text-gray-400 hover:text-gray-600"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <p class="text-sm text-gray-600 mt-2">
    Something went wrong. Please try again.
  </p>
</div>
```

### Warning Notification

**HTML:**

```html
<div
  class="glass-effect rounded-lg p-4 border-l-4 border-yellow-500 animate-slide-in"
>
  <div class="flex-between">
    <div class="flex-center gap-3">
      <i class="fas fa-warning text-yellow-500 text-xl"></i>
      <span class="font-semibold">Warning</span>
    </div>
    <button
      onclick="this.parentElement.parentElement.remove()"
      class="text-gray-400 hover:text-gray-600"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <p class="text-sm text-gray-600 mt-2">This action cannot be undone.</p>
</div>
```

### Info Notification

**HTML:**

```html
<div
  class="glass-effect rounded-lg p-4 border-l-4 border-blue-500 animate-slide-in"
>
  <div class="flex-between">
    <div class="flex-center gap-3">
      <i class="fas fa-info-circle text-blue-500 text-xl"></i>
      <span class="font-semibold">Information</span>
    </div>
    <button
      onclick="this.parentElement.parentElement.remove()"
      class="text-gray-400 hover:text-gray-600"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <p class="text-sm text-gray-600 mt-2">
    This is some important information for you.
  </p>
</div>
```

---

## 7. Progress & Loading

### Progress Bar

**HTML:**

```html
<div class="mb-4">
  <div class="flex-between mb-2">
    <span class="font-semibold text-sm">Upload Progress</span>
    <span class="text-sm text-gray-500">65%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 65%"></div>
  </div>
</div>
```

### Loading Skeleton

**HTML:**

```html
<div class="glass-effect rounded-2xl p-6 space-y-4">
  <div class="skeleton-text h-6 w-1/3"></div>
  <div class="skeleton-text h-4"></div>
  <div class="skeleton-text h-4"></div>
  <div class="skeleton-text h-4 w-2/3"></div>
</div>
```

### Loading Spinner

**HTML:**

```html
<div class="flex-center py-12">
  <div class="animate-spin">
    <i class="fas fa-spinner text-4xl text-purple-500"></i>
  </div>
  <span class="ml-4 text-gray-600">Loading...</span>
</div>
```

---

## 8. Action Groups

### Button Group (Inline)

**HTML:**

```html
<div class="btn-group">
  <button class="btn btn-primary btn-sm">
    <i class="fas fa-eye"></i> View
  </button>
  <button class="btn btn-success btn-sm">
    <i class="fas fa-download"></i> Download
  </button>
  <button class="btn btn-danger btn-sm">
    <i class="fas fa-trash"></i> Delete
  </button>
</div>
```

### Icon Button Group

**HTML:**

```html
<div class="flex gap-2">
  <button class="btn btn-icon btn-primary rounded-full" title="Edit">
    <i class="fas fa-edit"></i>
  </button>
  <button class="btn btn-icon btn-success rounded-full" title="Download">
    <i class="fas fa-download"></i>
  </button>
  <button class="btn btn-icon btn-danger rounded-full" title="Delete">
    <i class="fas fa-trash"></i>
  </button>
</div>
```

---

## 9. Table Styles

### Modern Data Table

**HTML:**

```html
<div class="glass-effect rounded-2xl overflow-hidden">
  <table class="w-full">
    <thead>
      <tr>
        <th>Student</th>
        <th>Email</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>
          <span class="badge badge-success"
            ><i class="fas fa-check-circle"></i> Active</span
          >
        </td>
        <td>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-primary">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>
          <span class="badge badge-warning"
            ><i class="fas fa-clock"></i> Pending</span
          >
        </td>
        <td>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-primary">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 10. Modal/Dialog

### Confirmation Dialog

**HTML:**

```html
<div class="fixed inset-0 bg-black/50 flex-center z-50">
  <div class="glass-effect rounded-2xl p-8 max-w-sm animate-slide-in">
    <h3 class="text-xl font-bold mb-2">Delete Item?</h3>
    <p class="text-gray-600 mb-6">
      This action cannot be undone. Are you sure?
    </p>
    <div class="flex gap-3">
      <button class="btn btn-secondary flex-1">Cancel</button>
      <button class="btn btn-danger flex-1">Delete</button>
    </div>
  </div>
</div>
```

---

## 11. Gradient Text

### Animated Gradient Text

**HTML:**

```html
<h1 class="gradient-animate-text text-3xl font-bold">
  Beautiful Animated Gradient
</h1>
```

### Static Gradient Text

**HTML:**

```html
<h2 class="gradient-primary-text text-2xl font-bold">Gradient Text Heading</h2>
```

---

## 12. Hero Section

### Large Hero Banner

**HTML:**

```html
<div
  class="relative bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden"
>
  <!-- Decorative Elements -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"
      style="animation-delay: 2s;"
    ></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
    <h1 class="heading-responsive text-white mb-6 animate-slide-in">
      Manage Your Exams with Ease
    </h1>
    <p
      class="text-xl text-white/90 mb-8 animate-slide-in max-w-2xl mx-auto"
      style="animation-delay: 0.2s;"
    >
      A modern, powerful platform for managing exams, students, and results all
      in one place.
    </p>
    <button class="btn btn-primary btn-lg animate-bounce">
      Get Started Today
    </button>
  </div>
</div>
```

---

## 13. Animation Showcase

### Fade In

**HTML:**

```html
<div class="animate-fade-in">Content fades in smoothly</div>
```

### Slide In

**HTML:**

```html
<div class="animate-slide-in">Content slides up from bottom</div>
```

### Float

**HTML:**

```html
<div class="animate-float">Content floats gently</div>
```

### Bounce

**HTML:**

```html
<button class="animate-bounce">Click me!</button>
```

### Pulse

**HTML:**

```html
<div class="animate-pulse">Loading...</div>
```

### Glow

**HTML:**

```html
<div class="animate-glow">Important notification</div>
```

---

## 14. Layout Utilities

### Center Container

**HTML:**

```html
<div class="container-md mx-auto">
  <h1>Centered Content</h1>
</div>
```

### Flex Center

**HTML:**

```html
<div class="flex-center min-h-screen">
  <p>Centered on screen</p>
</div>
```

### Flex Between (Space Between)

**HTML:**

```html
<div class="flex-between px-6 py-4">
  <h2>Title</h2>
  <button>Action</button>
</div>
```

### Responsive Grid

**HTML:**

```html
<div class="grid-cols-auto gap-6">
  <div class="glass-effect rounded-2xl p-6">Card 1</div>
  <div class="glass-effect rounded-2xl p-6">Card 2</div>
  <div class="glass-effect rounded-2xl p-6">Card 3</div>
</div>
```

---

## 15. Quick Copy-Paste Components

### Stat Card

```html
<div class="glass-effect rounded-2xl p-6">
  <p class="text-gray-600 text-sm mb-2">Total Students</p>
  <p class="text-3xl font-bold text-purple-600">1,234</p>
  <p class="text-xs text-gray-500 mt-2">+12% from last month</p>
</div>
```

### Empty State

```html
<div class="glass-effect rounded-2xl p-12 text-center">
  <i class="fas fa-inbox text-4xl text-gray-300 mb-4"></i>
  <h3 class="text-lg font-semibold text-gray-900 mb-2">No items yet</h3>
  <p class="text-gray-600 mb-6">Get started by creating your first item</p>
  <button class="btn btn-primary">
    <i class="fas fa-plus mr-2"></i>Create Item
  </button>
</div>
```

### Feature Card

```html
<div class="glass-effect rounded-2xl p-6 hover-lift">
  <div class="text-4xl mb-4" style="color: #667eea;">
    <i class="fas fa-chart-bar"></i>
  </div>
  <h3 class="text-lg font-bold mb-2">Analytics</h3>
  <p class="text-gray-600">
    Track student performance and exam metrics in real-time
  </p>
</div>
```

---

**Ready to use! Copy any component and paste directly into your HTML files.** 🚀
