jQuery(function(){
    jQuery('#aboutUS').find('div').each(function(index,element){
        jQuery(element).click(function(){
            jQuery(this).addClass('currBtn').siblings('button').removeClass('currBtn');
            jQuery('.toSE').each(function(i,e){
                if(index == i){
                    // alert(i)
                    jQuery('.toSE').eq(i).removeClass('hide')
                    .siblings('.toSE').addClass('hide');
          
                }
            })
        })
    })
})