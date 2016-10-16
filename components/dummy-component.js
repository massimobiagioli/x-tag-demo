xtag.register('dummy-component', {
    mixins: ['dummy'],
    lifecycle: {
        created: function() {
            var that = this;
            
            var span = document.createElement('span');
            span.innerHTML = this.text;
            this.appendChild(span);

            var btn = document.createElement('input');
            btn.type = 'button';
            btn.value = 'click me';
            btn.onclick = function() {
                that.text = that.text + "z";
                span.innerHTML = that.text;
            }
            this.appendChild(btn);
        }
    }
});