var total = 0.0;

var toCash = function(num) {
    return (num.toFixed(2) + "$").replace(".",",")
};

var reTotal = function(j) {
    if(j >= 0)
    {
        document.getElementById(j + "-total").innerHTML = toCash(+(document.getElementById(""+j).value.replace(",",".")) * items[j].ppu);
    }

    total = 0.0;

    for(var i = 0; i < items.length; i++)
    {
        total += +(document.getElementById(""+i).value.replace(",",".")) * items[i].ppu;
    }

    total *= +document.getElementById("LocLength").value;

    document.getElementById("sous-total").innerHTML = toCash(total);
    document.getElementById("TPS").innerHTML = toCash(total*0.07);
    document.getElementById("TVQ").innerHTML = toCash(total*1.07*0.075);
    document.getElementById("Total").innerHTML = toCash(total*1.07*1.075);
};

var displayItems = function (items) {
    var itmText = "";
    
    for(var i = 0; i < items.length; i++)
    {
        // Text for one item
        itmText = "<div class=\"order-line\">"
                    + "<p class=\"item-name\">" + items[i].name + "</p>"
                    + "<p class=\"item-ppu\">" + items[i].ppu.replace(".",",") + "$" + "</p>"
                    + "<input class=\"qty\" name=\"" + i + "\" value=\"0\" id=\"" + i + "\" type=\"number\" min=\"0\" max=\"20\" onchange=\"reTotal(" + i + ");\"/>"
                    + "<p class=\"itm-total\" id=\"" + i + "-total\">0,00$</p>"
                + "</div>";

        // Add item to section
        document.getElementById(items[i].sec).innerHTML += itmText;
    }
};

displayItems(items);