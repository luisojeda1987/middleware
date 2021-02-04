const mainController= {
    home:(req,res)=>{
        res.render('index',{
            title:'pagina principal',
        });
    },
    nosotros:(req,res)=>{
        res.render('index', {
            title:'sobre nosotros',
        });
    },
    contacto:(req,res)=>{
        res.render('index', {
            title: 'pagina de contacto',
        });
    },
    faqs: (req,res)=>{
        res.render('index', {
            title: 'preguntas frecuentes',
        });
    },
    admin: (req,res)=>{
        res.render('index', {
            title: `Hola admin: ${req.admin}`
        });
    },
};

module.exports=mainController;