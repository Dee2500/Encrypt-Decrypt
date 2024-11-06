// Ensure that the CryptoJS library is available before using it
if (typeof CryptoJS === "undefined") {
  alert("CryptoJS library is not loaded. Encryption and decryption will not work.");
}

// Encrypt message function
function encryptMessage() {
  const message = document.getElementById("message").value;
  const password = document.getElementById("password").value;

  // Check if message and password are entered
  if (!message || !password) {
    alert("Both message and password are required!");
    return;
  }

  // Encrypt the message with AES encryption using the password
  try {
    let encryptedMessage = CryptoJS.AES.encrypt(message, password).toString();
    document.getElementById("outputBox").textContent = "Encrypted Message: \n" + encryptedMessage;
  } catch (error) {
    console.error("Encryption failed:", error);
    alert("Error during encryption.");
  }
}

// Decrypt message function
function decryptMessage() {
  const encryptedMessage = document.getElementById("message").value;  // Use message input for encrypted text
  const password = document.getElementById("password").value;

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
      document.getElementById("outputBox").textContent = "Decrypted Message: \n" + decryptedMessage;
    }
  } catch (error) {
    console.error("Decryption failed:", error);
    alert("Error during decryption.");
  }
}

// Set up event listeners for the buttons
document.getElementById("encryptButton").addEventListener("click", encryptMessage);
document.getElementById("decryptButton").addEventListener("click", decryptMessage);
