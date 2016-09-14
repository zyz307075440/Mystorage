;(function() {
    var str = '';

    for (var i = 0; i < packageDataArray.length; i++) {
        var dataObj = packageDataArray[i];

        str += '<div class="item"><a href="Public.html?id=' + dataObj.id + '">查看&gt;</a>';
        str += '<div class="item_left">';
        str += '<h4>' + dataObj.title + '</h4>';
        str += '<div class="price">';
        str += '<p>￥' + dataObj.price + '元<span>￥' + dataObj.price_discount + '</span></p>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
    }
    $(".items").append(str)
}());
