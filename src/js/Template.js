class Template
{
	ImageLazyLoad(target)
	{
		if(!target)
		{
			$('.lazyLoadImage').each(function()
			{
				if($(this).data('image'))
				{
					$(this).addClass('imageloaded').css({'background-image':'url('+$(this).data('image')+')'});
				}
			});
		}
		else
		{
			target.each(function()
			{
				$(this).addClass('imageloaded').css({'background-image':'url('+$(this).data('image')+')'});
			});
		}
	}

	responsiveChanges()
	{
		const innerTemplate = new Template;

		if($(window).width() <= 1024)
		{
			/* Destaques -> Tecnologia */
			$('#mainDisplay .blcGeral ul.postList').removeClass('vert medium').addClass('horiz small');
			innerTemplate.ImageLazyLoad( $('#mainDisplay .blcGeral ul.postList li .lazyLoadImage') );
		}
		else
		{
			$('#mainDisplay .blcGeral ul.postList').removeClass('horiz small').addClass('vert medium');
			innerTemplate.ImageLazyLoad( $('#mainDisplay .blcGeral ul.postList li .lazyLoadImage') );
		}

		if($(window).width() <= 992)
		{
			/* Tutoriais -> Tecnologia */
			$('#tutoriaisHome ul.postList').removeClass('vert medium').addClass('horiz small');
			innerTemplate.ImageLazyLoad( $('#tutoriaisHome ul.postList li .lazyLoadImage') );
		}
		else
		{
			$('#tutoriaisHome ul.postList ul.postList').removeClass('horiz small').addClass('vert medium');
			innerTemplate.ImageLazyLoad( $('#tutoriaisHome ul.postList li .lazyLoadImage') );
		}
	}

	bannerSystem()
	{
		function responsiveBanner(settings)
		{
			if($(window).width() >= 1024)
			{
				settings.image.attr('src',settings.desktop);
			}		
			
			if($(window).width() < 1024)
			{
				if(settings.tablet)
				{
					settings.image.attr('src',settings.tablet);
				}
				else
				{
					settings.image.attr('src',settings.desktop);
				}
			}

			if($(window).width() < 560)
			{
				settings.image.attr('src',settings.mobile);
			}	

			settings.parent.removeClass('inicial');
		}

		$('a.bannerSystem').each(function()
		{
			responsiveBanner(
			{
				parent 	: $(this),
				nome 	: $(this).data('cliente'),
				url 	: $(this).data('url'),
				origin 	: $(this).data('pagina'),
				display	: $(this).data('display'),
				image 	: $(this).find('img'),
				desktop	: $(this).find('img').data('img-desktop'),
				tablet 	: $(this).find('img').data('img-tablet'),
				mobile 	: $(this).find('img').data('img-mobile'),
			});

			$(this).on('click',function(e)
			{
				e.preventDefault();
				//__gaTracker( 'send', 'bannerSystem', $(this).data('cliente'), $(this).data('display'), $(this).data('pagina') );
			   	
			   	window.open( $(this).data('url') );
			});
		});
	}

	getNewsFromWebitcoin()
	{
		const innerTemplate = new Template;
		
		function renderNewsList(obj,noticias,type)
		{
			var html = '';

			for(var i = 0; i < noticias.length; i++)
			{
				if(type == 0)
				{
					html += '<li class="col-xs-12 col-xl-4">';
				}
				else
				{
					html += '<li>';
				}
					html += '<div class="image">';
						html += '<a href="'+noticias[i].url+'" title="Ir para página do vídeo <?php the_title(); ?>">';
							html += '<div class="lazyLoadImage" data-image="'+noticias[i].imagem+'">';
								html += '<img src="https://tv.webitcoin.com.br/wp-content/themes/webitcoin-tv/images/default-videos-small-2.png">';
							html += '</div>';
						html += '</a>';
					html += '</div><div class="content">';
						if(type == 0)
						{
							html += '<a href="'+noticias[i].category_url+'" class="categoria">';
								html += noticias[i].category[0].cat_name;
							html += '</a>';
						}					
						html += '<a href="'+noticias[i].url+'" title="Ir para página do vídeo <?php the_title(); ?>">'+noticias[i].titulo+'</a>';
					html += '</div>';
				html += '</li>';
			}

			obj.html(html);
			
			innerTemplate.ImageLazyLoad();
		}

		$('.getNewsWebitcoin').each(function()
		{
			var lista = $(this);
			var tipo = $(this).attr('data-type');

			$.post(
				lista.attr('data-json'),
				{
					token			: 'FxQYhUmg6XpvtN5NsQ9PBZeP1rvKBiai',
					post_type 		: lista.attr('data-post-type'),
					posts_per_page 	: lista.attr('data-post-total'),
				}, 
			    function(arrNews)
			    {
			    	renderNewsList( lista , arrNews , tipo );
				}
			);
		});
	}

	init()
	{
		this.ImageLazyLoad();
		this.responsiveChanges();
		this.bannerSystem();
		this.getNewsFromWebitcoin();

		$(window).resize(function()
		{
			this.responsiveChanges();
		})
	}
}

export default Template;