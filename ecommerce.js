// ecommerce.js - Dynamic Store Logic

const products = [
    {
        id: 1,
        title: "Web App Starter Kit",
        category: "Code Templates",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        description: "A complete responsive SaaS boilerplate built with pure modern web technologies."
    },
    {
        id: 2,
        title: "Premium Portfolio Theme",
        category: "UI Design",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        description: "An ultra-modern glassmorphism portfolio template to help you land your dream clients."
    },
    {
        id: 3,
        title: "UI/UX Audit Session",
        category: "Consulting",
        price: 149.00,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        description: "A comprehensive 60-minute breakdown of your application's UX bottlenecks."
    },
    {
        id: 4,
        title: "Brand Identity Asset Pack",
        category: "Graphics",
        price: 89.50,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
        description: "Vector logos, color palettes, and typography guidelines tailored to your startup."
    },
    {
        id: 5,
        title: "E-Commerce Boilerplate",
        category: "Code Templates",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
        description: "A fully dynamic frontend store capable of cart management, built for pure speed."
    },
    {
        id: 6,
        title: "Monthly Technical Support",
        category: "Retainer",
        price: 199.00,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        description: "24/7 dedicated engineering support for your live startup environments."
    },
    {
        id: 7,
        title: "SEO Optimization Setup",
        category: "Marketing",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description: "Comprehensive meta-data implementation and performance boosting for organic reach."
    },
    {
        id: 8,
        title: "Mobile App Prototyping",
        category: "UI Design",
        price: 129.00,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        description: "High-fidelity interactive Figma prototypes ready for developer handoff."
    },
    {
        id: 9,
        title: "Security Audit Service",
        category: "Consulting",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
        description: "Full vulnerability sweep and penetration testing of your critical web assets."
    },
    {
        id: 10,
        title: "Premium Animation Pack",
        category: "Graphics",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
        description: "A library of lightweight, CSS/JS micro-animations to bring your UI to life."
    },
    {
        id: 11,
        title: "Advanced React Boilerplate",
        category: "Code Templates",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
        description: "Enterprise-ready React structure with global state and JWT auth included."
    },
    {
        id: 12,
        title: "Brand Voice Strategy",
        category: "Marketing",
        price: 149.00,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        description: "Complete rewrites of your landing page copy optimized for high conversion."
    },
    {
        id: 13,
        title: "API Architecture Design",
        category: "Consulting",
        price: 299.00,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        description: "Detailed system architecture diagrams and scalable REST API blueprints."
    },
    {
        id: 14,
        title: "SVG Icon Library",
        category: "Graphics",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        description: "500+ premium tailored vector icons for minimalist tech applications."
    },
    {
        id: 15,
        title: "3D Spline Interactive Scene",
        category: "3D Design",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        description: "Custom interactive 3D web experience ready to embed on your homepage."
    },
    {
        id: 16,
        title: "AI Chatbot Integration",
        category: "Development",
        price: 249.00,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        description: "Custom-trained AI customer support agent installed securely on your site."
    },
    {
        id: 17,
        title: "Backend Performance Tuning",
        category: "Consulting",
        price: 159.00,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "Database indexing and caching strategies to lower server loads instantly."
    },
    {
        id: 18,
        title: "Wireframe UI Kit",
        category: "UI Design",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
        description: "Rapid prototyping UI wireframes in Figma to start plotting out structure."
    },
    {
        id: 19,
        title: "Technical Docs Writing",
        category: "Copywriting",
        price: 99.00,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        description: "Flawlessly formatted markdown documentation for your internal APIs."
    },
    {
        id: 20,
        title: "HTML Email Templates",
        category: "Marketing",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
        description: "Hand-coded, responsive email marketing templates tested across all clients."
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function initEcommerce() {
    renderProducts();
    updateCartIcon();
    renderCartDrawer();
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return; // Only process on Products page

    grid.innerHTML = '';
    
    products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'glass-card fade-in';
        item.style.padding = '0';
        item.style.overflow = 'hidden';
        item.style.display = 'flex';
        item.style.flexDirection = 'column';

        item.innerHTML = `
            <div style="height: 200px; overflow: hidden; position: relative;">
                <img src="${product.image}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                <span style="position: absolute; top: 1rem; right: 1rem; background: var(--primary); color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${product.category}</span>
            </div>
            <div style="padding: 1.5rem; display: flex; flex-direction: column; flex: 1;">
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${product.title}</h3>
                <p style="font-size: 0.9rem; margin-bottom: 1.5rem; flex: 1;">${product.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 1.3rem; font-weight: 700; color: var(--primary);">₹${(product.price * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                    <button class="btn btn-primary" style="padding: 0.6rem 1rem; border-radius: 8px; border: none;" onclick="addToCart(${product.id})">
                        Add to Cart <i class="fa-solid fa-cart-plus" style="margin-left: 5px;"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(item);
    });

    setTimeout(() => {
        const fadeElements = document.querySelectorAll('#products-grid .fade-in');
        fadeElements.forEach(el => el.classList.add('visible'));
    }, 100);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    showToast(`Added ${product.title} to cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function changeQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    renderCartDrawer();
}

function updateCartIcon() {
    const counters = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    counters.forEach(counter => {
        counter.textContent = totalItems;
        if(totalItems > 0) {
            counter.style.display = 'flex';
            counter.classList.add('bounce');
            setTimeout(() => counter.classList.remove('bounce'), 300);
        } else {
            counter.style.display = 'none';
        }
    });
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if(drawer) drawer.classList.toggle('open');
    if(overlay) overlay.classList.toggle('open');
}

function renderCartDrawer() {
    const drawerItems = document.getElementById('cart-items');
    const cartTotalNode = document.getElementById('cart-total');
    if (!drawerItems) return;

    drawerItems.innerHTML = '';
    
    if (cart.length === 0) {
        drawerItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-secondary);"><i class="fa-solid fa-cart-shopping" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Your cart is empty.</p></div>';
        if(cartTotalNode) cartTotalNode.textContent = '₹0';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.gap = '1rem';
        div.style.padding = '1rem 0';
        div.style.borderBottom = '1px solid var(--glass-border)';

        div.innerHTML = `
            <img src="${item.image}" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
                <h4 style="font-size: 0.9rem; margin-bottom: 0.3rem;">${item.title}</h4>
                <div style="color: var(--primary); font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">₹${(item.price * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button style="background: var(--input-bg); border: 1px solid var(--glass-border); color: var(--text-primary); width: 24px; height: 24px; border-radius: 4px; cursor: pointer;" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span style="font-size: 0.9rem; width: 20px; text-align: center;">${item.quantity}</span>
                    <button style="background: var(--input-bg); border: 1px solid var(--glass-border); color: var(--text-primary); width: 24px; height: 24px; border-radius: 4px; cursor: pointer;" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.5rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        drawerItems.appendChild(div);
    });

    if(cartTotalNode) cartTotalNode.textContent = '₹' + (total * 83).toLocaleString('en-IN', {maximumFractionDigits: 0});
}

function showToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if(!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '2rem';
        toastContainer.style.right = '2rem';
        toastContainer.style.display = 'flex';
        toastContainer.style.flexDirection = 'column';
        toastContainer.style.gap = '0.5rem';
        toastContainer.style.zIndex = '10000';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'glass-card';
    toast.style.padding = '1rem 1.5rem';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '1rem';
    toast.style.background = 'rgba(34, 197, 94, 0.2)';
    toast.style.border = '1px solid rgba(34, 197, 94, 0.4)';
    toast.style.color = '#fff';
    toast.style.animation = 'slideInUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    toast.innerHTML = `<i class="fa-solid fa-check-circle" style="color: #4ade80;"></i> <span style="font-size: 0.9rem; font-weight: 500;">${message}</span>`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOutRight 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function injectCartHTML() {
    if (document.getElementById('cart-drawer')) return;
    
    const html = `
        <div id="cart-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 10000; display: none; opacity: 0; transition: opacity 0.3s ease;"></div>
        
        <div id="cart-drawer" style="position: fixed; top: 0; right: -400px; width: 100%; max-width: 400px; height: 100vh; background: var(--nav-mobile); backdrop-filter: blur(20px); border-left: 1px solid var(--glass-border); z-index: 10001; transition: right 0.4s cubic-bezier(0.77,0.2,0.05,1.0); display: flex; flex-direction: column; box-shadow: -10px 0 30px rgba(0,0,0,0.3);">
            <div style="padding: 1.5rem; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 1.5rem;">Your Cart <i class="fa-solid fa-bag-shopping" style="color: var(--primary); margin-left: 0.5rem;"></i></h2>
                <button onclick="toggleCartDrawer()" style="background: var(--input-bg); border: 1px solid var(--glass-border); color: var(--text-primary); width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.3s;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            
            <div id="cart-items" style="flex: 1; overflow-y: auto; padding: 1.5rem;">
                <!-- dynamic items injected here -->
            </div>
            
            <div style="padding: 1.5rem; border-top: 1px solid var(--glass-border); background: var(--glass-bg);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 1.2rem; font-weight: 700;">
                    <span>Total:</span>
                    <span id="cart-total" style="color: var(--primary);">₹0</span>
                </div>
                <button class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1.1rem; border: none; border-radius: 12px; display: flex; justify-content: center; gap: 0.5rem; align-items: center;" onclick="alert('Proceeding to secure checkout!\\nTotal: ' + document.getElementById('cart-total').textContent)">
                    Checkout securely <i class="fa-solid fa-lock"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);
    
    const overlay = document.getElementById('cart-overlay');
    if(overlay) overlay.addEventListener('click', toggleCartDrawer);
}

function injectCartCSS() {
    if(document.getElementById('cart-dynamic-styles')) return;

    const style = document.createElement('style');
    style.id = 'cart-dynamic-styles';
    style.textContent = `
        #cart-overlay.open { display: block; opacity: 1; }
        #cart-drawer.open { right: 0 !important; }
        .cart-icon-wrapper { position: relative; cursor: pointer; margin-left: 1rem; color: var(--text-primary); display: flex; align-items: center; padding: 0.5rem; border-radius: 50%; background: var(--glass-bg); border: 1px solid var(--glass-border); width: 45px; height: 45px; justify-content: center; transition: all 0.3s ease; }
        .cart-icon-wrapper:hover { background: var(--nav-scrolled); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); }
        .cart-count { position: absolute; top: -5px; right: -5px; background: #ef4444; color: white; border-radius: 50%; min-width: 20px; height: 20px; font-size: 0.75rem; font-weight: 700; display: none; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(239, 68, 68, 0.4); }
        @keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
        .cart-count.bounce { animation: bounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes slideInUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
    injectCartCSS();
    injectCartHTML();
    initEcommerce();
});
