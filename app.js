
const grid=document.getElementById('productGrid');
products.forEach(p=>{
 const card=document.createElement('div');
 card.className='card';
 card.innerHTML=`
 <img src="${p.image}" style="width:100%;border-radius:10px">
 <h3>${p.name}</h3>
 <p>${p.description}</p>
 <p class="price">${p.price}</p>
 <button>Comprar</button>`;
 grid.appendChild(card);
});
