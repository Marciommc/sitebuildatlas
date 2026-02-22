/**
 * Auth Logic
 * Handles Login, Protected Routes, and Logout
 */

document.addEventListener('DOMContentLoaded', () => {
    checkSession();

    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = loginForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Entrando...';
            btn.disabled = true;

            const { data, error } = await window.supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                alert(error.message);
                btn.innerText = originalText;
                btn.disabled = false;
            } else {
                // Redirect based on role
                if (data.user.role === 'admin') {
                    window.location.href = 'admin.html';
                } else {
                    window.location.href = 'dashboard.html';
                }
            }
        });
    }

    // Logout Handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await window.supabase.auth.signOut();
            window.location.href = 'login.html';
        });
    }
});

function checkSession() {
    const path = window.location.pathname;
    const isProtected = path.includes('dashboard.html') || path.includes('admin.html');

    // Check if we are in a mock environment (Vanilla JS approach)
    // In a real app we'd use the async getSession
    const { data } = window.supabase.auth.getSession();

    if (isProtected && !data.session) {
        // Redirect to login if trying to access protected page without session
        window.location.href = 'login.html';
    }

    if (path.includes('login.html') && data.session) {
        // Redirect to dashboard if already logged in
        if (data.session.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    }
}
