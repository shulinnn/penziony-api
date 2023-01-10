# Api Endpoints
**Main page** 
- GET -> pension/:id (SELECT * FROM pensions WHERE pension_id/id == :id)
- GET -> pension/:id/rooms (SELECT *FROM .....) ale tady se to muset postavit na custom modelu nebo templatu pro api , protože na main page nepotřebuju věškeré ceny jen minimální cenu
- GET pension/:id/reviews
**Admin Section**
- Tady bych tu API udělal klasicky pomoci REST API protože budeme jen odesílat data a číst. resp. budeme tahat data tabulek apod apod (to jsem dobře popsal :D)

**Abous Us**
- GET -> pension/:id (SELECT * FROM pensions WHERE pension_id/id == :id)

**Naše Pokoje**
- GET -> pension/:id/rooms -> pořád to samé co na main page
** Pokoj **
- GET -> pension/:id/room/:roomId
