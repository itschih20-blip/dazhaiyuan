/* ========================
   AOS
   ======================== */
AOS.init({
  duration: 1200,
  once: false,
  mirror: true
});

/* ========================
   Progress Bar
   ======================== */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

/* ========================
   Back To Top
   ======================== */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ========================
   FAQ
   ======================== */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* ========================
   Quiz
   ======================== */
const quizButtons = document.querySelectorAll(".quiz-btn");
const quizResult = document.getElementById("quiz-result");

quizButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const result = btn.dataset.result;

   if(result === "kimchi"){

  if(currentLang === "zh"){

    quizResult.innerHTML =
    "⟡ 推薦你：ꕤ 黃金泡菜 ꕤ <br>爽脆開胃，最受歡迎的經典口味！";

  }else{

    quizResult.innerHTML =
    "⟡ Recommended: ꕤ Golden Kimchi ꕤ <br>Crispy, refreshing and our bestseller!";

  }

}

if(result === "kelp"){

  if(currentLang === "zh"){

    quizResult.innerHTML =
    "⟡ 推薦你：〻 黃金海帶絲 〻 <br>Q彈爽脆，蒜香濃郁超涮嘴！";

  }else{

    quizResult.innerHTML =
    "⟡ Recommended: 〻 Golden Kelp 〻 <br>Chewy texture with rich garlic flavor!";

  }

}

if(result === "mushroom"){

  if(currentLang === "zh"){

    quizResult.innerHTML =
    "⟡ 推薦你：𐩺 白玉金針菇 𐩺 <br>滑嫩帶辣，超級下飯！";

  }else{

    quizResult.innerHTML =
    "⟡ Recommended: 𐩺 Enoki Mushroom 𐩺 <br>Tender, mildly spicy and perfect with rice!";

  }

}

  });
});

/* ========================
   Shopping Cart
   ======================== */

let currentQty = 1;

const qtyDisplay =
document.getElementById("qtyDisplay");

const minusQty =
document.getElementById("minusQty");

const plusQty =
document.getElementById("plusQty");

   const addCartBtn = document.getElementById('addCartBtn');
let cart = [];

addCartBtn.addEventListener('click', () => {
  const product = document.getElementById('productSelect').value;
  const spicy = document.getElementById('spicySelect').value;

  const qty = currentQty;

const existingItem =
cart.find(item =>

item.product === product &&
item.spicy === spicy

);

if(existingItem){

existingItem.qty += qty;

}else{

cart.push({
product,
spicy,
qty
});

}

  renderCart();
  flyToCart();
  currentQty = 1;

qtyDisplay.textContent = 1;

orderModal.style.display = "none";
});

function renderCart() {

  const cartPreview =
  document.getElementById("cartPreview");

  const cartCount =
  document.getElementById("cartCount");

  const totalQty =
  cart.reduce(
    (sum,item)=>sum+item.qty,
    0
  );


  cartCount.textContent =
  totalQty;

  if(cart.length===0){

    cartPreview.innerHTML =
    "<p>購物車目前沒有商品</p>";

    return;

  }

  cartPreview.innerHTML =
  cart.map((item,index)=>`

  <div class="cart-item">

    <h4>${item.product}</h4>

    <p>辣度：${item.spicy}</p>

<div class="qty-row">

  <div class="qty-box">

    <button
    class="qty-btn"
    onclick="changeQty(${index},-1)">
    －
    </button>

    <span>${item.qty}</span>

    <button
    class="qty-btn"
    onclick="changeQty(${index},1)">
    ＋
    </button>

  </div>

  <button
  class="delete-btn"
  onclick="removeItem(${index})">

    <i class="fa-solid fa-trash"></i>

  </button>

</div>

  </div>

  `).join("");
const totalPrice =
totalQty * 200;

let shipping = 0;

if(totalQty >= 12){

  shipping = 0;

}else if(totalQty >= 5){

  shipping = 225;

}else{

  shipping = 160;

}

const finalPrice =
totalPrice + shipping;

cartPreview.innerHTML += `

<div class="cart-summary">

  <p>商品數量：${totalQty} 件</p>

  <p>單價：NT$200 / 罐</p>

  <p>商品金額：NT$${totalPrice}</p>

  <p>運費：NT$${shipping}</p>

  <p><strong>應付總額：NT$${finalPrice}</strong></p>

</div>

`;

}

function flyToCart() {
  const flying = document.createElement('div');
  flying.className = 'flying-item';
  flying.innerHTML = '🥬';
  flying.style.left = '50%';
  flying.style.top = '50%';
  document.body.appendChild(flying);

  setTimeout(() => {
    flying.remove();
  }, 800);
}

/* ========================
   Translations
   ======================== */
const translations = {

  zh: {
    navHome: "首頁",
    navStory: "品牌故事",
    navProducts: "產品介紹",
    navQuiz: "推薦測驗",
    navFaq: "FAQ",
    heroTitle: "家傳風味．溫暖登場",
    heroText: "從一罐泡菜開始，把家的味道帶上餐桌。",
    exploreBtn: "探索產品",
    storyTitle: "品牌故事",
    storyText: "從家人分享的味道，到更多人餐桌上的日常。我們相信，最好的味道來自真誠與堅持。",
    productsTitle: "產品介紹",
    quizTitle: "泡菜推薦測驗",
    quizText: "你喜歡哪種口感？",
    kimchiTitle: "黃金泡菜",
    kimchiDesc: "大宅院最受歡迎的招牌商品。嚴選新鮮山東白菜，搭配獨家黃金蒜香醬汁，口感爽脆、香氣濃郁，不論配飯、拌麵或單吃，都讓人一口接一口。",
    kelpTitle: "黃金海帶絲",
    kelpDesc: "精選高品質海帶，Q彈爽脆、蒜香濃郁，是燒烤、火鍋、家常料理的最佳配角。",
    mushroomTitle: "白玉金針菇",
    mushroomDesc: "鮮嫩金針菇搭配特製醬料，入口滑順、微辣開胃，是許多顧客回購率最高的品項之一。",
    faqTitle: "FAQ",
    faq1Question: "泡菜需要冷藏嗎？",
    faq1Answer: "需要冷藏保存，以維持最佳風味。",
    faq2Question: "保存期限多久？",
    faq2Answer: "依產品標示為主。",
    faq3Question: "如何訂購？",
    faq3Answer: "加入官方LINE即可訂購。",
    faq4Question: "可以宅配嗎？",
    faq4Answer: "提供冷藏宅配服務，確保產品新鮮送達。",
    faq5Question: "運費如何計算？",
    faq5Answer: "1～4罐：160元｜5～11罐：225元｜12罐以上免運費",
    faq6Question: "收到商品後可以放多久？",
    faq6Answer: "請依包裝標示保存期限為主，開封後建議盡快食用完畢。",
    faq7Question: "辣度可以選擇嗎？",
    faq7Answer: "目前提供辣與不辣，可依個人口味選擇。",
    quizCrunchy: "爽脆",
    quizChewy: "Q彈",
    quizTender: "滑嫩",
    valueTitle: "品牌理念",
    warmTitle: "溫暖",
    warmDesc: "延續阿嬤傳承的味道與記憶。",
    sincereTitle: "真誠",
    sincereDesc: "堅持手工製作與真材實料。",
    closeTitle: "親近",
    closeDesc: "像家人一樣陪伴每位顧客。",
    innovateTitle: "創新",
    innovateDesc: "用新的方式傳承老味道。",
    lineTitle:"官方 LINE",
    lineTip:"加入好友獲得最新優惠、新品上市與限時活動消息"
  },

  en: {
    navHome: "Home",
    navStory: "Story",
    navProducts: "Products",
    navQuiz: "Quiz",
    navFaq: "FAQ",
    heroTitle: "Traditional Flavor, Made With Heart",
    heroText: "From a jar of kimchi to a warm family dining table.",
    exploreBtn: "Explore Products",
    storyTitle: "Our Story",
    storyText: "From a family recipe to a flavor shared by many. We believe great taste comes from sincerity and dedication.",
    productsTitle: "Products",
    quizTitle: "Kimchi Finder",
    quizText: "Which texture do you prefer?",
    kimchiTitle: "Golden Kimchi",
    kimchiDesc: "Our signature bestseller. Fresh Shandong cabbage paired with our exclusive golden garlic sauce delivers a crisp texture and rich aroma that pairs perfectly with rice, noodles, or enjoyed on its own.",
    kelpTitle: "Golden Kelp",
    kelpDesc: "Selected premium kelp with a chewy, refreshing texture and rich garlic flavor. A perfect side dish for barbecue, hot pot, and everyday meals.",
    mushroomTitle: "Enoki Mushroom",
    mushroomDesc: "Tender enoki mushrooms blended with our special sauce. Smooth, mildly spicy, and one of our customers' most frequently repurchased favorites.",
    faq1Question: "Does the kimchi need refrigeration?",
    faq1Answer: "Yes. Please keep refrigerated for the best flavor.",
    faq2Question: "How long is the shelf life?",
    faq2Answer: "Please refer to the expiration date on the package.",
    faq3Question: "How can I place an order?",
    faq3Answer: "Simply add our official LINE account to place an order.",
    faq4Question: "Do you offer home delivery?",
    faq4Answer: "Yes. We provide refrigerated delivery to ensure freshness.",
    faq5Question: "How is shipping calculated?",
    faq5Answer: "1–4 jars: NT$160 ｜ 5–11 jars: NT$225 ｜ Free shipping for 12 jars or more",
    faq6Question: "How long can I keep the product after receiving it?",
    faq6Answer: "Please follow the expiration date on the package. Once opened, consume as soon as possible.",
    faq7Question: "Can I choose the spice level?",
    faq7Answer: "We currently offer spicy and non-spicy options to suit different preferences.",
    quizCrunchy: "Crunchy",
    quizChewy: "Chewy",
    quizTender: "Tender",
    valueTitle: "Our Values",
    warmTitle: "Warmth",
    warmDesc: "Passing down the flavors and memories from Grandma's kitchen.",
    sincereTitle: "Sincerity",
    sincereDesc: "Committed to handmade craftsmanship and quality ingredients.",
    closeTitle: "Closeness",
    closeDesc: "Treating every customer like family.",
    innovateTitle: "Innovation",
    innovateDesc: "Bringing traditional flavors to new generations in modern ways.",
    lineTip:"Join us to receive promotions, new product updates and limited-time offers"

  }
};

/* ========================
   Language Switch
   ======================== */
const langBtn = document.getElementById("language-btn");
let currentLang = localStorage.getItem("language") || "zh";

function applyLanguage() {
  document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.dataset.lang;
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

applyLanguage();

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("language", currentLang);
  applyLanguage();
});
/* ========================
   Hero Parallax
   ======================== */
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroBg.style.transform = `translateY(${scrollY * 0.2}px)`;
});

/* ========================
   Product Hover Glow
   ======================== */
document.querySelectorAll(".product-showcase").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,.9), transparent 60%)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "transparent";
  });
});

/* ========================
   Console
   ======================== */
console.log(`
🥬 DA ZHAI YUAN

家傳風味．溫暖登場

Website Loaded Successfully
`);

/* ========================
   Order Modal
   ======================== */
const openOrder = document.getElementById("openOrder");
const orderModal = document.getElementById("orderModal");

if (openOrder) {
  openOrder.addEventListener("click", () => {
    orderModal.style.display = "flex";
  });
}

orderModal.addEventListener("click", (e) => {
  if (e.target === orderModal) {
    orderModal.style.display = "none";
  }
});


/* ========================
   Cart Sidebar
   ======================== */
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");

if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
  });
}

if (cartOverlay) {
  cartOverlay.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
  });
}



const closeModal =
document.getElementById("closeModal");

if(closeModal){

  closeModal.addEventListener("click",()=>{

    orderModal.style.display = "none";

  });

}

if(minusQty){

minusQty.addEventListener("click",()=>{

if(currentQty > 1){

currentQty--;

qtyDisplay.textContent =
currentQty;

}

});

}

if(plusQty){

plusQty.addEventListener("click",()=>{

currentQty++;

qtyDisplay.textContent =
currentQty;

});

}

function changeQty(index, amount){

  cart[index].qty += amount;

  if(cart[index].qty <= 0){

    cart.splice(index,1);

  }

  renderCart();

}

function removeItem(index){

  cart.splice(index,1);

  renderCart();

}