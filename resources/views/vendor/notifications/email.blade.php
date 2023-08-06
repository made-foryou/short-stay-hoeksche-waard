<x-mail::message>
# Een nieuw bericht

Er is een nieuw bericht geplaatst op shortstayhoekschewaard.nl. Hierinder
vind je de gegevens:

<x-mail::table>
| Naam                      |  Value                         |
|:------------------------- |:------------------------------ |
| Naam                      |  {{ $fields[0]['value'] }}     |
| E-mailadres               |  {{ $fields[1]['value'] }}     |
| Telefoonnummer            |  {{ $fields[2]['value'] }}     |
| Vragen en/of opmerkingen  |  {{ $fields[3]['value'] }}     |
</x-mail::table>
</x-mail::message>
