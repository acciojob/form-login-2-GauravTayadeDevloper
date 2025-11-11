    function showAlert() {
      // Get form field values
      const firstName = document.getElementById('fname').value.trim();
      const lastName = document.getElementById('lname').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();

      // Create alert message with spaces between label-value pairs
      const message = `First Name: ${firstName}  Last Name: ${lastName}  Phone Number: ${phone}  Email ID: ${email}`;
      
      // Display the alert
      alert(message);
    }