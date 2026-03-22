const player = {
  name: "你",
  hp: 4,
  maxHp: 4,
  hand: []      // 手牌数组，每张牌 { type: "sha"|"shan" }
};

const enemy = {
  name: "AI",
  hp: 4,
  maxHp: 4,
  hand: []
};
const allCards = ["sha","sha","sha","sha","shan","shan"]; // 简单配比
function drawCards(character, count) {
  for(let i=0; i<count; i++) {
    const card = allCards[Math.floor(Math.random() * allCards.length)];
    character.hand.push(card);
  }
}
function attack(attacker, defender, useCard) {
  if(useCard === "sha") {
    // 如果 defender 有闪，则发动闪
    const shanIndex = defender.hand.indexOf("shan");
    if(shanIndex !== -1) {
      defender.hand.splice(shanIndex,1);
      return "闪避成功";
    } else {
      defender.hp--;
      return `造成1点伤害，${defender.name}剩余血量${defender.hp}`;
    }
  }
  // 其他卡牌逻辑可扩展
}