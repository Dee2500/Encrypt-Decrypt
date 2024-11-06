// Encrypt message function
function encryptMessage() {
  let message = document.getElementById("message").value;
  let password = document.getElementById("password").value;

  // Check if message and password are entered
  if (!message || !password) {
    alert("Both message and password are required!");
    return;
  }

  // Encrypt the message with AES encryption using the password
  let encryptedMessage = CryptoJS.AES.encrypt(message, password).toString();

  // Display the encrypted message in the output box
  document.getElementById("outputBox").textContent = "Encrypted Message: \n" + encryptedMessage;
}

// Decrypt message function
function decryptMessage() {
  let encryptedMessage = document.getElementById("message").value;  // Use message input for encrypted text
  let password = document.getElementById("password").value;

  // Check if encrypted message and password are entered
  if (!encryptedMessage || !password) {
    alert("Both encrypted message and password are required!");
    return;
  }

  try {
    // Decrypt the message using the password
    let bytes = CryptoJS.AES.decrypt(encryptedMessage, password);
    let decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

    // Check if decryption is successful
    if (!decryptedMessage) {
      document.getElementById("outputBox").textContent = "Invalid password or corrupted message!";
    } else {
      // Display the decrypted message in the output box
      document.getElementById("outputBox").textContent = "Decrypted Message: \n" + decryptedMessage;
    }
  } catch (e) {
    document.getElementById("outputBox").textContent = "Error during decryption.";
  }
}
