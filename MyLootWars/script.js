document.addEventListener("DOMContentLoaded", () => {
    const oborotenCard = document.querySelector(".character-card img[alt='Оборотень']");
    const modal = document.getElementById("modal-oboroten");
    const closeBtn = modal.querySelector(".close");
    const levelInput = document.getElementById("level");
    const manaUse = document.getElementById("mana-use");
    const skillLevel = document.getElementById("skill-level");
    const levelValue = document.getElementById("level-value");
  
    oborotenCard.addEventListener("click", () => modal.classList.remove("hidden"));
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  
    levelInput.addEventListener("input", () => {
      const level = parseInt(levelInput.value);
      levelValue.textContent = level;
      // Расчёт маны: 1 уровень = 6, 20 уровень = 2 (линейно)
      const mana = 6 - ((level - 1) * (4 / 19));
      manaUse.textContent = mana.toFixed(1);
      // Расчёт уровня способности: 1 уровень = 1, 20 уровень = 4 (округление вниз)
      const skill = Math.floor(1 + (level - 1) * (3 / 19));
      skillLevel.textContent = skill;
    });
  });
  