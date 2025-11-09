// Base URL for backend (Auth Service)
const API_BASE = "http://localhost:5001/api/auth";

// ---------------------- REGISTER ----------------------
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const role = document.getElementById("regRole").value;

    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Registration successful! You can now log in.");
        window.location.href = "login.html";
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      alert("⚠️ Error connecting to the server.");
      console.error(error);
    }
  });
}

// ---------------------- LOGIN ----------------------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Login successful!");
        localStorage.setItem("token", data.token); // Save JWT
        window.location.href = "book.html";
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      alert("⚠️ Error connecting to the server.");
      console.error(error);
    }
  });
}


// Fetch doctors on page load
window.addEventListener("DOMContentLoaded", async () => {
  const doctorSelect = document.getElementById("doctor");
  try {
    const res = await fetch("http://localhost:5002/api/doctors");
    const doctors = await res.json();

    doctors.forEach((doc) => {
      const opt = document.createElement("option");
      opt.value = doc._id;
      opt.textContent = `${doc.name} (${doc.specialization})`;
      doctorSelect.appendChild(opt);
    });
  } catch (err) {
    console.error("Error fetching doctors:", err);
  }
});

// Handle appointment booking
document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const msg = document.getElementById("msg");

  const data = {
    doctorId: document.getElementById("doctor").value,
    patientName: document.getElementById("patientName").value,
    patientEmail: document.getElementById("patientEmail").value,
    date: document.getElementById("date").value,
    timeSlot: document.getElementById("timeSlot").value
  };

  try {
    const res = await fetch("http://localhost:5003/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
      msg.style.color = "lime";
      msg.textContent = "✅ Appointment booked successfully!";
      e.target.reset();
    } else {
      msg.style.color = "red";
      msg.textContent = "❌ " + result.message;
    }
  } catch (error) {
    console.error(error);
    msg.style.color = "red";
    msg.textContent = "Server error!";
  }
});
