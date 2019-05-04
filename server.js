
const express = require('express');

const app = express();

app.get('/api/main-menu', (req, res) => {
    const menuData = [
    {
        id:1,
        text:'home',
        path:'/'
    },
    {
        id:2,
        text:'about us',
        path:'/about'
    },
    {
        id:3,
        text:'products',
        path:'/products'
    },
    {
        id:4,
        text:'contact',
        path:'/contact'
    },
    {
        id:5,
        text:'cart',
        path:'/cart'
    },

];

    res.json(menuData);
});

app.get('/api/social-links', (req, res) => {
    const socialLinks = [
        {
            id:1,
            icon: "FaFacebook" ,
            url:'https://www.facebook.com'
        },
        {
            id:2,
            icon:"FaTwitter",
            url:'https://www.twitter.com'
        },
        {
            id:3,
            icon:"FaLinkedin",
            url:'https://www.linkedin.com'
        }
    ];

    res.json(socialLinks);
});

app.get('/api/products', (req, res) => {
    const products = [
        {
            sys: { id: 0 },
            fields: {
            title: "google pixel - black",
            price: 10,
            company: "google",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: true,
            image: { fields: { file: { url: "img/product-0.png" } } }
            }
        },
        {
            sys: { id: 1 },
        
            fields: {
            title: "samsung s7 - white",
            price: 20,
            company: "samsung",
            freeShipping: false,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-1.png" } } }
            }
        },
        {
            sys: { id: 2 },
        
            fields: {
            title: "htc 10 - black",
            price: 30,
            company: "htc",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-2.png" } } }
            }
        },
        {
            sys: { id: 3 },
        
            fields: {
            title: "htc 10 - white",
            price: 15,
            company: "htc",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-3.png" } } }
            }
        },
        {
            sys: { id: 4 },
        
            fields: {
            title: "samsung s7 - black",
            price: 45,
            company: "google",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-4.png" } } }
            }
        },
        {
            sys: { id: 5 },
        
            fields: {
            title: "samsung galaxy A8 - black",
            price: 55,
            company: "samsung",
            freeShipping: false,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-5.png" } } }
            }
        },
        
        {
            sys: { id: 6 },
        
            fields: {
            title: "fuji X100s photo camera",
            price: 90,
            company: "fuji",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: true,
        
            image: { fields: { file: { url: "img/product-6.png" } } }
            }
        },
        {
            sys: { id: 7 },
        
            fields: {
            title: "canon Eos 30 photo camera",
            price: 120,
            company: "canon",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-7.png" } } }
            }
        },
        {
            sys: { id: 8 },
        
            fields: {
            title: "nikon D 3100 photo camera",
            price: 55,
            company: "nikon",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-8.png" } } }
            }
        },
        {
            sys: { id: 9 },
        
            fields: {
            title: "acer desktop computer",
            price: 35,
            company: "acer",
            freeShipping: false,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: true,
        
            image: { fields: { file: { url: "img/product-9.png" } } }
            }
        },
        {
            sys: { id: 10 },
        
            fields: {
            title: "hp desktop computer",
            price: 75,
            company: "hp",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
        
            image: { fields: { file: { url: "img/product-10.png" } } }
            }
        },
        {
            sys: { id: 11 },
        
            fields: {
            title: "lenovo desktop computer",
            price: 110,
            company: "lenovo",
            freeShipping: false,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
            image: { fields: { file: { url: "img/product-11.png" } } }
            }
        },
        {
            sys: { id: 12 },
        
            fields: {
            title: "dell desktop computer",
            price: 28,
            company: "dell",
            freeShipping: true,
            description:
                "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
            featured: false,
            image: { fields: { file: { url: "img/product-12.png" } } }
            }
        }
        ];

    res.json(products);
});

const port = 9000;

app.listen(port, () => `Server running on port ${port}`);