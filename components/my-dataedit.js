xtag.register('my-dataedit', {
    lifecycle: {
        created: function() {
            var $this = this;
            
            var divContainer = document.createElement('div');
            $(divContainer)
                .css('display', 'table')
                .appendTo($(this));

            var divRow = document.createElement('div');
            $(divRow)
                .css('display', 'table-row')
                .appendTo($(divContainer));    
            
            var divLabel = document.createElement('div');
            $(divLabel)
                .css('display', 'table-cell')
                .html($this.label)
                .appendTo($(divRow));

            var divInput = document.createElement('input');
            $(divInput)
                .attr({
                    'type': 'text',
                    'value': $this.value
                })
                .css('display', 'table-cell')
                .appendTo($(divRow));
        }
    },
    accessors: {
        label: {
            attribute: {}
        },
        value: {
            attribute: {}
        }
    }
});