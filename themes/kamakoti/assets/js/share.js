// Copy to Clipboard functionality for social sharing
function copyToClipboard(text) {
  // Use modern Clipboard API if available
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() {
      showCopySuccess();
    }).catch(function(err) {
      console.error('Failed to copy text: ', err);
      fallbackCopyToClipboard(text);
    });
  } else {
    // Fallback for older browsers
    fallbackCopyToClipboard(text);
  }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    showCopySuccess();
  } catch (err) {
    console.error('Fallback: Failed to copy text: ', err);
  }

  document.body.removeChild(textArea);
}

// Show success message
function showCopySuccess() {
  const successMsg = document.getElementById('copy-success');
  if (successMsg) {
    successMsg.classList.remove('hidden');
    setTimeout(function() {
      successMsg.classList.add('hidden');
    }, 3000);
  }
}
