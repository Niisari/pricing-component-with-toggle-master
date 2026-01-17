const updatePricing = () => {
  const toggleBtn = document.getElementById('toggle__btn');
  if (!toggleBtn) return;

  const annual = document.querySelector('.annual');
  const monthly = document.querySelector('.monthly');

  const pricingBasic = document.getElementById('pricing__basic');
  const pricingProfessional = document.getElementById('pricing__professional');
  const pricingMaster = document.getElementById('pricing__master');

  // 🔹 Restore state from localStorage
  const savedState = localStorage.getItem('toggle') === 'true';
  toggleBtn.classList.toggle('active', savedState);
  annual.classList.toggle('active', savedState);
  monthly.classList.toggle('active', !savedState);

  // 🔹 Set prices on load
  pricingBasic.textContent = savedState ? '$199.99' : '$19.99';
  pricingProfessional.textContent = savedState ? '$249.99' : '$24.99';
  pricingMaster.textContent = savedState ? '$399.99' : '$39.99';

  toggleBtn.addEventListener('click', () => {
    const isActive = toggleBtn.classList.toggle('active');

    annual.classList.toggle('active', isActive);
    monthly.classList.toggle('active', !isActive);

    pricingBasic.textContent = isActive ? '$199.99' : '$19.99';
    pricingProfessional.textContent = isActive ? '$249.99' : '$24.99';
    pricingMaster.textContent = isActive ? '$399.99' : '$39.99';

    // 🔹 Save state
    localStorage.setItem('toggle', isActive);
  });
};

document.addEventListener('DOMContentLoaded', updatePricing);