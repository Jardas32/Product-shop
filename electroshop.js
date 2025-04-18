const block = document.querySelector('.textContent');
const totalPrices = document.querySelector('.count');
const spanCounts = document.querySelector('.spanCounts');
const urlProduct = 'https://fakestoreapi.com/products';

// function quntityPrice() {
//    let total = data.reduce((pre, item) => {
//        return pre + parseInt(item.price.replace(/\s/g, ''), 10) * item.quantity;
//    },0)

//    let totalPrice = total.toLocaleString('ru-RU', {
//       style: `currency`,
//       currency: `RUB`,
//       minimumFractionDigits: 0
//    })

//    count.textContent = `${totalPrice}`;
// }

// function renderCart() {
//       block.innerHTML = ``;
//       spanCounts.textContent = data.length;

//       if(data.length <= 0) {
//          let span = document.createElement('span');
//          span.setAttribute('class', 'spanTitle');
//          span.textContent = `Пусто!!!`;
//          block.append(span);
//       }
      
//    data.forEach((item, index) => {
//       // console.log(item);
//      let {id, name, price, image, quantity = 1} = item;
//      let numbPrice = parseInt(price.replace(/\s/g, ''), 10);
//      let quntityPrice = numbPrice * quantity;
//      let stringPrice = quntityPrice.toLocaleString('ru-RU', {
//       style: `currency`,
//       currency: `RUB`,
//       minimumFractionDigits: 0
//      });
     
//      let newcart = document.createElement('div');
//      newcart.setAttribute('class', 'newcart');
//      newcart.setAttribute('id', `${id}`);
//      newcart.innerHTML = `
//      <div class="zoom">
//      <img class="productImg" src="${image}">
//      </div>
//      <p class="title">${name}<p/>
//      <span class="price">${stringPrice}</span>
//      <div class="quntity">
//      <span data-index="${index}" class="btMinus">-</span>
//      <input type="text" value="${quantity}">
//      <span data-index="${index}" class="btPlus">+</span>
//      </div>
//      <button data-index="${index}" class="closed">X</button>
//      `
//      block.append(newcart);

// }) 

// quntityPrice();

// }

// block.addEventListener('click', (e) => {
//    const index = e.target.dataset.index;
//    if(e.target.classList.contains('btPlus')) {
//      data[index].quantity++;
//    }
//    else if(e.target.classList.contains('btMinus')) {
//      data[index].quantity--;
//      if(data[index].quantity <= 0) {
//        data.splice(index, 1);
//      }
//    }

//    renderCart();
// });

// renderCart();

//                   // Удаление товаров

// block.onclick = (e) => {
//    const position = e.target.getAttribute('data-index');
//    if(e.target.classList.contains('closed') && position !== null) {
//       data.splice(position, 1);
//    }
//    renderCart();
// }

// //                        // Popup



// window.addEventListener('DOMContentLoaded', function() {

//    const imgPopup = document.querySelector('.imgPopup');
//    const titlePopup = document.querySelector('.titlePopup');
//    const pricePopup = document.querySelector('.pricePopup');
//    const arrData = document.querySelectorAll('.card');
//    console.log(arrData);

// arrData.forEach(el => {
//    let openPopup = el.childNodes[3];
//    let img = el.childNodes[3].childNodes[1].attributes.src.textContent;
//    let name = el.childNodes[5].textContent;
//    let price = el.childNodes[6].textContent;
// openPopup.addEventListener('click', () => {
//       imgPopup.src = img;
//       titlePopup.textContent = name;
//       pricePopup.textContent = price;

//       document.querySelector('.poupbg').classList.add('poupbgclass');
//       document.querySelector('html').classList.add('noScroll');
// })

// })

// document.querySelector('.btclosedPopup').addEventListener('click', () => {
//    document.querySelector('.poupbg').classList.remove('poupbgclass');
//    document.querySelector('html').classList.remove('noScroll');
// })

// });

                  // Product

for (let i = 0; i < products.length; i++) {
    products[i].quantity = 1;
}
const arrProducts = products;

function renderCart() {
   function quantityTotal() {
      let total = arrProducts.reduce((pre, product) => {
          return pre + product.price * product.quantity;
      },0)
   
      let totalString = total.toLocaleString('en-US', {
         style: `currency`,
         currency: `USD`,
         minimumFractionDigits: 0
      });
   
   totalPrices.textContent = `${totalString}`;
};

   spanCounts.textContent = arrProducts.length;
   block.innerHTML = ``;
      arrProducts.forEach((item, index) => {
         let {id, image, title, price, quantity} = item;
         let priceQuantity = price * quantity;
         
         let normalprice = priceQuantity.toLocaleString('en-US', {
            style: `currency`,
            currency: `USD`,
            minimumFractionDigits: 0
         })

         if(item) {
            let card = document.createElement('div');
            card.setAttribute('id', `${id}`);
            card.setAttribute('class', 'card');
            card.innerHTML = `
            <button data-index="${index}" class="close">X</button>
            <div class="zoom">
            <img class="imgCard" src="${image}">
            </div>
            <p class="titleCard">${title}<p/>
            <span class="priceCard">${normalprice}</span>
            <div class="quntity">
            <span data-index="${index}" class="btMinus">-</span>
            <span data-index="${index}" class="input">${quantity}</span>
            <span data-index="${index}" class="btPlus">+</span>
            </div>
            <button data-index="${index}" class="closedCard">Add to cart</button>
            `
            block.appendChild(card);
         }
         
      })
      
   quantityTotal();
}

block.addEventListener('click', (e) => {
   const index = e.target.dataset.index;
   if(e.target.classList.contains('btPlus')) {
      arrProducts[index].quantity++;
   }
   else if (e.target.classList.contains('btMinus')) {
      arrProducts[index].quantity--;
      if(arrProducts[index].quantity <= 0) {
         arrProducts.splice(index, 1);
      } 
   }

   renderCart();
})

renderCart();

                  //   Удаление товаров

document.onclick = (e) => {
   const position = e.target.getAttribute('data-index');
   if(e.target.classList.contains('close') && position !== null) {
      arrProducts.splice(position, 1);
   }

   renderCart();
};


                       // Popup

block.addEventListener('click', (e) => {
   const targets = e.target;
   if(targets.closest('.zoom')) {
      const card = e.target.closest('.card');
      const img = card.querySelector('img').getAttribute('src');
      const name = card.querySelector('.titleCard').textContent;
      const price = card.querySelector('.priceCard').textContent;

      const imgPopup = document.querySelector('.imgPopup');
      const titlePopup = document.querySelector('.titlePopup');
      const pricePopup = document.querySelector('.pricePopup');

      imgPopup.src = img;
      titlePopup.textContent = name;
      pricePopup.textContent = price;

      document.querySelector('.poupbg').classList.add('poupbgclass');
      document.querySelector('html').classList.add('noScroll');
   }
});

document.querySelector('.btclosedPopup').addEventListener('click', () => {
   document.querySelector('.poupbg').classList.remove('poupbgclass');
   document.querySelector('html').classList.remove('noScroll');
});


                       // Product-Fetch


// fetch('https://fakestoreapi.com/products')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
// data.forEach(item => {
//    item.quantity = 1;
// });
// console.log(data);
// const productsData = data;

// console.log(productsData);


// function renderCart() {

//     function quntityPrice() {

//     let total = data.reduce((pre, item) => {
//          return pre + item.price;
//     },0)

//     let normalprice = total.toLocaleString('en-US', {
//        style: `currency`,
//        currency: `USD`,
//        minimumFractionDigits: 0
//     })
//        totalPrices.textContent = `${normalprice}`;
//     };

//     block.innerHTML = ``;
//       data.forEach((el, index) => {
//          let {id, image, title, price} = el;
//          let numbPrice = parseInt(price);
//           let quantity = 1;
//        console.log(quantity);
//             let card = document.createElement('div');
//             card.setAttribute('class', 'card');
//             card.innerHTML = `
//             <button data-index="${index}" class="close">X</button>
//             <div class="zoom">
//             <img class="imgCard" src="${image}">
//             </div>
//             <p class="titleCard">${title}<p/>
//             <span class="priceCard">${numbPrice}</span>
//             <div class="quntity">
//             <span data-index="${index}" class="btMinus">-</span>
//             <span data-index="${index}" class="input">${quantity}</span>
//             <span data-index="${index}" class="btPlus">+</span>
//             </div>
//             <button data-index="${index}" class="closedCard">Add to cart</button>
//             `
//             block.append(card);
//       })

//    quntityPrice();

// }

// block.addEventListener('click', (e) => {
//    const index = e.target.dataset.index;
//    if(e.target.classList.contains('btPlus')) {
//       data[index].quantity++;
//    }
//    else if (e.target.classList.contains('btMinus')) {
//       data[index].quantity--;
//    }

//    renderCart();
// })

// renderCart();

//                //  Удаление товаров

// block.onclick = (e) => {
//    const position = e.target.getAttribute('data-index');
//    if(e.target.classList.contains('close')) {
//       data.splice(position, 1);
//    }
//    renderCart();
// }

// });
