
# 📝 Registration Form – ASP.NET 

Welcome! This is a simple **user registration form** built using **ASP.NET Razor Pages**, **HTML/CSS**, and a little bit of **vanilla JavaScript**. It allows users to fill in their basic details like name, email, gender, education level, and more. The form includes basic interactivity like tooltips and background color change on submission.

---

## 🚀 Features

* Collects user information:

  * First & Last Name
  * Email (with hint tooltip)
  * Password
  * City
  * Gender (radio buttons)
  * Education Level (dropdown)
* Interactive UI:

  * Email field shows a hint on hover
  * Background color changes on form submission
* Simple styling container
* Fully front-end (currently no back-end handling)

---

## 📁 Code Breakdown

### Razor Syntax

```csharp
@{
    ViewData["Title"] = "Home Page";
}
```

* Sets the title of the Razor page to "Home Page".

### HTML Structure

* A `<div class="container">` wraps the entire form.
* The form uses several input fields for user details.
* Gender selection is done via radio buttons.
* Education level is selected via a `<select>` dropdown.
* A "Save" button is included to simulate form submission.

### JavaScript Functionality

```javascript
let btn = document.getElementById('save-btn');
let container = document.getElementById('container');
let emailInput = document.getElementById('email-input');
let tooltiptext = document.getElementById('tooltiptext');
```

* Changes container background color when **Save** is clicked.
* Shows a tooltip when hovering over the email input.
* Hides the tooltip when the mouse leaves the email field.

---

## 🎯 How It Works

* **Email Tooltip:** When you hover over the email input, a hint appears (`your_name@gmail.com`). When you move your cursor away, it disappears.
* **Save Button:** When clicked, it changes the background color of the entire container to `#a078b3` to indicate that the form has been "submitted" (though no data is actually sent anywhere).

---

## 🛠️ Requirements

To run this project:

* ASP.NET Core environment (e.g., Visual Studio or VS Code with C# extension)
* Browser to view and interact with the form

---

## 📌 Notes

* **Form Submission:** Currently, the form does **not** submit data to a server — this is just the UI layer.
* **Validation:** There’s no form validation implemented yet.
* **Accessibility:** Consider improving accessibility for screen readers and keyboard navigation in future iterations.


---

Let me know if you’d like this turned into an actual Markdown file or want to enhance this with server-side logic or styling.
