(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname(): string {
            return `${ this.name } ${ this.realName }`
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            // Llamo al constructor de la clase padre
            // Siempre debe de ser la primera linea
            // Es obligatorio llamar al constructor de la clase padre, cuando en la clase hija se tiene un constructor
            super( name, realName )
            console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error('EL nombre debe de ser mayor de 3 letras')
            }

            this.name = name;
        }

        // Sobreescribiendo el metodo de la clase padre
        protected getFullname(): string {
            // Ejecuto la logica del metodo de la clase padre. Esto es opcional
            super.getFullname()
            return `${ this.name } ${ this.realName }`
        }


        getFullnameDesdeXmen() {
            console.log( super.getFullname()  )
        }

    }


    // const wolverine = new Xmen('Wolverine','Logan', true)

    
    // wolverine.fullName = 'Fe';
    
    // console.log(wolverine.fullName );
    // wolverine.getFullnameDesdeXmen();


})()