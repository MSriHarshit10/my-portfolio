document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const res = await fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Message sent!");
    form.reset();
  } else {
    alert("Failed to send message.");
  }
});
