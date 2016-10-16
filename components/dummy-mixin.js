xtag.mixins.dummy = {
    accessors: {
        text: {
            attribute: {},
            set: function(value) {
                this.xtag.data.text = value;
            },            
            get: function() {
                return this.getAttribute('text') || "xxx";
            }
        }
    }
};