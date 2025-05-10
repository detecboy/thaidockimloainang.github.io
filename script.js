function addToCart() {
    const msg = document.getElementById('cart-message');
    msg.classList.remove('hidden');
    setTimeout(() => {
      msg.classList.add('hidden');
    }, 2000);
  }
  