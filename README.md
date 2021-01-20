# bought
e-commerce platform

## Description:


## Built with:
- [React](https://reactjs.org/)
- [Stripe](https://stripe.com/)
- [Material UI](https://material-ui.com/)
- [Commerce.js](https://commercejs.com/)  

## Getting Started:

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- npm install:
    - @material-ui/core @material-ui/icons 
    - @chec/commerce.js 
    - @stripe/react-stripe-js @stripe/stripe-js 
    - react-router-dom react-hook

- file structure setup:
    - components > Products > Product

- Products.jsx
    - imported Grid from @material-ui-core
    - created filler products
    - create Products w/ rfac, functional components
    - use Grid + products.map for rendering
    - set mobile sizing

- Navigation Bar
    - fully mobile responsive
    - components moving through components > index.js to App.js
    - styling via styles.js in Products folder
    -

- Commerce.js @ 35min
    - creating a new instance of that specific Commerce (?) > this then becomes are store
    - retreive public API key from Commerce.js account
    - create .env file >> don't push to GitHub, .gitignore
    - fetch the Products, in App
    - in App:
        - setup useState, useEffect
        - set async function, const fetchProducts
        - fetch (await) response a specific api call @ commerce instance
        - returns a promise, use await to see what is inside of the promise, then destructor the response which is the products
        - set data to setProducts

    - useEffect hook
        - dependency array set blank

    - created products in Commerce/Bought
        - tested via console.log, passing through!

    - passing through in App.js, passed as Props to Products

- Chart
    - set useState in App
    - create fetchCart, add to useEffect, console.log
    - create handleAddToCart, async, two parameters, await, setCart(item.cart)
    - pass handleAddToCart to Products, pass to Product, add onClilck to IconButton, set up onAddToCart to be a call-back function

    - passed totalItems={cart.total_items} to Navbar via props, updated <Badge badgeContent={totalItems}> to pass in actual numbers of items in Cart

- Cart
    - rafce
    - const isEmpty ? <EmptyCart  /> : <FilledCart />

    - EmptyCart and FilledCart to control state based on items placed in Cart

    - pass App/cart state to Cart using props
    - Cart imported into App via Components/index.js

    - () not {}

- CartItem
    - CI will only be used inside of Cart
    - rafce > import from materialUI > created+imported styles.js
    - ** in Cart, import/create CartItem (inside of FilledCart), pass item
    back to CartItem.jsx
    - added CartContent w/ name & price, created buttons to add/decrease specific item

- ReactRouter
 - setup for products and cart
 
 - Navbar
    - IconButton, added component={Link} to='/cart', links cart icon to cart
    - Toolbar, added component={Link} to='/', links products via bought logo?
    - imported useLocation hook via react-router-dom >>> set up logic: 
    location.pathname === '/' && ()

- Update Quantity of Specific product
    - const handleUpdateCartQty, deconstruct {cart}, async function, await commerece.>
    - const handleRemoveFromCart
    - const handleEmptyCart
    - >> passed to Cart via props
    - added onClick handler to EmptyCart, passed in handleEmptyCart
    - CartItem.js
        - onClick for Quantity decrease, increase and Remove
        - passed down via Props from App through Cart, prop drilling concern

## Stripe
    - Cart > set Link on Checkout btn to /checkout
    - App > set Route for /checkout
    - Created CheckoutForm folder, w/ Checkout/Checkout.jsx
    - Checkout.jsx >
    imported materialUI pieces

    - Checkout >
    setup Stepper process, used map() on steps
    - set styles.js, copied
    - linked export/import for Checkout through index.js to App.js
    
    - Checkout >
    const Form, two components
    - <Confirmation />
    
    - created AddressForm and PaymentForm + structure for Confirmation to render
    - tested, render

    - React-hook-form > used because there are less total re-renders than using Formik or Redux Form
    - CustomTextField to control text ?

    - set f.name, l.name, address, email, city, p.code in AddressForm
    





