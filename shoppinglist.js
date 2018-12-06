var displayItem = function (item) {
    // Text for one item
    var itmText = "<div class=\"item-line\">"
                    + "<img src=\"" + item.img + "\" alt=\"" + item.alt + "\"/>"
                    + "<div class=\"item-fill\">"
                        + "<p class = \"item-name\">" + item.name + "</p>"
                        + "<p class = \"item-desc\">" + item.desc + "</p>"
                        + "<p class = \"item-ppu\">" + item.ppu.replace(".",",") + "$" + "</p>"
                    + "</div>"
                + "</div>";
    
    // Add item to section
    document.getElementById(item.sec).innerHTML += itmText;
};

items.forEach(displayItem);