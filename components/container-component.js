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

var renderTable = function(tag, element) {
    var children = tag.children(),
        table = $('<table></table>');

    table.attr('cellpadding', '2');
    table.attr('cellspacing', '2');

    var tr = $('<tr></tr>');

    var td = $('<td></td>');
    td.text('Nome');
    tr.append(td);

    var td = $('<td></td>');
    td.text('Cognome');
    tr.append(td);

    var td = $('<td></td>');
    td.text('Indirizzo');
    tr.append(td);

    table.append(tr);

    for(var i = 0; i < children.length; i++) {
        var childTag = children.eq(i),
            childTagname = childTag.get(0).tagName.toLowerCase();
        
        if(childTagname === 'my-anagrafica') {      
            var tr = $('<tr></tr>');

            var td = $('<td></td>');
            td.text(childTag.attr('nome'));
            tr.append(td);

            var td = $('<td></td>');
            td.text(childTag.attr('cognome'));
            tr.append(td);

            var td = $('<td></td>');
            td.text(childTag.attr('indirizzo'));
            tr.append(td);

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