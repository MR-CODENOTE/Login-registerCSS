
        // --- CONFIGURATION ---
        const textToType = "One AI for Coding, Research, and Everything in Between";
        const typingSpeed = 100;    // Speed of typing in milliseconds
        const erasingSpeed = 50;     // Speed of erasing in milliseconds
        const pauseBetween = 2000;   // Pause between typing and erasing in milliseconds

        // --- SCRIPT ---
        const typingElement = document.getElementById('typing-text');
        
        let charIndex = 0;
        let isTyping = true;

        function typeEraseLoop() {
            // Determine the current part of the text to display
            const currentText = textToType.substring(0, charIndex);
            typingElement.textContent = currentText;

            if (isTyping) {
                // --- TYPING LOGIC ---
                if (charIndex < textToType.length) {
                    charIndex++;
                    setTimeout(typeEraseLoop, typingSpeed);
                } else {
                    // Switch to erasing after a pause
                    isTyping = false;
                    setTimeout(typeEraseLoop, pauseBetween);
                }
            } else {
                // --- ERASING LOGIC ---
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(typeEraseLoop, erasingSpeed);
                } else {
                    // Switch back to typing
                    isTyping = true;
                    setTimeout(typeEraseLoop, typingSpeed);
                }
            }
        }

        // Start the animation when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            // Initial call to start the loop
            setTimeout(typeEraseLoop, typingSpeed);
        });
  
  
  
  
  
  
  
  
  
  
  
  
