// app.js - Global Logic for Gruhjeevandeep (Preloader, Translate, Chatbot)

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PANDA PRELOADER INJECTION
    const preloaderHtml = `
        <div id="panda-preloader" class="d-flex justify-content-center align-items-center">
            <div class="text-center text-white">
                <div class="panda-spinner mb-3">🐼</div>
                <h3 class="fw-bold tracking-widest">LOADING...</h3>
                <p class="small text-white-50">Please wait while we gather knowledge.</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', preloaderHtml);

    // Hide preloader on load
    window.addEventListener('load', () => {
        const preloader = document.getElementById('panda-preloader');
        if(preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.remove(); }, 500); // Wait for fade-out transition
        }
    });

    // Fallback: If 'load' event already fired or takes too long, hide after 2.5s anyway
    setTimeout(() => {
        const preloader = document.getElementById('panda-preloader');
        if(preloader && preloader.style.opacity !== '0') {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.remove(); }, 500);
        }
    }, 2500);

    // 2. LANGUAGE TRANSLATION HOOKUP
    // Inject the hidden div required by Google Translate
    if (!document.getElementById('google_translate_element')) {
        const gtDiv = document.createElement('div');
        gtDiv.id = 'google_translate_element';
        gtDiv.style.display = 'none'; // Keep hidden
        document.body.appendChild(gtDiv);
    }

    // Define the init function globally before the script loads
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement(
            { pageLanguage: 'en', includedLanguages: 'en,hi,te,ta,kn,ml', autoDisplay: false },
            'google_translate_element'
        );
    };

    // Inject Google Translate script dynamically if not present
    if (!document.getElementById('google-translate-script')) {
        const gtScript = document.createElement('script');
        gtScript.id = 'google-translate-script';
        gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(gtScript);
    }

    const langLinks = document.querySelectorAll('#languageList .dropdown-item');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const langCode = e.target.getAttribute('data-lang');
            
            // Set the Google Translate cookie. 
            // This is the most reliable way to force a translation across page loads.
            // Using a simple path=/ works well for localhost.
            document.cookie = `googtrans=/en/${langCode}; path=/`;
            // Also try to set it for the specific domain if it's not localhost
            if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
                document.cookie = `googtrans=/en/${langCode}; domain=.${location.hostname}; path=/`;
            }
            
            // Immediately trigger the change if the combo exists, for instant UI update without reload
            const googleSelect = document.querySelector('.goog-te-combo');
            if(googleSelect) {
                googleSelect.value = langCode;
                googleSelect.dispatchEvent(new Event('change'));
            } else {
                // If it isn't loaded yet, reload the page so the cookie takes effect
                window.location.reload();
            }
        });
    });

    // 3. VOICE CHATBOT INJECTION
    const chatbotHtml = `
        <!-- Chatbot Button -->
        <button id="chatbot-btn" class="btn btn-primary rounded-circle shadow-lg d-flex justify-content-center align-items-center" style="width: 60px; height: 60px; position: fixed; bottom: 30px; left: 30px; z-index: 1000; transition: transform 0.3s;">
            <i class="fas fa-robot fs-3"></i>
        </button>

        <!-- Chatbot Window -->
        <div id="chatbot-window" class="glass-card shadow-lg d-none flex-column" style="width: 350px; height: 450px; position: fixed; bottom: 100px; left: 30px; z-index: 1000; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.3);">
            
            <div class="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
                <h5 class="mb-0 fw-bold"><i class="fas fa-robot"></i> Gruh Assistant</h5>
                <button id="chatbot-close" class="btn-close btn-close-white" aria-label="Close"></button>
            </div>
            
            <div id="chatbot-messages" class="flex-grow-1 p-3" style="overflow-y: auto; background: rgba(255,255,255,0.6);">
                <div class="mb-3 text-start">
                    <span class="d-inline-block bg-white text-dark rounded p-2 shadow-sm" style="max-width: 80%;">
                        Hello! I am your Gruh Assistant. You can ask me about Education, Agriculture, Healthcare, or Policies. You can type or use your voice!
                    </span>
                </div>
            </div>
            
            <div class="p-2 border-top bg-white d-flex align-items-center">
                <button id="voice-btn" class="btn btn-light text-primary rounded-circle me-2" title="Click to Speak"><i class="fas fa-microphone"></i></button>
                <input type="text" id="chatbot-input" class="form-control rounded-pill border-0 bg-light px-3" placeholder="Type your query...">
                <button id="send-btn" class="btn btn-primary rounded-circle ms-2"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatbotHtml);

    // Chatbot Logic
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('send-btn');
    const voiceBtn = document.getElementById('voice-btn');
    const messagesBox = document.getElementById('chatbot-messages');

    // Toggle Window
    chatbotBtn.addEventListener('click', () => {
        chatbotWindow.classList.toggle('d-none');
        chatbotWindow.classList.toggle('d-flex');
    });
    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.add('d-none');
        chatbotWindow.classList.remove('d-flex');
    });

    // Helper to append messages
    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `mb-3 text-${isUser ? 'end' : 'start'}`;
        
        const span = document.createElement('span');
        span.className = `d-inline-block p-2 rounded shadow-sm ${isUser ? 'bg-primary text-white' : 'bg-white text-dark'}`;
        span.style.maxWidth = '80%';
        span.textContent = text;
        
        msgDiv.appendChild(span);
        messagesBox.appendChild(msgDiv);
        messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    // Bot Response Logic
    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('education') || lowerInput.includes('scholarship')) {
            return "Education is power! You can visit our Education section to learn about scholarships, competitive exams, and more.";
        } else if (lowerInput.includes('agriculture') || lowerInput.includes('farm')) {
            return "Agriculture is the backbone of our economy. Visit the Agriculture page for info on organic farming and government subsidies.";
        } else if (lowerInput.includes('health') || lowerInput.includes('hospital')) {
            return "Your health matters. We provide information on Arogyasri and free hospitals in the Healthcare section.";
        } else if (lowerInput.includes('polic') || lowerInput.includes('scheme')) {
            return "We have a comprehensive list of government schemes like PMJDY and Rythu Bandhu. Check the Policies page!";
        } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
            return "Hello there! How can I assist you today?";
        } else {
            return "I am still learning! Please ask me specifically about Education, Healthcare, Agriculture, or Policies.";
        }
    }

    // Handle User Input
    function handleSend() {
        const text = chatInput.value.trim();
        if(!text) return;
        
        addMessage(text, true);
        chatInput.value = '';

        setTimeout(() => {
            const reply = getBotResponse(text);
            addMessage(reply, false);
            speakText(reply);
        }, 600);
    }

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') handleSend();
    });

    // --- Voice Assistant Web Speech API ---
    
    // Setup Speech Synthesis (Speaking)
    function speakText(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = 1;
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        }
    }

    // Setup Speech Recognition (Listening)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        let isListening = false;

        voiceBtn.addEventListener('click', () => {
            if(isListening) {
                recognition.stop();
            } else {
                try {
                    recognition.start();
                    voiceBtn.classList.remove('btn-light', 'text-primary');
                    voiceBtn.classList.add('btn-danger', 'text-white');
                    isListening = true;
                } catch(e) {
                    console.error("Speech recognition error", e);
                }
            }
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            chatInput.value = transcript;
            handleSend();
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onend = () => {
            isListening = false;
            voiceBtn.classList.remove('btn-danger', 'text-white');
            voiceBtn.classList.add('btn-light', 'text-primary');
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error detected: ' + event.error);
            isListening = false;
            voiceBtn.classList.remove('btn-danger', 'text-white');
            voiceBtn.classList.add('btn-light', 'text-primary');
            alert("Could not recognize voice. Please make sure microphone permissions are allowed.");
        };
    } else {
        voiceBtn.addEventListener('click', () => {
            alert("Voice recognition is not supported in this browser.");
        });
    }

});
