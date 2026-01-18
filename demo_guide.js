(function() {
    // Demo Content Configuration
    const demoData = {
        'index.html': {
            title: "Home: Trust & Clarity",
            points: [
                "Clean, uncluttered navigation focuses on high-frequency tasks (Update, Verify).",
                "Prominent 'Update Aadhaar' CTA reduces search time.",
                "Official Govt Aesthetics: Uses official colors but with modern spacing to build trust."
            ]
        },
        'update_aadhaar_login.html': {
            title: "Login: Secure & Inclusive",
            points: [
                "Clear 'Official Service' badge reassures users against phishing.",
                "HoF (Head of Family) Mode highlighted for citizens without documents.",
                "Visualizes the 4-step process upfront to manage expectations."
            ]
        },
        'otp_verification.html': {
            title: "Security Check",
            points: [
                "Auto-focus input fields for faster OTP entry.",
                "'Secure 256-bit Encryption' badge reinforces data privacy.",
                "Clear timer prevents anxiety about code expiration."
            ]
        },
        'address_entry.html': {
            title: "Smart Data Entry",
            points: [
                "Auto-fills State/City from Pincode to prevent 30% of address errors.",
                "Real-time validation indicators (Green Checks) give instant confidence.",
                "Read-only fields prevent editing of immutable data."
            ]
        },
        'document_upload.html': {
            title: "Error Prevention Layer",
            points: [
                "Pre-upload Checklist prevents common rejection reasons (Blurry, Cut edges).",
                "Visual examples of 'Good' vs 'Bad' documents.",
                "Supports drag-and-drop for ease of use."
            ]
        },
        'review_confirm.html': {
            title: "Confirmation & Trust",
            points: [
                "Side-by-side comparison of Old vs New address.",
                "Clear 'Updating' badge highlights exactly what will change.",
                "Self-declaration checkbox adds legal weight to the request."
            ]
        },
        'rejection_fix.html': {
            title: "Resilience (Unhappy Path)",
            points: [
                "Instead of a generic error, explains EXACTLY why it failed.",
                "Offers a 'Fix It' flow without restarting from scratch.",
                "Reassures user that no double payment is needed."
            ]
        },
        'success.html': {
            title: "Completion",
            points: [
                "Large SRN (Service Request Number) for easy tracking.",
                "Visual tracker shows the exact status.",
                "Manage expectations with '5-7 days' processing time estimate."
            ]
        }
    };

    // Style Injection
    const style = document.createElement('style');
    style.textContent = `
        #demo-overlay-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #000;
            color: #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            font-family: sans-serif;
            font-weight: bold;
            transition: all 0.2s;
            border: 2px solid rgba(255,255,255,0.2);
        }
        #demo-overlay-btn:hover { transform: scale(1.1); }
        
        #demo-sidebar {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 320px;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            color: white;
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
            z-index: 9998;
            font-family: 'Inter', system-ui, sans-serif;
            transform: translateX(400px);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid rgba(255,255,255,0.1);
        }
        #demo-sidebar.visible { transform: translateX(0); }
        
        .demo-title { font-size: 18px; font-weight: 700; margin-bottom: 16px; color: #60a5fa; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .demo-list { list-style: none; padding: 0; margin: 0; }
        .demo-list li { 
            font-size: 14px; 
            margin-bottom: 12px; 
            line-height: 1.5; 
            opacity: 0.9; 
            display: flex; 
            gap: 10px;
        }
        .demo-list li::before {
            content: "•";
            color: #60a5fa;
            font-weight: bold;
        }
        .demo-badge {
            display: inline-block;
            background: #2563eb;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            padding: 2px 6px;
            border-radius: 4px;
            margin-bottom: 12px;
            letter-spacing: 0.05em;
        }
    `;
    document.head.appendChild(style);

    // Initial Setup
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const pageData = demoData[currentFile] || { title: "Demo Mode", points: ["Explore the official prototype flow."] };

    // Create UI Elements
    const btn = document.createElement('div');
    btn.id = 'demo-overlay-btn';
    btn.innerHTML = 'H';
    btn.title = 'Press H to toggle Presentation Notes';
    
    const sidebar = document.createElement('div');
    sidebar.id = 'demo-sidebar';
    sidebar.innerHTML = `
        <span class="demo-badge">Presenter Notes</span>
        <div class="demo-title">${pageData.title}</div>
        <ul class="demo-list">
            ${pageData.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(sidebar);

    // Toggle Logic
    let isVisible = false;
    const toggle = () => {
        isVisible = !isVisible;
        sidebar.classList.toggle('visible', isVisible);
        btn.style.opacity = isVisible ? '0.5' : '1';
    };

    // Event Listeners
    btn.addEventListener('click', toggle);
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'h') toggle();
    });

    // Auto-show on first load if intro (optional, keeping off for now to be unobtrusive)
})();
