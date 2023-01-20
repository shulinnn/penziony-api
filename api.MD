# Api Endpoints
**Main page** 

[pension/:id](https://localhost.cz/pension/id) return

```json
{
   "pension_name":"Penzion Name",
   "pension_phone":607606219,
   "pension_adress":"adresa..",
   "pension_photo":"path_to_photo",
   "pension_description":"desc..",
   "pension_mail":"mail"
}
```

[pensions](https://localhost.cz/pensions) return

```json
{
   "1":{
      "pension_name":"Penzion Name",
      "pension_phone":"607606219",
      "pension_adress":"adresa..",
      "pension_photo":"path_to_photo",
      "pension_description":"desc..",
      "pension_mail":"mail"
   },
   "2":{
      "pension_name":"Penzion Name",
      "pension_phone":"607606219",
      "pension_adress":"adresa..",
      "pension_photo":"path_to_photo",
      "pension_description":"desc..",
      "pension_mail":"mail"
   }
}
```

[pension/:id/roomCarousel(https://localhost.cz/pension/id/roomCarousel) return

```json
{
   "id":"Id",
   "room_number":"roomNumber",
   "pension_Id":"pensionId",
   "room_min_occupancy":"int",
   "room_max_occupancy":"int",
   "photos":{
      "id":"photoId",
      "photo_path":"photoPath"
   },
   "tags":{
      "id":"int",
      "tag_name":"koupelna"
   },
   "price":"min_price_only_here"
}
```
