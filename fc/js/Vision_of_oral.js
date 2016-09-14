;
(function() {
    function getParams() {
        var href = location.href
        var paramsStr = href.slice(href.indexOf('?') + 1);

        var paramsArr = paramsStr.split('&');
        var params = {};
        paramsArr.forEach(function(element, index) {

            var arr = element.split('=');
            params[arr[0]] = arr[1];

        });
        return params;
    }

    var params = getParams();

    var str = '';
    for (var i = 0; i < packageDataArray.length; i++) {

        var dataObj = packageDataArray[i];

        if (dataObj.id == params.id) {

            $(".title").text(dataObj.title)
            for (var k in dataObj.data) {

                var itemObj = dataObj.data[k]
                str += '<div class="item">';
                str += '<h4>' + itemObj.title + '</h4>';

                str += '<p>';
                if (typeof itemObj.content === "object") {
                    for (var i = 0; i < itemObj.content.length; i++) {

                        str += i + 1 + '、';
                        str += itemObj.content[i];
                        str += '<br/>';
                    }
                } else {
                    str += itemObj.content;
                }
                str += '</p>';

                str += '</div>';

            }
            str += '<div class="price">体验价￥' + dataObj.price + '元（原价￥' + dataObj.price_discount + '元）</div>'
            str += '<div class="button">'
            str += '<a class="buy_btn" href="">'
            str += '去购买'
            str += '</a>'
            str += '</div>'
            $(".items").append(str);
        }

    }

}());
