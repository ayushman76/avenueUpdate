contact= () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
	article.setAttribute('class','contact');
    article.innerHTML += '<div class="container"><div class="row"><h4 class="text-center">Get In Touch</h4></div><!--//row--></div><!--//container-->'

    var contact_jason = [{
        phone01:'8224973413',
		phone02:'8225989867',
		email:'avenuedesign768@gmail.com',
		address:'Sector-7,Ganga Nagar,Mangla Chowk,Bilaspur, IN',
		insta:'<i class="fa fa-instagram" style="font-size:28px"></i>',	
		fb:'<i class="fa fa-facebook-f" style="font-size:28px"></i>',
		wp:'<i class="fa fa-whatsapp" style="font-size:28px"></i>',
		para02:"Looking for the best web and mobile apps development services? Code Fusion helps in transforming your notions into reality! Code Fusion is putting in its best efforts to become the most sought-after and leading provider of offshore development solutions and an unified outsourcing framework in the IT industry."
    }, {
        img: 'images/contact.gif'
    }]

    document.querySelector('.contact>.container>.row').innerHTML += `
      
        <div class="col-md-6"> 
            <div class="pad-10">
                <img src="${contact_jason[1].img}" class="img-responsive">
            </div>
        </div>
        <!--//col-md-6-->
		  <div class="col-md-6"> 
            <div class="myslider_content">
                <ul class="nav">
					<li><a href="tel:${contact_jason[0].phone01}">${contact_jason[0].phone01}</a></li>
					<li><a href="tel:${contact_jason[0].phone02}">${contact_jason[0].phone02}</a></li>
					<li><a href="mailto:${contact_jason[0].email}">${contact_jason[0].email}</a></li>
					<li><a href="locate:${contact_jason[0].address}">${contact_jason[0].address}</a></li>
				</ul>
				<ul class="nav navbar-nav">
					<li><a href="https://www.instagram.com/avenuedesign768/">${contact_jason[0].insta} Instagram</a></li>
					<li><a href="tel:${contact_jason[0].phone02}">${contact_jason[0].fb} Facebook</a></li>	
					<li><a href="https://api.whatsapp.com/send?phone=918225989867&amp;text=Hi, I am visiting your website and I Want a website: www.avenuedesign.in">${contact_jason[0].wp} WhatsApp</a></li>
					
				</ul>
				
				
				
				<p>${contact_jason[0].para02}</p>
				
				      
				</div>
				
				
            </div>
        </div>
        <!--//col-md-6-->
    `;
}

contact();