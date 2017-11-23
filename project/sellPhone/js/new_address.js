

var param=GetQueryString("param");
var sz_param=param.split(",");
var getopenId=sz_param[1];
// param=sz_param[0]+","+getopenId;

//保存地址
function save(){

    var url="/weixin/model/addAddress";
    var name=$("#name").val();
    var phone=$("#phone").val();
    var postcode=$("#postcode").val();
    var address=$("#address").val();

    var str_name=/^[\u4E00-\u9FA5]{2,4}$/;    //name
    var str_phone=/^1[34578]\d{9}$/;    // phone
   
   /* var str_address=/^{5,60}$/;   //address*/
    //匹配name
    if (!str_name.test($.trim(name))) {
        $('.message').show();
        $('.message').html("请输入正确的姓名！");
        return;
    }

    //匹配phone
    if (!str_phone.test($.trim(phone))) {
        $('.message').show();
        $('.message').html("请输入正确的手机号！");
        return;
    }

    //匹配postcode
    if(postcode.length>0){
        var str_postcode=/^[1-9][0-9]{5}$/;   //postcode
        if (!str_postcode.test($.trim(postcode))) {
            $('.message').show();
            $('.message').html("请输入正确的邮编！");
            return;
        }
    }

    if(address.length<5&&address.length>0){
        $('.message').show();
        $('.message').html("地址字数不少于5！");
        return;
    }else if(address.length>60){
        $('.message').show();
        $('.message').html("地址字数不得超过60！");
        return;
    }

    //匹配address
    /*if (!str_address.test($.trim(address))) {*/
        //$('.message').show();
        
        //return;
    /*}*/

    $('.message').css({"left":"38%"});

    $.post(url,{"openId":getopenId,"receiveName":name,"receiveAddress":address,"receivePhone":phone,"postcode":postcode},function(data){
        if (data.status==1&&data.code==1) {
            
            $('.message').html(data.message);
            var address_id= data.id;
            window.location.href="http://gz.mobicloud.com.cn/active/sellPhone2/affirm_order2.html?param="+param+","+address_id;
            //$('.message').show();
                       
        }
    })

}



function focus_clear(){
    $('.message').hide();
}


//返回历史
function return_history(){
    window.location.href="http://gz.mobicloud.com.cn/active/sellPhone2/address_list.html?param="+param;
}

//获取url
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}