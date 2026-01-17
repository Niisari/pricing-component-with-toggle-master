const updatePricing = () => {
  const toggleBtn = document.getElementById('toggle__btn');
  if (!toggleBtn) return;

  const annual = document.querySelector('.annual');
  const monthly = document.querySelector('.monthly');

  const pricingBasic = document.getElementById('pricing__basic');
  const pricingProfessional = document.getElementById('pricing__professional');
  const pricingMaster = document.getElementById('pricing__master');

  toggleBtn.addEventListener('click', () => {
    const isActive = toggleBtn.classList.toggle('active');

    annual.classList.toggle('active', isActive);
    monthly.classList.toggle('active', !isActive);

    pricingBasic.textContent = isActive ? '$199.99' : '$19.99';
    pricingProfessional.textContent = isActive ? '$249.99' : '$24.99';
    pricingMaster.textContent = isActive ? '$399.99' : '$39.99';
  });
};

document.addEventListener('DOMContentLoaded', updatePricing);