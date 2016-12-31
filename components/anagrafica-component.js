xtag.register('my-anagrafica', {
    accessors: {
        nome: {
            attribute: {}
        },
        cognome: {
            attribute: {}
        },
        indirizzo: {
            attribute: {}
        }
    },
    lifecycle: {
        created: function() {
            var element = $(this),
                divWrapper = $('<div></div>'),
                info = '';

            console.log('Componente anagrafica - lifecycle created');

            if (!this.nome && !this.cognome && !this.indirizzo) {
                var divMsg = $('<div></div>');
                divMsg.html('<i>Nessun dato presente</i>');
                element.append(divMsg);
                return;
            }

            // Proprietà nome
            if (this.nome) {
                var spanNome = $('<span></span>');
                spanNome.css('margin-right', '5px');
                spanNome.text(this.nome);
                divWrapper.append(spanNome);
                info += this.nome;
            }   

            // Proprietà cognome
            if (this.cognome) {
                var spanCognome = $('<span></span>');
                spanCognome.css('margin-right', '5px');
                spanCognome.text(this.cognome);
                divWrapper.append(spanCognome);
                info = (info === '' ? this.cognome : info + ' ' + this.cognome);
            } 

            // Proprietà indirizzo
            if (this.indirizzo) {
                var spanIndirizzo = $('<span></span>');
                spanIndirizzo.css('margin-right', '5px');
                spanIndirizzo.text(this.indirizzo);
                divWrapper.append(spanIndirizzo);  
                info = (info === '' ? this.indirizzo : info + ' ' + this.indirizzo);
            }

            // Pulsante info
            var spanBtn = $('<span></span>');
            spanBtn.css('margin-left', '10px');
            var btnInfo = $('<button></button>');
            btnInfo.text('INFO');
            btnInfo.on('click', function(e) {
                alert(info);
            });
            spanBtn.append(btnInfo);
            divWrapper.append(spanBtn);

            // Aggiunge div wrapper a componente
            element.append(divWrapper);
        }
    }
});