
var self = this,
    $html = $('html'),
    $header = $('#header'),
    $window = $(window),
    headerBodyHeight = $('.header-body').outerHeight();

if ($header.hasClass('header')) {
    $header = $('.header');
}

$header.find('a[href="#"]').on('click', function(e) {
    e.preventDefault();
});

// Mobile Arrows
if ($html.hasClass('side-header-hamburguer-sidebar')) {
    $header.find('.dropdown-toggle, .dropdown-submenu > a')
        .append('<i class="fas fa-chevron-down fa-chevron-right"></i>');
} else {
    $header.find('.dropdown-toggle, .dropdown-submenu > a')
        .append('<i class="fas fa-chevron-down"></i>');
}

$header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down').on('click', function(e) {
    e.preventDefault();
    if ($window.width() < 992) {
        $(this).closest('li').toggleClass('open');

        // Adjust Header Body Height
        var height = ($header.hasClass('header-effect-shrink') && $html.hasClass('sticky-header-active')) ? theme.StickyHeader.options.stickyHeaderContainerHeight : headerBodyHeight;
        $('.header-body').animate({
            height: ($('.header-nav-main nav').outerHeight(true) + height) + 10
        }, 0);
    }
});

$header.find('li a.active').addClass('current-page-active');

// Add Open Class
$header.find('.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i').on('click', function(e) {
    if (!$('html').hasClass('side-header-hamburguer-sidebar') && $window.width() > 991) {
        e.preventDefault();
        e.stopPropagation();
    }

    if ($window.width() > 991) {
        e.preventDefault();
        e.stopPropagation();

        $header.find('li a.active').removeClass('active');

        if ($(this).prop('tagName') == 'I') {
            $(this).parent().addClass('active');
        } else {
            $(this).addClass('active');
        }

        if (!$(this).closest('li').hasClass('open')) {

            var $li = $(this).closest('li'),
                isSub = false;

            if ($(this).prop('tagName') == 'I') {
                $('#header .dropdown.open').removeClass('open');
                $('#header .dropdown-menu .dropdown-submenu.open').removeClass('open');
            }

            if ($(this).parent().hasClass('dropdown-submenu')) {
                isSub = true;
            }

            $(this).closest('.dropdown-menu').find('.dropdown-submenu.open').removeClass('open');
            $(this).parent('.dropdown').parent().find('.dropdown.open').removeClass('open');

            if (!isSub) {
                $(this).parent().find('.dropdown-submenu.open').removeClass('open');
            }

            $li.addClass('open');

            $(document).off('click.nav-click-to-open').on('click.nav-click-to-open', function(e) {
                if (!$li.is(e.target) && $li.has(e.target).length === 0) {
                    $li.removeClass('open');
                    $li.parents('.open').removeClass('open');
                    $header.find('li a.active').removeClass('active');
                    $header.find('li a.current-page-active').addClass('active');
                }
            });

        } else {
            $(this).closest('li').removeClass('open');
            $header.find('li a.active').removeClass('active');
            $header.find('li a.current-page-active').addClass('active');
        }

        $window.trigger({
            type: 'resize',
            from: 'header-nav-click-to-open'
        });
    }
});

// Collapse Nav
$header.find('[data-collapse-nav]').on('click', function(e) {
    $(this).parents('.collapse').removeClass('show');
});

// Top Features
$header.find('.header-nav-features-toggle').on('click', function(e) {
    e.preventDefault();

    var $toggleParent = $(this).parent();

    if (!$(this).siblings('.header-nav-features-dropdown').hasClass('show')) {

        var $dropdown = $(this).siblings('.header-nav-features-dropdown');

        $('.header-nav-features-dropdown.show').removeClass('show');

        $dropdown.addClass('show');

        $(document).off('click.header-nav-features-toggle').on('click.header-nav-features-toggle', function(e) {
            if (!$toggleParent.is(e.target) && $toggleParent.has(e.target).length === 0) {
                $('.header-nav-features-dropdown.show').removeClass('show');
            }
        });

        if ($(this).attr('data-focus')) {
            $('#' + $(this).attr('data-focus')).focus();
        }

    } else {
        $(this).siblings('.header-nav-features-dropdown').removeClass('show');
    }
});

// Hamburguer Menu
var $hamburguerMenuBtn = $('.hamburguer-btn:not(.side-panel-toggle)'),
    $hamburguerSideHeader = $('#header.side-header, #header.side-header-overlay-full-screen');

$hamburguerMenuBtn.on('click', function() {
    if ($(this).attr('data-set-active') != 'false') {
        $(this).toggleClass('active');
    }
    $hamburguerSideHeader.toggleClass('side-header-hide');
    $html.toggleClass('side-header-hide');

    $window.trigger('resize');
});

$('.hamburguer-close:not(.side-panel-toggle)').on('click', function() {
    $('.hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)').trigger('click');
});

// Set Header Body Height when open mobile menu
$('.header-nav-main nav').on('show.bs.collapse', function() {
    $(this).removeClass('closed');

    // Add Mobile Menu Opened Class
    $('html').addClass('mobile-menu-opened');

    $('.header-body').animate({
        height: ($('.header-body').outerHeight() + $('.header-nav-main nav').outerHeight(true)) + 10
    });

    // Header Below Slider / Header Bottom Slider - Scroll to menu position
    if ($('#header').is('.header-bottom-slider, .header-below-slider') && !$('html').hasClass('sticky-header-active')) {
        self.scrollToTarget($('#header'), 0);
    }
});

// Set Header Body Height when collapse mobile menu
$('.header-nav-main nav').on('hide.bs.collapse', function() {
    $(this).addClass('closed');

    // Remove Mobile Menu Opened Class
    $('html').removeClass('mobile-menu-opened');

    $('.header-body').animate({
        height: ($('.header-body').outerHeight() - $('.header-nav-main nav').outerHeight(true))
    }, function() {
        $(this).height('auto');
    });
});

// Header Effect Shrink - Adjust header body height on mobile
$window.on('stickyHeader.activate', function() {
    if ($window.width() < 992 && $header.hasClass('header-effect-shrink')) {
        if ($('.header-btn-collapse-nav').attr('aria-expanded') == 'true') {
            $('.header-body').animate({
                height: ($('.header-nav-main nav').outerHeight(true) + theme.StickyHeader.options.stickyHeaderContainerHeight) + (($('.header-nav-bar').length) ? $('.header-nav-bar').outerHeight() : 0)
            });
        }
    }
});

$window.on('stickyHeader.deactivate', function() {
    if ($window.width() < 992 && $header.hasClass('header-effect-shrink')) {
        if ($('.header-btn-collapse-nav').attr('aria-expanded') == 'true') {
            $('.header-body').animate({
                height: headerBodyHeight + $('.header-nav-main nav').outerHeight(true) + 10
            });
        }
    }
});

// Remove Open Class on Resize		
$window.on('resize.removeOpen', function(e) {
    if (e.from == 'header-nav-click-to-open') {
        return;
    }

    setTimeout(function() {
        if ($window.width() > 991) {
            $header.find('.dropdown.open').removeClass('open');
        }
    }, 100);
});