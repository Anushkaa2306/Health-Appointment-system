// 1. IMPORT SUPABASE
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// 2. CONNECT TO YOUR DATABASE
const SUPABASE_URL = 'https://ftykjdqlzuzqpwipncif.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xYKpwZY6CrqydspTtdhaog_iYoVXuMA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. UI TOGGLES & ELEMENTS
const sections = {
    signIn: document.getElementById('signInSection'),
    signUp: document.getElementById('signUpSection'),
    forgotPwd: document.getElementById('forgotPasswordSection'),
    otpReq: document.getElementById('otpRequestSection'),
    otpVer: document.getElementById('otpVerifySection')
};
const messageBox = document.getElementById('messageBox');

// OTP Tracking Variables
let pendingEmail = "";
let pendingOtpType = "email"; // 'email' for login, 'signup' for registration

function showMessage(msg, type) {
    messageBox.style.display = 'block';
    messageBox.className = `message-box message-${type}`;
    messageBox.innerText = msg;
}

function showSection(sectionToShow) {
    Object.values(sections).forEach(sec => sec.style.display = 'none');
    sectionToShow.style.display = 'block';
    messageBox.style.display = 'none';
}

// Navigation Listeners
document.getElementById('showSignUp').addEventListener('click', (e) => { e.preventDefault(); showSection(sections.signUp); });
document.getElementById('showLogin').addEventListener('click', (e) => { e.preventDefault(); showSection(sections.signIn); });
document.getElementById('showForgotPassword').addEventListener('click', (e) => { e.preventDefault(); showSection(sections.forgotPwd); });
document.getElementById('backToLoginFromReset').addEventListener('click', (e) => { e.preventDefault(); showSection(sections.signIn); });
document.getElementById('showOtpLogin').addEventListener('click', (e) => { e.preventDefault(); showSection(sections.otpReq); });
document.getElementById('backToLoginFromOtp').addEventListener('click', (e) => { e.preventDefault(); showSection(sections.signIn); });

// Show Password Feature
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.type === "password") {
        input.type = "text";
        icon.innerText = "🙈";
    } else {
        input.type = "password";
        icon.innerText = "👁️";
    }
}
document.getElementById('toggleLoginPassword').addEventListener('click', () => togglePasswordVisibility('loginPassword', 'toggleLoginPassword'));
document.getElementById('toggleRegPassword').addEventListener('click', () => togglePasswordVisibility('regPassword', 'toggleRegPassword'));

// 4. REGISTRATION (Now includes OTP routing)
document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('regName').value;
    const dob = document.getElementById('regDob').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        showMessage("Password must be at least 8 chars, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.", "error");
        return;
    }

    showMessage("Creating account...", "info");

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { full_name: name, dob: dob, phone: phone, login_method: "Email/Password" }
        }
    });

    if (error) {
        showMessage(error.message, "error");
    } else {
        // Set tracking variables and route to OTP screen
        pendingEmail = email;
        pendingOtpType = 'signup';

        document.getElementById('signUpForm').reset();
        showSection(sections.otpVer);
        showMessage("Account created! Check your email for the 6-digit verification code.", "success");
    }
});

// 5. STANDARD LOGIN
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        showMessage(error.message, "error");
    } else {
        showMessage("Login Successful! Welcome back.", "success");
    }
});

// 6. FORGOT PASSWORD
document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;

    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
        showMessage(error.message, "error");
    } else {
        showMessage(`Password reset link sent to ${email}.`, "success");
        document.getElementById('forgotPasswordForm').reset();
    }
});

// 7. EMAIL OTP LOGIN (Request Code)
document.getElementById('otpRequestForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('otpEmail').value;

    showMessage("Sending OTP to email...", "info");

    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: { shouldCreateUser: false }
    });

    if (error) {
        showMessage(error.message, "error");
    } else {
        // Set tracking variables and route to OTP screen
        pendingEmail = email;
        pendingOtpType = 'email';

        showSection(sections.otpVer);
        showMessage("OTP sent successfully! Check your inbox.", "success");
    }
});

// 8. UNIVERSAL OTP VERIFICATION (Handles both Signup and Login)
document.getElementById('otpVerifyForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const code = document.getElementById('otpCode').value;

    const { data: { session }, error } = await supabase.auth.verifyOtp({
        email: pendingEmail,
        token: code,
        type: pendingOtpType // Automatically uses 'signup' or 'email' based on where they came from
    });

    if (error) {
        showMessage("Invalid OTP. Please try again.", "error");
    } else {
        showMessage("Verification Successful! You are logged in.", "success");
        document.getElementById('otpVerifyForm').reset();
    }
});

// 9. GOOGLE LOGIN
document.getElementById('googleLogin').addEventListener('click', async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { queryParams: { access_type: 'offline', prompt: 'consent' } }
    });

    if (error) {
        showMessage(error.message, "error");
    }
});