var Product=require('../models/product');

var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping",{useNewUrlParser:true,useUnifiedTopology:true});

var products=[
    new Product({
        imagePath: 'https://carzbass.com/wp-content/uploads/2019/08/2019-rolls-royce-cullinan-1545170852.jpg',
        title: 'RollesRoys',
        description: 'All toys available!!!',
        price:'10cr'
    }),

    new Product({
        imagePath:'https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg',
        title:'Tesla',
        description:'Some quick example text to build on the card  the cards content',
        price: '60 Cores'
    }),

    new Product({
        imagePath:'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
        title:'Porsh',
        description:'Some quick example text to build on the card  the cards content',
        price: '60 Cores'
    }),
    new Product({
        imagePath:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Ferrari-Portofino/6172/1550828910903/front-left-side-47.jpg',
        title:'Ferrari',
        description:'cards content example text to build on the card  the cards content the cards content',
        price: '6 Cores'
    }),
    new Product({
        imagePath:'https://s.marketwatch.com/public/resources/images/MW-HY837_at_gla_ZH_20200122173813.jpg',
        title:'Mahindra',
        description:'Mahindra Thar content example text to build on the card  the cards content the cards content',
        price: '90 Lace'
    }),
    new Product({
        imagePath:'https://imgd.aeplcdn.com/600x337/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85',
        title:'Toyota',
        description:'Toyota Innova Crystla content example text to build on the card  the cards content the cards content',
        price: '20 Lace'
    })
];

var done=0;
for(var i=0; i<products.length; i++)
{
    products[i].save(function(err,result){
        done++;
        if(done==products.length)
        {
            exit();
        }
    });
}

function exit()
{
    mongoose.disconnect(); 
}