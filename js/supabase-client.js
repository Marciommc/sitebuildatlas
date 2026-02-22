/**
 * Supabase Client Configuration
 * 
 * Instructions:
 * 1. Go to https://supabase.com/ and create a new project.
 * 2. Get your URL and ANON KEY.
 * 3. Replace the placeholders below.
 * 4. Set MOCK_MODE = false to use the real database.
 */

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';
const MOCK_MODE = true; // Set to false when you have real keys

// Initialize Mock Data
const INITIAL_DB = {
    users: [
        { id: 1, email: 'admin@exithus.com', role: 'admin', name: 'Administrador' },
        { id: 2, email: 'cliente@email.com', role: 'subscriber', name: 'Cliente Exemplo' }
    ],
    leads: [
        { id: 101, name: 'Roberto Silva', email: 'roberto@email.com', phone: '11999999999', investment: '5000', date: '2023-10-25' },
        { id: 102, name: 'Ana Souza', email: 'ana@email.com', phone: '11988888888', investment: '2000', date: '2023-10-26' }
    ],
    documents: [
        { id: 1, title: 'Contrato de Adesão.pdf', date: '2023-10-01', status: 'Assinado' },
        { id: 2, title: 'Simulação Financeira.pdf', date: '2023-10-15', status: 'Disponível' }
    ]
};

// Helper to get/set DB
function getMockDB() {
    const stored = localStorage.getItem('exithus_mock_db');
    return stored ? JSON.parse(stored) : INITIAL_DB;
}

function saveMockDB(db) {
    localStorage.setItem('exithus_mock_db', JSON.stringify(db));
}

// Simulated Client (Interface matcher for Supabase)
const supabase = {
    auth: {
        signInWithPassword: async ({ email, password }) => {
            if (MOCK_MODE) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const db = getMockDB();
                        const user = db.users.find(u => u.email === email);
                        // Mock password check (accepts '123' or any for demo if not strict)
                        if (user && password === '123') {
                            localStorage.setItem('exithus_session', JSON.stringify(user));
                            resolve({ data: { user: user, session: 'mock-session-token' }, error: null });
                        } else {
                            resolve({ data: null, error: { message: 'Credenciais inválidas. Tente senha "123".' } });
                        }
                    }, 500);
                });
            }
        },
        signOut: async () => {
            if (MOCK_MODE) {
                localStorage.removeItem('exithus_session');
                return { error: null };
            }
        },
        getSession: () => {
            if (MOCK_MODE) {
                const session = localStorage.getItem('exithus_session');
                return { data: { session: session ? JSON.parse(session) : null } };
            }
        }
    },
    from: (table) => {
        if (MOCK_MODE) {
            return {
                select: () => {
                    const db = getMockDB();
                    return Promise.resolve({ data: db[table] || [], error: null });
                },
                insert: (row) => {
                    return new Promise((resolve) => {
                        const db = getMockDB();
                        if (!db[table]) db[table] = [];

                        // Add metadata
                        const newRow = {
                            ...row[0] || row, // Handle array or object
                            id: Date.now(),
                            date: new Date().toISOString().split('T')[0]
                        };

                        db[table].push(newRow);
                        saveMockDB(db);

                        console.log(`[Mock DB] Inserted into ${table}:`, newRow);
                        resolve({ data: newRow, error: null });
                    });
                }
            };
        }
    }
};

// Export (Global scope for Vanilla JS)
window.supabase = supabase;
window.isMockMode = MOCK_MODE;
