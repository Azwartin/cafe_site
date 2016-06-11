( function(){
    function showRecall(e){
        if(e.target === this){
            $('.content .form_recall_outer').toggle();
        }
    }
    
    $('.recall .btn_recall, .form_recall_outer').on('click', showRecall);
} )();