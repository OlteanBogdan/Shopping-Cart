$(document).ready(function () {
    var cartModal = $('.cart-modal')

    $('.cart').on('click', function () {
        var products = $('.items-in-cart')

        if (products.length == 0) {
            $('.main-nav').prepend('<p class="error">Your cart is empty, add something first</p>')
        } else {
            cartModal.addClass('display')
            $('.error').remove()
        }


    })

    $('.add-button').on('click', function () {
        var image = $(this).parent().find('.image')
        var imageSrc = image.attr('src')
        var title = $(this).parent().find('.title').text()
        var price = $(this).parent().find('.price').text()
        console.log(title, price)

        $('.cart-modal .container').append(`<div class="product items-in-cart">
                <img class="image" src =${imageSrc}>
                <h3 class="title">${title}</h3>
                <span class="price">${price}</span>
                  <input class="qty-selector" type="number" id="quantity" name="quantity" min="1" max="99">
                </div > `)

        $('.qty-selector').on('focusout', function () {
            var qtyNumber = $('.qty-number')
            var itemPrice = $(this).parent().find('.price').text()

            qtyNumber
            console.log($(this), qtyNumber, itemPrice.text())
        })
    })

    $('.close').on('click', function () {
        cartModal.removeClass('display')
    })



});