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

    var html = "";
    for(let i = 0; i < Math.floor(y); i++) {
        html += `<img src="Lama.jpg" alt="Alpaka">`
    }
    let n = (100*outputVal/1).toFixed(1) - Math.floor((100*outputVal/1).toFixed(3));
    
    let sideX = 220
    let final = Math.round(sideX * n);
    $("#alpaca_counter").html(html);
    $("#clip").css("clip",`rect(0px, ${final}px, 240px, 0px)`);
});