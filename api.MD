# Api Endpoints
**Main page** 
- GET -> pension/:id (SELECT * FROM pensions WHERE pension_id/id == :id)
- kokot.cz/pension/1 => pension s ID 1
- GET -> pension/:id/rooms (SELECT *FROM .....) ale tady se to muset postavit na custom modelu nebo templatu pro api , protože na main page nepotřebuju věškeré ceny jen minimální cenu
- kokot.cz/pension/1/rooms => všechny pokoje
- kokot.cz/pension/1/room/:id => pokoj s ID z konkretního pensionu
- GET pension/:id/reviews
**Admin Section**
- Tady bych tu API udělal klasicky pomoci REST API protože budeme jen odesílat data a číst. resp. budeme tahat data tabulek apod apod (to jsem dobře popsal :D)

**Abous Us**
- GET -> pension/:id (SELECT * FROM pensions WHERE pension_id/id == :id)

**Naše Pokoje**
- GET -> pension/:id/rooms -> pořád to samé co na main page
** Pokoj **
- GET -> pension/:id/room/:roomId
}
