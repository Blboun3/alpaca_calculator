var el_age = $("#age");
var el_height = $("#height");
var el_weight = $("#weight");
var el_btn_calc = $("#calculate");
var el_out = $("#output");

const K = 1/(59*178*80)

el_btn_calc.click(function() {
    let age = el_age.val();
    let height = el_height.val();
    let weight = el_weight.val();

    if(age>55){
        age = age - 50;
    }

    let outputVal = K*age*weight*height;

    let y = (100*outputVal/1).toFixed(2);
    
    //console.log(y);
    $("#output").text(`Vaše cena v Alpakách je ${y} Alpak`);
});