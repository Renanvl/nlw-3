const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then( async db =>{
    const orphanage = {
        lat:"-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "12345",
        images: ["https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "1"
    }

    //await saveOrphanage(db, orphanage)

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // const selectOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(selectOrphanage)

    //console.log(await db.all('DELETE FROM orphanages')) 

})