// Simple Authentication Service using LocalStorage
const AuthService = {
    // Check if user is logged in
    isAuthenticated() {
        return localStorage.getItem('currentUser') !== null;
    },

    // Get current logged in user
    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },

    // Register a new user
    register({ name, email, password }) {
        try {
            // Get existing users or empty array
            const usersJSON = localStorage.getItem('users');
            const users = usersJSON ? JSON.parse(usersJSON) : [];

            // Check if email already exists
            if (users.find(u => u.email === email)) {
                return { success: false, message: 'Email is already registered.' };
            }

            // Create new user object
            const newUser = {
                id: Date.now().toString(),
                name,
                email,
                password, // In a real app never store plaintext passwords
                createdAt: new Date().toISOString()
            };

            // Save user
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // Log them in immediately
            this.login(email, password);
            return { success: true, message: 'Registration successful.' };
        } catch (error) {
            return { success: false, message: 'An error occurred during registration.' };
        }
    },

    // Login user
    login(email, password) {
        const usersJSON = localStorage.getItem('users');
        if (!usersJSON) {
            return { success: false, message: 'Invalid credentials or user not found.' };
        }

        const users = JSON.parse(usersJSON);
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Remove password from currentUser footprint
            const { password, ...userWithoutPassword } = user;
            localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
            return { success: true, message: 'Login successful.' };
        } else {
            return { success: false, message: 'Invalid email or password.' };
        }
    },

    // Logout
    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    },

    // Guard route function to use on protected pages
    protectRoute() {
        if (!this.isAuthenticated()) {
            window.location.href = 'login.html';
        }
    },

    // Redirect to dashboard if logged in (for login page)
    redirectIfAuthenticated() {
        if (this.isAuthenticated()) {
            window.location.href = 'dashboard.html';
        }
    }
};

// Expose to global scope
window.AuthService = AuthService;

// Seed and migrate Default Admin User
let users = [];
try {
    const usersJSON = localStorage.getItem('users');
    users = usersJSON ? JSON.parse(usersJSON) : [];
} catch (e) {
    users = [];
}

const adminIndex = users.findIndex(u => u.id === 'admin-1' || u.email === 'admin@digitalsolutions.io');
if (adminIndex !== -1) {
    // Migrate existing admin to the new email
    users[adminIndex].email = 'admin@zionix.io';
    localStorage.setItem('users', JSON.stringify(users));
} else if (!users.find(u => u.email === 'admin@zionix.io')) {
    // Add demo admin if it doesn't exist
    users.push({
        id: 'admin-1',
        name: 'Demo Admin',
        email: 'admin@zionix.io',
        password: 'password123',
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('users', JSON.stringify(users));
}
