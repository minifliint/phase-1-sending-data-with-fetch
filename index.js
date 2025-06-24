// Add your code here
function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data => {
      // append the new ID to the DOM (e.g., inside <body>)
      const p = document.createElement('p');
      p.textContent = `User ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      // append the error message to the DOM
      const p = document.createElement('p');
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
}
