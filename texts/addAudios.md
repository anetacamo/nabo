## add Audio track

- add name and description in json
- add audio file

### add name and description in json

to add audios add section in /texts/radioTracks.json

```json
[
  {
    "name": "Frontløberne",
    "description": "Hos Frontløberne tør de bryde med normerne for, hvad der er muligt. For en Frontløber er en opdagelsesrejsende – Én, der er nysgerrig, der tør at drømme og som er klar på at udforske nye kulturterritorier"
  },
  {
    "name": "Cantina",
    "description": "Hos Frontløberne tør de bryde med normerne for, hvad der er muligt. For en Frontløber er en opdagelsesrejsende – Én, der er nysgerrig, der tør at drømme og som er klar på at udforske nye kulturterritorier"
  }
]
```

- `name` is necessary and must be exactly same like the title of the page you want to link to.

### add audio file

- find a folder /public/radio/
- add a file in the .mp3 format here

The name must be slugified name of the site you want to link.
`slugified name` means without special characters, spaces are replaced with `-` and is lowercased.
You can find slugified name in the url by navigating to the place you are adding on the website `kultur-kortet/cards/frontlerne`

`Frontløberne => frontlberne.mp3`
`Cantina => cantina.mp3`

### thats it!
