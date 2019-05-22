import React, { Component } from 'react'
import { linkData } from './linkData'
import { socialData } from './socialData'
import { items } from './productData'
import axios from 'axios'

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        token:'',
        login: '',
        email: '',
        password: '',
        repeatPassword:'',
        firstname: '',
        lastname: '',
        resetPasswordInfo: '',
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true,
        search: '',
        price:0,
        min:0,
        max:0,
        company:'all',
        shipping:false,
        fireRedirect:false

    }

    componentDidMount(){
        this.getAuthData()
        this.setProducts(items)
    }

    //set products
    setProducts = products => {
        let storeProducts = products.map(item =>{
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        const product = {id, ...item.fields, image};
        return product;
        });
        let featuredProducts = storeProducts.filter(item => 
            item.featured ===true);
        
        let maxPrice = Math.max(...storeProducts.map(item => item.price));

        this.setState(
            {
                storeProducts, 
                filteredProducts:storeProducts,
                featuredProducts,
                cart:this.getStorageCart(),
                singleProduct:this.getStorageProduct(),
                loading:false,
                price:maxPrice,
                max:maxPrice,
            },
            () => { 
                this.addTotals(); 
            }
        );
    }

    getStorageCart = () => {
        let cart;
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        else{
            cart = [];
        }
        return cart;
    }

    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') 
        ?  JSON.parse(localStorage.getItem('singleProduct')) 
        : {};
    }

    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            tax,
            total
        };
    }

    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal:totals.total
        })
    }

    syncsStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count:1, total};
            tempCart = [...tempCart, cartItem];
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(
            () => {
                return { cart: tempCart };
            },
            () => {
                this.addTotals();
                this.syncsStorage();
                // this.openCart();
            }
        );
    }

    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct:{...product},
            loading:false,
        })
    }


    //handle sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    //handle cart
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen})
    }

    //close cart
    closeCart = () => {
        this.setState({cartOpen: false})
    }

    //open cart
    openCart = () => {
        this.setState({cartOpen: true})
    }
    //cart functionality
    // increment
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() => {
                this.addTotals();
                this.syncsStorage();
            }
        )
    }
    
    //dencrement
    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);

        if(cartItem.count > 1) {
            cartItem.count--;
            cartItem.total = cartItem.count * cartItem.price;
            cartItem.total = parseFloat(cartItem.total.toFixed(2));
            this.setState(() => {
                return {
                    cart:[...tempCart]
                }
            },() => {
                    this.addTotals();
                    this.syncsStorage();
                }
            )
        }
        
    }

    //remove item
    removeItem = (id) =>{
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({
                cart:[...tempCart]
        },() => {
                this.addTotals();
                this.syncsStorage();
            }
        );
    }

    //empty cart
    clearCart = () =>{
        let tempCart = [...this.state.cart];
        tempCart = [];
        this.setState({
            cart: tempCart
    },() => {
            this.addTotals();
            this.syncsStorage();
        }
    );
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        this.setState({
            [name]:value,

        },
            this.sortData
        );
    }

    sortData = () => {
        const { storeProducts, price, company, shipping, search } = this.state;
        let tempPrice = parseInt(price);

        let tempProducts = [...storeProducts];
        
        tempProducts = tempProducts.filter(item => item.price <= tempPrice);

        if( company !=="all" ) {
            tempProducts = tempProducts.filter(item => item.company === company);
        }

        if( shipping ) {
            tempProducts = tempProducts.filter(item => item.freeShipping === true);
        }

        if( search.length > 0 ) {
            tempProducts = tempProducts.filter(item => {
                let tempSearch = search.toLowerCase();
                let tempTitle = item.title.toLowerCase().slice(0, search.length);
                if(tempSearch === tempTitle) {
                    return item;
                }
                return false;
            })
        }

        this.setState({filteredProducts: tempProducts});
    }

    resetPassword = e => {
        this.setState({
            resetPasswordInfo: `Check your email addres to set a new password!`
        })
    }

    logIn = e => {
        var data = {
            'email': this.state.email,
            'password':this.state.password
        }

        axios.post('/api/login', data)
        .then(response => {
            console.log('1',response.data.data);
            if(response.status === 200){
                this.setState({
                    token: response.data.data.token, 
                    firstname: response.data.data.firstname,
                    fireRedirect: true
                })

                localStorage.setItem('auth_data', JSON.stringify({
                    token:this.state.token,
                    firstname:this.state.firstname,
                    fireRedirect:this.state.fireRedirect
                }));
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    signUp = e => {
        // console.log(this.state)

        // var token = this.state.token

        // var config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     }
        // }

        var data = {
            'firstname': this.state.firstname,
            'lastname': this.state.lastname,
            'email': this.state.email,
            'password':this.state.password,
            'repeatPassword': this.state.repeatPassword
        }

        axios.post('/api/register', data)
        .then(response => {
            if(response.status === 200){
                this.setState({
                    token: response.data.data.token, 
                    firstname: response.data.data.firstname,
                    fireRedirect: true
                })

                localStorage.setItem('auth_data', JSON.stringify({
                    token:this.state.token,
                    firstname:this.state.firstname,
                    fireRedirect:this.state.fireRedirect
                }));
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    logOut = () => {
        this.setState({
            token: '', 
            firstname: '',
            fireRedirect: false
        })

        localStorage.removeItem('auth_data');
    }

    getAuthData = () => {
        if(localStorage.getItem('auth_data')){
            var authData = JSON.parse(localStorage.getItem('auth_data'))
            
            this.setState({
                token: authData.token,
                firstname: authData.firstname,
                fireRedirect: authData.fireRedirect
            });
            console.log(authData.token,this.state)
        }
    }

    render(){
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    addToCart: this.addToCart,
                    setSingleProduct:this.setSingleProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart : this.clearCart,
                    handleChange: this.handleChange,
                    resetPassword: this.resetPassword,
                    logIn: this.logIn,
                    signUp: this.signUp,
                    logOut: this.logOut
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };