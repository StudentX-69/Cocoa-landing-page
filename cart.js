const unitPrice = 4.5;
        let cartTotalItems = 0;

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }

        function updateQty(change) {
            const qtyInput = document.getElementById('qty-input');
            let currentQty = parseInt(qtyInput.value);
            
            if (isNaN(currentQty)) currentQty = 1;
            
            currentQty += change;
            
            if (currentQty < 1) currentQty = 1;
            
            qtyInput.value = currentQty;
            calculateTotal();
        }

        function calculateTotal() {
            const qtyInput = document.getElementById('qty-input');
            const priceDisplay = document.getElementById('price-display');
            
            let qty = parseInt(qtyInput.value);
            if (isNaN(qty) || qty < 1) qty = 1;
            
            const total = (qty * unitPrice).toFixed(2);
            priceDisplay.textContent = `$${total}`;
        }

        function addToCart() {
            const qty = parseInt(document.getElementById('qty-input').value);
            cartTotalItems += qty;
            document.getElementById('cart-count').textContent = `Cart (${cartTotalItems})`;
            
            // Visual feedback
            const btn = document.querySelector('.addcart');
            const originalText = btn.textContent;
            btn.textContent = "Added!";
            btn.style.backgroundColor = "#90ee90";
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = "#c9e2f7";
            }, 1000);
        }