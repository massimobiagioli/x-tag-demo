var renderList = function(tag, element) {
    var children = tag.children(),
        ul = $('<ul></ul>');

    for(var i = 0; i < children.length; i++) {
        var childTag = children.eq(i),
            childTagname = childTag.get(0).tagName.toLowerCase();
        
        if(childTagname === 'my-anagrafica') {      
            var li = $('<li></li>');
            li.append(childTag);
            ul.append(li);
        }
    }
    
    element.append(ul);
};

var createTable = function() {
    var table = $('<table></table>');
    table.attr('cellpadding', '2');
    table.attr('cellspacing', '2');
    table.css('border', 'solid 1px black');
    return table;
}

var createTr = function() {
    var tr = $('<tr></tr>');
    return tr;
}

var createTd = function(text) {
    var td = $('<td></td>');
    td.css('border', 'solid 1px black');
    td.text(text);
    return td;
}

var renderTable = function(tag, element) {
    var children = tag.children(),
        table = createTable();

    var tr = createTr();
    tr.append(createTd('Nome'));
    tr.append(createTd('Cognome'));
    tr.append(createTd('Indirizzo'));

    table.append(tr);

    for(var i = 0; i < children.length; i++) {
        var childTag = children.eq(i),
            childTagname = childTag.get(0).tagName.toLowerCase();
        
        if(childTagname === 'my-anagrafica') {      
            var tr = createTr();
            tr.append(createTd(childTag.attr('nome')));
            tr.append(createTd(childTag.attr('cognome')));
            tr.append(createTd(childTag.attr('indirizzo')));
            table.append(tr);
        }
    }
    
    element.append(table);
};

xtag.register('my-container', {
    accessors: {
        render: {
            attribute: {}
        }
    },
    lifecycle: {
        created: function() {
            var element = $(this),
                divWrapper = $('<div></div>');

            console.log('Componente my-container - lifecycle created');

            // Div Wrapper    
            this.xtag.container = divWrapper.appendTo(this);

            if (this.render === 'table') {
                renderTable.call(this, element, this.xtag.container);
            } else {
                renderList.call(this, element, this.xtag.container);
            }
            
            element.children('my-anagrafica').remove();

        }
    }
});